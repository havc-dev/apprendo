import React from 'react'
import Editor from './anki/Editor';
import Viewer from './anki/Viewer';
import HowItWorks from './anki/HowItWorks';
function AnkyHome() {
    return (
        <div>
            <h3>Anky Home</h3>
            <HowItWorks />
            <Viewer />
            <Editor />
        </div>
    )
}

export default AnkyHome
