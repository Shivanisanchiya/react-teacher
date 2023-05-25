import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';
import './missionvission.css';
import Head from '../Header/header';
import Title from '../Title/Title';

export default function Mission_Vission() {
  return (
    <div>
    <Head/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Title/>

    <div className="bg_image" style={{ backgroundImage: "url(/project_image.png)",backgroundRepeat:"no-repeat",  backgroundSize:"contain",height:"56vw", width:"100vw"}}>
   <Container >
    
    <div className='cards' >
        <ul className="cards_menu">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/missionimage.png"
          alt="Mission"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Mission
          </Typography>
          <Typography variant="body2" color="text.secondary">
            H&D IT Solution's mission is to help organizations develop and improve their employees' skills and knowledge. This is done through the design and delivery of training programs and workshops aimed at enhancing specific skills, promoting professional development, and supporting the overall goals and objectives of the organization. The ultimate goal of a H&D IT Solution is to increase the productivity, efficiency, and competitiveness of the company by developing a highly skilled and motivated workforce.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


<Card sx={{ maxWidth: 500 }}   style={{opacity:"1"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/vissionImage.png"
          alt="Mission"
       
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         Vission
          </Typography>
          <Typography variant="body2" color="text.secondary">
             The vision of a H&D IT Solution is to create a culture of continuous learning and development within the organization, where employees are empowered to reach their full potential and make valuable contributions to the success of the company. The vision is to foster a work environment where employees are encouraged to take ownership of their own professional growth and are provided with the necessary tools, resources, and support to do so. The ultimate vision for a H&D IT Solution is to help create a dynamic, innovative, and competitive organization that is able to adapt to the changing needs of its employees, customers, and the market.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    </ul>
    </div>
   
     </Container>
     </div>
      </div>
  );
}