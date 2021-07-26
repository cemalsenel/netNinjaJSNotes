//template strings

const title = 'Best reads of 2019';
const author = 'John';
const likes = 30;

//concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result); //The blog called Best reads of 2019 by John has 30 likes

//template string way
let result1 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result1); //The blog called Best reads of 2019 by John has 30 likes


//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>`;
console.log(html);
/* <h2>Best reads of 2019</h2>
<p>By John</p>
<span>This blog has 30 likes</span>*/