import React from 'react';
import { FirstName } from './App';

const CompC = () => {
    return (
        <div>
            <h1>
                <FirstName.Consumer>
                    {(fname)=>{
                        return(
                        <h1>this is first context {fname} </h1>
                        )
                    }}
                </FirstName.Consumer>
            </h1>
            compC 
        </div>
    );
};
 
export default CompC;