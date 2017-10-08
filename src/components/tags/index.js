//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Actions
import * as tagsAction from '../../actions/sexPages/masturbation/tagsAction';

//styles
import styles from './style.css';
import formStyles from '../shared/form/formItems.css';
import * as font from '../shared/font/fontello.css';

class Tags extends React.Component {
  constructor (props){
    super(props);

    this.searchTags = this.searchTags.bind(this);
    this.selectTag = this.selectTag.bind(this);

    this.state = {
      tagsSearch: ''
    };
  }

  selectTag (event){
    this.props.setTagSelection(event.target.textContent, !this.props.masturbationTags[event.target.textContent]);
  }

  searchTags (event){
    this.setState({tagsSearch: event.target.value});
  }

  render (){
    let child = this.props.children;
    return (
      <div className={formStyles.itemContainer}>
        {child}
        <div className={formStyles.tagsTitle}>Tags</div>
        <div className={styles.searchContainer}>
          <i className={font['icon-search']}></i>
          <input
            type="text"
            value={this.state.tagsSearch}
            className={styles.tagInput}
            onChange={this.searchTags}
            placeholder="Search"
          />
        </div>
        <div className={styles.tags}>
          {
            Object.keys(this.props.masturbationTags).map((tag, key) => {
              const val = this.props.masturbationTags[tag];
              return <div className={val ? `${styles.tag} ${styles.selected}` : styles.tag} key={key} onClick={this.selectTag}>{tag}</div>
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    masturbationTags: state.masturbation.tags
  };
}

function matchDispatchToProps(dispatch){
  return {
    setTagSelection : bindActionCreators(tagsAction.setTagSelection, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Tags);
