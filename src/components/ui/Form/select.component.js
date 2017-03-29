//- Created by hutber on 25/04/16.  */
import React from "react";

const input = React.createClass ({
    getInitialState: function (){
        return {
            jamie: 'jamie'
        } 
    },
    render() {
        let data = this.props.data;
        let ageData = this.props.data['data-data'];
        let age = require('./objects/select/age.js');
        return (
            <select {...data} >
                {};
            </select>
        );
    }
}); 

export default input;