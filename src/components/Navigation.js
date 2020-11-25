import React from 'react';
import './Navigation.css'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Schedule from './Schedule';
import Rules from './Rules';
import Gallery from './Gallery';
import Shop from './Shop';
import Sponsor from './Sponsor';
import Contact from './Contact';

const Navigation = () => {
return(
    <div>
        <Router>
            <Navbar bg="light" expand="md" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Tournaments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
                    <NavDropdown.Item href="/rules">Rules</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/sponsor">Sponsor</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/schedule" exact component={Schedule} />
                <Route path="/rules" exact component={Rules} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/sponsor" exact component={Sponsor} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </Router>
    </div>
);
}


export default Navigation;