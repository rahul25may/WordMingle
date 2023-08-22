import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <p className="footer-p">Copyright &copy; WordMingle - 2023</p>
        <div className="foot">
            <p className="devv">Developed by <b className="devv-b"> Rahul K.</b></p>
            <p className='mar-0'>Contact Us: <Link className="pad a-class" to="">Email</Link><Link className="a-class" to="https://twitter.com/codewithrahulk">Twitter</Link><Link className="pad a-class"  to="https://github.com/rahul25may">LinkedIn</Link></p>
        </div>
    </footer>
    </>
  )
}
