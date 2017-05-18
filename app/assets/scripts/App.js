
var menuBar = document.querySelector('.fixed-footer');
var mainPanel = document.querySelector('.panel-wrapper');
var aboutPanel = document.querySelector('.about-panel');
var videoPanel = document.querySelector('.video-panel');
var podcastsPanel = document.querySelector('.podcasts-panel');
var webcamPanel = document.querySelector('.webcam-panel');
var allPanels = document.querySelectorAll('.panel');


menuBar.addEventListener('click', function(event) { menuHandler(event)} );


function hideAllPanels() {
        allPanels.forEach(div => div.classList.remove('show-panel'));
}


function menuHandler(event) {
    if (event.target.nodeName === 'LI') {
        hideAllPanels();
    }
    if (event.target.id === 'about') {
        aboutPanel.classList.toggle('show-panel');
    }
    if (event.target.id === 'video') {
        videoPanel.classList.toggle('show-panel');
    }
    if (event.target.id === 'podcasts') {
        podcastsPanel.classList.toggle('show-panel');
    }
    if (event.target.id === 'webcam') {
        webcamPanel.classList.toggle('show-panel');
    }
}
