from app.robomaster_server import RoboMasterServer
server = RoboMasterServer()
app = server.app
if __name__ == "__main__":
    app.run()