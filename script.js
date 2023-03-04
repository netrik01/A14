var loading = gsap.timeline();
loading
.to("#bubble",{
    width: "20px",
    height: "20px",
    backgroundColor : "#dadada",
    ease: Power1.easeInOut,
    duration: .5
})
.to("#bubble1",{
    width: "80px",
    height: "80px",
    backgroundColor : "#dadada6d",
    ease: Power1.easeInOut,
    duration: .5
})
.to(".loader",{
    top: "-100%",
    backgroundColor : "#dadada6d",
    duration: 1,
    opacity: 0,
})



var nav=gsap.timeline();
nav.to("#nav",{
    opacity: 1,
    duration: 2,
    delay:1.5,
    ease: "Expo.easeInOut"
})
var circle=gsap.timeline();
circle.to(".img",{
    duration: 2,
    delay:2,
    opacity: 1,
    ease: "Expo.easeInOut"
})

var middle=gsap.timeline();
middle.to(".rmtop",{
    opacity: 1,
    duration: 2,
    delay:2,
    ease: "Expo.easeInOut"
})

$('#h1').textillate({ initialDelay: 2000, in: { effect: 'fadeInUp' }, delay: 10, delayScale: 10 });

window.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#smcircle").style.top =`${dets.clientY}px`
        document.querySelector("#smcircle").style.left =`${dets.clientX}px`
        }
    window.requestAnimationFrame(abc)
});

document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mousemove", function(){
            document.querySelector("#smcircle").style.width = "60px";
            document.querySelector("#smcircle").style.height = "60px";
            document.querySelector("#smcircle").style.backgroundColor = "white";
            document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
})

document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
            document.querySelector("#smcircle").style.width = "15px";
            document.querySelector("#smcircle").style.height = "15px";
            document.querySelector("#smcircle").style.backgroundColor = "transparent";
            document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
})