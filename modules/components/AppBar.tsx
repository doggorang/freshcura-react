import * as React from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const AppBarRoot = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: '#A2C579',
}));

function AppBar<C extends React.ElementType>(
  props: AppBarProps<C, { component?: C }>,
) {
  // return <AppBarRoot {...props} />;
  return <AppBarRoot 
    elevation={0}
    position="fixed"
    {...props}
  />
}

export default AppBar;