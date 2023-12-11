// Four.js

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Three = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/ppt2.pdf';

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
      Management Techniques
      </Typography>

      <Typography>
      Empowering diversity and enriching differentiated instruction necessitate educators to deploy effective classroom management strategies.
      </Typography>

      

      <Typography variant="h6" style={{ marginTop: '2rem' }}>
        Infographic
      </Typography>

      {/* Embed the PDF viewer here */}
      <iframe title="Integrated Curriculum Presentation" src={pdfUrl} width="100%" height="600" />
    </Container>
  );
}

export default Three;
