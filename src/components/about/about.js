import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className='aboutWrapper'>
            <div className='aboutContent'>
                <h1>WHO ARE WE ?</h1>
                <p>We Are Happy To Tell You About Us</p>
            </div>
        </div>
        <div className='aboutInfos'>
            <h1>Meet Our Team</h1>
            <p>some infos</p>
            <div className='aboutTeam'>
                <div className='profile'>
                    <div className='profileImage'>
                        <div className='profileContent'>
                            <div className='profileInfos'>
                                <h2>profile</h2>
                                <p>If you encounter any further issues or need assistance with other aspects of your project, please feel free to ask.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile'>
                    <div className='profileImage'>
                        <div className='profileContent'>
                            <div className='profileInfos'>
                                <h2>profile</h2>
                                <p>If you encounter any further issues or need assistance with other aspects of your project, please feel free to ask.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile'>
                    <div className='profileImage'>
                        <div className='profileContent'>
                            <div className='profileInfos'>
                                <h2>profile</h2>
                                <p>If you encounter any further issues or need assistance with other aspects of your project, please feel free to ask.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About