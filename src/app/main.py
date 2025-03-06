import os

from src.app.robomaster_server import RoboMasterServer
os.chdir(os.path.dirname(__file__))

def main() -> int:
    server = RoboMasterServer()
    server.run()
    return 0

if __name__ == '__main__':
    main()
