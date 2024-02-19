const button = document.querySelector('#btn');
const table = document.querySelector('#table');
let count = 0;

button.addEventListener('click', () => {
    let userData = JSON.parse(localStorage.getItem('product')) || [];
    const batch = userData.slice(count, count + 6);
    if (batch.length > 0) {
        batch.forEach((item, index) => {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            td1.innerHTML = item.Productname;
            td2.innerHTML = item.ProductDes;
            td3.innerHTML = item.ProductPrice;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.setAttribute('class', 'click-table');
            table.appendChild(tr);
        });
        count = count + 6;
    } else {
        alert('No more data in localstorage');
        button.setAttribute('class','loadmore-button');
    }
});
