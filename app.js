var playlist = new Playlist(); 

var cherishtheday = new Song("Cherish the Day" , "Sade", "2:21"); 
var isreal = new Song("Isreal", "Chance", "3:21"); 

playlist.add(cherishtheday);
playlist.add(isreal); 

var playlistElement = document.getElementById('playlist'); 

playlist.renderInElement(playlistElement); 
