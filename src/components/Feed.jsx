/** @format */

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useState, useEffect } from 'react';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        Sidebar
      </Box>
    </Stack>
  );
};

export default Feed;
