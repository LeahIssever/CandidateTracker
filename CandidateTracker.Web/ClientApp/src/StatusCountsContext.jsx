import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

const StatusCountsContext = createContext();

const StatusCountsContextComponent = (props) => {
    const [statusCounts, setStatusCounts] = useState({
        Pending: 0,
        Confirmed: 0,
        Declined: 0
    });

    useEffect(() => {
        updateStatusCounts();
    }, []);

    const updateStatusCounts = async () => {
        const { data } = await axios.get('/api/candidatetracker/getcounts');
        setStatusCounts(data);
    }

    const obj = {
        statusCounts,
        updateStatusCounts
    }

    return <StatusCountsContext.Provider value={obj}>
        {props.children}
    </StatusCountsContext.Provider>
}

const useStatusCounts = () => useContext(StatusCountsContext);

export default StatusCountsContextComponent;
export {useStatusCounts};
