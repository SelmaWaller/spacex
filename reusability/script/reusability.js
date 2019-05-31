// Change background on scroll
window.onscroll = function () {
    if (window.pageYOffset < 300) {
        document.getElementById('topnav').style.background = 'transparent';
        document.getElementById('menu-text').style.textShadow = '2px 2px 10px #9e9091df';
        document.getElementById('bar1').style.boxShadow = '2px 2px 10px #9e9091df';
        document.getElementById('bar2').style.boxShadow = '2px 2px 10px #9e9091df';
        document.getElementById('bar3').style.boxShadow = '2px 2px 10px #9e9091df';
    } else {
        document.getElementById('topnav').style.background = '#0f0f0f';
        document.getElementById('menu-text').style.textShadow = 'none';
        document.getElementById('bar1').style.boxShadow = 'none';
        document.getElementById('bar2').style.boxShadow = 'none';
        document.getElementById('bar3').style.boxShadow = 'none';
    }
}
