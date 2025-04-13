# Variable declaration
a = 10
b = 4
c = a*b
print("Sum:", c)

#   Conditional example
num = 11
if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")

for i in range(1, 11):
    if i % 2 == 0:
        print(i, end=" ")

print("")

for i in range(1, 20):
    if i % 3 == 0:
        print("Fizz")
    print(i, end=" ")

print("")


# Function

def greet(name):
    return f"Hello, {name}!"


print(greet("Alice"))


def square(x): return x*x


print(square(4))


def swap(x, y):
    z = x
    x = y
    y = z


x = 10
y = 5

print(x, y)
swap(x, y)
print(x, y)

# OOP


class Counter:
    def __init__(self, value=0):
        self.value = value

    def increment(self):
        self.value += 1

    def decrement(self):
        self.value -= 1

    def reset(self):
        self.value = 0


c = Counter(5)
