//- Created by hutber on 22/04/16.  */
import React from 'react';
import header from './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: props.style || 'header',
            left: props.left || null,
            middle: props.middle || 'Kindred',
            right: props.right || null
        };
    }
    
    render() {
        return (
            <header className={header[this.state.style]}>
                <div className={header.leftHeader}>{this.state.left}</div>
                <div className={header.middleHeader}>{this.state.middle}</div>
                <div className={header.rightHeader}>{this.state.right}</div>
            </header>
        );
    }
}

export default Header;
