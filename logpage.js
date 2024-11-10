function login(){
    const use={
        accnu:accn.value,
        passnu:passn.value
    }
    if(use.accnu=="" || use.passnu=="" ){
        alert("please fill the following fields")
    }else{
        let loginPass =passn.value;
        localStorage.setItem('PASSWORD',loginPass)
        alert("Login Successfull")
        window.location ='./homepage.html'
    }
}