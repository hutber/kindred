//- Created by hutber on 25/04/16.  */
import React from "react";

const input = React.createClass ({
    render() {
        let data = this.props.data;
        return (
            <button {...data} >
                {data.text}
            </button>
        );
    }
});

export default input; 