import React from 'react';
import { FirstName } from './App';

const CompC = () => {
    return (
        <div>
            <h1>
                <FirstName.Consumer>
                    {(fname)=>{
                        return(
                        <h1> first context {fname} </h1>
                        )
                    }}
                </FirstName.Consumer>
            </h1>
            
        </div>
    );
};
 
export default CompC;