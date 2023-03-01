const dimentions = {
  width: 10,
  height: 20,
};

const alex = {
  firstName: "Alex",
  lastName: "Koch",
};
const mike = {
  firstName: "Mike",
  lastName: "Odom",
};

let arr1 = [dimentions];

let arr2 = [alex];

function change(person) {
  const modifiedObject = {
    firstName: "Alex",
    lastName: "Koch",
    height: 5.1,
  };
  modifiedObject.firstName = person.firstName;
  modifiedObject.lastName = person.lastName;

  return modifiedObject;
}

const newalex = change(alex);
const newmike = change(mike);

// console.log(newalex, newmike);

const newarray = [alex, mike];

const changedarray = newarray.map(change);
console.log(changedarray);
