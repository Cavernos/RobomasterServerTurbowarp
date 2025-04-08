import os
from pathlib import Path

from app import robomaster_server
from lib.Router import Route, Router

ENV = os.environ['ENV'] if "ENV" in os.environ else "production" # Runing environment (production or developpment)
APP_DIR = Path(os.path.abspath(os.path.dirname(__file__))).parent
ASSETS_DIR = os.path.join(APP_DIR, "assets")
HOST = "127.0.0.1"
PORT = 8000
STATIC_ROUTES = [
    Route("/robomaster_extension", "robomaster_extension", "robomaster_extension", {"http_method": "GET"}),
    Route("/favicon.ico", "favicon", "favicon", {"http_method": "GET"}),
    Route("/", "index", "index", {"http_method": "GET"}),
]
ROUTER = Router(STATIC_ROUTES)
