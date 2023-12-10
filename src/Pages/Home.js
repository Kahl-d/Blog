// Home.js

import React, { useState } from 'react';
import Banner from './Banner';
import Recommendation from './Recommendation';
import Methodology from './Methodology';
import './home.css';
import {
  Card,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Home = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState('/one');

  const onButtonClick = (value) => {
    setPath(value);
    navigate(path);
  };

  return (
    <div>
      

      <Container id="home">
        
          {/* <div>CI6103</div>
          <div>Curriculum and Instruction Design for Diversity</div>
          <div>Sharing Action Research Using Technology</div> */}

          <Banner />
        

        <div id="intro">
          <h1>Nurturing Success: A Journey Through Effective Teaching Strategies</h1>
          <p>
            In the dynamic realm of education, where the kaleidoscope of student needs and
            engagement levels constantly evolves, educators worldwide seek to discover the
            most potent tools and methodologies for fostering student success. Welcome to
            the blog, where educators delve into the rich tapestry of instructional
            approaches supported by a foundation of rigorous action research. Through an
            amalgamation of text, visuals, and various media, the aim is to illuminate the
            pathways educators can traverse to tailor their curriculum and instruction
            effectively. In the following pages, we will engage in a reflective and
            conversational exploration, weaving together our journey's quantitative and
            qualitative insights. From student-centered instructional methods to strategies
            for diverse learners, teacher perceptions, classroom management techniques, and
            the art of crafting impactful lesson plans join us in deciphering the intricate
            dance that unfolds within the educational landscape. Together, let's embark on a
            voyage where knowledge transforms into action, shaping the future of our
            classrooms with wisdom drawn from experience and research.
          </p>
        </div>

        <Grid container spacing={3} id="readMoreContainer">
          <Grid item xs={12} sm={6} md={3}>
            <Card className="readMore" sx={{ bgcolor: '#FFC107', color: 'white' }}>
              <SchoolIcon sx={{ fontSize: 50 }} />
              <h2>Instructional Methods and Strategies</h2>
              <p>
                Educators should understand the significance of catering to diverse learning
                needs and incorporating student-centered instructional methods. Explore
                further by clicking "Read More" to delve into student-centered activities
                and various learning strategies grounded in action research.
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/one')}
              >
                Read More
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="readMore" sx={{ bgcolor: '#03A9F4', color: 'white' }}>
              <PeopleIcon sx={{ fontSize: 50 }} />
              <h2>Teacher Perceptions</h2>
              <p>
                Explore a wealth of insights into practical classroom strategies, tools,
                instructional methods, and activities through a qualitative interview.
                Discover teacher perspectives on selecting impactful tools and resources by
                clicking "Read More" to delve into the interview responses.
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/two')}
              >
                Read More
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="readMore" sx={{ bgcolor: '#E91E63', color: 'white' }}>
              <AssignmentIcon sx={{ fontSize: 50 }} />
              <h2>Management Techniques</h2>
              <p>
                Empowering diversity and enriching differentiated instruction necessitate
                educators to deploy effective classroom management strategies. Uncover the
                intricacies of these approaches in an insightful infographic by clicking on
                "Read More."
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/three')}
              >
                Read More
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="readMore" sx={{ bgcolor: '#4CAF50', color: 'white' }}>
              <BusinessIcon sx={{ fontSize: 50 }} />
              <h2>Lesson Plan Development</h2>
              <p>
                Crafting impactful lessons involves the ability of educators to seamlessly
                integrate multiple subjects, fostering connections across diverse topics and
                enhancing engagement. Discover how educators can achieve this by
                incorporating writing across the curriculum by clicking "Read More" to
                explore effective classroom practices!
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/four')}
              >
                Read More
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Content */}
        <div id="purposeProblemContainer" className="additionalContentContainer">
          <h2>Purpose</h2>
          <p>
          In educational challenges, action research offers educators a structured and reflective approach to address teaching methodology shortcomings. By emphasizing the importance of Universal Design for Learning (UDL) and Differentiated Instruction (DI), this method empowers educators to actively design strategies accommodating diverse learning needs. This inclusive approach encourages instructors to evaluate pedagogical efficacy, identify areas for improvement, and experiment with innovative methods, fostering inclusivity for all students. Through action research, teachers gather practical evidence on the impact of their instructional techniques, facilitating informed decisions and revisions. Integrating UDL and DI cultivates a more inclusive learning environment, promoting impartial academic opportunities and comprehensive scholar development.
          </p>
          <h2>
            Problem Statement
          </h2>
          <p>
          Modern education addresses diverse student needs, particularly in the practical application of Universal Design for Learning (UDL) and Differentiated Instruction (DI). The current educational framework falls short in accommodating varied learning styles, hindered by standardized curricula. This deficiency obstructs the creation of an inclusive learning environment, impeding academic progress for students with diverse backgrounds and abilities. Simultaneously, a persistent educational outcome gap between special and general education students necessitates tailored support. To overcome these barriers, emphasizing UDL and DI within the action research framework is crucial, as well as introducing evidence-based instructional strategies for an inclusive and supportive learning environment and ensuring equitable opportunities for all students.
          </p>
        </div>

        {/* Methodology Section */}
        <div id="methodologyContainer" className="additionalContentContainer">
          <Methodology/>
          {/* ... Your methodology content goes here */}
        </div>

        {/* Recommendation Section */}
        <div id="recommendationContainer" className="additionalContentContainer">
          <Recommendation/>
          {/* ... Your recommendation content goes here */}
        </div>

        {/* Conclusion Section */}
        <div id="conclusionContainer" className="additionalContentContainer">
          <h2>Conclusion</h2>
          <Typography>
            Insights into effective education practices emphasize the role of multimedia, technology, and inclusive learning environments. Recognition of emotional impact, personalized approaches, and support for initiatives like LRE and CCSS is crucial. Positive responses to cognitive and affective theories and Universal Design for Learning principles are evident. Ongoing professional development remains essential for educators. Institutions should leverage these insights for continuous improvement in teaching and learning, fostering a culture of innovation. 
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Home;
