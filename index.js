// Console log a welcome message with instructions to mad libs

console.log("Welcome to MAD LIBS, get ready to play.")

// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words

let adj = prompt("Enter an ADJECTIVE")
let plrlNn = prompt("Enter a PLURAL NOUN")
let vrb = prompt("Enter a VERB(present tense)")
let vrb2 = prompt("Enter another VERB(present tense)")
let vrb3 = prompt("Enter another VERB(present tense)")
let adj2 = prompt("Enter another ADJECTIVE")
// Create an array that stores the values the user entered
let mdLbs = [adj, plrlNn, vrb, vrb2, vrb3, adj2]
console.log(mdLbs)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log(`A long time ago, in a ${mdLbs[0]} town, the towns citizens had a ${mdLbs[1]} problem. The towns people tried to ${mdLbs[2]}, ${mdLbs[3]}, ${mdLbs[4]}. But nothing worked. The towns people decided that the ${mdLbs[1]} were too ${mdLbs[5]}, so they let them stay and roam semi-free.`)







