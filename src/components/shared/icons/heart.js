//- Created by hutber on 22/04/16.  */
import React from 'react';

import style from './style.css';
import Icon from '-!svg-react-loader!./heart.svg';

class Heart extends React.Component {
    render() {
        return (
            <div className={`${style.iconContainer} ${style['data-icon']}`} >
                <Icon height={this.props.height ? this.props.height : '100px'} className={style.menuItem} />
            </div>
        );
    }
};

export default Heart;
