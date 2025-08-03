/// connect, create DB, Show DBs


import mysql from 'mysql2/promise';


//// ⭐  1. connect to mysql server  ⭐
const myDb = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    // database: "", // give the name of the existing DB which want to connect 
});
console.log('My sql connected success fully....')




//// ⭐  2.  how to create new DB  ⭐
//await myDb.execute('create database testDB');     //syn : create database dataBase_name


//// ⭐  3.  how to show all DB  ⭐
console.log(await myDb.execute('show databases'));    // syn : show databases



