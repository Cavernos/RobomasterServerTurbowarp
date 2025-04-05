# Installation Raspberry-pi (Done)

```
OS : Raspbian Lite x64
```
To be able to connect on the pi I had to connect an ethernet cable and share network connection.
After that I was able to scan the network and get the Ip Address of the pi
For more information see: https://pihw.wordpress.com/guides/direct-network-connection/

# SSH Keypass (Done)

```
Host (on my device) : 192.168.137.202
User: robomaster
Password : l202-robot (Temporary)

Command : ssh robomaster@192.168.137.202
```

# APPLICATION INSTALLED (Done)

```shell
sudo apt-get update
sudo apt-get upgrade -y
#sudo apt-get remove python3.9 # For Raspberypi 3
sudo apt-get remove python3.11 # For Raspberypi 5

# Dependency for our application
# PYTHON INSTALLATION
sudo apt-get install build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev

wget https://www.python.org/ftp/python/3.8.9/Python-3.8.9.tar.xz
tar xf Python-3.8.9.tar.xz
cd Python-3.8.9
./configure --enable-optimizations
make
sudo make altinstall
sudo touch /usr/bin/python # If not exits
sudo cp python /usr/bin/python3.8
sudo ln -sf /usr/bin/python3.8 /usr/bin/python
cd ..
python --version
sudo rm -rf Python-3.8.9 Python-3.8.9.tar.xz
python -m pip install --upgrade pip


# ffmpeg package for wav file in robots
sudo apt-get install ffmpeg git -y

# NODE JS
# Download and install fnm:
curl -o- https://fnm.vercel.app/install | bash
source /home/robomaster/.bashrc
# Download and install Node.js:
fnm install 22
# Verify the Node.js version:
node -v # Should print "v22.14.0".
# Verify npm version:
npm -v # Should print "10.9.2".
npm install -g npm@11.2.0 # Install latest version of npm


```

# CREATE HOTSPOT for Robot connexion (Done)

```shell
# Only if Network configuration not check on OS flashing
sudo systemctl enable NetworkManager
sudo systemctl start NetworkManager

# Check networks available
nmcli device
# IF WIFI is unavalaible
sudo nmcli radio wifi on
 
# Start Hotspot
sudo nmcli device wifi hotspot ssid RPI-ROBOMASTER password 12345678 ifname wlan0

# SSID : RPI-ROBOMASTER
# PASSWORD : 12345678

# To check connections
nmcli connection

# Hotspot Configuration
UUID=f93b6da6-44d4-4e94-b415-035167650f53
nmcli connection show $UUID # For us UUID =f93b6da6-44d4-4e94-b415-035167650f53
sudo nmcli connection modify $UUID connection.autoconnect yes connection.autoconnect-priority 100

```

# SETUP THE PROJECT (In Progress)

```shell
git clone https://github.com/GueuleDeL0up/robomaster-extension-for-scratch.git app
cd app
git checkout Cavernos (Temporary)
python -m venv venv
source venv/bin/activate
python -m pip install .
cd src/scratch_extension
npm install .
npm audit fix
#npm run build-prod
npm run pretty && npm run build && npm run minify
cd ../../
python src/app/robomaster_server.py

```