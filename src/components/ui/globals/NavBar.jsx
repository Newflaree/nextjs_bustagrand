// Reacto
import { useContext } from 'react';
// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
// Material UI
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography
} from '@mui/material';
// Material Icons
import MenuIcon from '@mui/icons-material/Menu';
// Context
import { UIContext } from '@/context';


export const NavBar = () => {
  const { toggleSideMenu } = useContext( UIContext );

  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href='/'
          passHref
          legacyBehavior
        >
          <Link
            display='flex'
            alignItems='center'
            color='black'
          >
            <Image 
              src={ '/logo.jpg' }
              alt='logo'
              width={ 40 }
              height={ 40 }
            />
            <Typography ml={ 1 }>Bustagrand</Typography>
          </Link>
        </NextLink>
      </Toolbar>

      <Box flex={ 1 } />

      <Box>

      </Box>
    </AppBar>
  );
}
