import socket
from robomaster import robot

ip_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Bind with the IP broadcasting port.
ip_sock.bind(('0.0.0.0', 40926))

# Wait to receive data.
ip_str = ip_sock.recvfrom(1024)
print(ip_str)

# Output the data.
import sys

# In direct connection mode, the default IP address of the robot is 192.168.2.1 and the control command port is port 40923.
host = ip_str[1][0]
port = 40923

def main():

        address = (host, int(port))

        # Establish a TCP connection with the control command port of the robot.
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        print("Connecting...")

        s.connect(address)

        print("Connected!")

        while True:

                # Wait for the user to enter control commands.
                msg = input(">>> please input SDK cmd: ")

                # When the user enters Q or q, exit the current program.
                if msg.upper() == 'Q':
                        break

                # Add the ending character.
                msg += ';'

                # Send control commands to the robot.
                s.send(msg.encode('utf-8'))

                try:
                        # Wait for the robot to return the execution result.
                        buf = s.recv(1024)
                        print(buf.decode('utf-8'))
                except socket.error as e:
                        print("Error receiving :", e)
                        sys.exit(1)
                if not len(buf):
                        break

        # Disconnect the port connection.
        s.shutdown(socket.SHUT_WR)
        s.close()

main()

"""
ep_robot = robot.Robot()
ep_robot.initialize(conn_type="sta")
ep_robot.chassis.move(x=1, y=0,z=0,xy_speed=1).wait_for_completed()
ep_robot.close()
"""