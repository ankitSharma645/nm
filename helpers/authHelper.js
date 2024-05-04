
// here we are using bcrypt
// here we use two functions :
//first for hashing  and 2nd wale compare krke decrypt krne ke liye


import bcrypt from "bcrypt";

export const hashPassword = async(password)=>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword
    }
    catch(error){
        console.log(error);
    }
};

export const comparePassword = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
};
