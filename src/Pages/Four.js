// Four.js

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Four = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/ppt.pdf';

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lesson Plan Development
      </Typography>

      <Typography>
        Crafting impactful lessons involves the ability of educators to seamlessly integrate multiple subjects, fostering connections across diverse topics and enhancing engagement.
      </Typography>

      

      <Typography variant="h6" style={{ marginTop: '2rem' }}>
        Integrated Curriculum Presentation
      </Typography>

      {/* Embed the PDF viewer here */}
      <iframe title="Integrated Curriculum Presentation" src={pdfUrl} width="100%" height="600" />
    </Container>
  );
}

export default Four;
