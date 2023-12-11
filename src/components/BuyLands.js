import React, { useState } from 'react';
import { useLandContext } from '../LandContext';
import MapComponent from '../MapComponent';
import 'leaflet/dist/leaflet.css';


const DisplayLandDetails = () => {
  const { landDetails } = useLandContext();
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMandal, setSelectedMandal] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  

  const districts = ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'];

  const mandalsByDistrict = {
    'Adilabad': ['Adilabad', 'Asifabad', 'Bhainsa', 'Boath', 'Chennur'],
    'Bhadradri Kothagudem': ['Aswaraopeta', 'Bhadradri', 'Chandrugonda'],
    'Hyderabad': ['Hyderabad', 'Secunderabad'],
    'Jagtial': ['Dharmapuri', 'Jagtial', 'Kodimial', 'Mallial'],
    'Nalgonda': ['Alair', 'Aleru', 'Bhongir', 'Bibinagar', 'Chandur', 'Chityala', 'Devarakonda', 'Gundlapally', 'Mothkur', 'Nalgonda', 'Narketpalli', 'Suryapet', 'Thipparthy', 'Turkapally', 'Yadagirigutta', 'Yadagiripalle'],
  };

  const villagesByMandals = {
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

  const filteredMandals = mandalsByDistrict[selectedDistrict] || [];
  const filteredVillages = villagesByMandals[selectedMandal] || [];

  const filteredLandDetails = landDetails.filter((detail) => {
    return (
      (!selectedDistrict || detail.district === selectedDistrict) &&
      (!selectedMandal || detail.mandal === selectedMandal) &&
      (!selectedVillage || detail.village === selectedVillage)
    );
  });

  const handleShowDetails = () => {
    if (selectedDistrict || selectedMandal || selectedVillage) {
      setShowDetails(true);

      const selectedLand = filteredLandDetails[0];

      if (selectedLand) {
        setLatitude(selectedLand.latitude);
        setLongitude(selectedLand.longitude);
      }
    } else {
      setShowDetails(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Land Details</h3>

      <div className="form-group">
        <label>District:</label>
        <input
          className="form-control"
          type="text"
          list="districtsList"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        />
        <datalist id="districtsList">
          {districts.map((district, index) => (
            <option key={index} value={district} />
          ))}
        </datalist>
      </div>

      <div className="form-group">
        <label>Mandal:</label>
        <input
          className="form-control"
          type="text"
          list="mandalsList"
          value={selectedMandal}
          onChange={(e) => setSelectedMandal(e.target.value)}
        />
        <datalist id="mandalsList">
          {filteredMandals.map((mandal, index) => (
            <option key={index} value={mandal} />
          ))}
        </datalist>
      </div>

      <div className="form-group">
        <label>Village:</label>
        <input
          className="form-control"
          type="text"
          list="villagesList"
          value={selectedVillage}
          onChange={(e) => setSelectedVillage(e.target.value)}
        />
        <datalist id="villagesList">
          {filteredVillages.map((village, index) => (
            <option key={index} value={village} />
          ))}
        </datalist>
      </div>
<br/>
      <button className="btn btn-primary" onClick={handleShowDetails}>
        Show Details
      </button>
      {showDetails && (
        filteredLandDetails.length > 0 ? (
          filteredLandDetails.map((detail, index) => (
            <div key={index} className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">
                  Location: {detail.district}, {detail.mandal}, {detail.village}
                </h5>
                <p className="card-text">
                  <strong>Acres:</strong> {detail.acres}<br />
                  <strong>Guntas:</strong> {detail.guntas}<br />
                  <strong>Price:</strong> ₹{detail.price} per Acre ({detail.amountType})<br />
                </p>
                {detail.images && detail.images.length > 0 && (
                  <div>
                    <p>Images:</p>
                    <ul>
                      {detail.images.map((image, imageIndex) => (
                        <li key={imageIndex}>
                          <img src={image} alt={`Land Image ${imageIndex + 1}`} style={{ maxWidth: '500px', maxHeight: '500px', marginRight: '5px' }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">
                  <h3>Map</h3>
                  <MapComponent latitude={latitude} longitude={longitude} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No lands available for the selected District, Mandal, and Village.</p>
        )
      )}
      

    </div>
  );
};

export default DisplayLandDetails;
