const loginform=document.querySelector('#login-form')
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email=e.target.email.value;
    let password=e.target.password.value;
    const userData=JSON.parse(localStorage.getItem('userDetails'))||[];
    userData.forEach((item)=>{     
        //console.log(item);
        //*user -login
        if(item.email===email && item.password===password){
        window.location.href = '../public/userdashboard.html';
        }
        else if('admin@gmail.com'===email && '1234'===password){
         //alert('admin login');
         window.location.href='../public/admindashboard.html'
        }
        else{
            alert('/Invalid email && password');
        }
        e.target.reset();
    })
})