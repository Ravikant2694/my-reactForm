import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoCallOutline } from "react-icons/io5";


const Client = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState({ name: '', email: '', message: '' })

  const onSubmit = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isMatched = email.match(mailformat)
    if (!name) {
      alert('Name is required')
    } else if (!email) {
      alert('Email is required')
    } else if (!isMatched) {
      alert('Please enter a valid email')
    } else {
      setData({ name: name, email, message })
      alert("Form submitted successfully!")
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row justify-content-evenly'  >
        <div className='col-md-5'>
          <h1 className='mt-5 mb-5'>Contact form</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Massage {"(optional)"}</Form.Label>
              <Form.Control as="textarea" placeholder="Enter massage" onChange={(e) => setMessage(e.target.value)} value={message} />
            </Form.Group></Form>
          <button type='button' onClick={onSubmit} >Submit</button>
        </div>

        <div className='col-md-5'>
          <h1 className='mt-5 mb-5'>Address</h1>
          <h5>1180 Kimberly Way, WILLISTON PARK<br></br>
            New York - 11596<br></br><IoCallOutline />
            : 917-772-5081</h5>
        </div>


      </div>
    </div>
  )
}

export default Client;