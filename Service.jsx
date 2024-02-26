import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

const Services = () => {
  
  return (
    
    <div className="services">
        <h1>Our Services</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, id.</p>
        <div className='serviceType'>
        <h3>Architecture</h3>
        <h3>LandScape</h3>
        <h3>Interiors</h3>
        <h3>Contractors</h3>
        <h3>Turnkey</h3>
        <h3>Nursery</h3>
        </div>

    <div className="rowServices">

      <div className="columnServices">
    <div className="cardServices">
      <img src="/images/7.jpg" alt="Jane"/>
      <div className="containerServices">
        <h2>Architecture</h2>
        <p className="titleServices">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="buttonServices">Contact</button></p>
        </Link>
      </div>
      </div>
      </div>

       <div className="columnServices">
    <div className="cardServices">
      <img src="/images/contractor.jpg" alt="Jane"/>
      <div className="containerServices">
        <h2>Contractors</h2>
        <p className="titleServices">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="buttonServices">Contact</button></p>
        </Link>
      </div>
      </div>
      </div>
      
      <div className="columnServices">
    <div className="cardServices">
      <img src="/images/8.jpg" alt="Jane"/>
      <div className="containerServices">
        <h2>LandScape</h2>
        <p className="titleServices">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="buttonServices">Contact</button></p>
        </Link>
      </div>
      </div>
      </div>

      <div className="columnServices">
    <div className="cardServices">
      <img src="/images/interior.jpg" alt="Jane"/>
      <div className="containerServices">
        <h2>Interiors</h2>
        <p className="titleServices">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="buttonServices">Contact</button></p>
        </Link>
      </div>
      </div>
      </div>



      <div className="columnServices">
    <div className="cardServices">
      <img src="/images/turnkey.jpg" alt="Jane"/>
      <div className="containerServices">
        <h2>Turnkey</h2>
        <p className="titleServices">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="buttonServices">Contact</button></p>
        </Link>
      </div>
      </div>
      </div>

      <div className="columnServices">
    <div className="cardServices">
      <img src="/images/nursery.jpg" alt="Jane"/>
      <div className="containerServices">
        <h2>Nursery</h2>
        <p className="titleServices">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="buttonServices">Contact</button></p>
        </Link>
      </div>
      </div>
      </div>
  
  
  </div>
  </div>
 
  )
}

export default Services
