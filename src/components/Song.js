import React from 'react'

const Song = ({author='', song='', play=f=>f, skip=f=>f}) => {
    return (
        <div>
            <div className='song'>{song}</div>
            <div className='author'>{author}</div>
            <div>Hi Taha</div>
            <div>I love Taha!</div>
            <button onClick={play} className='play'>Play</button>
            <button onClick={skip} className='skip'>Skip</button>
        </div>
    )
} 
    
export default Song



