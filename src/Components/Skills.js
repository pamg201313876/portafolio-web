import { Typography } from '@mui/material'
import React from 'react'
import itemData from '../Data/skills';
import { motion as m } from "framer-motion"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import "./../Styles/home.css"



export function Skills() {
  return (

    <m.div className='main-div' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
      <div className='picture-bg' style={{ padding: "25px 5px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {

            itemData.map((index) => (
              <Grid item xs={2} sm={4} md={4} key={index.title}>

                <Card style={{ backgroundColor: '#white' }}>

                  <CardMedia
                    sx={{ height: 140 }}
                    image={(index.img)}
                    title={index.title}
                  />

                  <CardContent>

                    <Typography sx={{ fontSize: 23 }} color="text.secondary" gutterBottom>
                      {index.title}
                    </Typography>                  


                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </m.div>
  );
}