const fs = require('fs');

//read files
// fs.readFile('./docs/blog1.txt', (err, data)=> {
//   if(err) {
//     console.log(err);
// }
// console.log(data.toString());
// });

// console.log('last line');

//write files

// fs.writeFile('./downloads/programs/node-crash-course/sample.txt', 'hello world', () => {
//   console.log('file was written');
// });

// directories
if(!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err)=> {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  })
} else {
  fs.rmdir('./assets', (err)=> {
    if(err) {
      console.log(err);
    }
    console.log('folder deleted');
  })
}
 //deleting files

 if(fs.existsSync('./downloads/programs/node-crash-course/deleteme.txt')){
  fs.unlink('./downloads/programs/node-crash-course/deleteme.txt', (err)=> {
    if(err) {
      console.log(err);
    }
    console.log('file deleted');
  })
 }