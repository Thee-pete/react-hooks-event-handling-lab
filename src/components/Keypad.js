// Code Keypad Component Here
import React from 'react';

function Keypad(){

    function handleOnChange(){

        console.log('Entering password...')
    }

    return(

        <input type ='password' onChange={handleOnChange}/>
    );

}
export default Keypad;