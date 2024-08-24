const fs = require('node:fs');

// To Study:

// writefile 
// appendfile 
// copyfile  
// rename  
// unlink 

// 1. writefile : fs.writeFile(file, data[, options], callback) sab node js ki documentation se liya hai
//USED TO CREATE A FILE
// callback matlab function hota hai
fs.writeFile("helo.txt", "Hey Hello", function(err){
  if(err) console.error(err);
  else console.log("done")
})

//2. Appendfile is used to likhe hue file mein add karna

fs.appendFile("helo.txt", " Akshit!", function(err){
  if(err) console.error(err);
  else console.log("done")
})

// 3. fs.rename(oldPath, newPath, callback)

fs.rename("helo.txt", "hey.txt", function(err){
  if(err) console.error(err);
  else console.log("done");
})

//4. copyfile as the name suggests, used to copy the content of one file to another

fs.copyFile("hey.txt", "./copy/copy.txt", function(err){
  if(err) console.error(err.message);
  else console.log("done");
})

//5.unlink is used to remove the file

fs.unlink("hey.txt", function(err){
  if(err) console.error(err);
  else console.log("removed");
})

//6.rm is remove directory and is used to delete a folder

fs.rm("./copy", {recursive: true}, function(err){
  if(err) console.error(err);
  else console.log("removed");
})