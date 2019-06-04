/*----------Change color on hamburger menu on scroll----------*/
window.onscroll = function () {
    if (window.pageYOffset < 300) {
        document.getElementById('topnav').style.background = 'transparent';
        document.getElementById('menu-text').style.textShadow = '2px 2px 10px #9e9091df';
        document.getElementById('bar1').style.boxShadow = '2px 2px 10px #9e9091df';
        document.getElementById('bar2').style.boxShadow = '2px 2px 10px #9e9091df';
        document.getElementById('bar3').style.boxShadow = '2px 2px 10px #9e9091df';
        document.getElementById('toTopBtn').style.opacity = '0';
        document.getElementById('toTopBtn').style.transition = '200ms';

    } else {
        document.getElementById('topnav').style.background = '#0f0f0f';
        document.getElementById('menu-text').style.textShadow = 'none';
        document.getElementById('bar1').style.boxShadow = 'none';
        document.getElementById('bar2').style.boxShadow = 'none';
        document.getElementById('bar3').style.boxShadow = 'none';
        document.getElementById('toTopBtn').style.opacity = '1';
    }
}

/*----------To top with sticky arrow----------*/
document.getElementById("toTopBtn").addEventListener("click", toTop);
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}