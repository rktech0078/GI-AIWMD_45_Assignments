let personName: string = "Abdul Rafay Khan"

// Lower-Case
console.log("lowercase:", personName.toLocaleLowerCase());

// Upper-Case
console.log("uppercase:", personName.toLocaleUpperCase());

// Title-Case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
