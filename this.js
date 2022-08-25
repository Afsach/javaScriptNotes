"use strict"    // to get window object  comment the this whole line
console.log(this);
console.log(this === window);

function myfunc(){
  //  "use strict" // to get window object  comment the this whole line
    console.log(this);  // if you direct call this in function it will give you window object
}

myfunc();

// to avoid getting window object in function use "use strict" at top of your files or in your function 
