from robomaster_server import RoboMasterServer


def main() -> int:
    server = RoboMasterServer()
    server.run()
    return 0

if __name__ == '__main__':
    main()
