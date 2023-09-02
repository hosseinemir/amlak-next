import { compare, hash } from "bcryptjs";

async function hashpassword(password) {
  const hashedpassword = await hash(password,12);
  return hashedpassword;
}
async function verifypassword(password,hashedpassword){
    const isValid = await compare(password,hashedpassword)
    return isValid 
}
export {hashpassword,verifypassword}