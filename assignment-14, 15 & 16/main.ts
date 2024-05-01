// ASSIGNMENT NO # 14

let guestList: string[] = ['Rafay','Naeem','Arsalan','Farzan','Ayan'];

// for (let i = 0; i < guestList.length; i++)
// {
//   console.log(`Dear Sir/Madam: ${guestList[i]} \n you are invited to the dinner party \n I hope you are comming \n Thanks for comming\n\n `);
// }


// ASSIGNMENT NO # 15

let notPresentGuest = 'Ayan';
let newGuest = 'Talha'

guestList[4] = newGuest;

for(let i=0; i<guestList.length; i++)
{
  console.log(`Dear Sir/Madam: ${guestList[i]} \n you are invited to the dinner party \n I hope you are comming \n Thanks for getting\n\n `);
}

console.log(`Mr. ${notPresentGuest} will not coming to the dinner party`);



// ASSIGNMENT NO # 16

guestList.unshift('Ali', 'Farzana', 'Ahmed');
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Sir/Madam: ".concat(guestList[i], " \n you are invited to the dinner party, and we decided to add three more members to the tomorrow's dinner party \n I hope you are comming \n Thanks for getting\n\n "));
}

