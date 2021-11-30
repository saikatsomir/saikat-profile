import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';
import HomeBanner from './HomeBanner.css'
import Projects from './Projects';
import Contact from './Contact';

const drawerWidth = 240;
const button={
    border:'1px solid black',
    borderRadius: '20px',
    padding:'10px 60px',
    marginLeft:'10px'
    
}

 const HomeBannr = () =>{
  return (
    <Box sx={{ display: 'flex' }}>
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <List style={{padding:'0px 20px'}}>
         <img src="https://i.ibb.co/3vPwXzD/Photo-Profile-1.jpg" style={{borderRadius:'50%', padding:'20px 0px'}} sx={{pl:5}} alt="Trulli" width="175" height="170"/>
         <button  style={button}>About Me</button><br/><br/><br/>
         <button  style={button}>About Me</button><br/><br/><br/>
         <button  style={button}>About Me</button><br/><br/><br/>
         <button  style={button}>About Me</button><br/><br/><br/>
        </List>
       
      </Drawer>
      <Grid
      container 
        component="main"
        spacing={4}
        
        sx={{ flexGrow: 1, px:7, pt:5 }}


      >

        <Grid item xs={6} sm={5}>
            <img src="https://i.ibb.co/3vPwXzD/Photo-Profile-1.jpg" style={{width:'350px',border:'2px solid white ', borderRadius:'20px'}}  alt=""/>
        </Grid>
        <Grid item xs={6} sm={7}>
        <Typography paragraph variant="h5"  sx={{fontWeight:'500'}}>
            <span style={{fontWeight:'550', fontSize:'30px'}}>Hi, There </span><br/>
        I am Saikat Somir. I am a Front End developer. Using my experience and skills in web design, I can create fast, responsive, and attractive websites which will surely score very much higher in terms of the awesomeness of your intended website visitors. And I fell comfrot at React, NodeJs, Mongodb, Express, Metarial Ui.
        </Typography>
        <a href="./saikat.pdf" style={{border:'1px solid green', borderRadius:'0px', padding:'10px 30px', fontSize:'20px', textDecoration:'none'}} download>
Dowonload Resume</a>
        </Grid>
    <Projects/>

    </Grid>
    </Box>
  );
}


export default HomeBannr;