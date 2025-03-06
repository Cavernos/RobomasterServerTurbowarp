# 🔵 Robomaster extension for Scratch 🟠
## Folders & Files
Folders and files names in snake_case.
```
/projet_robotique
    ∟ /venv
    ∟ /docs
        ∟ README.md
    ∟ /src
        ∟ /app
            ∟ /assets
            ∟ main.py
        ∟ /lib
        ∟ /tests
        ∟ /assets
            ∟ /images
```

## Code
### Style
[Google Style Guide](https://google.github.io/styleguide/)
### Variables
Variables names in snake_case and the type.
```python
my_string : str = ''
my_integer : int = 0
my_float : float = 0.0
my_list : list = []
my_dict : dict = {}
my_set : set = {}
```
### Functions
Functions names in snake_case, docstring and what they return.
```python
def countdown(number: int= 3) -> None:
    """
    Simple countdown.
    
    Args:
        number (int): Timer (seconds).
    
    Returns:
        str: timer's end.
    """
    for i in range(number+1):
        print(number - i)
    return "Time's over!"
```
### Class
Functions names in PascalCase and docstring.
```python
class Player():
    """
    Object that represents the player.
    """
    def __init__(self) -> None:
        pass
```
dependency : nmap 
python dependency :flask robomaster sphinx face_recognition