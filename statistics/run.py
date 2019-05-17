import json
from random import randrange

f = open("../server/result.json", "r")
current = f.read()

data = json.loads(current)


# HERE YOU WRITE YOUR FUNCTION
def stats(x, y):
    data["line"].append(randrange(100))
    data["bar"].append(randrange(100))


stats(12, 4)
result = json.dumps(data)

f = open("../server/result.json", "w+")
f.write(str(result))
f.close()