import React from 'react';

const WithHOC = (WComponent) =>{
    const newComponent = (props) =>{
        console.log(props);
        return(
            <div style={{backgroundColor:"red"}}>
                <WComponent name="Higher Order Component" {...props}/>
            </div>
        )
    }
    return newComponent;
}

export default WithHOC;
