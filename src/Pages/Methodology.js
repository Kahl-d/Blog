import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, LinearProgress, CircularProgress } from '@mui/material';
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
    <Container>
      <Typography variant="h4" gutterBottom>
        Methodology
      </Typography>

      <Typography variant="h6" gutterBottom>
        Quantitative Insights
      </Typography>
      <List>
        {/* Multimedia Integration */}
        <ListItem>
          <EmojiObjectsIcon />
          <ListItemText primary="Multimedia Integration" />
          <CircularProgress variant="determinate" value={80} size={24} />
        </ListItem>
        {/* Emotional Impact */}
        <ListItem>
          <SentimentVerySatisfiedIcon />
          <ListItemText primary="Emotional Impact" />
          <CircularProgress variant="determinate" value={80} size={24} />
        </ListItem>
        {/* Technology-Enabled Simulations */}
        <ListItem>
          <CodeIcon />
          <ListItemText primary="Technology-Enabled Simulations" />
          <CircularProgress variant="determinate" value={60} size={24} />
        </ListItem>
        {/* Least Restrictive Environment (LRE) Initiative */}
        <ListItem>
          <PeopleIcon />
          <ListItemText primary="Least Restrictive Environment (LRE) Initiative" />
          <LinearProgress variant="determinate" value={60} />
        </ListItem>
        {/* Common Core State Standards (CCSS) and Universal Design for Learning (UDL) */}
        <ListItem>
          <ThumbUpIcon />
          <ListItemText primary="Common Core State Standards (CCSS)" />
          <LinearProgress variant="determinate" value={60} />
        </ListItem>
        <ListItem>
          <QuestionAnswerIcon />
          <ListItemText primary="Universal Design for Learning (UDL)" />
          <LinearProgress variant="determinate" value={40} />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Qualitative Insights
      </Typography>
      <List>
        {/* Formative Assessments */}
        <ListItem>
          <FormatListNumberedIcon />
          <ListItemText primary="Formative Assessments" />
        </ListItem>
        {/* Criterion-Referenced Elements */}
        <ListItem>
          <SpellcheckIcon />
          <ListItemText primary="Criterion-Referenced Elements" />
        </ListItem>
        {/* Collaborative Environment */}
        <ListItem>
          <ChatBubbleOutlineIcon />
          <ListItemText primary="Collaborative Environment" />
        </ListItem>
        {/* Ethnographic Interviewing */}
        <ListItem>
          <PeopleIcon />
          <ListItemText primary="Ethnographic Interviewing" />
        </ListItem>
      </List>

      <Typography>
        Overall, this combined quantitative and qualitative approach provides a nuanced understanding of educators' viewpoints and suggests areas for improvement within educational practices and initiatives.
      </Typography>
    </Container>
  );
};

export default Methodology;
