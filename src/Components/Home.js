import * as React from 'react';
import "./../Styles/home.css"
import Typography from '@mui/material/Typography';
import {motion as m} from "framer-motion"

export const Home = () => {
    return (       

        <m.div className='main-div' initial={{opacity: 0}} animate={{opacity: 1}}  transition={{duration: 0.75, ease: "easeOut"}}>
            <div className='picture-bg'>
                <img style={{padding: '4% 4%'}} src={require('./../static/images/foto.jpg')} alt="Nature" className="responsive" width="600" height="400" />
                <Typography color="white" variant="h3"  >

                    <p>
                        Paublo Alejandro Martínez Gómez
                        <br/>                
                        Science and Systems Engineer
                        <br/>                
                        <br/>                

                    </p>

                </Typography>
            </div>
        </m.div>
    )
}
