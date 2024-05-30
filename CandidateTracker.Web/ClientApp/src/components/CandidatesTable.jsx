import React, { useState } from "react";

const CandidatesTable = ({ candidates }) => {

    const [showNotes, setShowNotes] = useState(true);

    const onToggleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={onToggleNotesClick}>Toggle Notes</button>
            <table className="table table-hover table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {showNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate => {
                        return (<tr key={candidate.id}>
                            <td>{candidate.firstName}</td>
                            <td>{candidate.lastName}</td>
                            <td>{candidate.phoneNumber}</td>
                            <td>{candidate.email}</td>
                            {showNotes && <td>{candidate.notes}</td>}
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    );
}

export default CandidatesTable;