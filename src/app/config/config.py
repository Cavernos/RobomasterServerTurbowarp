import os
if "ENV" in os.environ:
    ENV = os.environ['ENV']
else:
    ENV = "production"