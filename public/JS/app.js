const contactBtn = document.querySelector('.contact-form');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

const links = document.querySelectorAll('.link');

const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-containter');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})


links.forEach( link => {
    link.addEventListener('click',() =>{
        links.forEach(ele => ele.classList.remove('active'));
    link.classList.add('active');
    })
})

contactBtn.addEventListener('click', () =>{
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length ){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                msg: msg.value,
            })
        })
        .then(res =>res.json())
        .then(data => {
            alert(data);
        })
    }
})