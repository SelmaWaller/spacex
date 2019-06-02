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

// Upcoming launches

//fetching API
let launches_api = 'https://api.spacexdata.com/v3/launches/upcoming';
async function getLaunches() {
    let response = await fetch(launches_api);
    let data = await response.json();

    //creating cards for each upcoming launch
    let container = document.getElementById('launches');
    let eachCard = document.createElement('div');
    let eachCard2 = document.createElement('div');
    let eachCard3 = document.createElement('div');

    //class name for cards
    container.setAttribute('class', 'cards');
    eachCard.setAttribute('class', 'launch-cards');
    eachCard2.setAttribute('class', 'launch-cards');
    eachCard3.setAttribute('class', 'launch-cards');

    //card styles
    eachCard.style.margin = '20px';
    eachCard2.style.margin = '20px';
    eachCard3.style.margin = '20px';
    eachCard.style.padding = '20px';
    eachCard2.style.padding = '20px';
    eachCard3.style.padding = '20px';
    eachCard.style.backgroundImage = 'linear-gradient(20deg, #131313 40%, #191919)';
    eachCard2.style.backgroundImage = 'linear-gradient(0deg, #131313 40%, #191919)';
    eachCard3.style.backgroundImage = 'linear-gradient(-20deg, #131313 40%, #191919)';
    eachCard.style.borderRadius = '3px';
    eachCard2.style.borderRadius = '3px';
    eachCard3.style.borderRadius = '3px';

    //append cards to page
    container.appendChild(eachCard);
    container.appendChild(eachCard2);
    container.appendChild(eachCard3);

    //fetching each obj in data
    for (let obj in data) {
        //first upcoming launch
        //title and external video card 1
        let rocketName = document.createElement('h2');
        let video1 = document.createElement('video');
        video1.setAttribute('src', 'https://wallerweave.com/project-exam/videos/launch1-comp.mp4');
        video1.autoplay = true;
        video1.loop = true;
        video1.muted = true;
        video1.load();
        rocketName.textContent = (data.slice(0, 1)[obj].rocket.rocket_name);
        eachCard.appendChild(rocketName);
        eachCard.appendChild(video1)
        video1.style.width = '100%';

        //date/time card 1
        let launchTimeTxt = document.createElement('p');
        let launchTime = document.createElement('p');
        launchTimeTxt.textContent = ('Launch date (local):');
        launchTime.textContent = (data.slice(0, 1)[obj].launch_date_local);
        eachCard.appendChild(launchTimeTxt);
        eachCard.appendChild(launchTime);
        launchTimeTxt.style.margin = '10px 0 0 0';

        //launch site card 1
        let launchSite = document.createElement('p');
        launchSite.textContent = (data.slice(0, 1)[obj].launch_site.site_name_long);
        eachCard.appendChild(launchSite);

        // open details accordion card 1
        let readMore = document.createElement('button');
        let details = document.createElement('p');
        let emptyDetails = document.createElement('p');
        readMore.setAttribute('class', 'readMore');
        details.setAttribute('class', 'details');
        emptyDetails.setAttribute('class', 'details');
        readMore.textContent = ('Show details');
        details.textContent = (data.slice(0, 1)[obj].details);
        emptyDetails.textContent = ('No details for this mission'); //if details in data is null

        //close details accordion card 1
        let hideDetails = document.createElement('button');
        hideDetails.setAttribute('class', 'readMore');
        hideDetails.textContent = ('Hide details');
        hideDetails.style.display = 'none';
        readMore.style.display = 'block';

        //style and append accordion card 1
        details.style.display = 'none';
        emptyDetails.style.display = 'none';
        eachCard.appendChild(readMore);
        eachCard.appendChild(hideDetails);
        eachCard.appendChild(details);
        eachCard.appendChild(emptyDetails);

        //function open accordion card 1
        readMore.addEventListener('click', showDetailsButton);
        function showDetailsButton() {
            readMore.style.display = 'none';
            hideDetails.style.display = 'block';
            details.style.display = 'block';
            if (!data.slice(0, 1)[obj].details) {
                emptyDetails.style.display = 'block';
                details.style.display = 'none';
                emptyDetails3.style.display = 'none';
            }
        }

        //function close accordion card 1
        hideDetails.addEventListener('click', hideDetailsButton);
        function hideDetailsButton() {
            hideDetails.style.display = 'none';
            readMore.style.display = 'block';
            details.style.display = 'none';
        }

        // second upcoming launch
        //title and external video card 2
        let rocketName2 = document.createElement('h2');
        let video2 = document.createElement('video');
        video2.setAttribute('src', 'https://wallerweave.com/project-exam/videos/launch2-comp.mp4');
        video2.autoplay = true;
        video2.loop = true;
        video2.muted = true;
        video2.load();
        rocketName2.textContent = (data.slice(1, 2)[obj].rocket.rocket_name);
        eachCard2.appendChild(rocketName2);
        eachCard2.appendChild(video2)
        video2.style.width = '100%';

        //date/time card 2
        let launchTimeTxt2 = document.createElement('p');
        let launchTime2 = document.createElement('p');
        launchTimeTxt2.textContent = ('Launch date (local):');
        launchTime2.textContent = (data.slice(1, 2)[obj].launch_date_local);
        eachCard2.appendChild(launchTimeTxt2);
        eachCard2.appendChild(launchTime2);
        launchTimeTxt2.style.margin = '10px 0 0 0';

        //launch site card 2
        let launchSite2 = document.createElement('p');
        launchSite2.textContent = (data.slice(1, 2)[obj].launch_site.site_name_long);
        eachCard2.appendChild(launchSite2);

        // open details accordion card 2
        let readMore2 = document.createElement('button');
        let details2 = document.createElement('p');
        let emptyDetails2 = document.createElement('p');
        readMore2.setAttribute('class', 'readMore');
        details2.setAttribute('class', 'details');
        emptyDetails2.setAttribute('class', 'details');
        readMore2.textContent = ('Show details');
        details2.textContent = (data.slice(1, 2)[obj].details);
        emptyDetails2.textContent = ('No details for this mission'); //if details in data is null
        details2.style.display = 'none';
        emptyDetails2.style.display = 'none';
        eachCard2.appendChild(readMore2);
        eachCard2.appendChild(details2);
        eachCard2.appendChild(emptyDetails2);

        //close details accordion card 2
        let hideDetails2 = document.createElement('button');
        hideDetails2.setAttribute('class', 'readMore');
        hideDetails2.textContent = ('Hide details');
        hideDetails2.style.display = 'none';
        readMore2.style.display = 'block';

        //style and append accordion card 2
        details2.style.display = 'none';
        emptyDetails2.style.display = 'none';
        eachCard2.appendChild(readMore2);
        eachCard2.appendChild(hideDetails2);
        eachCard2.appendChild(details2);
        eachCard2.appendChild(emptyDetails2);

        //function open accordion card 1
        readMore2.addEventListener('click', showDetailsButton2);
        function showDetailsButton2() {
            readMore2.style.display = 'none';
            hideDetails2.style.display = 'block';
            details2.style.display = 'block';
            if (!data.slice(1, 2)[obj].details) {
                emptyDetails2.style.display = 'block';
                details2.style.display = 'none';
            }
        }

        //function close accordion card 2
        hideDetails2.addEventListener('click', hideDetailsButton2);
        function hideDetailsButton2() {
            hideDetails2.style.display = 'none';
            readMore2.style.display = 'block';
            details2.style.display = 'none';
            emptyDetails2.style.display = 'none';
        }
        // third upcoming launch
        //title and external video card 3
        let rocketName3 = document.createElement('h2');
        let video3 = document.createElement('video');
        video3.setAttribute('src', 'https://wallerweave.com/project-exam/videos/multiplanetary-comp.mp4');
        video3.autoplay = true;
        video3.loop = true;
        video3.muted = true;
        video3.load();
        rocketName3.textContent = (data.slice(2, 3)[obj].rocket.rocket_name);
        eachCard3.appendChild(rocketName3);
        eachCard3.appendChild(video3)
        video3.style.width = '100%';

        //date/time card 3
        let launchTimeTxt3 = document.createElement('p');
        let launchTime3 = document.createElement('p');
        launchTimeTxt3.textContent = ('Launch date (local):');
        launchTime3.textContent = (data.slice(2, 3)[obj].launch_date_local);
        eachCard3.appendChild(launchTimeTxt3);
        eachCard3.appendChild(launchTime3);
        launchTimeTxt3.style.margin = '10px 0 0 0';

        //launch site card 3
        let launchSite3 = document.createElement('p');
        launchSite3.textContent = (data.slice(2, 3)[obj].launch_site.site_name_long);
        eachCard3.appendChild(launchSite3);

        // open details accordion card 3
        let readMore3 = document.createElement('button');
        let details3 = document.createElement('p');
        let emptyDetails3 = document.createElement('p');
        readMore3.setAttribute('class', 'readMore');
        details3.setAttribute('class', 'details');
        emptyDetails3.setAttribute('class', 'details');
        readMore3.textContent = ('Show details');
        details3.textContent = (data.slice(2, 3)[obj].details);
        emptyDetails3.textContent = ('No details for this mission'); //if details in data is null
        details3.style.display = 'none';
        emptyDetails3.style.display = 'none';
        eachCard3.appendChild(readMore3);
        eachCard3.appendChild(details3);
        eachCard3.appendChild(emptyDetails3);

        //close details accordion card 3
        let hideDetails3 = document.createElement('button');
        hideDetails3.setAttribute('class', 'readMore');
        hideDetails3.textContent = ('Hide details');
        hideDetails3.style.display = 'none';
        readMore3.style.display = 'block';

        //style and append accordion card 3
        details3.style.display = 'none';
        emptyDetails3.style.display = 'none';
        eachCard3.appendChild(readMore3);
        eachCard3.appendChild(hideDetails3);
        eachCard3.appendChild(details3);
        eachCard3.appendChild(emptyDetails3);

        //function open accordion card 3
        readMore3.addEventListener('click', showDetailsButton3);
        function showDetailsButton3() {
            readMore3.style.display = 'none';
            hideDetails3.style.display = 'block';
            details3.style.display = 'block';
            if (!data.slice(2, 3)[obj].details) {
                emptyDetails3.style.display = 'block';
                details3.style.display = 'none';
            }
        }

        //function close accordion card 3
        hideDetails3.addEventListener('click', hideDetailsButton3);
        function hideDetailsButton3() {
            hideDetails3.style.display = 'none';
            readMore3.style.display = 'block';
            details3.style.display = 'none';
            emptyDetails3.style.display = 'none';
        }
    }
}
//run and display api
getLaunches();

// Newsletter mailchimp 
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

// Hamburger menu
let openMenu = document.getElementById('openMenu');
let hamburger = document.getElementById('pointer');
let close = document.getElementById('close');
hamburger.onclick = function () {
    openMenu.style.display = 'block';
}
window.onclick = function (event) {//click outside menu to close
    if (event.target == openMenu) {
        openMenu.style.display = 'none';
    }
}
window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) { //esc to close
        openMenu.style.display = 'none';
    }
})
close.onclick = function () {
    openMenu.style.display = 'none';
}

// Fit menu to width on mobile
let mobile = window.matchMedia('(max-width: 500px)');
mobile.addListener(fitScreen);
function fitScreen(mobile) {
    if (mobile.matches) {
        document.getElementById('fitMobile').style.width = '100%';
    } else {
        document.getElementById('fitMobile').style.width = '300px';
    }
}

fitScreen(mobile);