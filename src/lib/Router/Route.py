class Route:
    """
    Class Route define a route
    """

    def __init__(self, path: str, name: str, callback: str or callable, params: dict) -> None:
        """Route constructor

        Args:
            name: str Route Name
            callback: str | callable Function return when route is call
            params: dict Suplementaries parameters
        """
        self._path = path
        self._name = name
        self._callback = callback
        self._params = params

    @property
    def path(self) -> str:
        return self._path
    @property
    def name(self) -> str:
        return self._name

    @property
    def callback(self) -> str or callable:
        return self._callback

    @property
    def params(self) -> dict:
        return self._params