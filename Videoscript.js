let videoSource = new Array();
videoSource[0] = '/PBimages/animation/video1.mp4';
videoSource[1] = '/PBimages/animation/video2.mp4';
videoSource[2] = '/PBimages/animation/MH test.mp4';
videoSource[3] = '/PBimages/animation/spin succ.mp4';
let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videoPlayer");
 
function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
}

function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(0);
        
    } else {
        videoPlay(i);
    }
}

document.getElementById('videoPlayer').addEventListener('ended', myHandler, false);
 
videoPlay(0); // load the first video
ensureVideoPlays(); // play the video automatically
 


 
function ensureVideoPlays() {
    const video = document.getElementById('videoPlayer');
 
    if(!video) return;
    
    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}