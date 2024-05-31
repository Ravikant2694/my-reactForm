import React from 'react'
import { BsFileCodeFill } from "react-icons/bs";
import { BsFillEaselFill } from "react-icons/bs";
import { BsCalendar3RangeFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12'>
    <h3 className='display-6 text-center mt-5 mb-3'>Lorem ipsum dolor, sit amet consectetur adipiscing elit.<br></br> Aliquid assumenda lusto cupiditate.</h3>
    </div>
    </div>

  

    <div className='row justify-content-evenly text-center'>
    <div className='col-md-3'>
    <h1 className='text-danger'><BsFileCodeFill /></h1>
    <h5>Built for developers</h5>
    <p>Landkit is built to make your life easier. Variable,<br></br> build tooling. documentation, and reusable<br></br> componets.</p>
    </div>

    <div className='col-md-3'>
    <h1 className='text-primary'><BsFillEaselFill /></h1>
    <h5>Built for developers</h5>
    <p>Landkit is built to make your life easier. Variable,<br></br> build tooling. documentation, and reusable<br></br> componets.</p>
    </div>

    <div className='col-md-3'>
    <h1 className='text-success'><BsCalendar3RangeFill /></h1>
    <h5>Built for developers</h5>
    <p>Landkit is built to make your life easier. Variable,<br></br> build tooling. documentation, and reusable<br></br> componets.</p>
    </div>
   
    </div>






    </div>
)
}

export default AboutUs;