import React from 'react';
import JobLayout from '../Components/JobLayout';
import LastCard from '../Components/LastCard';
import NetworkCard from '../Components/NetworkCard';
import ProfileCard from '../Components/ProfileCard';
import ProjectCatalogCard from '../Components/ProjectCatalogCard';
import ProposalCard from '../Components/ProposalCard';
import StartNetworkingItems from '../Components/StartNetworkingItems';

function StartNetworking(props) {
    return (
        <div className='row'>
            <div className='col-8'>
                <StartNetworkingItems/>
                <JobLayout/>
            </div>
            <div className='col-3'>
                <ProfileCard/>
                <ProposalCard/>
                <NetworkCard/>
                <ProjectCatalogCard/>
                <LastCard/>
            </div>
        </div>
    );
}

export default StartNetworking;