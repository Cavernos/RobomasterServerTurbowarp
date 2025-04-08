import re

from app.config import ROUTER


class Tab:
    """
    Generical class for represent a Tab
    """

    def __init__(self, robot_connection):
        self.robot_connection = robot_connection
        class_name = self.__class__.__name__
        for method_name in self.__class__.__dict__.keys():
            if re.match('_[A-Za-z]', method_name):
                name = method_name[1::].split("_")
                for i, char in enumerate(name):
                    if i > 0:
                        name[i] = char.title()
                ROUTER.post(f"/{class_name.title()}/{''.join(name)}", f"{class_name}.{''.join(name)}",
                            getattr(self, method_name))
