from app.robomaster_server import RoboMasterServer

def main_cli() -> int:
    server = RoboMasterServer()
    server.run()
    return 0

if __name__ == '__main__':
    main_cli()
