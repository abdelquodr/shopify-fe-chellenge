import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import MovieList from './components/MovieList';
import './App.css'



function App({ dispatch }) {

  return (
    <div className="App">
      <div className="body">
        <Navbar dispatch={dispatch} />
        {/* <h3 style={{ marginTop: "20%" }} className="text-dark"> Mayorwa </h3> */}
        <div style={{ marginTop: '10%' }}>
          <div className="container">
            <div className="row">
              <MovieList />
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  post: state.post,
  err: state.err
})


export default connect(mapStateToProps)(App);
