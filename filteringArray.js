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

// iterating to print out the firstName of each user 
function printFirstName(collection){
  for (const user of collection){
    console.log(user.firstName)
  }
}
printFirstName(users)
// iterating to print out the lastName of each user
function printLastName(collection){
  for (const user of collection){
    console.log(user.lastName)
  }
}
printLastName(users)

// print out fav color blue 
function blueColor(collection){
  for (const user of collection){
    if (user.favoriteColor === "Blue"){
      console.log(user.firstName)
    }       
  }
}
blueColor(users)

// filter collection of user whose favorite color is Red
function colorFilter(collection,color){
  for ( const user of sollection){
    if ( user.favoriteColor === color){
      console.log(user.firstName)
    }     
  }
}
colorFilter(users,"Red")


// filter out favoriteAnimal and color : 'jaguar' and 'red'
function filter(collection,attribute,value){
  for(const user of collection){
    if(user[attribute]===value){
      console.log(user.firstName)
    }
  }
}
filter(users,'favoriteAnimal','Jaguar ')

