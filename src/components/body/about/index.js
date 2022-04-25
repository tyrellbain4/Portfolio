import React from 'react'
import SocialContact from '../../common/social-contact/index'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello! My name is
                    <br /> <span className='info-name'>Tyrell Bain</span>.
                    <br /> I love programming and learning new skills.
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/Profile.jpg').default} className='picture' />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About