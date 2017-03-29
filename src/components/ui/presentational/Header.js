//- Created by hutber on 22/04/16.  */
import React from 'react';
import header from '../../../../css/components/header/_Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainClass: props.mainClass || 'header',
            left: props.left || null,
            middle: props.middle || 'Kindred',
            right: props.right || null
        };
    }
    
    render() {
        return (
            <div className={header[this.state.mainClass]}>
                <div className={header.leftHeader}>{this.state.left}</div>
                <div className={header.middleHeader}>{this.state.middle}</div>
                <div className={header.rightHeader}>{this.state.right}</div>
            </div>
        );
    }
}

export default Header;
