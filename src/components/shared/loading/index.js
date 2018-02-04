//- Created by hutber on 22/04/16.  */
import React from 'react';
import {connect} from 'react-redux';

import '../../../actions/loadingAction';

//SVG
import Kindred_icon from '-!svg-react-loader!./Kindred_icon.svg';

//styles
import styles from './loading.css';
import * as font from '../font/fontello.css';

class Loading extends React.Component {
    render() {
        return (
        	<div className={`${styles.loading} ${!this.props.loading ? styles.hideLoading : ''}`}>
		        <Kindred_icon className={styles.logo} />
	        </div>
        );
    }
};

function mapStateToProps(state) {
	return {loading: state.loading.displayLoading};
}

export default connect(mapStateToProps)(Loading);
