import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Collapse, ListItemIcon, IconButton } from '@mui/material';
import { Star as StarIcon, Edit as EditIcon, School as SchoolIcon, ArrowRight as ArrowRightIcon, Group as GroupIcon, Gavel as GavelIcon, Public as PublicIcon } from '@mui/icons-material';
import './rec.css'; 
const Recommendation = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div id="recommendationContainer" className="additionalContentContainer">
      <Container>
        <Typography variant="h4" gutterBottom>
          Recommendation
        </Typography>

        <List id="rec">
          {/** Tailored Professional Development */}
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Tailored Professional Development:" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Provide workshops for educators on incorporating multimedia, adaptive technologies, and simulations." />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Emphasize strategies for fostering cognitive engagement and emotional well-being." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          {/** Curriculum Modification */}
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Curriculum Modification:" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Modify the curriculum to include diverse teaching materials and multimedia content." />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Encourage critical thinking through technology-enabled simulations." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          {/** Support for the LRE Initiative */}
          {/** Curriculum Modification */}
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Support for the LRE Initiative:" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Offer enhanced support services for educators and students under the Least Restrictive Environment (LRE) initiative." />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Provide specialized training for managing diverse classrooms" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />


            {/** Curriculum Modification */}
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Holistic Learning Approach" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Introduce a holistic approach like the Cognitive Affective Theory of Learning with Media (CATLM)." />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Emphasize the emotional impact of instructional media for a personalized learning environment." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />


           {/** Curriculum Modification */}
           <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Research-Informed Instructional Designs" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Research to inform instructional designs aligned with Universal Design for Learning (UDL)." />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Integrate technology-enabled simulations and multimedia for differentiated instruction." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />


           {/** Curriculum Modification */}
           <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Continuous Evaluation" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Implement a system for continuous evaluation and feedback." />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Gather input from educators and students to adapt teaching strategies." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

           {/** Curriculum Modification */}
           <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Collaborative Learning Communities" />
            <IconButton>
              {open ? <ArrowRightIcon /> : <ArrowRightIcon style={{ transform: 'rotate(90deg)' }} />}
            </IconButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Foster collaborative learning communities among educators" />
              </ListItem>
              <ListItem style={{ paddingLeft: '2rem' }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Promote the exchange of best practices and innovative teaching methodologies.
" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />




          

          {/* Add similar structure for other sections */}
        </List>
      </Container>
    </div>
  );
};

export default Recommendation;
