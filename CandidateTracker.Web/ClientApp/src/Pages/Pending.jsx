import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pending = () => {

const [candidates, setCandidates] = useState([]);

useEffect (() => {
    const getCandidates = async () => {
        const {data} = await axios.get("/api/candidatetracker/pending");
        setCandidates(data);
    }
    getCandidates();
}, []);

    return (
        <table className='table table-hover table-striped table-bordered'>
        <thead>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {candidates.map(candidate => <tr key={candidate.id}>
                    <td>
                        <Link to={`/viewcandidatedetails/${candidate.id}`}>View Details</Link>
                    </td>
                    <td>{candidate.firstName}</td>
                    <td>{candidate.lastName}</td>
                    <td>{candidate.phoneNumber}</td>
                    <td>{candidate.email}</td>
                </tr>)}
        </tbody>
    </table>
    );
}

export default Pending;