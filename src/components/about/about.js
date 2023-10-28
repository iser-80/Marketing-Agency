import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className='aboutWrapper'>
            <div className='aboutContent'>
                <h1>WHO ARE WE ?</h1>
                <p>Mark-Agency is your gateway to success in the competitive world of marketing. With a dedicated team of experienced and creative professionals, our mission is to help your business thrive and prosper. We offer a comprehensive range of services, including marketing strategy development, digital marketing, social media management, content creation, SEO and SEM, graphic design, and robust analytics and reporting. Our success stories speak volumes about our commitment to excellence. We don't just offer cookie-cutter solutions; we tailor our strategies to suit your unique business needs.</p>
            </div>
        </div>
        <div className='aboutInfos'>
            <h1>Meet Our Team</h1>
            <div className='aboutTeam'>
                <div className='profile'>
                    <div className='profileImage sarah'>
                        <div className='profileContent'>
                            <div className='profileInfos'>
                                <h2>Sarah Anderson</h2>
                                <p>As our Chief Marketing Officer, Sarah is the strategic mind behind our marketing campaigns. With over a decade of experience in the field, she sets the direction for our marketing efforts.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile david'>
                    <div className='profileImage'>
                        <div className='profileContent'>
                            <div className='profileInfos'>
                                <h2>David Rodriguez</h2>
                                <p>Meet David Rodriguez, our Creative Director, and the artistic genius of the team. David is responsible for infusing every project with a touch of creativity that leaves a lasting impression</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile emily'>
                    <div className='profileImage'>
                        <div className='profileContent'>
                            <div className='profileInfos'>
                                <h2>Emily Turner</h2>
                                <p> Emily Turner, our Data Analyst and Strategy Specialist, is the driving force behind our data-driven decision-making. She dives deep into analytics, extracts valuable insights, and formulates strategies.</p>
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