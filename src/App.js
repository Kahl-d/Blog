// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import One from './Pages/One';
import Two from './Pages/Two';
import Three from './Pages/Three';
import Four from './Pages/Four';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';

const App = () => {
  return (

      <div id="appContainer">
        <AppBar position="static" color="primary">
          <Toolbar>
            
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Blog Title
            </Typography>
            <Button color="inherit" component={Link} to="/">
              <PeopleAltIcon />
            </Button>
            <Button color="inherit" component={Link} to="/one">
              <SchoolIcon />
            </Button>
            <Button color="inherit" component={Link} to="/two">
              <PeopleAltIcon />
            </Button>
            <Button color="inherit" component={Link} to="/three">
              <BusinessIcon />
            </Button>
            <Button color="inherit" component={Link} to="/four">
              <AssignmentIcon />
            </Button>
          </Toolbar>
        </AppBar>

        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/one" element={<One />} />
            <Route path="/two" element={<Two />} />
            <Route path="/three" element={<Three />} />
            <Route path="/four" element={<Four />} />
          </Routes>
        </div>
      </div>

  );
};

export default App;
