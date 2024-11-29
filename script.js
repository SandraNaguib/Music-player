// Get elements from the DOM
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const volumeControl = document.getElementById('volume');
const progressControl = document.getElementById('progress');
const trackTitle = document.getElementById('track-title');
const currentTrack = document.getElementById('current-track');
const playlistElement = document.getElementById('playlist');

// Track information
const tracks = [
    { title: "Track 1", src:"musics/01.Aal Kornish.mp3" },
    { title: "Track 2", src: "musics/01.El Lela Leltak.mp3" },
    { title: "Track 3", src: "musics/01.Hamada.mp3" },
    { title: "Track 4", src: "musics/06. We Akheeran.mp3" },
    { title: "Track 5", src: "musics/10 -  Sakaker Elsoker.mp3" },
    { title: "Track 6", src: "musics/Dndnha.Com.Abu.3.Daqat.feat.Yousra.mp3" },
    { title: "Track 7", src: "musics/Dndnha.Com.Adham.Nabulsi.Han.Alan.mp3" },
    { title: "Track 8", src: "musics/Dndnha.Com.Akram.Hosny.Ana.El3ris.mp3" },
    { title: "Track 9", src: "musics/Dndnha.Com.Akram.Hosny.Maktoob.Alaya.Titre.mp3" },
    { title: "Track 10", src: "musics/Dndnha.Com.Akram.Hosny.Sato.Ana.mp3" },
];

// Current track index
let currentTrackIndex = 0;

// Function to load a track
function loadTrack(trackIndex) {
    audio.src = tracks[trackIndex].src;
    trackTitle.textContent = tracks[trackIndex].title;
    currentTrack.textContent = tracks[trackIndex].title;
    audio.load();
}

// Play track
playBtn.addEventListener('click', () => {
    audio.play();
});

// Pause track
pauseBtn.addEventListener('click', () => {
    audio.pause();
});

// Stop track
stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Next track
nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Previous track
prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Progress bar
audio.addEventListener('timeupdate', () => {
    progressControl.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek functionality
progressControl.addEventListener('input', () => {
    audio.currentTime = (progressControl.value / 100) * audio.duration;
});

// Load the first track on startup
loadTrack(currentTrackIndex);

// Populate the playlist
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.title;
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
    });
    playlistElement.appendChild(li);
});