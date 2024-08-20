import './Navbar.css';

const Navbar = () => {
    return ( 
    <nav className="navbar">
        <a href="#" class="logo">Job x Rent</a>
        <div className="menu">
            <a href="#jobs">Jobs</a>
            <a href="#housing">Housing</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    );
}

export default Navbar;