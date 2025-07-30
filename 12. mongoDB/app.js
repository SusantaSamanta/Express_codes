import { MongoClient } from "mongodb";


const client = new MongoClient("mongodb://127.0.0.1");
await client.connect();   /// ⭐  connect to mongoDb  ⭐

const myDB = client.db("susanta"); /// ⭐  create a data base withe name 'susanta'  ⭐ if the data base 'susanta' already created the it will connect .
const student = myDB.collection("student");  /// ⭐ create a collection or table in data base  ⭐ if table already created then it will automatically selected.


/// ⭐  insert single element into DB table   ⭐
//student.insertOne({name: 'susanta', roll: '20'});    
//student.insertOne({name: 'RAM', age: '43'});

/// ⭐  insert many element into DB table   ⭐
/*student.insertMany([
    { name: 'SAM', age: 30 },
    { name: 'suman', age: 45 },
    { name: 'sayan', age: 44 },
    ]); */




/// ⭐  find all element from DB table   ⭐
const studentData = student.find();
//console.log(studentData); /// it return an cursor data
/// to get original data we need : 
for await (let i of studentData) {
    // console.log(i);
}
/// another simple way 
const studentData2 = await student.find().toArray();
// console.log(studentData2);

/// ⭐  find all element from DB table using condition  ⭐  it return all element which are matched
const sName = await student.find({ age: 45 }).toArray();
// console.log(sName);


/// ⭐  find one element from DB table using condition  ⭐ If multiple element match condition only first element can return.
const sName2 = await student.findOne({ age: 45 });
// console.log(sName2);
// console.log(sName2.name);
// console.log(sName2._id);
// console.log(sName2._id.toHexString());  /// ⭐ get id from record 


/// ⭐  update one element from DB table using condition  ⭐ If multiple element match condition only first element can update.
// await student.updateOne({ name: 'sayan' }, { $set: { age: 60 } });
// console.log(await student.findOne({ name: 'sayan' }));


/// ⭐  delete one element from DB table using condition  ⭐ If multiple element match condition only first element can delete.
// await student.deleteOne({ age: 30 });

// student.insertOne({name: 'sayan', age: 30});




