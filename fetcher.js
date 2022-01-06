const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, res, body) => {
  console.log('StatusCode:', response.statusCode);
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.log(error);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
  });
});