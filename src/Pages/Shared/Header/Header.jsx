import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const tooltip = (
        <Tooltip>
          Hello
        </Tooltip>
      );
    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error=>{
        console.log(error.message);
      })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Chefs Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="text-decoration-none ps-5 text-white" to='/'>Home</Link>
                        <Link className="text-decoration-none ps-5 text-white" to="/">About</Link>
                        <Link className="text-decoration-none ps-5 text-white" to="/">Blog</Link>
                    </Nav>
                    <Nav>
                        {
                            user && <OverlayTrigger
                            placement="bottom"
                            overlay={tooltip}
                          >
                            <img data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom"
                            style={{height:'30px'}}
                            className="rounded-pill me-2" src={user.photoURL
                            } alt="" />
                          </OverlayTrigger>
                             
                        }
                        {
                            user ? <Button variant="secondary" onClick={handleLogOut}>Logout</Button> : <Link to="/login"><Button variant="secondary">Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;