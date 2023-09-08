import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import FloatingButton from '../components/FloatingButton';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function Header() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'Frescura'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              {'Home'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/about"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'About'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/product"
              sx={rightLink}
            >
              {'Product'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/contact"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'contact'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <FloatingButton />
    </div>
  );
}

export default Header;