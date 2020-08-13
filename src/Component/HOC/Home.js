import React from 'react';
import WithHOC from './withHOC';

export class Home extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h1 align="center">Hello</h1>
            </div>
        );
    }
}

export default WithHOC(Home);
