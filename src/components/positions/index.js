//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Positions
import { positionsText } from '../../reducers/sexPages/sex/positions/positions';

//SVGs
import * as svg from './svgs';

//Actions
import { setPositionSelection }from '../../actions/sexPages/sex/currentSexAction';

//styles
import styles from './style.css';
import formStyles from '../shared/form/formItems.css';

class Tags extends React.Component {
  constructor (props){
    super(props);

    this.searchTags = this.searchTags.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  selectTag (event){
  	let el = event.target;
  	while(!el.querySelector('span')){
  		el = el.parentNode;
	  }
	  const positionSelectedText = el.querySelector('span').textContent;
	  const position = Object.keys(positionsText).filter(positionName => positionsText[positionName]===positionSelectedText)[0];

	  this.props.setPositionSelection(position, !this.props.currentPositions[position]);
  }

  searchTags (event){
  	console.info(arguments);
    this.setState({tagsSearch: event.target.value});
  }

  render (){
    let child = this.props.children;
    return (
      <div className={formStyles.itemContainer}>
        {child}
        <div className={formStyles.tagsTitle}>Sex Positions</div>
        <div className={styles.tags}>
          {
            Object.keys(svg).map((tag, key) => {
              const Val = svg[tag];
              return <div key={key} onClick={this.selectTag} className="positionClick">
	              <div className={this.props.currentPositions[tag] ? `${styles.tag} ${styles.selected}` : styles.tag}>
		              <Val />
	              </div>
	              <span className={styles.positionText}>{positionsText[tag]}</span>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentPositions: state.sex.current.positions
  };
}

function matchDispatchToProps(dispatch){
  return {
	  setPositionSelection : bindActionCreators(setPositionSelection, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Tags);
