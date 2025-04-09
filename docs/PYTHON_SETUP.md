# To setup developpement mode
## For Server Side
```shell
git clone https://github.com/GueuleDeL0up/robomaster-extension-for-scratch.git
python -m venv venv
.\venv\Scripts\activate or source venv/bin/activate on Linux and MacOs
python -m pip install -e .
set ENV=dev
robomaster_cli
```

# To upgrade on Rapsberry-Pi
```
git pull origin [branch_name]
source venv/bin/activate
python -m pip install -e .
sudo systemctl stop api
sudo systemctl start api
```

## For client-side

```

```