import React from 'react'
import JobFitment from './JobFitment';
import CurrentJob from './CurrentJob';
export default function App() {
    return (
        <div className="row">
            <div  className="col-6">
                <CurrentJob/>
            </div>
            <JobFitment/>
        </div>
    )
}
