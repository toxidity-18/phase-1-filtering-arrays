// array of flatbook users and with objects .
const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
  },
];

// 

// refactoring our filter function to take a callback function
function filter(collection,db){
  for(const user of collection){
    if(db(user)){
      console.log(user.firstName)
    }
  }
}
filter(users,function(user){
  return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin"
})

filter(users,function(user){
  return user.favoriteColor==='Yellow'
})
