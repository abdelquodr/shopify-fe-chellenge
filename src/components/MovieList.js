import React from 'react';
import { connect } from 'react-redux'
import MovieItem from './MovieItem'
import Nominate from './Nominate';



const MovieList = ({ loading, post, err, nomination, search }) => {
    console.log('NOMINATION', nomination, 'POST', post.Search)

    // const disabled = (movie) => {
    //     const result = 
    //     console.log(result)
    // }

    console.log(search)
    const Displaying = () => {
        if (loading) {
            return <h2 id="loading" className="mx-auto"></h2>
        } else {
            return (
                <div className="t-5 border-0" style={{ width: '100%', background: 'transparent' }} >
                    {post?.Search?.map((movie, index) => <MovieItem movie={movie} key={index} id={index} disable={nomination.every(m => m?.movieTitle === movie?.Title)} block={nomination.length === 5} />)}
                </div>)
        }
    }



    return (
        <>
            <div className="col-xl-7 col-lg-7 col-md-8 mt-5 pt-5">
                {(nomination.length === 5) && <h3 className="text-white bg-danger px-4 py-2">you've reach the maximum nomination</h3 >}
                <Displaying />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-4 mt-5 pt-5">
                {(nomination.length > 0) && <h2 className="text-light px-5">Nomination List</h2>}
                {nomination.map((nominate, index) => <Nominate name={nominate.movieTitle} key={index} id={index} />)}
            </div>
        </>
    );
}


const mapState = (state) => ({
    loading: state.loading,
    post: state.post,
    error: state.error,
    nomination: state.nomination
})

export default connect(mapState)(MovieList)
