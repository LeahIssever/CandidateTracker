import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { produce } from "immer";

const ViewCandidateDetails = () => {

    const { id } = useParams();
    const [candidate, setCandidate] = useState();

    useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`/api/candidatetracker/getbyid?id=${id}`);
            console.log(data);
            setCandidate(data);
        }
        getCandidateById();
        console.log(candidate);
    }, []);

    const onUpdateStatusClick = async (status) => {
        await axios.post("/api/candidatetracker/updatestatus", {
            id,
            status
        });
        const nextState = produce(candidate, draft => {
            draft.status = status;
        });
        setCandidate(nextState);
    } 

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    {/* <h4>Name: {candidate.firstName} {candidate.lastName}</h4>
                    <h4>Email: {candidate.email}</h4>
                    <h4>Phone: {candidate.phoneNumber}</h4>
                    <h4>Status: {candidate.status}</h4>
                    <h4>Notes:</h4>
                    {<p>{candidate.notes}</p> || <p>"N/A"</p>}
                    <div>
                    <button disabled={candidate.status !== "Pending"} onClick={() => onUpdateStatusClick("Confirmed")} className="btn btn-primary">Confirm</button>
                    <button disabled={candidate.status !== "Pending"} onClick={() => onUpdateStatusClick("Declined")} className="btn btn-danger">Decline</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ViewCandidateDetails;