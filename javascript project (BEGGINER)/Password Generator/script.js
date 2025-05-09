const passwordbox=document.getElementById("Password")


const length=12

const uppercase="ABCDEFGHIJKLMNOPQRSTWXYZ"
const lowercase="abcdefghijklmnopqrtswxyz"
const number="123456789"
const symbol="!@#$%^&*(){}[]+=/?"

const allcharacters=uppercase + lowercase +number + symbol


function createpassword(){
     let password=""

     password +=uppercase[Math.floor(Math.random()*uppercase.length)]
     password +=lowercase[Math.floor(Math.random()*lowercase.length)]
     password+=number[Math.floor(Math.random()*number.length)]
     password +=symbol[Math.floor(Math.random()*Symbol.length)]

     while(length >password.length){
       password +=allcharacters[Math.floor(Math.random()*allcharacters.length)]
       console.log(password)
}
     passwordbox.value=password
   }
createpassword()




function Copybtn(){
    passwordbox.select()
document.execCommand("copy")
}