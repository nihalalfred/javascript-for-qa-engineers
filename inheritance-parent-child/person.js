// Define Parent Class

class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;

}

// Method to get a person's details

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}

// Export Parent Class
export default Person;
