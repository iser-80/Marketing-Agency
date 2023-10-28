import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='projectContainer'>
        <div className='projectWrapper'>
            <div className='projectTitleContainer'>
                <div className='projectShape'></div>
                <h1>Our Projects</h1>
            </div>
            <div className='projects'>
                <div className='project project1'>
                    <div className='projectContent'>
                        <h2>Brand Revamp for Tech Solutions</h2>
                        <p>Sarah Anderson led the strategy, conducting in-depth market research and identifying key trends. David Rodriguez designed a modern and eye-catching logo and branding materials, while Emily Turner used data analysis to optimize the online presence. The result was a fresh, tech-oriented brand that significantly increased </p>
                    </div>
                </div>
                <div className='project project2'>
                    <div className='projectContent'>
                        <h2>ABC Cafe</h2>
                        <p>David Rodriguez took the lead on this project, creating visually appealing content that highlighted the cafe's unique atmosphere and menu offerings. Emily Turner developed a data-driven content strategy, optimizing posting times and targeting specific demographics. The result was a 30% increase in foot traffic and a loyal online following.</p>
                    </div>
                </div>
                <div className='project project3'>
                    <div className='projectContent'>
                        <h2>JKL E-commerce</h2>
                        <p> Emily Turner's expertise in data analysis was put to work. She conducted an extensive SEO audit and identified areas for improvement. Sarah Anderson crafted a tailored SEO strategy, and David Rodriguez created engaging and keyword-optimized product descriptions. This collaborative effort resulted in a 40% increase in organic traffic and a significant boost in sales.</p>
                    </div>
                </div>
                <div className='project project4'>
                    <div className='projectContent'>
                        <h2>MNO Nonprofit</h2>
                        <p>Sarah Anderson led the project, developing a comprehensive email marketing strategy. David Rodriguez designed visually appealing email templates, and Emily Turner used data analysis to segment the donor list and personalize content. The result was a 20% increase in donations and a stronger connection with the nonprofit's supporters.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects