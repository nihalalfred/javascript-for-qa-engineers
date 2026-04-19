// Define the child class that inherits from Person

import Person from "./person.js";

class Student extends Person {
    constructor(name, age, grade){
        // call the parenet class constructor using super
        super(name,age);
        this.grade = grade;
    }

    // Method to get the student's details
    getStudentDetails(){
        //call the parent class method
        const parentDetails = super.getDetails();
        return `${parentDetails}, Grade: ${this.grade}`
    }

}

// Export the Student Class
export default Student;
