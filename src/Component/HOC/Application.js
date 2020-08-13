import React from 'react';
import Home from './Home';

export class Application extends React.Component {
    render(){
        return(
            <div>
                <Home status="Coder"/>
            </div>
        );
    }
}

export default Application;
