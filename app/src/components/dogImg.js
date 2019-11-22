import React from 'react';
import {connect} from 'react-redux';
import {getDogData} from '../actions';

const DogData = props => {
    return (
        <div>
            <div className='button'>
                <button onClick={() => {
                    props.getDogData();
                }}>
                    Get Random Dog
                </button>
            </div>
            <div>
                <img src={props.dogImg} className='dogImg'/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        dogImg: state.dogImg
    }
}

export default connect(
    mapStateToProps,
    {getDogData}
)(DogData);