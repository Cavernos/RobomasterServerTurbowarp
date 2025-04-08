from flask import jsonify

from app.tabs.RobomasterBasics import RobomasterBasics


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