import React from "react";

function KeyPad() {    
    return (
            <input
            type="password"
            name="pw"
            onChange={(event) => console.log('Entering password...')}
            placeholder="Enter Password"
            />
    )
}
export default KeyPad; 