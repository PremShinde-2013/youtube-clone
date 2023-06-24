/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import React from 'react';
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: 'black' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        {/* <Route path="/video/:id" element={<VideoDetail/>} /> */}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
