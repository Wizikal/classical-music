import React from 'react'
import Playlist from './data/Playlist'
import Song from './components/Song'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: Playlist,
            index: 0
        }
        this.audio = new Audio(this.state.songs[this.state.index])
        this.startSong = this.startSong.bind(this)
        this.skipSong = this.skipSong.bind(this)
    }
    
    startSong() {
        this.audio.play()
        console.log(`Started! Now playing ${this.state.songs[this.state.index]}`)
    }

    skipSong() {
        let i = this.state.index
        if (i >= 3) { 
            this.setState({
                index: 0 
            }, () => {
                this.audio.pause()
                this.audio.src = this.state.songs[this.state.index]
                this.audio.play()
            })
        } else {
            this.setState({
                index: i + 1
            }, () => {
                this.audio.pause()
                this.audio.src = this.state.songs[this.state.index]
                this.audio.play()
            })
        }
        console.log(`Skipped! Now playing ${this.state.songs[this.state.index + 1]}`)
    }

    render() {
        var song = this.state.songs[this.state.index]
        return (
            <div>
                <Song title={song} play={this.startSong} skip={this.skipSong}/>
            </div>
        )
    }
}