import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="www.haak.com">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
               <Link to= "/" className="nav-link active" >
                  Home
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="www.profile.com">
                  Profile
                </a>
            </li>
            <li className="nav-item">
                <Link to="/chatroom" className="nav-link" href="https/www.haaak.com">
                  Chat Room
                </Link>
            </li>
          </ul>
        </div>
        <div className="toast position-fixed bottom-0 end-0 p-3" style={{"zindex": "11"}}>
            <div className="toast-header ">
                <strong className="me-auto">New Message</strong>
                <small>Just now</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div className="toast-body">
                You have a new message from User1.
            </div>
        </div>

      </div>
    </nav>
    );

}

export default Navbar;