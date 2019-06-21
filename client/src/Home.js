import React from "react";
function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";


}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

const Home = () => {
    return(
        <div className="page">
            <header>
                <div id="sideNavigation" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Features</a>
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
    )
}

export default Home;