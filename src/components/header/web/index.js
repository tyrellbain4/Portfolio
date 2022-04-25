import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#projects' >
                    <i class="fa fa-edit option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                    <i class="fa fa-file-code-o option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                    <i class="fa fa-laptop option-icon"></i>Work
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                    <i class="fa fa-inbox option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web