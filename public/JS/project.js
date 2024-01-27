const filters = document.querySelectorAll('.filter-btn');
const projectContainer = document.querySelector('.project-container');


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
