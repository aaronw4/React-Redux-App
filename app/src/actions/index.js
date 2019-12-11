import axios from 'axios'

export const GET_DOG_DATA = 'GET_DOG_DATA';

export const getDogData = () => dispatch => {
    axios
        .get('https://random.dog/woof.json')
        .then(res => 
            dispatch({
                type: GET_DOG_DATA,
                payload: res.data.url
            })
        )
        .catch(err => {
            console.log(err);
        });            
}