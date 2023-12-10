import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CustomCard = () => {
  return (
    <Card id="r4" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: '10px' }}>
          Lesson Plan Development
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '10px' }}>
          Crafting impactful lessons involves the ability of educators to seamlessly integrate multiple subjects, fostering connections across diverse topics and enhancing engagement. Discover how educators can achieve this by incorporating writing across the curriculum by clicking "Read More" to explore effective classroom practices!
        </Typography>
        <Button variant="contained" style={{ backgroundColor: '#2196f3', color: '#fff' }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
