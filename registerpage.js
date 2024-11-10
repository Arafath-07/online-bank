function register(){
const user= {
    uname:usrNam.value,
    uacc:usrAcc.value,
    upass:usrPass.value
}
if(user.uname=="" || user.uacc=="" || user.upass==""){
    alert("please fill the following fields")
}else{
     let registerName = usrNam.value;
 localStorage.setItem('USERNAME',registerName)
    alert("Registration successfull")
    window.location ='./logpage.html'
}


}