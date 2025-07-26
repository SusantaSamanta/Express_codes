/*
 
in previous node file we run by the line :- node --watch app.js       like this  
but now we use like this 

to start the js file by npm run dev we need to follow this steps : 

1:   inside the package.json file add this
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch index.js",   // here instead of "dev" use any other name like 'Suman' => npm run suman    or/-   npm suman
    "start": "nodemon index.js",   //  using nodemon we use like this way => npm start
            or/-
    "dev": "nodemon index.js"      // npm dev
  },

2: and the integrated terminal write 'npm run dev' to run the file


*/



console.log("\n\n\nOooooook npm run dev working.......................\n\n\n");