import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        height: '50px',
        marginTop: '20px',
        padding: '10px',
      }}
    >
      <Typography variant="caption">
        Oh Cake | 100 Cake Road, Cake Town | ok@OhCake
      </Typography>
    </div>
  );
};

export default Footer;
