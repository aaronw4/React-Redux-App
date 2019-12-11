import React from 'react';
import {connect} from 'react-redux';
import {getDogData} from '../actions';
import ReactPlayer from 'react-player';

const DogData = props => {
    let string = props.dogImg;
    let type = string.substr(string.length -3);
    console.log(type)

    return (
        <div>
            {console.log(props.dogImg)}
            <div className='button'>
                <button onClick={() => {
                    props.getDogData();
                }}>
                    Get Random Dog
                </button>
            </div>
            <div>
                {type === 'mp4' ? 
                    <ReactPlayer 
                        url={props.dogImg} 
                        playing 
                        loop 
                        height='80vh'
                        className='video'
                    /> :
                    <img src={props.dogImg} alt='' className='dogImg'/>
                }
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