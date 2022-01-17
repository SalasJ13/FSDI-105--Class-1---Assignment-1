console.log("Register");
//constructor
class User{
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;        
        this.first=first;
        this.last=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
//Clase 2
function isValid(user){
    let valid=true;
    
    $('input').removeClass("error");

    if(user.email.length==0){
        valid=false;
        $("#txtEmail").addClass("error");
    }
    if (user.password.length==0){
        valid=false;
        $("#txtPassword").addClass("error");
    }
    if (user.first.length==0){
        valid=false;
        $("#txtFirst").addClass("error");
    }
    if (user.last.length==0){
        valid=false;
        $("#txtLast").addClass("error");
    }
    if (user.age.length==0){
        valid=false;
        $("#txtAge").addClass("error");
    }
    if (user.address.length==0){
        valid=false;
        $("#txtAddress").addClass("error");
    }
    if (user.phone.length==0){
        valid=false;
        $("#txtPhone").addClass("error");
    }
    if (user.payment.length==0){
        valid=false;
        $("#selPayment").addClass("error");
    }
    if (user.color.length==0){
        valid=false;
        $("#txtColor").addClass("error");
    }
    return valid;
}
//////////////////
//funcion de registro del usuario
function registerUser(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);

    if(isValid(user)==true){
        console.log(user);
    }

}
function init(){
    console.log("Init function");
}
window.onload=init;
registerUser();
//Clase 2 Esta mal el codigo debe mostrar la info en la consola
//Hacer la funcion de limpiar el formulario de Registro

