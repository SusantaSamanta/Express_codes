import { MongoClient } from "mongodb";
const dbClient = new MongoClient(process.env.MONGO_URL);
dbClient.connect();
console.log('DataBase connected......');
const myDB = dbClient.db(process.env.DB_NAME);
const loginData = myDB.collection('loginData');



export default loginData;






