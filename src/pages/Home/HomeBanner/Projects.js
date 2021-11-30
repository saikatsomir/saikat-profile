import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Contact from './Contact';

export default function Projects() {

  return (
    <Box>
        <Typography variant="h3" sx={{fontWeight:'bold', my:5}}>
            Projects
        </Typography>
        <Grid container columns={13} columnGap={1}>
        <Grid md={4} xs={12}>
       <Card sx={{ maxWidth: 320, minHeight:400 }}  >
        <CardMedia
        component="img"
        alt="CAr Buzz"
        height="180" style={{borderBottom:"2px solid black"}}
        image="https://i.ibb.co/LPf4SW4/car.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Car Buzz
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Here is a website for dental services. This website allows you to care for your  teeth. It allows you to book your appointment by knowing the details of your  dentist's issue.
        </Typography>
      </CardContent>
      <CardActions>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="https://caregencys.web.app/">Preview</a></Button>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="https://github.com/saikatsomir/car_buzz_clicent">Client Side</a></Button>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="https://github.com/saikatsomir/car_buzz_server">Server Side</a></Button>
      </CardActions>
      
    </Card>
        </Grid>
        <Grid md={4} xs={12}>
    <Card sx={{ maxWidth: 320, minHeight:400 }} >
        <CardMedia
        component="img"
        alt="CAr Buzz"
        height="180" style={{borderBottom:"2px solid black"}}
        image="https://i.ibb.co/VW1Kz24/travel.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Car Buzz
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This is a travel website. By booking on this website, you can visit the destination  of your choice. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="https://module-59-b7438.web.app/">Preview</a></Button>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="https://github.com/saikatsomir/World-Torusim">Client Side</a></Button>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="github.com/saikatsomir/world-tourism-server">Server Side</a></Button>
      </CardActions>
    </Card>
        </Grid>
      
        <Grid md={4} xs={12}>
    <Card sx={{ maxWidth: 320, minHeight:400 }}  >
        <CardMedia
        component="img"
        alt="CAr Buzz"
        height="180" style={{borderBottom:"2px solid black"}}
        image="https://i.ibb.co/x5Qqw7z/health.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Car Buzz
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A car based website that helps you find the car of your dreams by saving you time  and money. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="github.com/saikatsomir/world-tourism-server">Preview</a></Button>
        <Button target="_blank" sx={{fontSize:'11px', fontWeight:'bold'}}><a target="_blank" href="github.com/saikatsomir/Health_care">Client Side</a></Button>
      </CardActions>
    </Card>
        </Grid>
      
    </Grid>
    <Contact/>
    </Box>
  );
}
