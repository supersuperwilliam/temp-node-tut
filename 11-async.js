const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt', 'utf8', (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  else {
    console.log(result);
  }

  const first = result;
  
  readFile('./content/subfolder/second.txt', 'utf8', (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    else {
      console.log(result);
    }

    const second = result;

    writeFile(
      './content/subfolder/result-async.txt',
       `The result is ${first}, ${second}`,
       (error, result) => {
          if (error) {
            console.log(error);
            return;
          }
          else {
            console.log(result);
          }
       }
    );
  });
});