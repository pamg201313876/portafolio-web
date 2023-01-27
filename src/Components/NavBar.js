import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function NavBar({scrollToSection, home, project, skills, contact}) {
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to my Briefcase
                    </Typography>

                    <Button onClick={() => scrollToSection(home)} color='inherit'  >Home</Button>
                    <Button onClick={() => scrollToSection(project)} color='inherit' >Projects</Button>
                    <Button onClick={() => scrollToSection(skills)} color='inherit' >Skills</Button>
                    <Button onClick={() => scrollToSection(contact)} color='inherit'  >Contact</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}