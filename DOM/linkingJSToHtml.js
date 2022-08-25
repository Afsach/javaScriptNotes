// in head tag 
// parse(read) html 
// load js and execute js
// them again parse html
// chances of error is more
{/* <script src="script.js"></script> */}

// at the end of body tag
{/* <script src="script.js"></script> */}
// parse(read) html completely
// load js and execute js
// time consuming chances of error less as compare to in head tag

// in head tag using async
{/* <script src="script.js" async></script> */}
// parse html 
// load js
//html parse + load load
// if js loads before completing html parsing it will also stop parsing html without completing whole parsing
// error of chances is more because whole html is not parse

// *** in head using defer
<script src="script.js" deffer></script>
// parse html
// load js and parse html together simultaneuosly
// parsing will not stop if js loading will complete before parsing
// it will first parse all html then execute the js
// it is less time comsuming then all other methods
// it is best method