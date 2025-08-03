/// create table in existing DB

import mysql from 'mysql2/promise';
import create from 'prompt-sync';

//// ⭐  1. connect to mysql server  ⭐
const myDb = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "testDb", // give the name of the existing DB which want to connect 
});
console.log('My sql connected success fully....')



//// ⭐  2.  how to show all existing table  ⭐
// console.log(await myDb.execute('show tables'));



//// ⭐  3.  how to create table  ⭐
//   to create table we need to give the name of the DB in which we want to create the table in sql connection{} 

// await myDb.execute('create table student(roll int primary key, name varchar(40), email varchar(60));')    // syn : create table Table_name(column_name datatype(limit))
console.log('Student Table created......');

//// ⭐  4.  how to describe table  ⭐
// console.log(await myDb.execute('desc student'));   // sys : desc Table_name 




//// ⭐  5.  how to insert values in table  ⭐    note don't give same type of value multiple time 
// await myDb.execute('insert into student(roll, name, email) values (20, "susanta samanta", "susanta@gmail.com")')

// ⭐ give the name of the the values using prepared statement  like this way

// await myDb.execute('insert into student(roll, name, email) values(?,?,?)', [21, "ram ram", "ram@email.com"]);

const more = [
    [22, "sam sam", "sam@mail"],
    [23, "ham sam", "ham@mail"],
    [24, "lam sam", "lam@mail"],
]

// await myDb.query('insert into student(roll, name, email) values ?', [more])




//// ⭐  6.  how to show table data ⭐
console.log(await myDb.execute('select * from student'));


