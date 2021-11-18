import React from 'react';
import Pagination from "@material-ui/lab/Pagination";
import {Box} from "@material-ui/core"

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }  

  return (
    <Box py={3} display="flex" justifyContent="center">       
       
      <Pagination
        count={pageNumbers.length}
        color="secondary"
        variant="outlined"
        onChange={(e, number) => paginate(number)}       
    
      />       
     
    </Box>
  );
};

export default Paginations;