import React, { Component } from 'react';
class RegComponent extends Component{
    render(){

        return(

            <div>
                <h3>This is Regular {this.props.fruit}</h3>
            </div>
        )
    }
}

export default RegComponent;