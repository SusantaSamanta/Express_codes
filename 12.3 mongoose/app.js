
///     ⭐ mongodb connection process ⭐

import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1");
client.connect();
const myDB = client.db("susanta");
const table = myDB.collection("student");
// console.log(await table.find().toArray());





//// ⭐⭐  mongoose is an ODM not a ORM 



///     ⭐ mongoose connection process ⭐
import mongoose from "mongoose";
try {
    await mongoose.connect('mongodb://localhost:27017/susanta'); //mongodb://BD_URL/DB_NAME
    // mongoose.set("debug", true); // this line not mandatory : it use for print the query which are use in code .. 
} catch (err) {
    console.log(err);
}

///     ⭐ mongoose create schema ⭐   
const studentSchema = mongoose.Schema({
    // name: String,
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true, min: 18 },
    created: { type: Date, default: Date.now() },
})

///     ⭐ mongoose create model ⭐   Or create DB table
const DBTable = mongoose.model("mongooseStudent", studentSchema);  // in this table name 'mongooseStudent' one 's' will add in mongodb


///     ⭐  mongoose insert single data in table  ⭐  using: create(), insertOne()
// await DBTable.create({ name: 'susanta samanta', email: 'susanta@gmail.com', age: 53 });
// await DBTable.insertOne({ name: "Gama", email: "Gama@email", age: 34 });
try {
    await DBTable.create({
        name: 'suman samanta',
        email: 'susanta1@gmail.com',
        age: 68
    })
} catch (err) {
    //console.log('error : ', err)
}


///  ⭐  mongoose insert multiple data in table  ⭐ using : insertMany()
const multipleData = [
    { name: "Rama", email: "Rama@email", age: 20 },
    { name: "Sama", email: "Sama@email", age: 24 },
    { name: "Nama", email: "Nama@email", age: 40 },
]
// await DBTable.insertMany(multipleData);

///  ⭐  read multiple data from DB  ⭐ using : find()  /// where we don't need to add toArray() 
// console.log(await DBTable.find());    
// console.log(await DBTable.find({age: {$gt: 50}}))    find using condition 


///  ⭐  update single data from DB  ⭐ using : updateOne  /// where we don't need to add toArray() 
await DBTable.updateOne({ name: 'suman samanta' }, { $set: { email: 'suman@email.com' } });



///  ⭐  delete single data from DB  ⭐ using : deleteOne  /// where we don't need to add toArray() 
const del = await DBTable.deleteOne({ name: 'Gama' });
//console.log(del.deletedCount); // to count the delete 



























///     ⭐  mongoose connection close  ⭐ it use for close the database connection . 
await mongoose.connection.close();
mongoose.disconnect();




