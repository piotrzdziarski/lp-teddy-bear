const video = document.getElementById('video');
const videoPoster = document.getElementById('video-poster');

videoPoster.onclick = () => {
    video.play();
    videoPoster.style.display = 'none';
};
