import React from 'react'
import img from "./image/andrea-ba-lyQXl_iIjjg-unsplash.jpg"
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub} from "react-icons/fa"

const Main = () => {
  return (
    <div>
<div className='main'>
    {/* iamge */}
    
    <div className='img-container'>
    <img src={img} alt=""  className='img'/>
    </div>
    {/* text */}
    <div className='text-wrap'>
    <div className='author'>laura smith</div>
    <div className='job'>frontend developer</div>
    <p className='link'>laurasmith.website</p>
    </div>
    {/* button */}
    <div className='btn-wrapper'>
    <button className='btn-1'>email</button>
    <button className='btn-2'>linkedin</button>
    </div>
    {/* text */}
    <div className='text-wrap-2'>
    <p className='about'>About</p>
    <h5 className='interest'>I am a frontend developer with particular <br /> interest in making things  simple and <br /> automating daily tasks I try to keep up with <br /> security and best practice,  <br /> and always looking for new things to learn.</h5>
</div>
{/* text */}
<div className='text-wrap-2'>
    <p className='about'>Interest</p>
    <h5 className='interest'> food expert, music scholar, reader, <br /> internet fanatic, bacon buff, enterprenuer, <br /> travel geek,culture ninja, <br /> coffee fanatic </h5>
    </div>
    <div className='icon-wrapper'>
        <FaFacebookF className='icon' />
        <FaInstagram className='icon' />
        <FaLinkedinIn className="icon" />
        <FaGithub className='icon' />
    </div>

    </div>
    </div>
  
  )
}

export default Main