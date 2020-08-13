import React from 'react';

export class Ref extends React.Component {

myheading = React.createRef();
myinput = React.createRef();
getValue(){
    console.log(this.myinput.current.value);
}

    render(){
        return(
            <div align="center">
                <h3 ref={this.myheading}>Happy Birthday</h3>
                <input type="text" ref={this.myinput}/>
                <button onClick={()=>this.getValue()}> Get Value</button>
            </div>
        );
    }
}

export default Ref;
