import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import ActiveLink from './ActiveLink/ActiveLink';


const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const tooltip = (
        <Tooltip>
          {user?.displayName}
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
                <Navbar.Brand href="/">Chefs Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                    </Nav>
                    <Nav>
                        {
                            user && <OverlayTrigger
                            placement="bottom"
                            overlay={tooltip}
                          >
                            <img data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom"
                            style={{height:'30px',width:'30px'}}
                            className="rounded-circle me-2 img-fluid" src={user?.photoURL
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