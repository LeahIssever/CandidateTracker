import React, {useState, useEffect} from "react";
import axios from "axios";
import CandidatesTable from "../components/CandidatesTable";

const Confirmed = () => {

    const [candidates, setCandidates] = useState([]);

useEffect (() => {
    const getCandidates = async () => {
        const {data} = await axios.get("/api/candidatetracker/confirmed");
        console.log(data);
        setCandidates(data);
    }
    getCandidates();
    console.log(candidates);
}, []);

    return (
        <div>
            <h1>Confirmed</h1>
            <CandidatesTable candidates={candidates} />
        </div>
    );
}

export default Confirmed;