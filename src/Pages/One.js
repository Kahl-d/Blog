import React from 'react';
import { Container, Typography, Card, CardContent, Link, Button, Grid } from '@mui/material';
import { PlayArrow as PlayArrowIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import ReactPlayer from 'react-player';

const SimplePage = () => {
  return (
    <Container>
      {/* Background Video */}
      <ReactPlayer
        url="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4"
        playing
        loop
        muted
        width="100%"
        height="auto"
        style={{ position: 'fixed', zIndex: -1 }}
      />

      <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px' }}>
        <CardContent>
          {/* Page Heading */}
          <Typography variant="h2" align="center" gutterBottom style={{ color: '#3f51b5' }}>
            Explore Action Research Studies
          </Typography>

          <Typography paragraph>
            To uncover the most impactful student-centered instructional methods and diverse learning strategies, action research was undertaken to explore teacher perspectives. This investigation aimed to identify the most effective tools and resources assisting educators in crafting inclusive, research-based lesson plans that prioritize student engagement.
          </Typography>

          {/* Video Play Section */}
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              {/* Play Icon */}
              <PlayArrowIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              {/* Video Link Button */}
              <Link href="https://www.canva.com/design/DAF1wj4fUqo/73VP3AthaztrTP5OlQzKvw/watch?utm_content=DAF1wj4fUqo&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" target="_blank" underline="none">
                <Button variant="contained" color="primary">
                  Watch Video
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Typography paragraph>
            While the Canva Video Presentation summarizes key qualitative research findings, quantitative research revealed the Universal Design for Learning strategy as the most effective multimodal learning approach in the classroom, as illustrated in the accompanying data.
          </Typography>

          {/* Video Link */}
          <Typography>
            Canva Video Presentation link:{' '}
            <Link href="https://www.canva.com/design/DAF1wj4fUqo/73VP3AthaztrTP5OlQzKvw/watch?utm_content=DAF1wj4fUqo&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" target="_blank" rel="noopener" color="secondary">
              <OpenInNewIcon />
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SimplePage;
