import './DetailBar.css'

const DetailBar = () => {

    return (
        <div className="detailbar">
        
            <div className="profile-info">
                <h2>John Doe</h2>
                <p>Web Developer</p>
                <p className="email">johndoe@example.com</p>
            </div>
            <div className="actions">
                <a href="#profile">View Profile</a>
                <a href="#settings">Settings</a>
                <a href="#logout">Logout</a>
            </div>
        </div>
    );
}

export default DetailBar;