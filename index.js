// NAVBAR
function navBar() {
    open = document.querySelector('.open');
    close = document.querySelector('.mark');
    aside = document.querySelector('.aside');

    open.addEventListener("click",() =>{
        aside.classList.add("active");
    })
    close.addEventListener("click",() =>{
        aside.classList.remove("active");
    })
}
navBar();


// DROPDOWN ANIMATION
function dropDown() {
    filterBtn = document.querySelector('.filter-btn');
    arrow = document.querySelector('.arrow');
    filterInput = document.querySelector('.filter-input');

    filterBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        filterInput.classList.toggle("active");
        arrow.classList.toggle('active');
    })
}
dropDown();