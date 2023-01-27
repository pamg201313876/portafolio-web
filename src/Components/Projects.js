import React from 'react'
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
    <div className='main-div'  style={{padding: "3% 0px"}}>
      <br />
      <Typography color="white" variant="h3"  >
        Projects
      </Typography>
      <br />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {

          projects.map((index) => (
            <Grid item xs={2} sm={4} md={4} key={index.name}>

              <Card style={{ backgroundColor: 'white' }}>

                <CardMedia
                  sx={{ height: 140 }}
                  image={(index.image)}
                  title={index.name}
                />

                <CardContent>

                  <Typography sx={{ fontSize: 23 }} color="text.secondary" gutterBottom>
                    {index.name}
                  </Typography>

                  <Typography variant="h6" component="div">
                    {index.lenguaje}
                  </Typography>

                  <Typography variant="h6" component="div">
                    {index.fecha}
                  </Typography>

                  <Typography variant="h7" component="div">
                    {index.descripcion}
                  </Typography>


                </CardContent>

                <CardActions>

                  {index.repo ? <Button href={index.repo} target="_blank" variant="contained" color='primary'>Ver Repositorio</Button> : null}
                  {index.demo ? <Button href={index.demo} target="_blank" variant="contained" color='primary'>Ver demo</Button> : null}

                </CardActions>

              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )

}
