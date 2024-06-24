import {AppBar, Toolbar, styled, Button} from '@mui/material';
import logo from './BONGOEDITOR.png';
import { useState } from 'react';
import AboutModal from './about';


const Container = styled(AppBar) `
         background: #060606;
         height: 70px;
`;

const Logo = styled('img')`
    margin-right: 10px;  
`;

const Text = styled('Text')`
    font-size: 13px; 
    font-family: "Fantasy", Serif;  
    font-weight: bold;   
    color: #FFFFFF;
    flex-grow: 1;    
`;

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Container position='static'>
            <Toolbar>
                <Logo src={logo} alt="logo"/> 
                <Text>BONGO EDITOR</Text>
                <Button color="inherit" onClick={handleOpen}>About</Button>
            </Toolbar>
            <AboutModal open={open} handleClose={handleClose} />
        </Container>
    )
}

export default Header;