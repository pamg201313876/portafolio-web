import * as React from 'react';
import "./../Styles/home.css"
import Typography from '@mui/material/Typography';
import { useRef } from 'react';

export const Home = () => {

    

    return (

        <div className='main-div'>
            <br />
            
            <br />
            <img src={require('./../static/images/foto.jpg')} alt="Nature" className="responsive" width="600" height="400" />
            <Typography color="white" variant="h3"  >

                <p>
                    Paublo Alejandro Martínez Gómez
                    <br />
                    Science and Systems Engineer
                    <br />
                    <br />

                </p>
            </Typography>
        </div>

    )
}
