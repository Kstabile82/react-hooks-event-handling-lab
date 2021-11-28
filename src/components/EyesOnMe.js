import React from "react";

function EyesOnMe() {
    onBlur != onFocus; 
return (
    <div>
    <button
     onBlur= {() => console.log('Good!')}
     onFocus ={() => console.log('Hey! Eyes on me!')}
    >Eyes On Me</button>
     </div>
    
)
}
export default EyesOnMe; 
