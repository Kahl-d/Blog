import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Collapse, ListItemIcon, IconButton, Paper } from '@mui/material';
import { Star as StarIcon, Edit as EditIcon, ArrowRight as ArrowRightIcon } from '@mui/icons-material';

import './rec.css';

const Recommendation = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const isSectionOpen = (section) => openSection === section;

  return (
    <Paper elevation={3} id="recommendationContainer" className="additionalContentContainer">
      <Container>
        <Typography variant="h4" gutterBottom>
          Recommendation
        </Typography>

        <List>
          {/* Tailored Professional Development */}
          <ListItem button onClick={() => handleClick('professionalDevelopment')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Tailored Professional Development:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('professionalDevelopment') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('professionalDevelopment')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Provide workshops for educators on incorporating multimedia, adaptive technologies, and simulations." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Emphasize strategies for fostering cognitive engagement and emotional well-being." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          {/* Curriculum Modification */}
          <ListItem button onClick={() => handleClick('curriculumModification')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Curriculum Modification:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('curriculumModification') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('curriculumModification')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Modify the curriculum to include diverse teaching materials and multimedia content." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Encourage critical thinking through technology-enabled simulations." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          {/* Support for the LRE Initiative */}
          <ListItem button onClick={() => handleClick('supportLRE')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Support for the LRE Initiative:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('supportLRE') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('supportLRE')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Offer enhanced support services for educators and students under the Least Restrictive Environment (LRE) initiative." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Provide specialized training for managing diverse classrooms" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          <ListItem button onClick={() => handleClick('Hol')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Holistic Learning Approach:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('Hol') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('Hol')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Introduce a holistic approach like the Cognitive Affective Theory of Learning with Media (CATLM)." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Emphasize the emotional impact of instructional media for a personalized learning environment." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          <ListItem button onClick={() => handleClick('RII')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Research-Informed Instructional Designs:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('RII') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('RII')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Research to inform instructional designs aligned with Universal Design for Learning (UDL)." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Integrate technology-enabled simulations and multimedia for differentiated instruction.." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          <ListItem button onClick={() => handleClick('ce')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Continuous Evaluations:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('ce') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('ce')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Implement a system for continuous evaluation and feedback." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Gather input from educators and students to adapt teaching strategies." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          <ListItem button onClick={() => handleClick('cc')}>
            <ListItemIcon>
              <StarIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Collaborative Learning Communities:" />
            <IconButton>
              <ArrowRightIcon style={{ transform: isSectionOpen('cc') ? 'rotate(90deg)' : 'none' }} />
            </IconButton>
          </ListItem>
          <Collapse in={isSectionOpen('cc')} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Foster collaborative learning communities among educators." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EditIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Promote the exchange of best practices and innovative teaching methodologies." />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          {/* Add similar structure for other sections */}
        </List>
      </Container>
    </Paper>
  );
};

export default Recommendation;
