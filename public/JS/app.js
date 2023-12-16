const links = document.querySelectorAll('.link');
const filters = document.querySelectorAll('.filter-btn');
const contactBtn = document.querySelector('.contact-form');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

links.forEach(link => {
    link.addEventListener('click',() =>{
        links.forEach(ele => ele.classList.remove('active'));
    links.classList.add('active');
    })
})

filters.forEach(filterBtn => {
    filterBtn.addEventListener("click", () =>{
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card =>{
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            }else{
                card.classList.add('hide');
            }
        })

        filters.forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
    })
})

contactBtn.addEventListener('click', () =>{
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
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