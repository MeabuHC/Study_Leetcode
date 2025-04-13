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


for i in range(1, 20):
    if i % 3 == 0:
        print("Fizz")
    print(i, end=" ")
