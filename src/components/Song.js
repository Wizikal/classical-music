import React from 'react'

const Song = ({author='', song='', button=true, play=f=>f, pause=f=>f, skip=f=>f}) => {
    return (
        <div className='song'>
            <div className='title'>{song}</div>
            <div className='author'>{author}</div>
            <div className='buttons'>
                {(button) ? (<button onClick={play} className='play'/>
                ) : (
                    <button onClick={pause} className='pause'/>
                )}                         
                <button onClick={skip} className='skip'/>
            </div>
            <div className='credit'>
                Icons made by <a href="https://www.freepik.com/" title="Freepik">
                Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com</a> is licensed by <a href=
                "http://creativecommons.org/licenses/by/3.0/" 
                title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </div>
        </div>
    )
} 
    
export default Song



