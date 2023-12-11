import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  CircularProgress,
  Paper,
} from '@mui/material';
import {
  EmojiObjects as EmojiObjectsIcon,
  SentimentVerySatisfied as SentimentVerySatisfiedIcon,
  Code as CodeIcon,
  People as PeopleIcon,
  ThumbUp as ThumbUpIcon,
  QuestionAnswer as QuestionAnswerIcon,
  FormatListNumbered as FormatListNumberedIcon,
  Spellcheck as SpellcheckIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
} from '@mui/icons-material';

const Methodology = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Methodology
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Quantitative Insights
        </Typography>
        <List>
          {/* Multimedia Integration */}
          <ListItem>
            <EmojiObjectsIcon />
            <ListItemText
              primary="Multimedia Integration"
              secondary="80% of educators agreed or strongly agreed that including multimedia enriches cognitive engagement in learning."
            />
            {/* <CircularProgress variant="determinate" value={80} size={24} sx={{ ml: 2 }} /> */}
          </ListItem>
          {/* Emotional Impact */}
          <ListItem>
            <SentimentVerySatisfiedIcon />
            <ListItemText
              primary="Emotional Impact"
              secondary="80% of educators consider the dynamic influence of instructional media on students' learning adventures."
            />
            {/* <CircularProgress variant="determinate" value={80} size={24} sx={{ ml: 2 }} /> */}
          </ListItem>
          {/* Technology-Enabled Simulations */}
          <ListItem>
            <CodeIcon />
            <ListItemText
              primary="Technology-Enabled Simulations"
              secondary="60% of educators agreed that integrating technology-enabled simulations enhances critical thinking and problem-solving abilities."
            />
            {/* <CircularProgress variant="determinate" value={60} size={24} sx={{ ml: 2 }} /> */}
          </ListItem>
          {/* Least Restrictive Environment (LRE) Initiative */}
          <ListItem>
            <PeopleIcon />
            <ListItemText
              primary="Least Restrictive Environment (LRE) Initiative"
              secondary="60% were neutral, while 40% strongly agreed with promoting a more inclusive and equitable learning environment."
            />
            {/* <LinearProgress variant="determinate" value={60} sx={{ ml: 2 }} /> */}
          </ListItem>
          {/* Common Core State Standards (CCSS) and Universal Design for Learning (UDL) */}
          <ListItem>
            <ThumbUpIcon />
            <ListItemText
              primary="Common Core State Standards (CCSS)"
              secondary="60% indicated agreement with the effectiveness of CCSS, while 40% expressed a neutral stance regarding UDL's contribution to a more thorough learning experience."
            />
            {/* <LinearProgress variant="determinate" value={60} sx={{ ml: 2 }} /> */}
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Qualitative Insights
        </Typography>
        <List>
          {/* Formative Assessments */}
          <ListItem>
            <FormatListNumberedIcon />
            <ListItemText
              primary="Formative Assessments"
              secondary="Incorporating formative assessments to monitor student progress."
            />
          </ListItem>
          {/* Criterion-Referenced Elements */}
          <ListItem>
            <SpellcheckIcon />
            <ListItemText
              primary="Criterion-Referenced Elements"
              secondary="Integrating criterion-referenced elements, such as defined learning objectives and rubrics, to ensure alignment with educational standards."
            />
          </ListItem>
          {/* Collaborative Environment */}
          <ListItem>
            <ChatBubbleOutlineIcon />
            <ListItemText
              primary="Collaborative Environment"
              secondary="Creating a collaborative environment for educators to share best practices and strategies, fostering a comprehensive approach to curricular design."
            />
          </ListItem>
          {/* Ethnographic Interviewing */}
          <ListItem>
            <PeopleIcon />
            <ListItemText
              primary="Ethnographic Interviewing"
              secondary="Incorporating ethnographic interviewing to better understand educators' perspectives by considering cultural, social, and contextual factors."
            />
          </ListItem>
        </List>
      </Paper>

      <Typography>
        Overall, this combined quantitative and qualitative approach provides a nuanced understanding of educators' viewpoints and suggests areas for improvement within educational practices and initiatives.
      </Typography>
    </Container>
  );
};

export default Methodology;
