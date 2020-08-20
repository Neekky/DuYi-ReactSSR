import { actionTypes } from '../actions/movies'

const initialState = [];

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.setDatas:
            return payload;
        default:
            return state;
    }
}