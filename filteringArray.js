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

// Iterate and print out everyone first name .
function firstNamePrint(collection){
  for (const user of collection){
    console.log(user.firstName)
  }
}

// print out only users whose favorite color is blue 
function blueFilter(collection){
  for (const user of collection){
    if(user.favoriteColor==='Blue'){
      console.log(user.firstName)
    }
  }
}

// filter out  user whose favorite color is red 
function redFilter(collection){
  for(const user of collection){
    if(user.favoriteColor==='Red'){
      console.log(user.firstName)
    }
  }
}

// 18|May|25
function colorFilter(collection,color){
  for(const user of collection){
    if(user.favoriteColor===color){
      console.log(user.firstName)
    }
  }
}
colorFilter(users,'Red')



// 20 |May|25
// Trying to filter out by two attributes 
function filterByTwoAttributes(collection, color, animal){
  for(const user of collection){
    if(user.favoriteColor===color && user.favoriteAnimal===animal){
      console.log(user.firstName)
    }
  }
}
filterByTwoAttributes(users,'Blue','Penguin')

// 
function filter(collection,attribute,value){
  for(const user of collection){
    if(user[attribute]===value){
      console.log(user.firstName)
    }
  }
}
// nice 
