import * as React from 'react';
import "./../Styles/home.css"
import Typography from '@mui/material/Typography';

export const Home = () => {
    return (



        <div className='main-div'>
            <div className='picture-bg'>
                <img src={require('./../static/images/foto.jpg')} alt="Nature" className="responsive" width="600" height="400" />
                <Typography color="white" variant="h3">

                    <p>
                        Paublo Alejandro Martínez Gómez
                    </p>

                    <p>
                        Science and Systems Engineer
                    </p>

                </Typography>
            </div>
        </div>
    )
}
