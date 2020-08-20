import React from 'react'
import styles from './index.css'
import light from '../../assets/light.png'
import { connect } from 'react-redux'
import { increase, decrease } from '@/store/actions/counter'

function Counter({ number, onIncrease, onDecrease }) {
    return (
        <div>
            <h1>{number}</h1>
            <p>
                <button onClick={onIncrease}>增加</button>
                <button onClick={onDecrease}>减少</button>
            </p>
            <img style={{ width: '300px', height: '300px' }} src={light}></img>
            <div className={styles.imgBg}></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        number: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease() {
            dispatch(increase());
        },
        onDecrease() {
            dispatch(decrease());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);