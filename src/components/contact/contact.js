import React from 'react'
import {FaPhoneAlt, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegramPlane} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa6';
import './contact.css'

const Contact = () => {
  return (
    <div className='contactContainer'>
        <div className='contactWrapper'>
            <h1>Get In Touch</h1>
            <div className='wrapper'>
                <div className='contactForm'>
                    <h2>Send a Message</h2>
                    <form>
                        <div className='fullName'>
                            <input className='halfInput' type='text' placeholder='First Name'/>
                            <input className='halfInput' type='text' placeholder='Last Name'/>
                        </div>
                        <div className='phoneEmail'>
                            <input className='halfInput' type='number' placeholder='Phone'/>
                            <input className='halfInput' type='email' placeholder='Email'/>
                        </div>
                        <input className='fullInput' type='text' placeholder='Object'/>
                        <textarea className='fullInput' rows={5} placeholder='Message'></textarea>
                        <button type='submit'>Submit <FaTelegramPlane/></button>
                    </form>
                </div>
                <div className='contactInfos'>
                    <h2>Contact Infos</h2>
                    <div className='contactus'>
                        <div className='viaPhone'>
                            <FaPhoneAlt/> +212 8982100293
                        </div>
                        <div className='viaEmail'>
                            <FaEnvelope/> marketeragency@gmail.com
                        </div>
                        <div className='social'>
                            <div className='media'><FaFacebookF/></div>
                            <div className='media'><FaInstagram/></div>
                            <div className='media'><FaTwitter/></div>
                            <div className='media'><FaYoutube/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact