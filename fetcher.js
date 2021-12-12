let request = require('request'); // initialize NPM and install package
let fs = require('fs');//grab args

let args = process.argv.slice(2);//variable for domain

let urL = args[0];//variable for the localFile

let file = args[1];//const sizeBytes = stats.size


request(urL, (error, response, body) => { //request to the domain
  console.log('error:', error);
  console.log('status:', response && response.statusCode);
  console.log('body:', body)

  fs.writeFile(file, body, (err, stats) => { //write file start
    if(err) {
      console.error(err)
      return
    }

    console.log(`Downloaded & Saved To ${file}`);
  
  })

})