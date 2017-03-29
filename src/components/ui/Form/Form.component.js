//- Created by hutber on 25/04/16.  */
import React from "react";
import components from "../../../lib/components";

const form = React.createClass({
    render() {
        return (
            <form action="">
                {this.props.data.map((item, index) => React.createElement(components[item.element].default, {key: index, data: item}) )}
            </form>
        );
    }
});

export default form;
