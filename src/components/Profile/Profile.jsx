/** @format */

import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';

import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const favoriteMovies = [];
  console.log('Profile');
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp;
          <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">No favorite movies add them here</Typography>
      ) : (
        <Box> FAVE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
