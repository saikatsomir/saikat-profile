import { Typography } from '@mui/material';
import React from 'react';

const center = {
margin:'auto', 
width:'60%'
}

const Contact = () => {
    return (
        <div style={center} sx={{mt:20}}>
            <Typography variant="h4" sx={{fontWeight:'bold',my:5}}>

                Contact Me
            </Typography>
            <form method="POST" action="https://formsubmit.co/saikatsomir@gmail.com" enctype="multipart/form-data">
            
            <input type="hidden" name="_autoresponse" value="Thank You For Give your Comment"/>
            <input type="hidden" name="_subject" value="New submission!"/>
            
            
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input style={{width:'350px', padding:'10px',outline:'0px',margin:"5px" }} sx={{mb:3}} type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input style={{width:'350px', padding:'10px',outline:'0px',margin:"5px" }} sx={{mb:3}}type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea style={{width:'350px', padding:'10px', margin:'5px'}} placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" style={{padding:'4px 40px', marginLeft:'90px'}} class="btn btn-lg btn-dark btn-block">Submit</button>
</form>
        </div>
    );
};

export default Contact;