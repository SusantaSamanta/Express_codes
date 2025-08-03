

import mongoose from "mongoose";
try {
    await mongoose.connect("mongodb://127.0.0.1/susanta");
} catch (error) {
    console.log(error);
}

const schema = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() },
})

/// ⭐ We need to define middleware before model or table created ⭐

// crate middleware before model create : 

schema.pre('updateOne', function (next) {    
    this.set({ updated: Date.now() });
    next();
});                     // ⭐ in this middleware we give two parameter : 
//                                    1st : give the method or methods name for which we want ot work the middleware  (we also able to give multiple parameter like this way ['updateOne', updateMany', 'deleteOne',] like this )
//                                    2nd : create the function you need to perform in middleware
    

const Table = mongoose.model("mongooseMiddleware", schema);





// await Table.insertOne({ name: "Susanta", age: 30,});  // create
await Table.updateOne({ name: "Susanta" }, { $set: { age: 34 } });  // update

console.log(await Table.find());






