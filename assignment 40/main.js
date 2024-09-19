// assignment no 40
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
var albu_1 = make_album("atif asla", "judai");
var albu_2 = make_album("atif asla", "judai");
var albu_3 = make_album("atif asla", "judai", 30);
console.log(albu_1);
console.log(albu_2);
console.log(albu_3);
