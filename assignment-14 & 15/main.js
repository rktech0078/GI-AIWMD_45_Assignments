// ASSIGNMENT NO # 14
var guestList = ['Rafay', 'Naeem', 'Arsalan', 'Farzan', 'Ayan'];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Sir/Madam: ".concat(guestList[i], " \n you are invited to the dinner party \n I hope you are comming \n Thanks for comming\n\n "));
}
// ASSIGNMENT NO # 15
var notPresentGuest = 'Ayan';
var newGuest = 'Talha';
guestList[4] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Sir/Madam: ".concat(guestList[i], " \n you are invited to the dinner party \n I hope you are comming \n Thanks for getting\n\n "));
}
console.log("Mr. ".concat(notPresentGuest, " will not coming to the dinner party"));
