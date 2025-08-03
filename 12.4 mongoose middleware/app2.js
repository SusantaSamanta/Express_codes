/// withe out updating time using we able to implement this using timestamps: property example : 

import mongoose from "mongoose";
try {
    await mongoose.connect("mongodb://127.0.0.1/susanta");
} catch (error) {
    console.log(error);
}

const schema = mongoose.Schema(
    {
        name: String,
        age: Number,
    },
    {
        timestamps: true,
    }
)

const Table = mongoose.model("mongooseMiddleware", schema);

// await Table.insertOne({
//     name: "Raj Bar",
//     age: 45
// })

await Table.updateOne({ name: 'Raj Bar' }, { $set: { age: 56 } });
