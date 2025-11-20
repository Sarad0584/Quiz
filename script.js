// MCQ Question List
const quizData = 
    // {
    //     question: "1. Which of the following is a JavaScript data type?",
    //     options: ["Number", "Float", "Character", "Double"],
    //     answer: "Number"
    // },
    // {
    //     question: "2. Which method prints output in JavaScript?",
    //     options: ["print()", "console.log()", "write()", "cout<<"],
    //     answer: "console.log()"
    // },
    // {
    //     question: "3. Which symbol is used for comments in JavaScript?",
    //     options: ["//", "/* */", "#", "<!-- -->"],
    //     answer: "//"
    // },
    // {
    //     question: "4. Who invented JAva?",
    //     options: ["JAmes Gosling","Iron Bjorne","Dennis Ritchie"],
    //     answer: "JAmes Gosling"
    // }
    [
    {
        question: "1. What does the final keyword in Java indicate?",
        options: ["Variable is mutable", "Variable or method cannot be changed or overridden", "Method runs at runtime", "Class can be extended"],
        answer: "Variable or method cannot be changed or overridden"
    },
    {
        question: "2. What is the use of the this keyword?",
        options: ["Access parent class members", "Refers to the current instance of the class", "Creates a new object", "Defines static members"],
        answer: "Refers to the current instance of the class"
    },
    {
        question: "3. Which keyword is used to call the parent class constructor or method?",
        options: ["this", "super", "new", "final"],
        answer: "super"
    },
    {
        question: "4. What is true of static members?",
        options: ["Belong to instance objects", "Belong to the class rather than instances", "Can only be accessed via objects", "Change per object instance"],
        answer: "Belong to the class rather than instances"
    },
    {
        question: "5. What does the new keyword do in Java?",
        options: ["Declares variables", "Creates a new object", "Calls static methods", "Defines constants"],
        answer: "Creates a new object"
    },
    {
        question: "6. Which is NOT a primitive data type in Java?",
        options: ["int", "String", "boolean", "char"],
        answer: "String"
    },
    {
        question: "7. Where is a local variable's scope limited to?",
        options: ["Entire class", "Method or block where it is declared", "Package", "JVM"],
        answer: "Method or block where it is declared"
    },
    {
        question: "8. What feature of Java makes it platform independent?",
        options: ["JVM", "Bytecode", "Java compiler", "Garbage collection"],
        answer: "Bytecode"
    },
    {
        question: "9. What is JDK in Java?",
        options: ["Java Development Kit including compiler and tools", "Java Runtime Environment", "Java Virtual Machine", "Programming language itself"],
        answer: "Java Development Kit including compiler and tools"
    },
    {
        question: "10. What is a class in Java?",
        options: ["A blueprint for creating objects", "An instance of an object", "A method", "A data type"],
        answer: "A blueprint for creating objects"
    },
    {
        question: "11. Which operator is used for equality test in Java?",
        options: ["=", "==", "!=", "&&"],
        answer: "=="
    },
    {
        question: "12. What does a for loop do?",
        options: ["Executes code block once", "Executes code block repeatedly based on a condition", "Branches code flow", "Jumps to end of method"],
        answer: "Executes code block repeatedly based on a condition"
    },
    {
        question: "13. Which thread priority value is the highest?",
        options: [1, 5, 10, 7],
        answer: 10
    },
    {
        question: "14. Throws keyword in method signature indicates what?",
        options: ["The exceptions the method can handle internally", "The exceptions that may be thrown by the method", "To stop a thread", "Creates a new object"],
        answer: "The exceptions that may be thrown by the method"
    },
    {
        question: "15. How are strings created in Java?",
        options: ["Only with new keyword", "Using String literals or with new keyword", "Using arrays only", "Only through StringBuffer"],
        answer: "Using String literals or with new keyword"
    },
    {
        question: "16. Which of the following is NOT a constructor type?",
        options: ["Default constructor", "Parameterized constructor", "Abstract constructor", "Copy constructor"],
        answer: "Abstract constructor"
    },
    {
        question: "17. Which inheritance type is NOT supported directly in Java?",
        options: ["Single inheritance", "Multiple inheritance via classes", "Multilevel inheritance", "Hierarchical inheritance"],
        answer: "Multiple inheritance via classes"
    },
    {
        question: "18. Abstract classes in Java:",
        options: ["Can be instantiated directly", "Can have both abstract and concrete methods", "Cannot have any method implementation", "Are interfaces"],
        answer: "Can have both abstract and concrete methods"
    },
    {
        question: "19. Exception handling in Java is done using:",
        options: ["if-else statements", "try-catch-finally blocks", "switch-case", "loops"],
        answer: "try-catch-finally blocks"
    },
    {
        question: "20. Which keyword is used to execute code regardless of exceptions?",
        options: ["catch", "finally", "throw", "try"],
        answer: "finally"
    },

    // SECOND SET OF 20
    {
        question: "1. What does the final keyword in Java signify?",
        options: ["Variable can be modified", "Variable or method cannot be changed or overridden", "Class must be abstract", "Static method only"],
        answer: "Variable or method cannot be changed or overridden"
    },
    {
        question: "2. What is the purpose of the this keyword?",
        options: ["Refers to the parent class", "Refers to the current object", "Creates new object", "Calls static method"],
        answer: "Refers to the current object"
    },
    {
        question: "3. What does the super keyword do?",
        options: ["Refers to current class", "Calls the parent class constructor or method", "Creates new object", "Defines final variable"],
        answer: "Calls the parent class constructor or method"
    },
    {
        question: "4. Static keyword means:",
        options: ["Belongs to instances", "Belongs to the class itself", "Cannot be accessed by objects", "Constant value only"],
        answer: "Belongs to the class itself"
    },
    {
        question: "5. Which keyword creates a new object?",
        options: ["this", "super", "new", "final"],
        answer: "new"
    },
    {
        question: "6. Which of these is NOT a data type in Java?",
        options: ["int", "float", "string", "boolean"],
        answer: "string"
    },
    {
        question: "7. What defines the scope of a variable?",
        options: ["Lifetime in memory", "Accessibility within code blocks", "Whether it's static", "Its data type"],
        answer: "Accessibility within code blocks"
    },
    {
        question: "8. Which is NOT a feature of Java?",
        options: ["Platform independent", "Object-oriented", "Pointer arithmetic", "Robust"],
        answer: "Pointer arithmetic"
    },
    {
        question: "9. JDK stands for:",
        options: ["Java Development Kit", "Java Deployment Kit", "Java Debug Kit", "Java Design Kit"],
        answer: "Java Development Kit"
    },
    {
        question: "10. JVM is responsible for:",
        options: ["Compiling Java code", "Interpreting bytecode to machine code", "Writing Java code", "Managing source files"],
        answer: "Interpreting bytecode to machine code"
    },
    {
        question: "11. What is a class?",
        options: ["Instance of Object", "Blueprint for objects", "Method", "String literal"],
        answer: "Blueprint for objects"
    },
    {
        question: "12. Which operator checks equality between two variables?",
        options: ["=", "==", "!=", "&"],
        answer: "=="
    },
    {
        question: "13. Control structures in Java include:",
        options: ["if, for, switch", "try, catch, throw", "new, super, this", "static, final, abstract"],
        answer: "if, for, switch"
    },
    {
        question: "14. Thread priorities in Java range from:",
        options: ["0 to 5", "1 to 10", "5 to 15", "10 to 20"],
        answer: "1 to 10"
    },
    {
        question: "15. Throws keyword is used to:",
        options: ["Declare exceptions thrown by a method", "Handle exceptions internally", "Terminate a thread", "Create new objects"],
        answer: "Declare exceptions thrown by a method"
    },
    {
        question: "16. How are Java strings created?",
        options: ["Only with new keyword", "Using literals or new keyword", "Only with StringBuffer", "Only through array of characters"],
        answer: "Using literals or new keyword"
    },
    {
        question: "17. Constructor overloading means:",
        options: ["Multiple constructors with different parameters", "No constructors", "Single constructor only", "Constructors with body only"],
        answer: "Multiple constructors with different parameters"
    },
    {
        question: "18. Which type of inheritance is NOT directly supported by Java classes?",
        options: ["Single", "Multiple (via classes)", "Multilevel", "Hierarchical"],
        answer: "Multiple (via classes)"
    },
    {
        question: "19. Abstract classes:",
        options: ["Can contain both abstract and concrete methods", "Cannot have any methods implemented", "Can be instantiated", "Are interfaces"],
        answer: "Can contain both abstract and concrete methods"
    },
    {
        question: "20. Exception handling in Java involves:",
        options: ["try-catch-finally blocks", "if-else statements", "loops", "switch-case"],
        answer: "try-catch-finally blocks"
    },
    {
        question: "21. Finally block is used to:",
        options: ["Handle the exception", "Execute code regardless of exception", "Throw exceptions", "Create threads"],
        answer: "Execute code regardless of exception"
    }


];

let current = 0;
let score = 0;

// Load first question
loadQuestion();

function loadQuestion() {
    let q = quizData[current];
    document.getElementById("question").innerHTML = q.question;

    let optionsHtml = "";
    q.options.forEach(opt => {
        optionsHtml += `<div class="option" onclick="selectOption(this)">${opt}</div>`;
    });

    document.getElementById("options").innerHTML = optionsHtml;
}

// Handle answer selection
function selectOption(selected) {
    let correctAns = quizData[current].answer;

    if (selected.innerHTML === correctAns) {
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("wrong");
    }

    // Disable all options after one is selected
    let allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => {
        opt.style.pointerEvents = "none";
        if (opt.innerHTML === correctAns) {
            opt.classList.add("correct");
        }
    });
}

// Next question
function nextQuestion() {
    current++;
    if (current < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerHTML = 
            `Quiz Completed! Your score: ${score} / ${quizData.length}`;
        document.getElementById("options").innerHTML = "";
        document.getElementById("nextBtn").style.display = "none";
    }
}
