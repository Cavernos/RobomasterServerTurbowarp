# Installation Raspberry-pi (Done)

```
OS : Raspbian Lite x64
```
To be able to connect on the pi I had to connect an ethernet cable and share network connection.
After that I was able to scan the network and get the Ip Address of the pi
For more information see: https://pihw.wordpress.com/guides/direct-network-connection/

# SSH Keypass (Done)

```
Host (on my device) : 192.168.0.73
User: robomaster
Password : l220-robot (Temporary)

Command : ssh robomaster@192.168.0.73
```
<!--
# SET IP STATIC FOR RASPBERRY (Done)
```
sudo nmcli con mod "Wired connection 1" ipv4.addresses 192.168.0.202/24 # Set Static Ip
sudo nmcli con mod "Wired connection 1" ipv4.dns 8.8.8.8 # set DNS
sudo nmcli con mod "Wired connection 1" ipv4.method ^ù
# Disable DHCP
sudo nmcli con up "Wired connection 1" # ENABLE CHANGES
```
-->

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
sudo apt-get install ffmpeg git nginx -y

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

cd src/scratch_extension
npm install .
npm audit fix
#npm run build-prod
npm run pretty && npm run build && npm run minify
cd ../../
python src/app/robomaster_server.py

```
# SETUP NGINX SERVER (Not Implemented) and GUNICORN
```shell
sudo nano /etc/nginx/sites-available/robomaster_api
sudo ln -sf /etc/nginx/sites-available/robomaster_api /etc/nginx/sites-enabled/robomaster_api
# Configure ssl 
mkdir ~/ssl-certificate
cd ~/ssl-certificate
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365 # Generate certificate 
```
## Nginx congiguration File
```nginx
server {
    listen 443 ssl http2;
    server_name example.com;
    ssl_certificate /home/robomaster/ssl-certificate/cert.pem;
    ssl_certificate_key /home/robomaster/ssl-certificate/key.pem;
    location / {
       include proxy_params;
        proxy_pass http://unix:/home/robomaster/app/api.sock;
    }
}
server {
    listen 80;
    server_name example.com;
    location / {
        return 301 https://$host$request_uri;
    }
}
```
## GUNICORN config
```shell
cd ~/app/
```

## Service Configuration

```shell
sudo nano /etc/systemd/system/api.service
[Unit]
Description=Python Instance to serve Robomaster API
After=network.target

[Service]
User=robomaster
Group=www-data
WorkingDirectory=/home/robomaster/app
Environment="PATH=/home/robomaster/app/venv/bin"
ExecStart=/home/robomaster/app/venv/bin/gunicorn --workers 3 --bind unix:api.sock -m 007 --chdir /home/robomaster/app/src/app wsgi:app

[Install]
WantedBy=multi-user.target
sudo systemctl enable api
sudo systemctl start api
sudo systemctl status api
sudo systemctl restart nginx
```