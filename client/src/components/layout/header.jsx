import logo from "../../assets/logo.png"
import * as styles from './header.css'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import SubmitButton from "../../components/common/submitButton";
import { style } from "@vanilla-extract/css";


const Header = ({user, onLogout}) => {
    return (
        <Navbar className={styles.navbar}>
            <Navbar.Brand className={styles.topbar}>
                <img className={styles.logo} src={logo} alt="timbertop united logo" />
            </Navbar.Brand>
            <Nav className={styles.nav}>
                <Nav.Link className={styles.navLink} as={Link} to='/'>Home</Nav.Link>
                <Nav.Link className={styles.navLink} as={Link} to='/products'>Products</Nav.Link>
                {!user && <Nav.Link className={styles.navLink} as={Link} to='/login'>Login</Nav.Link>}
                {user && <Nav.Link className={styles.navLink} as={Link} to='/dashboard'>
                            Dashboard
                        </Nav.Link>}
                {/* {user && <Nav.Link className={styles.navLink} onClick={onLogout}>
                            Logout
                        </Nav.Link>} */}
            </Nav>
        </Navbar>
    )
}

export default Header;