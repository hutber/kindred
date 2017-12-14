//- Created by hutber on 22/04/16.  */
import React from 'react';

import style from './style.css';
import FireIcon from '-!svg-react-loader!./fire.svg';

class Fire extends React.Component {
    render() {
        return (
            <div className={`${style.iconContainer} ${style['data-icon']}`} >
                <FireIcon height={this.props.height ? this.props.height : '100px'} className={style.menuItem} />
            </div>
        );
    }
};

export default Fire;
