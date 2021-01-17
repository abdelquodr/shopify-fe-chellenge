import { useState, useEffect } from 'react';
import { getPost } from '../actions'
// import '../App.css';

const Navbar = ({ post, dispatch }) => {

    // state
    const [input, setInput] = useState('')

    useEffect(() => {
        dispatch(getPost(input.search))
    }, [input.search]);


    // handlers
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput(() => ({ [name]: value }))
        // getInput(input?.search)
        console.log(input.search)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <header className="header shadow-lg mb-5">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                {/* header logo */}
                                <a href="index.html" className="header__logo">
                                    <h2 className="text-secondary font-weight-bold">SHOPPIES</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header search */}
            <form onSubmit={handleSubmit} className="header__search">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__search-content">
                                <input onChange={handleChange} name='search' type="text" placeholder="Search for a movie" />
                                <button type="button">search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* end header search */}
        </header>

    )
}


export default Navbar;
