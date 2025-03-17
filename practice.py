'''from collections import Counter
from collections import defaultdict
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
counter = Counter(nums)
print(counter)

text = "hello world"
counter = Counter(text)
print(counter)

#defaultdict
students = defaultdict(list)
students["Nursaya"].append(90)
students["Dana"].append(85)
print(students)

from collections import OrderedDict
students = OrderedDict()
students["Nursaya"] = 1
students["Dana"] = 2
print(students)'''








'''import datetime

year = int(input("Enter year: "))
month = int(input("Enter month: "))
day = int(input("Enter day: "))

birthday = datetime.date(year, month, day)
print(birthday.strftime("%A"))'''

'''print(os.getcwd())  

files = os.listdir('.')  
os.mkdir("new_practice")
files = os.listdir('.')
print(files)'''

#create a folder "my_new_folders" if it doesnt exists
#how to use "if"

'''import os 
if not os.path.exists("my_new_folders"):
    os.mkdir("my_new_folders")
print("Folder created")'''

'''from collections import Counter
from collections import deque
fruits = ["apple", "banana", "orange", "orange", "banana", "banana"]
counter = Counter(fruits)
print (f"Fruits in the box:{counter}")



queue = deque([])
queue.append("Zergul")
queue.append("Nurbolat")
queue.append("Nurasyl")
queue.append("Niyazbek")
queue.append("Zergul")
print(queue)
counter = Counter(queue)
print(counter)'''


#Searching problems

#Binary Search:
'''def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left<=right:
        mid = (left+right)//2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
arr = [5, 9, 12, 17, 19, 20, 23, 38, 44,45,56]
target = 19
print(binary_search(arr, target))'''


#Linear Search:
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1 
arr = [12, 45, 23, 31, 19, 8]
target = 31
print(linear_search(arr, target))
