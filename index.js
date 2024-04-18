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

// SEARCH ANIMATION
function searchItems() {
    filterSearch = document.querySelectorAll('.filter-input input')
    historyItem = document.querySelectorAll('.history-item');
    historyItem.forEach(item => {
        const typeItems = item.querySelectorAll('.type-item');
        const statusItems = item.querySelectorAll('.status-item');
        const dateItems = item.querySelectorAll('.date-item');
        const amountItems = item.querySelectorAll('.amount-item');
        const trancItems = item.querySelectorAll('.tranc-type-item');
        const mItems = item.querySelectorAll('.M-item');
        const phoneItems = item.querySelectorAll('.phone-item');
        const accItems = item.querySelectorAll('.acc-item');
        
        filterSearch.forEach( inputs => {
            // ================= TRANSACTION TYPE ============= //
            if (inputs.classList.contains('type')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    typeItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= STATUS TYPE ============= //
             if (inputs.classList.contains('status')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    statusItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= DATE TYPE ============= //
             if (inputs.classList.contains('date')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    dateItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= AMOUNT TYPE ============= //
             if (inputs.classList.contains('amount')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    amountItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        itemText = itemText.replace(',','')
                        console.log(itemText)
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= DESC TYPE ============= //
             if (inputs.classList.contains('desc')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    trancItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= MATURITY  TYPE ============= //
             if (inputs.classList.contains('m-date')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    mItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= PHONE NUMBER TYPE ============= //
             if (inputs.classList.contains('p-num')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    phoneItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
             // ================= ACCOUNT TYPE ============= //
             if (inputs.classList.contains('a-num')) {
                inputs.addEventListener("keyup", (e)=>{
                    let target = e.target.value.toLowerCase()
                    console.log(target)
                    accItems.forEach(typeItem => {
                        let itemText = typeItem.textContent.toLowerCase();
                        if (!itemText.includes(target)) {
                            item.classList.add("hidden")
                        }else{
                            item.classList.remove("hidden")
                        }
                    })
                })
            }
        });
    });
   
}
searchItems();