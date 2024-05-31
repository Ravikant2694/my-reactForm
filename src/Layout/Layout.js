import { Outlet, Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const navs = [
  { path: '/', name: 'Home' },
  { path: '/aboutus', name: 'About Us' },
  { path: '/client', name: 'Client' },
  { path: '/services', name: 'Services' },
  { path: '/contactus', name: 'Contact Us' }
]

const Layout = () => {
  return (
    <>
      <div className="nav-parent">
        <div className="navbar-container">
          <h1>Advisa.</h1>
          <div className="nav-links">
            {navs.map((link, index) => <Link key={index} to={link.path} className="nav-link">{link.name}</Link>)}
          </div>
        </div>
      </div>

      <Outlet />
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-5 mb-0 pt-4 pb-4 bg-dark text-white">
          <div className="col-md-3">
            <h5>Advisa.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est consequatur adipisci amet illum labore dolorum eaque impedit eius. Tenetur?</p>
          </div>
          <div className="col-md-3">
            <h5>Important link</h5>
            <p><a href="#" className="link-light text-decoration-none">Home</a></p>
            <p><a href="#" className="link-light text-decoration-none">AboutUs</a></p>
            <p><a href="#" className="link-light text-decoration-none">Contact Us</a></p>
            <p><a href="#" className="link-light text-decoration-none">Our Team</a></p>
            <p><a href="#" className="link-light text-decoration-none">Our Client</a></p>
          </div>

          <div className="col-md-3">
            <h5>ContactUs</h5>
            <p>1180 Kimberly Way, WILLISTON PARK<br></br>
              New York - 11596<br></br><IoCallOutline />
              : 917-772-5081</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 bg-secondary text-center text-white">
            <p className="mt-1">Copyright 1999-2024 by TechGun. All Right Reserved.</p>
          </div>
        </div>

      </div>
    </>
  )
};

export default Layout;











