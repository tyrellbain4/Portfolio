import React from 'react'
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <i class="fa fa-remove"></i>
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#projects' >
                        <i class="fa fa-edit option-icon"></i>Projects
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#skills'>
                        <i class="fa fa-file-code-o option-icon"></i>Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#work'>
                        <i class="fa fa-laptop option-icon"></i>Work
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#contact'>
                        <i class="fa fa-inbox option-icon"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile