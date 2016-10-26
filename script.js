var soundId = "FreedomBreak";

function loadSound() {
	
	createjs.Sound.registerSound("freedom_clip.mp3", soundId);
	console.log("Loaded sound.");
}


function playSound() {
	createjs.Sound.stop();
	createjs.Sound.play(soundId);
	console.log("Play sound click.");
}

window.onload = function() {
	loadSound();
};

