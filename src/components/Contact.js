import React from 'react'
import { Link } from 'react-router-dom';
import './Contact.css';

import Photo from './img/1691508214897.png';

export default function Contact() {
  return (
    <>
    <div className="container-contact">

    
        <div className="container-Con">
        <section className="about">
            <div className="about-image">
                <img src={Photo} alt=""/>
            </div>
            <div className="about-content">
                <h2 className='h2c'>About Me</h2>
                <p>
                    Hello World! <br/> <b className="rahul">I'm Rahul,</b> a Frontend Developer. <br/>This Website is developed by me using&nbsp;
                    <b>React.</b><br/>
                    <p className="colr">For Any Information/Hiring me:</p>
                </p>
                <p className="gap-p">Contact:&nbsp;<Link className="a-class" to="https://twitter.com/codewithrahulk" target="_blank">Twitter</Link><Link
                        className="pad a-class" to="https://www.linkedin.com/in/rahulkandu/" target="_blank">LinkedIn</Link>
                </p>
                <p className="gap-p-2">Email: <Link className="a-class" to="mailto:rahulmpic.gkp@gmail.com" target="_blank">rahulmpic.gkp@gmail.com</Link></p>
            </div>
        </section>
    </div>
    </div>
    </>
  )
}
