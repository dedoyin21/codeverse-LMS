import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchInput = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', }}>
      <TextField
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <img 
              src="https://img.icons8.com/ios-glyphs/30/000000/search.png" // Replace with your search icon if needed
              alt="search-icon"
              style={{ marginRight: 8 }}
            />
          ),
        }}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            backgroundColor: '#f4f4f4',
          },
        }}
      />
    </Box>
  );
};

export default SearchInput;
