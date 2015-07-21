function Playlist() {
  this.songs = []
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function() {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.nest = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.song.length)
    this.nowPlayingIndex = 0;
  this.play()
};

Playlist.prototype.renderIn = function() {

};
