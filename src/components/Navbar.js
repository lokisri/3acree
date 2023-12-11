import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Logo3 from '../components/3logo.png';
import { Outlet, Link } from "react-router-dom";
import image3 from  '../components/pic3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Navbar = () => {

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [loginNumber, setLoginNumber] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [showSubmitOtpModal, setShowSubmitOtpModal] = useState(false);

  const linkStyle = {
    fontSize: '22px',
    marginRight: '10px',
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Name:', name);
    console.log('Number:', number);
    // You can add your logic to submit the data or perform other actions
    // For simplicity, the data is logged to the console in this example
  };

  
  const handleLogin = () => {
    // Handle login logic here
    console.log('Login with OTP for number:', loginNumber);

    // Replace the next line with your actual OTP generation and sending logic
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    console.log('Generated OTP:', generatedOTP);

    // You can add your logic to send the OTP and verify it
  };

  const handleSubmitOTP = () => {
    // Add your OTP verification logic here
    if (generatedOTP !== null && enteredOTP === generatedOTP.toString()) {
      // OTP is correct, you can proceed with login logic
      console.log('Login successful!');
    } else {
      // Incorrect OTP, handle accordingly (e.g., show an error message)
      console.log('Incorrect OTP. Please try again.');
    }
  
    // Reset entered OTP field
    setEnteredOTP('');
  
    // Close the submit OTP modal
    setShowSubmitOtpModal(false);
    

  };
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <img src={Logo3} alt="Your Logo" className="img-fluid" style={{ maxWidth: '80px' }} />
      </li>
      <li className="nav-item">
        <Link to='/'  className="nav-link"  style={linkStyle}>
          Home 
        </Link>
      </li>
      <li className="nav-item">
        <Link  to='/buylands' className="nav-link" style={linkStyle}>
          Buy lands
        </Link>
      </li>
      <li className="nav-item">
        <Link  to='/services' className="nav-link" style={linkStyle}>
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link  to='/testimonials'  className="nav-link" style={linkStyle}>
          Testimonials
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/premium' className="nav-link"  style={linkStyle}>
          Premium
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/sellmyland' className="nav-link"  style={linkStyle}>
          Sell my Land
        </Link>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a
          href="#"
          className="nav-link"
          style={linkStyle}
          onClick={() => setShowSignUpModal(true)}
        >
          👤Sign Up
        </a>
      </li>
      <li className="nav-item">
        <a href="#" 
        className="nav-link" 
        style={linkStyle}
        onClick={() => setShowLoginModal(true)}>
          Login
        </a>
      </li>
    </ul>
  </div>
</nav>



<Outlet />

      {/* Sign Up Modal */}
      <Modal show={showSignUpModal} onHide={() => setShowSignUpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            
            <form action="/action_page.php">
              <div className="form-group">
                <label htmlFor="email">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your name"
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="num"> Mobile Number:</label>
                <input
                  type="number"
                  className="form-control"
                  id="num"
                  placeholder="Enter mobile number"
                  
                />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSignUp}>
            Submit
          </Button>
          <Button variant="default" onClick={() => setShowSignUpModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      
       {/* Login Modal */}
       <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="loginNum">Mobile Number:</label>
                <input
                  type="number"
                  className="form-control"
                  id="loginNum"
                  placeholder="Enter mobile number"
                  value={loginNumber}
                  onChange={(e) => setLoginNumber(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={() => setShowSubmitOtpModal(true)}>
                Get OTP
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={() => setShowLoginModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Submit OTP Modal */}
      <Modal show={showSubmitOtpModal} onHide={() => setShowSubmitOtpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Submit OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="otp">Enter OTP:</label>
                <input
                  type="number"
                  className="form-control"
                  id="otp"
                  placeholder="Enter OTP"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-success" onClick={handleSubmitOTP}>
                Submit OTP
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={() => setShowSubmitOtpModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      {/* <div className='container fixed-bottom'>
    <Container>
      <Row >
        <Col sm  ><h5>Services</h5>
        <p>Free Preliminary Verification<br></br>
        Thorough Legal Verification<br></br>
        Get Your Land Surveyed<br></br>
        Land Monitoring</p></Col>
        <Col sm  className="offset-sm-1" ><h5>Company</h5>
        <p>Terms and Conditions<br></br>
         Privacy Policy</p></Col>
        <Col sm   className="offset-sm-1" ><h5>Contacts</h5>
        <p>+91-95553995833 </p></Col>
        <Col sm   className="offset-sm-1" ><h5>Email</h5>
        <p> lokesh936291@gmail.com</p></Col>
      </Row>
    </Container>
    </div>
    // <div className='text-center fixed-buttom' style={{ fontSize: '20px' }}>@ 2023 - 3acre.in - All Rights Reserved</div> */}
    </div>
  );
};

export default Navbar;
