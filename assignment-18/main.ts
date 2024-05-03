// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let cities: string[] = ['Makkah ','Madina ','Lahore ','Islamabad ','Dubai \n' ]


// • Print your array in its original order.
console.log(`Original Cities: ${cities}`);


// • Print your array in alphabetical order without modifying the actual list.
console.log(`Copy cities: ${[...cities].sort()} \n`);


// • Show that your array is still in its original order by printing it.
console.log(`Original Cities: ${cities} \n`);


// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Copy cities: ${[...cities].sort().reverse()} \n`);


// • Show that your array is still in its original order by printing it again.
console.log(`Original Cities: ${cities} \n`);


// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Copy cities: ${cities.sort()} \n`);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Copy cities: ${cities.sort().reverse()} \n`);


// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`Copy cities: ${cities.sort()} \n`);






