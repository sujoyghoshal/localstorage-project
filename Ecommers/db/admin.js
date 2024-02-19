const from=document.querySelector('form');
const main=document.querySelector('.main')
const table=document.querySelector('#table');
from.addEventListener('submit',(e)=>{
   //e.preventDefault();
   const productname= e.target.productname.value;
   const productdes=e.target.productdes.value;
   const productpri=e.target.productpri.value;
   //console.log(productname,productdes,productpri);
   const userdata=JSON.parse(localStorage.getItem('product'))??[];
   console.log(userdata);
   userdata.push({
    "Productname":productname,
    "ProductDes":productdes,
    "ProductPrice":productpri
   });
   localStorage.setItem('product',JSON.stringify(userdata));
   display();
   //e.target.reset();
})
//* Display
function display(){
    const userdata=JSON.parse(localStorage.getItem('product'))??[];
    userdata.forEach((item,index)=>{
        //console.log(item);
        let tr2=document.createElement('tr');
        let td=document.createElement('td');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        td.innerHTML=index;
        td1.innerHTML=item.Productname;
        td2.innerHTML=item.ProductDes;
        td3.innerHTML=item.ProductPrice;
        td4.innerHTML=`<button onclick='edit(${index})'> Edit </button>`;
        td4.setAttribute('class','edit-button');
        td5.innerHTML = `<button onclick='removeData(${index})'> delete </button>`;
        td5.setAttribute('id','delete-button');
        tr2.appendChild(td);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);
        table.appendChild(tr2);
    })
    main.appendChild(table);}
    display();


//*delete :
let removeData = (index) => {
    alert('are you sure delete..');
    let userData = JSON.parse(localStorage.getItem('product')) ?? [];
    userData.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(userData));
};
//*Edit
let div=document.querySelector('#edit-container');
let edit_name=document.querySelector('#edit_name');
let edit_des=document.querySelector('#edit_des');
let edit_price=document.querySelector('#edit_price');
let edit=(index)=>{
    div.setAttribute('id','show-edit');
    //console.log(index);
    let userData = JSON.parse(localStorage.getItem('product')) ?? [];
    userData.forEach((item,i)=>{
        if(i===index){
        //console.log(item);
        edit_name.setAttribute('placeholder',item.Productname);
        edit_des.setAttribute('placeholder',item.ProductDes);
        edit_price.setAttribute('placeholder',item.ProductPrice);
        }
    })
    
}