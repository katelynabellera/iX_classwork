

function test() {
    console.log("Button clicked")
    let button = document.getElementById("btn")
    button.style.display = "none"
}

//test comment
let person = {
    firstName: "Katelyn",
    lastName: "Abellera"
};

function getFullName(person) {
    return person.firstName + " " + person.lastName
}

console.log(getFullName(person))

let filterFunction = (person) => {
    console.log(person.firstName + "test")
}

filterFunction(person)

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  

console.log(persons)
let persons2 = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

  console.log(persons2)