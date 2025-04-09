import re
from flask import jsonify

from app.config import ROUTER

class Tab:
    """
    Generical class for represent a Tab
    """

    def __init__(self, robot_connection):
        self.robot_connection = robot_connection
        self.ep_robot = self.robot_connection.get_robot()
        class_name = self.__class__.__name__.lower()
        for method_name in self.__class__.__dict__.keys():

            if re.match('_[A-Za-z]', method_name):
                setattr(self, method_name[1::], lambda: self.safe_execute(getattr(self, method_name), f"{method_name} is failing"))
                name = method_name[1::].split("_")
                for i, char in enumerate(name):
                    if i > 0:
                        name[i] = char.title()
                ROUTER.post(f"/{class_name}/{''.join(name)}", f"{class_name}.{''.join(name)}", getattr(self, method_name))

    @staticmethod
    def safe_execute(func, error_message):
        """
        Execute a function safely, preventing crashes.

        Args:
            func (Callable): Function to execute.
            error_message (str): Error message if function fails.

        Returns:
            Response: JSON response indicating success or failure.
        """
        try:
            return func()
        except Exception as e:
            print(f"{error_message}: {e}")
            return jsonify({"error": error_message, "details": str(e)})
