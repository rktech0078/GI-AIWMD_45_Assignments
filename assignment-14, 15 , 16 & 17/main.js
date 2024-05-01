// ASSIGNMENT NO # 14
var guestList = ['Rafay', 'Naeem', 'Arsalan', 'Farzan', 'Ayan'];
// for (let i = 0; i < guestList.length; i++)
// {
//   console.log(`Dear Sir/Madam: ${guestList[i]} \n you are invited to the dinner party \n I hope you are comming \n Thanks for comming\n\n `);
// }
// ASSIGNMENT NO # 15
var notPresentGuest = 'Ayan';
var newGuest = 'Talha';
guestList[4] = newGuest;
for (var i = 0; i < guestList.length; i++)
    // {
    //   console.log(`Dear Sir/Madam: ${guestList[i]} \n you are invited to the dinner party \n I hope you are comming \n Thanks for getting\n\n `);
    // }
    console.log("Mr. ".concat(notPresentGuest, " will not coming to the dinner party"));
// ASSIGNMENT NO # 16
guestList.unshift('Ali', 'Farzana', 'Ahmed');
// for (let i = 0; i < guestList.length; i++) {
//     console.log("Dear Sir/Madam: ".concat(guestList[i], " \n you are invited to the dinner party, and we decided to add three more members to the tomorrow's dinner party \n I hope you are comming \n Thanks for getting\n\n "));
// }
// ASSIGNMENT NO # 17
console.log("\n Unfortunately, we does not arrange a big table, so we only invited two members to the dinner party");
while (guestList.length > 2) {
    var removeMembers = guestList.pop();
    console.log("Sorry Dear Sir/Member: ".concat(removeMembers, ", we are sorry but you are not invited to the tommorows dinner part for some reasons"));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam: ".concat(guestList[i], ", You are still invited to the dinner party"));
}
guestList.splice(0, 2);
console.log(guestList);
