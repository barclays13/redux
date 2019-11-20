import React from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as actions from '../action';
// import '../public/index';
const Counter = ({counter, inc, rnd, dec}) => {
    return (
        <div className="content">
            <div  className="counter-block">
                <h1 id="counter">{counter}</h1>
            </div>
            <div className="buttons d-flex">
                <button onClick={inc} className="plus-block">
                    <div className="plus"></div>
                </button>
                <button onClick={dec} className="minus-block">
                    <div className="minus"></div>
                </button>
                <button onClick={rnd} className="reset-block d-flex">
                    <img src="./img/reset.png" alt="reset"></img>
                </button>
            </div>
      </div>
    );
}
const mapStateToProps = (state) => {
    return {
        counter:state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }
export default connect(mapStateToProps, actions)(Counter);