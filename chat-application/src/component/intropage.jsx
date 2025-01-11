import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">ChatApp</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <Link to="login" className=' nav-link'>Login
                    
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signup"className="btn btn-light" href="#">Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to ChatApp</h1>
          <p className="lead">
            Real-time messaging at your fingertips. Connect with friends and colleagues instantly!
          </p>
          <a href="/signup" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose ChatApp?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card p-3">
                <i className="bi bi-lightning-charge display-4 text-primary"></i>
                <h4 className="mt-3">Fast Messaging</h4>
                <p>Experience lightning-fast communication with real-time updates.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <i className="bi bi-shield-lock display-4 text-primary"></i>
                <h4 className="mt-3">Secure</h4>
                <p>Your messages are encrypted to ensure your privacy.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <i className="bi bi-people display-4 text-primary"></i>
                <h4 className="mt-3">Stay Connected</h4>
                <p>Connect with your friends and teams in one seamless platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p>&copy; 2025 ChatApp. All Rights Reserved.</p>
        <a href="https/www.haaak.com" className="text-white">Privacy Policy</a> |{' '}
        <a href="https/www.haaak.co" className="text-white">Terms of Service</a>
      </footer>
    </div>
  );
};

export default Intro;
