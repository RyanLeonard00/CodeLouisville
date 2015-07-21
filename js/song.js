function Song(title, artist, album, duration)
  this.title = title;
  this.artist = artist;
  this.album = album;
  this.duration = duration;
  this.isPlaying = false

Song.prototype.play = function() {
  this.isPlaying = true;
}

Song.prototype.stop = function() {
  this.isPlaying = false;
}

Song.prototype.toHTML = function() {

}
