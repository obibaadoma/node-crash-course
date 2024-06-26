const fs = require('fs');

const readStream = fs.createReadStream('deleteme.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('write.txt');

readStream.on('data', (chunk)=> {
  console.log('----NEW CHUNK----');
  console.log(chunk);

  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});