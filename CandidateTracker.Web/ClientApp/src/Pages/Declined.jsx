import React, {useState, useEffect} from "react";
import axios from "axios";
import CandidatesTable from "../components/CandidatesTable";

const Declined = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get("/api/candidatetracker/declined");
            console.log(data);
            setCandidates(data);
        }
        getCandidates();
    }, []);

    return (
        <div>
            <h1>Declined</h1>
            <CandidatesTable candidates={candidates}/>
        </div>
    );
}

export default Declined; 