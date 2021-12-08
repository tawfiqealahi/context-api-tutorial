import React, { createContext } from 'react';
import CompB from './CompB';


const MyHome = createContext();

const CompA = () => {
    return (
        <div>
            <MyHome.Provider value={'Rangpur'}>
            <CompB></CompB>

            </MyHome.Provider>
           
        </div>
    );
};

export default CompA;
export { MyHome}; 