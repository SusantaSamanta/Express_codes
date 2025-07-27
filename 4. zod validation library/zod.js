// zod is an typeScript-first schema declaration and validation library that allows 
// to define and validate the structure of your data easily


import {z} from 'zod';   /// destructuring {z} from zod library 


let ageSchema = z.number().max(50).min(18).int();
let age = 19;
let ageCheck = ageSchema.parse(age);
console.log(ageCheck);

// age = 2;    // it give the hole error by zodError
ageCheck = ageSchema.parse(age);
// console.log(ageCheck);

age = 300;
try{
    ageCheck = ageSchema.parse(age);
    console.log(ageCheck)
}catch(error){
    console.log(error.errors[0].message,"    -> (is the error message)\n")
    // console.log(error.errors[0])
}

///////// if don't use try catch then use safeParse
age = "19.9";
ageCheck = ageSchema.safeParse(age);
// console.log(ageCheck)                   //      o/p: { success: false, error: [Getter] }
// console.log(ageCheck.error);
console.log(age,'  ',ageCheck.error.issues[0].message);



console.log('\n')

/////////  in zod string to number //////////
let a = '89';
ageSchema = z.coerce.number().int().min(1).max(65535);
ageCheck = ageSchema.parse(a)
console.log(ageCheck);


console.log('\n')


//////////  in zod string to number //////////
let b = '89';
ageSchema = z.coerce.number().int().min(1).max(65535);
ageCheck = ageSchema.parse(b)
console.log(ageCheck);


console.log('\n')

//////////  in zod default number //////////
let d;
ageSchema = z.string().default('Susanta');   // before default() string or number check is impotent
ageCheck = ageSchema.parse(d)
console.log(ageCheck);


console.log('\n')





