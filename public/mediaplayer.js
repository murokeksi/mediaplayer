/* Create mediaplayer object */

var Mediaplayer = function(playlist) {

	var player = document.getElementById('player');

	initMediaplayer();

	/*// Create timer to show mediaplayer UI
	var timeout = 1;

	// Show the initial timeout
	document.getElementById('initInterval').innerHTML = timeout;

	var updateInterval = setInterval(function() {
		if(timeout > 1) {
			timeout -= 1;
			document.getElementById('initInterval').innerHTML = timeout;
		}
		else {
			// Stop interval
			clearInterval(updateInterval);
			// Show mediaplayer UI
			showMediaplayer();
		}
	}, 1000); */
	showMediaplayer();
	function initMediaplayer() {
		 $("#btnPlay").click(playMusic);
		 $("#btnPause").click(pauseMusic);
		 $("#btnStop").click(stopMusic);
		 $("#btnVolUp").click(volumeUp);
		 $("#btnVolDown").click(volumeDown);
	}

	function showMediaplayer() {
		var temp = [];
		var songs = '<table><tr><th>#</th><th>Song</th><th>Duration</th></tr>'
		var songcounter = 0;

		for(var song in playlist) {
			var audio = new Audio();
			audio.src = playlist[song].linkki;
			audio.songId = song;
			songs += '<tr class="selectable"><td><b>' + song + '</b></td><td onclick="myPlayer.selectSong(\'' + song+ '\')"">' + playlist[song].artisti + " - " + playlist[song].nimi + '</td><td id="song' + song + '"></td></tr>';
			audio.addEventListener('loadedmetadata', function() {
				// Say something about the EventListener scope
				var duration = this.duration;
				document.getElementById('song'+this.songId).innerHTML = duration.toHHMMSS();
				console.log("loadedmetadata:", duration.toHHMMSS());
			});

			audio.addEventListener('loadstart', function() {
				//console.log("loadstart", this.src);
			});

			audio.addEventListener('suspend', function() {
				//console.log("loadstart", this.src);
			});
			
			audio.addEventListener('progress', function() {
				//console.log("progress", this.src);
			});
/*
			audio.addEventListener('canplay', function() {
				console.log("playable");
				document.getElementById('canplay'+this.songId).innerHTML = "X";
			});
*/		
		}
		songs += '</table>';

		player.src = playlist[0];

		document.getElementById('playList').innerHTML = songs;
		document.getElementById('playerView').style.visibility = "visible";

	}

	this.selectSong = function (songId) {
		console.log("selected:", playlist[songId]);
		player.src = playlist[songId].linkki;
		player.play();
	}

	function playMusic() {
		player.play();
	}

	function pauseMusic() {
		player.pause();
	}

	function stopMusic() {
		player.pause();
		player.currentTime = 0;
	}

	function volumeUp() {

		// Volume scale 0 - 1
		if(player.volume < 1) {
			player.volume += 0.1;
			player.volume = player.volume.toFixed(1);
		}
		console.log("volume:", player.volume)
	}

	function volumeDown() {
		// Volume scale 0 - 1
		if(player.volume > 0) {
			player.volume -= 0.1;
			player.volume = player.volume.toFixed(1);
		}
		console.log("volume:", player.volume)
	}

	// Borrowed from http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-with-format-hhmmss
	Number.prototype.toHHMMSS = function () {
	    var seconds = Math.floor(this),
	        hours = Math.floor(seconds / 3600);
	    seconds -= hours*3600;
	    var minutes = Math.floor(seconds / 60);
	    seconds -= minutes*60;

	    if (hours   < 10) {hours   = "0"+hours;}
	    if (minutes < 10) {minutes = "0"+minutes;}
	    if (seconds < 10) {seconds = "0"+seconds;}
	    return hours+':'+minutes+':'+seconds;
	}

}