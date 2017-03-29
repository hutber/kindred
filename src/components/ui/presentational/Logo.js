//- Created by hutber on 22/04/16.  */
import React from 'react';
import logo from '../../../../css/core/_Logo.css';
import * as font from '../../../../css/font/fontello.css';

const Logo = React.createClass ({
    render() {
        return (
            <div className={logo.logo +' '+font['icon-logo']}></div>
        );
    }
});

export default Logo;
