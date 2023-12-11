import React from 'react'
import image3 from  '../components/pic3.jpg'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
  return (
    <div>
         <img src={image3} alt="Your Logo" className="img-fluid"  />
         <br></br>
         <br></br>
       <h1 className='text-xl-center'>Our preliminary verification weeds out 90% of the potential issues</h1>
       <div className="container">
       <br></br>
      <hr className="my-3 bg-dark" />
    </div>
    <br></br>
    
    <div className='container'>
    <Container>
      <Row  xs={2} md={4} lg={2}>
        <Col   > <h5>  <img src='https://www.1acre.in/static/images/icons/verified.svg'
         alt="Your Logo"
         className="img-fluid w-100" 
        style={{ maxWidth: '31px', height: 'auto' }}   /> Verify your land for free</h5>
        <p>If you are considering buying or already own some land in Telangana,
              get it verified for free and receive a certificate</p><br></br>
              <br></br>
              <div className="text-center">
      <button type="button" className="btn btn-dark btn-lg rounded-pill">
      ☎ Get in touch&nbsp; <span>&rarr;</span>
      </button>
      </div>
        </Col>
        <Col  >
  <h5> <img
      src="https://www.1acre.in/static/images/icons/stars.svg"
      alt="Your Logo"
      className="img-fluid w-100"
      style={{ maxWidth: '30px', height: 'auto', marginRight: '10px' }}
    />Access to lands facilitated by the platform</h5>
  <ul>
    <li>Legally verified</li>
    <li>Value buys</li>
  </ul>
  <br></br>
  <br></br>
  <div className="text-center ml-auto">
    <button type="button" className="btn btn-dark btn-lg rounded-pill">
      Subscribe now <span>&rarr;</span>
    </button>
  </div>
</Col>

      </Row>
    </Container>
</div>
    <hr className="my-3 bg-dark" />
    <div className='container'>
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
  <div className='text-center fixed-buttom' style={{ fontSize: '20px' }}>@ 2023 - 3acre.in - All Rights Reserved</div> 
   </div>
  )
}
 export default Home;
