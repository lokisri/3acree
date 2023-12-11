import React, { useState } from 'react';
import {  Row, Col , Modal, Button } from 'react-bootstrap';
import { useLandContext } from '../LandContext';
import 'leaflet/dist/leaflet.css';


const SellMyLand = () => {

  const { addLandDetails } = useLandContext();

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMandal, setSelectedMandal] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  const districts = ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'];

  const mandalsByDistrict = {
    'Adilabad': ['Adilabad', 'Asifabad', 'Bhainsa', 'Boath', 'Chennur', ],
    'Bhadradri Kothagudem': ['Aswaraopeta', 'Bhadradri', 'Chandrugonda'],
    'Hyderabad': ['Hyderabad', 'Secunderabad'],
    'Jagtial': ['Dharmapuri', 'Jagtial', 'Kodimial', 'Mallial', ],
    'Nalgonda': ['Alair', 'Aleru', 'Bhongir', 'Bibinagar', 'Chandur', 'Chityala', 'Devarakonda', 'Gundlapally', 'Mothkur', 'Nalgonda', 'Narketpalli', 'Suryapet', 'Thipparthy', 'Turkapally', 'Yadagirigutta', 'Yadagiripalle'],
  }

    const villagesByMandals= {
        'Adilabad': ['Village1', 'Village2'],
        'Asifabad': ['VillageA', 'VillageB'],
        'Bhainsa': ['Bhainsa Village'],
        'Boath': ['Boath Village'],
        'Chennur': ['Chennur Village'],
        'Aswaraopeta': ['Aswaraopeta Village'],
        'Bhadradri': ['Bhadradri Village'],
        'Chandrugonda': ['Chandrugonda Village'],
        'Hyderabad': ['Hyderabad Village'],
        'Secunderabad': ['Secunderabad Village'],
        'Dharmapuri': ['Dharmapuri Village'],
        'Jagtial': ['Jagtial Village'],
        'Kodimial': ['Kodimial Village'],
        'Mallial': ['Mallial Village'],
        'Alair': ['Alair Village'],
        'Aleru': ['Aleru Village'],
        'Bhongir': ['Bhongir Village'],
        'Bibinagar': ['Bibinagar Village'],
        'Chandur': ['Chandur Village'],
        'Chityala': ['Chityala Village'],
        'Devarakonda': ['Devarakonda Village'],
        'Gundlapally': ['Gundlapally Village'],
        'Mothkur': ['Mothkur Village'],
        'Nalgonda': ['Nalgonda Village'],
        'Narketpalli': ['Narketpalli Village'],
        'Suryapet': ['Suryapet Village'],
        'Thipparthy': ['Thipparthy Village'],
        'Turkapally': ['Turkapally Village'],
        'Yadagirigutta': ['Yadagirigutta Village'],
        'Yadagiripalle': ['Yadagiripalle Village'],
    };

 

    const handleImageChange = (e) => {
      const files = [...e.target.files];
      setSelectedImages(files);
    };
    

         


    const handleDistrictChange = (district) => {
      setSelectedDistrict(district);
  
    };
  
    const handleMandalChange = (mandal) => {
      setSelectedMandal(mandal);
    };

    const handleVillageChange = (village) => {
      setSelectedVillage(village);
    }
     
    const handleCloseModal = () => {
      // Assuming you have the land details here, e.g., from form inputs
      const landDetails = {
        district: selectedDistrict,
        mandal: selectedMandal,
        village: selectedVillage,
        acres: document.getElementById('acres').value, // Access other fields directly from the DOM or use state
        guntas: document.getElementById('guntas').value,
        price: document.getElementById('price').value,
        amountType: document.getElementById('amountType').value,
        latitude: latitude,
        longitude: longitude,
        images: selectedImages.map(image => URL.createObjectURL(image)),
        // Add other details as needed
      };

       // Set the latitude and longitude in the state
  setLatitude(latitude);
  setLongitude(longitude);



  
      addLandDetails(landDetails);
      setShowModal(false);
    };

  return (
    <div className='container pt-5'>
      <h5>
        This platform is set up to connect genuine sellers of land (both agents and owners) with the right buyers.
        <br />
        We verify the lands uploaded by you before we show them to the buyers to make it better for everybody.
      </h5>

      <div className="container">
        <hr className="my-3 custom-dark-line" />

        <div className="text-center">
          <h4 className="font-weight-bolder">Make yours available through 3acre.in.</h4>
        </div>

        <br />

        <div className="text-center">
          <button type="button" className="btn btn-dark btn-lg rounded-pill" onClick={handleShowModal}>
            Add Land &nbsp; <span>&rarr;</span>
          </button>
        </div>

        

<Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>Add Land</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <div className="container mt-4">
    <div className="form-group">
      <label htmlFor="district" className="text-primary">Select District:</label>
      <select
        className="form-control"
        id="district"
        value={selectedDistrict}
        onChange={(e) => handleDistrictChange(e.target.value)}
      >
        <option value="">Select District</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>

    {selectedDistrict && (
      <div className="form-group">
        <label htmlFor="mandal" className="text-primary">Select Mandal:</label>
        <select
          className="form-control"
          id="mandal"
          value={selectedMandal}
          onChange={(e) => handleMandalChange(e.target.value)}
        >
          <option value="">Select Mandal</option>
          {mandalsByDistrict[selectedDistrict].map((mandal) => (
            <option key={mandal} value={mandal}>
              {mandal}
            </option>
          ))}
        </select>
      </div>
    )}

    {selectedMandal && (
      <div className="form-group">
        <label htmlFor="village" className="text-primary">Select Village:</label>
        <select
          className="form-control"
          id="village"
          value={selectedVillage}
          onChange={(e) => handleVillageChange(e.target.value)}
        >
          <option value="">Select Village</option>
          {villagesByMandals[selectedMandal].map((village) => (
            <option key={village} value={village}>
              {village}
            </option>
          ))}
        </select>
      </div>
    )}
   
          <Row>
              <Col>
                <div className="form-group">
                  <label htmlFor="latitude" className="text-primary">Latitude</label>
                  <input type="text" className="form-control" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="longitude" className="text-primary">Longitude</label>
                  <input type="text" className="form-control" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                </div>
              </Col>
              </Row>

    <Row className="mb-3">
      <Col>
        <div className="form-group">
          <label htmlFor="acres" className="text-success">Acres</label>
          <input type="number" className="form-control" id="acres" />
        </div>
      </Col>
      <Col>
        <div className="form-group">
          <label htmlFor="guntas" className="text-success">Guntas</label>
          <input type="number" className="form-control" id="guntas" />
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="form-group">
          <label htmlFor="price" className="text-danger">₹ Price / Acre</label>
          <input type="number" className="form-control" id="price" />
        </div>
      </Col>
      <Col>
        <div className="form-group">
          <label htmlFor="amountType" className="text-warning">Amount Type</label>
          <select className="form-control" id="amountType">
            <option>Lakh</option>
            <option>Crore</option>
          </select>
        </div>
      </Col>
    </Row>
  </div>

  <div className="form-group">
            <label htmlFor="images" className="text-primary">Upload Images</label>
            <input
              type="file"
              className="form-control"
              id="images"
              multiple
              onChange={handleImageChange}
            />
          </div>
          {selectedImages.length > 0 && (
            <div>
              <p>Selected Images:</p>
              <ul>
                {selectedImages.map((image, index) => (
                  <li key={index}>{image.name}</li>
                ))}
              </ul>
            </div>
          )}
</Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
    <Button variant="primary" onClick={handleCloseModal}>
      Submit Details
    </Button>    
  </Modal.Footer>
</Modal>
        <br />  
        <div className="text-center">
          <p className='text-center'>OR</p>
          <button type="button" className="btn btn-dark btn-lg rounded-pill">
            Whatsapp us the details &nbsp; <span>&rarr;</span>
          </button>
        <br />
        <br />
        <p className="text-muted">We will help you</p>
        <hr className="my-3 custom-dark-line" />
        </div>
      </div>
    </div>
  );
};

export default SellMyLand;
