import React from 'react';
import './App.css';
import superagent from 'superagent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";



}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";

}


function App () {
    return (


        <div className="page">
            <header>
                <div id="sideNavigation" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                    <a href="#">Home</a>
                    <a href="#">Movie List</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>

                </div>


                <nav className="topnav">
                    <a href="#" onClick={() => openNav()}>
                        <svg width="30" height="30" id="icoOpen">
                            <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
                            <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
                            <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
                        </svg>
                    </a>
                </nav>


                <div id="hero">
                    <div id="hero-overlay"></div>
                </div>


                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                      crossOrigin="anonymous"/>
                <script src="https://kit.fontawesome.com/ea741cf9b6.js"></script>

                <div className="search-box">
                    <input type="text" name="" className="search-txt" placeholder="Search..."/>
                    <a className="search-btn" href="#">
                        <i className="fas fa-search"></i>
                    </a>
                </div>
                <div id="main">

                </div>


            </header>
        </div>
    );
}


function Movies() {
    const [tri, setTri] = React.useState(null);
    const [movies, setMovies] = React.useState(null);
    React.useEffect(() => {
        superagent
            .get("http://localhost:5000/application/movie/getall")
            .then(response => setMovies(response.body));
    }, []);
    return (
        <div>


            <div id="sideNavigation" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                <a href="#">Home</a>
                <a href="#">Movie List</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>

            </div>


            <nav className="topnav">
                <a href="#" onClick={() => openNav()}>
                    <svg width="30" height="30" id="icoOpen">
                        <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
                        <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
                        <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
                    </svg>
                </a>
            </nav>


            <div id="hero">
                <div id="hero-overlay"></div>
            </div>


            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                  crossOrigin="anonymous"/>
            <script src="https://kit.fontawesome.com/ea741cf9b6.js"></script>
            <div className="search-box">
            </div>
            <div className="search-box">

                <input type="text" name="" className="search-txt" placeholder="Search..."/>
                <a className="search-btn" href="#">
                    <i className="fas fa-search"></i>
                </a>
            </div>
            <div>

                <div className="moviereco">
                    <div>
                        <div className = "classer_note">
                            Recommondons pour vous :
                            <button onClick= {() => setMovies(Trier3(movies,setTri,tri))}>
                                Cliquez ici!
                            </button>
                            <p>
                            </p>
                        </div>
                    </div>
                    <tr>
                        {movies && movies.map(movie => (<td id="tabtd">{movie.name} ({movie.year})</td>))}
                    </tr>
                    <tr>

                        {movies && movies.map(movie => (<td><img src={movie.affiche} className="affiche"/></td>))}
                    </tr>
                    <tr>
                        {movies && movies.map(movie => (<td id="tabtd"><div>{movie.notes}</div></td>))}
                    </tr>
                </div>

            </div>



        </div>
    );
}

function Trier3(movies,setTri,tri){
    var tmp = movies
    setTri(tri + 1)
    { movies && tmp.sort(function(a,b){ return b.notes - a.notes})}
    return(tmp)
}
export default Movies;

