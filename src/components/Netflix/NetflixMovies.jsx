import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {

  const state = useSelector((state) => state);
  console.log("state == ",state);
  const myTheme={
    backgroundColor: state.theme.theme == "dark" ? "black" :"white",
    color: state.theme.theme == "dark" ? "white" :"black"
  }
  return (
    <div style={myTheme}>
        <h1>Movies</h1>
<ul>
    <li>
        <Link to="/thrillermovies">Thrill</Link>
    </li>
    <li>
          <Link to ="/netflixmovies/comedy">COMEDY</Link>
    </li>
    <li>
          <Link to ="comedy">comedy 1</Link>
    </li>
</ul>
       
        
        </div>
  )
}
