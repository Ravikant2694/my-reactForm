import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Services = () => {
  return (
<div className='container fluid'>
 <div className='row justify-content-evenly mt-5'>
    <div className='col-md-5'>
    <img src="Images/Growth.jpg" class="img-fluid" alt=""></img>
  </div>
    <div className='col-md-5 mt-5 pt-3 pb-2'>

    <h5>Website development</h5>
    <ProgressBar variant="success" now={40} />

    <h5>App development</h5>
      <ProgressBar variant="info" now={20} />

      <h5>Software development</h5>
      <ProgressBar variant="warning" now={60} />

      <h5>SCO</h5>
      <ProgressBar variant="danger" now={80} />

      <h5>Marketing</h5>
      <ProgressBar variant="primary" now={80} />

    </div>
</div>
    

</div>
  )
}

export default Services;

