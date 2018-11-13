// array of amazon s3 song urls
const playlist = [
    "https://s3.amazonaws.com/classical-music-wizikal/eine-kleine-nachtmusik-mozart.mp3",
    "https://s3.amazonaws.com/classical-music-wizikal/fur-elise-beethoven.mp3",
    "https://s3.amazonaws.com/classical-music-wizikal/moonlight-beethoven.mp3",
    "https://s3.amazonaws.com/classical-music-wizikal/toccata-and-fugue-in-d-minor-bach.mp3"
]

// global variables
var i = 0
var song = playlist[i]
var audio = new Audio(song)

audio.addEventListener('ended', () => {
    if (i >= 2) i = 0
    else i++
    song = playlist[i]
    audio = new Audio(song)
    audio.play()
    console.log(`Song ended! Now playing ${song}!`)
})

// start playing song
audio.begin = () => {
    audio.play()
    console.log(`Now playing ${song}!`)
}

// skip current song
audio.skip = () => {
    if (i >= 2) i = 0
    else i++
    song = playlist[i]
    audio = new Audio(song)
    audio.play()
    console.log(`Skipped! Now playing ${song}!`)
}

