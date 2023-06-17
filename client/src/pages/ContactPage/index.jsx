import React from 'react'
import Nav from '../../components/Nav'
import "./style.scss"

const Contact = () => {
  return (
    <div className='map'>
        <Nav/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7015.7752508491385!2d50.58689185641697!3d40.325795243073266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403039a86d5d7acd%3A0x5321730e1b80d24e!2sALOOOOOOO%20Audio!5e1!3m2!1sen!2saz!4v1686989423457!5m2!1sen!2saz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact