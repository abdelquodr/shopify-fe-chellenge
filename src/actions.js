
export const getPost = (title) => {
    return (dispatch, getState) => {
        dispatch({ type: 'FETCH_POST_BEGINS', loading: true })
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=e2427664`)
            .then((res) => res.json())
            .then(json => {
                dispatch({
                    type: 'FETCH_POST_SUCCESS',
                    post: json
                })

            })
            .catch((err) => dispatch({ type: 'FETCH_POST_ERROR', err: err }))
    }
}



