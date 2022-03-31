import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar () {
  return (
    <div className="top">

    <div className="bar">

    <div className="topLeft">
    <a className="topIcons" href="https://www.github.com/byrongomezjr">
    <i class="fa-brands fa-github"></i>
    </a>

    <a className="topIcons" href="https://www.twitter.com/byrongomezjr">
    <i class="fa-brands fa-twitter"></i>
    </a>

    <a className="topIcons" href="https://www.instagram.com/byrongomezjr">
    <i class="fa-brands fa-instagram"></i>
    </a>
    </div>

    <div className="topCenter">

    <li className="topListItem">
    <Link className="button" to="/">
    HOME
    </Link>
    </li>

    <li className="topListItem">
    <Link className="button" to="/coding">
    CODING
    </Link>
    </li>

    <li className="topListItem">
    <Link className="button" to="/books">
    BOOKS
    </Link>
    </li>
    
    <li className="topListItem">
    <Link className="button" to="/blog">
    BLOG
    </Link>
    </li>

    </div>

    <div className="topRight">
    <i className="darkModeIcon fa-solid fa-moon"></i>
    </div>

    </div>

    

    </div>
  );
};