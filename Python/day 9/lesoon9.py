def triangle(side1,side2,side3):
     if side1 + side2 > side3 and side2 + side3 > side1 and side3 + side1 > side2:
         print("ასეთი სამკუთხედი იარსებებს")
     else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")


triangle(side1 = float(input("first side: ")), side2 = float(input("second side: ")), side3 = float(input("third side: ")))

def names(name1, name2, name3):
    name = [name1,name2,name3]
    print(name)

names(name1 =(input("first name:")), name2 =(input("second name:")), name3 =(input("third name:")))
    