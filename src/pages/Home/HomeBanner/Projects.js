import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import Contact from './Contact';

const Projects = () => {
    return (
        <div style={{paddingTop:'45px', }}>
            <Typography variant="h4" sx={{fontWeight:'bold'}}>
                Projects
            </Typography>
            <Grid container spacing={2}>
                <Grid  xs={12} md={4} style={{width:"200px"}}>
                <img src="i.ibb.co/LPf4SW4/car.png" alt="travel" width="150px" border="0"/>
                <Typography variant="paragraph" sx={{px:3,}}>
                Here is a website for dental services. This website allows you to care for your  teeth. It allows you to book your appointment by knowing the details of your  dentist's issue.
                </Typography>
                <Typography variant="h5" sx={{fontWeight:'bold'}}>
                <button><a href="https://caregencys.web.app/">Preview</a></button>
                <button><a href="https://github.com/saikatsomir/car_buzz_clicent">Client Side</a></button>
                <button><a href="https://github.com/saikatsomir/car_buzz_server">Preview</a></button>
               </Typography>
                </Grid>
                <Grid  xs={12} md={4} style={{width:"200px"}}>
                <img src="https://i.ibb.co/VW1Kz24/travel.png" alt="travel" width="150px" border="0"/>
                <Typography variant="paragraph" sx={{px:3,}}>
                This is a travel website. By booking on this website, you can visit the destination  of your choice. 
                </Typography>
                <Typography variant="h5" sx={{fontWeight:'bold'}}>

                <button><a href="https://module-59-b7438.web.app/">Preview</a></button>
                <button><a href="https://github.com/saikatsomir/World-Torusim">Client Side</a></button>
                <button><a href="github.com/saikatsomir/world-tourism-server">Preview</a></button>
            
               </Typography>
                </Grid>
                <Grid  xs={12} md={4} style={{width:"200px"}}>
                <img src="https://i.ibb.co/x5Qqw7z/health.png" alt="travel" width="150px" border="0"/>
                <Typography variant="paragraph" sx={{px:3,}}>
                A car based website that helps you find the car of your dreams by saving you time  and money. 
                </Typography>
                <Typography variant="h5" sx={{fontWeight:'bold'}}>
                <button><a href="github.com/saikatsomir/world-tourism-server">Preview</a></button>
                <button><a href="github.com/saikatsomir/Health_care">Client Side</a></button>
               </Typography>
                </Grid>
            </Grid>
            <Contact/>
        </div>
    );
};

export default Projects;