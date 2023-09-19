

// open-close Menu
let menu = document.getElementById("menu")
let aside_box = document.querySelector('aside')
function openMenu() {
    menu.classList.toggle("icon");
    aside_box.classList.toggle('active');
}
document.getElementById("menu").onclick, e => {
    e.preventDefault();
    openMenu()
}
// by clicking the outside closing the aside menu
window.addEventListener('click',closemenu)
function closemenu(e){
    if (!menu.contains(e.target) && !aside_box.contains(e.target)){
        menu.classList.remove("icon");
        aside_box.classList.remove('active');
    }
}



// fade animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenEl = document.querySelectorAll(".fadeanimate");
hiddenEl.forEach((el) => observer.observe(el));

AOS.init({

    offset: 130,
    duration: 1000
}
);

// transfer contact to google sheet 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyn_xbgtLmNYH_2IlAx6GGLCOsyKeFIns0VId6ccxjWs9AbZfDa8D3sfytIXNhyQCv7/exec';
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById('doneMessage')

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(Response => {
            message.innerHTML = "Message has been sent!"
            setTimeout(function () {
                message.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

