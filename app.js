var playlist = new Playlist(); 

var cherishtheday = new Song("Cherish the Day" , "Sade", "2:21"); 
var isreal = new Song("Isreal", "Chance", "3:21"); 

playlist.add(cherishtheday);
playlist.add(isreal); 

var playlistElement = document.getElementById('playlist'); 

playlist.renderInElement(playlistElement); 

var playButton = document.getElementById('play'); 
playButton.onclick = function() { 
    playlist.play(); 
    playlist.renderInElement(playlistElement); 
}

var nextButton = document.getElementById('next'); 
nextButton.onclick = function() { 
    playlist.next(); 
    playlist.renderInElement(playlistElement); 
}
var stopButton = document.getElementById('stop'); 
stopButton.onclick = function() { 
    playlist.stop(); 
    playlist.renderInElement(playlistElement); 
}

