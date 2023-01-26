import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

    const navigate = useNavigate();

    const redirect = (path) => {
        navigate(path)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>

                    <Button color='inherit' onClick={() => redirect('/')} >Home</Button>
                    <Button color='inherit' onClick={() => redirect('/projects')} >Projects</Button>
                    <Button color='inherit' onClick={() => redirect('/experience')} >Skills</Button>
                    <Button color='inherit' onClick={() => redirect('/knowledge')} >Experience</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}