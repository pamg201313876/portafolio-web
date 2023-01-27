import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import "./../Styles/home.css"
import { motion as m } from "framer-motion"
import { FormControl, TextField, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';

export const Contact = () => {


  const [formError, setFormError] = React.useState({
    email: false,
    name: false,
    message: false
  })

  const [formValues, setFormValues] = React.useState({
    email: '',
    name: '',
    message: ''
  })

  const handleChange = (e, { name, value }) => {

    setFormValues((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));

    let isError = false;

    if (name === "email") {
      isError = ! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    }

    setFormError((oldValues) => ({
      ...oldValues,
      [name]: isError,
    }));

  }

  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    handleChange(e, { name, value })
  }

  const validateFields = (e) => {
    let name = e.target.name
    let value = e.target.value
    let error = !!!value && !(value.length > 0);

    if (name === "email") {
      error = ! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    } else {
      //console.log(value.length + ' ' + !!value)
    }

    setFormError((oldValues) => ({
      ...oldValues,
      [name]: error,
    }));

  }

  const sendEmail = () => {
    emailjs.send('service_b2qwaao', 'template_eh75k8i', { name: formValues.name, email: formValues.email, message: formValues.message }, 'G40xIySB0z2wv-5Yw')
      .then((response) => {
        alert("Email sent correctly, thanks for contact me!")
        // navigate('/')
      }, (err) => {
        alert("We couldn't send your email, please try again later.")
        // navigate('/')
      });


  }


  return (
    <div className='main-div' style={{padding: "7% 0px"}} >

      <br />
      <Typography color="white" variant="h3"  >
        Contact
      </Typography>
      <br />

      <Card style={{ backgroundColor: 'white', maxWidth: 500, maxHeight: 650, margin: "0 auto" }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              width: 1
            }}
            noValidate
            autoComplete="off"

          >

          

            <TextField
              required
              id="outlined-required"
              label="Email"
              onBlur={validateFields}
              style={{ width: "99%" }}
              value={formValues.email}
              onChange={handleInputChange}
              name={"email"}
              error={formError.email}
              helperText={formError.email ? "Please type a valid email" : ''}
            />
            <br />

            <TextField
              required
              id="outlined-required"
              label="Name"
              style={{ width: "99%" }}
              name={"name"}
              value={formValues.name}
              onChange={handleInputChange}
              error={formError.name}
              helperText={formError.name ? "Please type your name" : ''}
              onBlur={validateFields}
            />
            <br />

            <TextField
              id="outlined-multiline-static"
              label="Message"
              required
              multiline
              rows={4}
              style={{ width: "99%" }}
              name={"message"}
              value={formValues.message}
              onChange={handleInputChange}
              error={formError.message}
              helperText={formError.message ? "Please type your message" : ''}
              onBlur={validateFields}
            />

            <Button variant='outlined' onClick={sendEmail} disabled={formError.email || formError.message || formError.name} >Send Email</Button>

          </Box>

        </CardContent>


        <CardActions>

        </CardActions>
      </Card>


    </div>
  )
}
