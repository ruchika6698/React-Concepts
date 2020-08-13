import React from 'react';

const MyContext = React.createContext()

const Component3 = ()=>{
    return(
        <MyContext.Consumer>
        {
            (data)=>{
                return (
                <React.Fragment>
                    <h1>My name is {data.name}</h1>
                    <h1>My Age is {data.age}</h1>
                </React.Fragment>
                )
            }
        }
        </MyContext.Consumer>
    )
}

const Component2 = ()=>{
    return(
        <div>
        <Component3 />
        <MyContext.Consumer>
        {
            (data)=>{
                return (
                <React.Fragment>
                    <h1>and My Birth Date is {data.dob}</h1>
                </React.Fragment>
                )
            }
        }
        </MyContext.Consumer>
        </div>
    )
}

const Component = ()=>{
    return <Component2 />
}

export function Context(){
    return(
        <MyContext.Provider value={{name:"Rajesh",age:"30",dob:"01/02/2000"}}>
            <div align="center">
                <Component/>
            </div>
        </MyContext.Provider>
    )

}
export default Context;