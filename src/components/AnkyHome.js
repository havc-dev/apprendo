import React from 'react'
import Editor from './anki/Editor';
import Viewer from './anki/Viewer';
function AnkyHome() {
    return (
        <div>
            <h3>Anky Home</h3>
            <Viewer />
            <Editor />
        </div>
    )
}

export default AnkyHome
