import { actionTypes } from '../actions/counter'

const initialState = 10;

export default function (state = initialState, { type }) {
    switch (type) {
        case actionTypes.increase:
            return state + 1;
        case actionTypes.decrease:
            return state - 1;
        default:
            return state;
    }
}