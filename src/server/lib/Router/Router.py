from lib.Router import Route


class Router:
    """
    Router class is used to represent a router
    """
    routes = []

    def __init__(self, static_route: list or None = None) -> None:
        """Router constructor
        Args:
            static_route (list | None) Route to append at start of the app
        """
        if static_route is not None:
            self.routes = self.routes + static_route

    def get(self, name: str, callback: str or callable, **params)-> None:
        """Append new route in router Routes with get method
        Args:
            name (str) route name
            callback (str | callable) function or function name to call when router call route
            **params (dict) Some another params to add
        """
        self.routes.append(Route(name,callback, {**params, "http_method": "GET"}))

    def post(self, name, callback, **params) -> None:
        """Append new route in router Routes with post method
                Args:
                    name (str) route name
                    callback (str | callable) function or function name to call when router call route
                    **params (dict) Some another params to add
        """
        self.routes.append(Route(name, callback, {**params, "http_method": "POST"}))


