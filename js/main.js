//Active Navbar

// let nav=document.querySelector(".navigation-wrap");
// window.onscroll=function(){
//     if(document.documentElement.scrollTop>20){
//         nav.classList.add("scroll-on");
//     }
//     else{
//         nav.classList.remove("scroll-on");
//     }
// }


/*------Scroll section active link----- */

let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav ul li a');
let nav=document.querySelector(".navigation-wrap");
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');

            })
        }
    });

    // /*------Sticky navbar----- */
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
    let navLink=document.querySelector('.nav-link');
    navLink.classList.remove('active');

};




//Nav Hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    });
})


//Counter Design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increament=end>start?1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increament;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,20,2500);
    counter("count2",0,30,3400);
    counter("count3",0,600,2200);

});