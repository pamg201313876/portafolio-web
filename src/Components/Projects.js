import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import projects from '../Data/projects';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import "./../Styles/home.css"

export const Projects = () => {
  return (
    <div className='main-div'>
      <div className='picture-bg'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {

            projects.map((index) => (
              <Grid item xs={2} sm={4} md={4} key={index.name}>

                <Card style={{ backgroundColor: '#90a4ae' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={(index.image)}
                    title={index.name}
                  />
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {index.name}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {index.lenguaje}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {index.fecha}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button variant="contained" >Ver Repositorio</Button>
                  </CardActions>

                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )

}
