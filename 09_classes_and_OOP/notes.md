# javaScript and classes

# OOP

# objects
- collection of properties and methods
- tolowerCase

# why to use OOP

## Parts of OOP

- constructor function
- prototypes
- classes
- Instances(new,This)

# pillars of OOP
- Encapsulation 
- Inheritance
- Polymorphism
- Abstraction

1. Encapsulation (Data Hiding)

👉 Meaning: Wrapping data (variables) + methods (functions) together in one class and restricting direct access.

👉 Why? To protect data from wrong use.

💡 Example:
class Student {
    private int marks;   // hidden data

    public void setMarks(int m) {
        marks = m;
    }

    public int getMarks() {
        return marks;
    }
}

👉 You cannot access marks directly, only through methods.

📌 Short line:
Encapsulation = Data hiding + controlled access

🧬 2. Inheritance (Code Reusability)

👉 Meaning: One class can use properties of another class.

👉 Why? To reuse code and avoid repetition.

💡 Example:
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

👉 Dog can use sound() from Animal

📌 Short line:
Inheritance = Parent → Child relationship

🎭 3. Polymorphism (Many Forms)

👉 Meaning: One thing behaves in different ways.

👉 Types:

Compile-time (Method Overloading)
Run-time (Method Overriding)
💡 Example (Overloading):

class Math {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

👉 Same method name, different parameters

📌 Short line:
Polymorphism = Same name, different behavior

🎯 4. Abstraction (Hiding Implementation)

👉 Meaning: Show only important details, hide internal logic.

👉 Why? To reduce complexity.

💡 Example:
abstract class Car {
    abstract void start();  // no body
}

class BMW extends Car {
    void start() {
        System.out.println("Car starts with button");
    }
}

👉 User only knows "car starts", not how.

📌 Short line:
Abstraction = Hide details, show functionality

🧠 Easy Trick to Remember

👉 E → I → A → P

E → Encapsulation → Data hide
I → Inheritance → Reuse
A → Abstraction → Hide logic
P → Polymorphism → Many forms
🔥 One-line difference
Encapsulation → Data safe
Inheritance → Code reuse
Abstraction → Only important show
Polymorphism → Same thing, different behavior