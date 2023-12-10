// Two.js

import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Two = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Teacher Perceptions
      </Typography>

    

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Interview Analysis and Qualitative Results
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The interview with the 18-year veteran educator with an immigrant background yielded qualitative results and analysis that align with the principles of lifelong learning and educational reform as outlined in "Education: The Necessary Utopia" from The Treasure Within: Report to UNESCO of the International Commission on Education for the Twenty-first Century. The key themes and findings from the interview resonate with the principles of ongoing learning and the transformative vision for education discussed in the UNESCO report, emphasizing the relevance and applicability of these principles in the context of the teacher's experiences and perspectives.
          </Typography>

          {/* Themes Addressed */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Themes Addressed
          </Typography>
          <List>
            {/* List Item Example */}
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Promote students' understanding of themselves and others." />
            </ListItem>

            {/* Add more list items as needed */}
          </List>

          {/* Qualitative Results and Analysis */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Qualitative Results and Analysis
          </Typography>
          <List>
            {/* List Item Example */}
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="The veteran teacher emphasizes creating a classroom environment that encourages students to share their cultural experiences, perspectives, and backgrounds." />
            </ListItem>

            {/* Add more list items as needed */}
          </List>

          {/* Recommendation Alignment */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Recommendation Alignment
          </Typography>
          <List>
            {/* List Item Example */}
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Interview Findings: The interview highlights the importance of fostering a classroom environment that promotes continual learning and adaptation." />
            </ListItem>

            {/* Add more list items as needed */}
          </List>
        </CardContent>
      </Card>

      {/* Container for Form Response Screenshots */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Grid container spacing={2}>
          {/* You can add images here */}
          {/* Example: <img src="your-image-path.jpg" alt="screenshot-1" /> */}
          <Grid item xs={12} sm={6} md={4}>
            <img src="/one.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/two.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/three.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/four.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/five.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/six.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/seven.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/eight.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/nine.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="/ten.png" alt="screenshot-1" style={{ width: '100%' }} />
          </Grid>

          {/* Add more Grid items for additional screenshots */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Two;
