import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const [searchParam, setSearchParam] = useState("")

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Movie War</h3>
      <div className="navbar-div">
        <nav ref={navRef}>
          <a href="/">Popular</a>
          <a href="/toprated">Top Rated</a>
          <a href="/upcoming">Up Coming</a>
          {/* <div>
          <input type="text" />
          <button className="search-btn">Search</button>
        </div> */}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="search-div">
          <input type="text" className="search-box" onChange={(e)=>{
            setSearchParam(e.target.value)
          }} />
          <button className="search-btn" onClick={()=>{
            window.location.replace(`/search/${searchParam}`)
          }}>Search</button>
        </div>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
