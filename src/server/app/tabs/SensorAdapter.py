from lib.Tabs import Tab


class SensorAdapter(Tab):
    def __init__(self, robot_connection):
        super().__init__(robot_connection)