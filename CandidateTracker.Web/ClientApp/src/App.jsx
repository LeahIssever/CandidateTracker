import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Declined from './Pages/Declined';
import ViewCandidateDetails from './Pages/ViewCandidateDetails';
import StatusCountsContext from './StatusCountsContext';

const App = () => {
    return (
        <StatusCountsContext>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addcandidate' element={<AddCandidate />} />
                <Route path='/pending' element={<Pending />} />
                <Route path='/confirmed' element={<Confirmed />} />
                <Route path='/declined' element={<Declined />} />
                <Route path='/viewcandidatedetails/:id' element={<ViewCandidateDetails />} />
            </Routes>
        </Layout>
        </StatusCountsContext>
    );
}

export default App;