import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import './about.css';

// Import the profile picture
import profileImage from './profile.jpeg';

const aboutContainerStyle = {
  backgroundColor: '#f5f5f5', // Set the background color
  padding: '16px', // Adjust padding as needed
  marginTop: '16px', // Adjust margin-top as needed
};

const profileImageStyle = {
  width: '50%', // Make the image take 100% width of the container
  borderRadius: '8px', // Add border-radius for a rounded appearance
  marginBottom: '16px', // Add margin-bottom for spacing
};

const About = () => {
  return (
    <Container>
      <Paper id='aboutDiv' style={aboutContainerStyle} elevation={3}>
        {/* Profile Picture */}
        <img src={profileImage} alt="Profile" style={profileImageStyle} />

        {/* About Me Content */}
        <div id='aboutContent'>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi! I am Mushrat, an educator with an enriching 28-year journey in teaching, driven by a profound fondness for nurturing young minds. My passion for educating children has been the guiding force throughout my career, creating a fulfilling experience in the classroom. My academic journey is marked by a master's degree in Education and English Literature, reflecting my commitment to academic excellence.
        </Typography>
        <Typography variant="body1" paragraph>
          Building on this foundation, I have earned an Education Specialist degree. I am pursuing a doctoral degree in Curriculum and Instruction at the respected American College of Education. Further to my experienced initiatives, my heart lies with my family, emphasizing the significance I bring to my individual and personal life. My extensive experience and ongoing academic pursuits embody a lifelong dedication to the field of education.
        </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default About;
