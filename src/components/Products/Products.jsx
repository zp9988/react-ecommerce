import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Paginations from '../Paginations/Paginations';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  if (products.length === 0) return <p>Loading...</p>;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4}>
        {/* {products.map((product) => ( */}
        {currentPosts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      <Paginations
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </main>
  );
};

export default Products;
