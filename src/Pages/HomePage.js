import React from 'react';
import { Container, Typography, Paper, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackgroundPaper = styled(Paper)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `url('back.jpg') center/cover`, // Replace with the actual image path
  cursor: 'pointer',
  padding: '20px', // Adjust the padding as needed
});

const InnerPaper = styled(Paper)({
  padding: '30px', // Adjust the padding as needed
  textAlign: 'center',
});

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <BackgroundPaper onClick={handleClick}>
      <InnerPaper maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Sharing Action Research Using Technology
        </Typography>
        <Typography variant="h6" gutterBottom>
          Mushrat Khan
        </Typography>
        <Typography variant="body1" gutterBottom>
          American College of Education
        </Typography>
        <Typography variant="body1" gutterBottom>
          CI6103 - Curriculum and Instructional Design for Diversity
        </Typography>
        <Typography variant="body1" gutterBottom>
          Dr. Casey
        </Typography>
        <Typography variant="body1" gutterBottom>
          December 10, 2023
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: '20px', fontFamily: 'Roboto, sans-serif' }}
          onClick={handleClick}
        >
          Enter
        </Button>
      </InnerPaper>
    </BackgroundPaper>
  );
};

export default HomePage;
