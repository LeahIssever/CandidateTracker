import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCandidate = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');    
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const onSubmitClick = async () => {
        await axios.post('/api/candidatetracker/add', { firstName, lastName, phoneNumber, email, notes });
        navigate('/');
    }

    return (
      <>
      <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} name="firstName" placeholder="First Name" className="form-control" />
                        <br />
                        <input type="text" onChange={(e) => setLastName(e.target.value)} name="lastName" placeholder="Last Name" className="form-control" />
                        <br />
                        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" className="form-control" />
                        <br />
                        <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder="Phone Number" className="form-control" />
                        <br />
                        <textarea rows="5" onChange={(e) => setNotes(e.target.value)} className="form-control" name="notes"></textarea>
                        <br />
                        <button onClick={onSubmitClick} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
      </>  
    );
}

export default AddCandidate;

