var main = document.querySelector('.main');
var img = document.querySelector('.page>img');

main.addEventListener('mousemove', function(details) {
    img.style.top = 1-details.y*0.05 + "px"
    img.style.left = 1-details.x*0.05 + "px"
})