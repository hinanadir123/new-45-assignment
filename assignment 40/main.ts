// assignment no 40
function make_album(artist_name:string, album_title: string, tracks?: number){
    let album:{artist :string, title: string, track?: number} = {
        artist: artist_name,
        title: album_title,
    
    }
    if (tracks !== undefined) {
        album.track=tracks

    }
    return album;

}
let albu_1= make_album("atif asla", "judai")
let albu_2= make_album("atif asla", "judai")
let albu_3= make_album("atif asla", "judai", 30)
console.log(albu_1);
console.log(albu_2);
console.log(albu_3);
