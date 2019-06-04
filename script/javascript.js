/*----------Hamburger menu----------*/
let openMenu = document.getElementById('openMenu');
let hamburger = document.getElementById('pointer');
let close = document.getElementById('close');
hamburger.onclick = function () {
    openMenu.style.display = 'block';
}
window.onclick = function (closeMenu) {
    if (closeMenu.target == openMenu) { //closes menu if window is clicked
        openMenu.style.display = 'none';
    }
}
window.addEventListener('keydown', function (e) { //closes menu with ESC
    if (e.keyCode == 27) {
        openMenu.style.display = 'none';
    }
})
close.onclick = function () { //closes menu if hamburger inside menu is clicked
    openMenu.style.display = "none";
}

/*----------Change color on hamburger menu on scroll----------*/
window.onscroll = function () {
    if (window.pageYOffset < 880) { //change styles of window is scrolled past this value
        document.getElementById('menu-text').style.color = "#fff";
        document.getElementById('topnav').style.background = "transparent";
        document.getElementById('topnav').style.width = "100%";
        document.getElementById("bar1").style.background = "#f5f5f5";
        document.getElementById("bar2").style.background = "#f5f5f5";
        document.getElementById("bar3").style.background = "#f5f5f5";
    } else {
        document.getElementById('menu-text').style.color = "#0f0f0f";
        document.getElementById('topnav').style.background = "#ffffff";
        document.getElementById('topnav').style.width = "100%";
        document.getElementById("bar1").style.background = "#0f0f0f";
        document.getElementById("bar2").style.background = "#0f0f0f";
        document.getElementById("bar3").style.background = "#0f0f0f";
    }
}

/*----------Instagram feed----------*/
let request = new XMLHttpRequest();
request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1520419039.390f162.e291d022972843ce826ce82f9005f6ab&count=13', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        for (let i = 9; i < data.data.length; i++) {
            //creating DOM for each data element
            let container = document.getElementById('instagram-feed');
            let cards = document.createElement('div');
            let accountImg = document.createElement('img');
            let accountName = document.createElement('h4');
            let open = document.createElement('a');
            let img = document.createElement('img');
            let likes = document.createElement('p');
            let comments = document.createElement('p');
            let imgURL = data.data[i].images.low_resolution.url;
            let openURL = (data.data[i].link);

            //styles
            accountImg.style.width = '11%';
            accountImg.style.margin = '0 10px -10px 0';
            accountImg.style.clipPath = 'circle(40%)';
            accountImg.style.display = 'inline-block';
            accountName.style.marginBottom = '20px';
            accountName.style.display = 'inline-block';
            accountName.style.fontWeight = '600';
            comments.style.cssFloat = 'right';

            //attributes and content for elements
            container.setAttribute('class', 'instagram-cards');
            cards.setAttribute('class', 'instapic');
            accountImg.setAttribute('src', data.data[i].user.profile_picture);
            accountImg.setAttribute('alt', 'profile picture');
            open.setAttribute('href', openURL);
            img.setAttribute('src', imgURL);
            img.setAttribute('alt', 'instagram image');
            accountName.textContent = (data.data[i].user.username);
            likes.textContent = ('♥ ' + data.data[i].likes.count);
            comments.textContent = ('🗨 ' + data.data[i].comments.count);

            //appends data to page in right order
            container.appendChild(cards);
            cards.appendChild(accountImg);
            cards.appendChild(accountName);
            cards.appendChild(open);
            open.appendChild(img);
            cards.appendChild(likes);
            cards.appendChild(comments);
        }
    }
};

request.send();

/*----------Newsletter mailchimp----------*/
joinNewsletter = document.getElementById("submitButton").addEventListener("click", sumbit);
function sumbit() {
    let email = document.getElementById("newsletterEmail").value;
    let regExpEmail = /^[a-zA-Z0-9-._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    let validEmail = email.match(regExpEmail);
    let error = document.getElementById('error');

    if (validEmail) {
        window.open('https://mailchi.mp/33d723a05938/spacex-newsletter', '_blank');
        error.style.display = "none";
    }

    if (validEmail != email.match(regExpEmail)) {
        return false;
    }

    else {
        error.style.display = "block";
    }
}

/*----------Fit menu to width on mobile----------*/
let mobile = window.matchMedia("(max-width: 500px)");
mobile.addListener(fitScreen);
function fitScreen(mobile) {
    if (mobile.matches) {
        document.getElementById('fitMobile').style.width = "100%";
    } else {
        document.getElementById('fitMobile').style.width = "300px";
    }
}

fitScreen(mobile);