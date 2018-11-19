import React from 'react'
import Playlist from './data/Playlist'
import Song from './components/Song'
import './styles/App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: Playlist,
            index: 0,
            author: "",
            song: "",
        }
        this.audio = new Audio(this.state.songs[this.state.index])
        this.startSong = this.startSong.bind(this)
        this.skipSong = this.skipSong.bind(this)
        this.setName = this.setName.bind(this)
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

    setName() {
        let name = this.state.songs[this.state.index]
        name = name.slice(49)
                   .slice(0, -4)
                   .replace(/-/g, ' ')
        let stringArr = name.split(' ')
        for (let i = 0; i < stringArr.length ; i++) {
            stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].substr(1)
        }
        let auth = stringArr.pop()
        let t = stringArr.join(' ')
        switch(auth) {
            case 'Bach':
                auth = 'John Sebastian Bach'
                break
            case 'Beethoven':
                auth = 'Ludwig van Beethoven'
                break
            case 'Mozart':
                auth = 'Wolfgang Amadeus Mozart'
                break
        }
        this.setState({
            author: auth,
            song: t
        }, () => {
            console.log(`Author: ${this.state.author}\nTitle: ${this.state.song}`)
        })
    }

    render() {
        let author = this.state.author
        let song = this.state.song
        return (
            <div>
                <Song author={author} song={song} play={this.startSong} skip={this.skipSong}/>
            </div>
        )
    }

    componentDidMount(){
        this.setName()
    }
}