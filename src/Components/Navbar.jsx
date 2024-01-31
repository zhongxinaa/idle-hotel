import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
      <Stack direction="row" spacing={10} justifyContent='center' alignItems={'center'} height='70px'>
          <Link to="/addHotel" style={{ textDecoration: 'none' }}>
            <Typography  color="white"   component="p" sx={{ flexGrow: 1 }}>
              ADD HOTELS
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography color="white" component="p" sx={{ flexGrow: 1 }}>
              SHOW HOTELS
            </Typography>
          </Link>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <Typography color="white" component="p" sx={{ flexGrow: 1 }}>
              ADMIN PAGE
            </Typography>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Typography color="white" component="p" sx={{ flexGrow: 1 }}>
              LOGIN
            </Typography>
          </Link>
          </Stack>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// <nav>
// <h3><Link to='/'>Home</Link></h3>
// <h3><Link to='/login'>Login</Link></h3>
// <h3><Link to='/admin'>Admin</Link></h3>
// <h3><Link to='/addHotel'>Add Hotels</Link></h3>
// </nav>
