panels = document.querySelectorAll(".panel")
// console.log(panels);

panels.forEach((p) => {
    p.addEventListener('click',()=>{
        rmclass();
        p.classList.add("active")
    });
});

function rmclass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    });
}
