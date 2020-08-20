import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '@/store/actions/movies'

function Page({ movies = [], loadMovies }) {

    useEffect(() => {
        if(window.requestPath !== '/movies') {
            loadMovies && loadMovies();
        }
    }, []);

    return (
        <div>
            <h1>我的电影列表</h1>
            <ul>{movies.map(m => <li key={m._id}>{m.name}</li>)}</ul>
        </div>
    )
}

Page.loadData = async function (store) {
    await store.dispatch(fetchMovies());
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadMovies() {
            dispatch(fetchMovies())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);