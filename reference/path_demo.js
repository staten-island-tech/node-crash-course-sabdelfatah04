const path = require('path');

//Base file name
//console.log(__filename); -> PS C:\Users\Sarah Abdelfatah\Desktop\node-crash-course-sabdelfatah04\reference>
console.log(path.basename(__filename));// path_demo.js

// Directory name
console.log(path.dirname(__filename));//Users\Sarah Abdelfatah\Desktop\node-crash-course-sabdelfatah04\reference

//File  extension
console.log(path.extname(__filename));//.js

// Create path onbject
//console.log(path.parse(__filename)); -> {root: 'C:\\',dir: 'C:\\Users\\Sarah Abdelfatah\\Desktop\\node-crash-course-sabdelfatah04\\reference',base: 'path_demo.js',ext: '.js',name: 'path_demo'}
console.log(path.parse(__filename).base); //path_demo.js

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));//\Users\Sarah Abdelfatah\Desktop\node-crash-course-sabdelfatah04\reference\test\hello.html

