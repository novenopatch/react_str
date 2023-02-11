import React from 'react';
import { Container,Navbar as ReactNavBar  } from 'react-bootstrap';

const Navbar = () => {
    return (
        <ReactNavBar>
            <Container>
                <ReactNavBar.Brand href="/"></ReactNavBar.Brand>
            </Container>
        </ReactNavBar>
    );
};

export default Navbar;