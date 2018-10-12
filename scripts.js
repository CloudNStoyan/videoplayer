let video = document.querySelector('#video');
let playButton = document.querySelector('#play');
let pauseButton = document.querySelector('#pause');

playButton.addEventListener('click',function(e) {
	e.preventDefault();
	video.play();
	playButton.setAttribute('hidden','');
	pauseButton.removeAttribute('hidden');
});
pauseButton.addEventListener('click',function(e) {
	e.preventDefault();
	video.pause();
	pauseButton.setAttribute('hidden','');
	playButton.removeAttribute('hidden');
});
video.addEventListener('ended',function() {
	pauseButton.setAttribute('hidden','');
	playButton.removeAttribute('hidden');
});

let barProgress = document.querySelector('#bar');
barProgress.addEventListener('change',function(e) {
	let inputValue = barProgress.value;
	let duration = video.duration;
	let skipTo = (duration / 100) * inputValue;
	video.currentTime = skipTo;
});

video.addEventListener('timeupdate',function() {
	let rangeValue = Math.round(video.currentTime / (video.duration / 100));
	barProgress.value = rangeValue;
	console.log(rangeValue);
});

let volumeProgress = document.querySelector('#volumeProgress');
volumeProgress.addEventListener('change',function() {
	video.volume = volumeProgress.value / 10;
});

let volume = document.querySelector('#volume');
volume.addEventListener('click',function() {
	if (this.getAttribute('muted') != null) {
		this.removeAttribute('muted');
		video.volume = volumeProgress.value / 10
		this.setAttribute('class','fa fa-volume-up');
		volumeProgress.removeAttribute('hidden');
	} else {
		this.setAttribute('muted','');
		this.setAttribute('class','fa fa-volume-off');
		video.volume = 0;
		volumeProgress.setAttribute('hidden','');
	}
	
	
});