import os
from pathlib import Path

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
SN = [
    "3JKCH9A00101VG", # Robot 1
    "3JKDH7G0013WF6", # Robot 2
    "3JKDH7G00110J0", # Robot 3
    "3JKCK7W0030DS7", # Robot 4
    "3JKDH6U001D71S", # Robot 5
    "3JKCK7E0030BMR", # Robot 6
    "3JKDH7G00108Y6", # Robot 7
    "3JKCK7W0030DC6", # Robot 8
    "3JKDH7G0018J30", # Robot 9
    "", # Robot 10
    "3JKCK7E0030BUR", # Robot 11
    "3JKCK7E0030BMV", # Robot 12
    "", # Robot 13
    "3JKCK7W0030DQA", # Robot 14
    "3JKCH880010123", # Robot 15
    "", # Robot 16
]
