import React from 'react';
import { MyHome } from './CompA';

const CompB = () => {
    return (
        <div>
            <MyHome.Consumer>
                {(newHome)=>{
                return(
                   
                    <h1>
                    this is the place where I live in  { newHome}
                    </h1>
                   
                    )
            }}
            </MyHome.Consumer>
        </div>
    );
};

export default CompB;