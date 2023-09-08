const testemail = value =>{
    const emailpatern=  /^[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]{2,3}$/g
    return emailpatern.test(value)
}
const testpassword=value =>{
    if (value.trim().length < 8 || value.trim().length>40){
        return false
    }else{
        return true
    }
}
const testprice = value =>{
    const pricepattern= /[1-9][0-9]*/g
    return pricepattern.test(value)
}
export {testemail,testpassword,testprice}