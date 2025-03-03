from robomaster_server import RoboMasterServer


def main() -> int:
    server = RoboMasterServer()
    server.run()  # http://localhost:8000
    return 0

if __name__ == '__main__':
    main()
