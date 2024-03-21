"use strict";
let personName = "Abdul Rafay Khan";
// Lower case
console.log("lowecase:", personName.toLowerCase());
// Upper Case
console.log("upercase:", personName.toLocaleUpperCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
