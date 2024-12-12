class Person {
    // Constructor
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person = new Person(
    firstName = prompt('What is your first name?'),
    lastName = prompt('What is your last name?')
  )
  
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person)