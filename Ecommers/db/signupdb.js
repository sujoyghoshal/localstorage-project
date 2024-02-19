let form = document.querySelector('form');
let userData = [];  //* Initialize userData
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    //*same value not go : 
    let checkStatus=0;
    let userData = JSON.parse(localStorage.getItem('userDetails')) ?? [];
    for(let v of userData){
       // console.log(v.email);
       if(v.email==email || v.password==password){
        checkStatus=1;
        break;
       }
    }
    //console.log(checkStatus);
    if(checkStatus==1){
        alert('Email and phone already Exists');
    }
    else{
        userData.push({
            "email":email,
            "password":password
        });
        localStorage.setItem('userDetails', JSON.stringify(userData));
        window.location.href = '../public/index.html';
        e.target.reset(); // Reset input
    }
});
