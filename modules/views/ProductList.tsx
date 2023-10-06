'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';

const ProductListLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
}));

export default function ProductList() {
  //https://devrecipes.net/modal-component-with-next-js/
  const products = [
    {
      id: 1,
      name: 'LEGO Brand Day!',
      price: 519000,
      image: 'https://i.imgur.com/LEGO-Brand-Day.png',
      category: 'Toys',
    },
    {
      id: 2,
      name: 'Huawei Band 8',
      price: 499000,
      image: 'https://i.imgur.com/Huawei-Band-8.png',
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Kiddy Food Maker 7 in 1 Set',
      price: 48000,
      image: 'https://i.imgur.com/Kiddy-Food-Maker.png',
      category: 'Home & Kitchen',
    },
    {
      id: 4,
      name: 'Advan Notebook Laptop Workpro',
      price: 5099000,
      image: 'https://i.imgur.com/Advan-Notebook-Laptop-Workpro.png',
      category: 'Electronics',
    },
  ];
  const categories = ['All', 'Toys', 'Electronics', 'Home & Kitchen'];
  return (
    <ProductListLayoutRoot
      sx={{
        backgroundColor: "white",
      }}
    >
      <Divider>.</Divider>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>

      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category}>
            <Button variant="outlined">{category}</Button>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 1,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img src={product.image} alt={product.name} />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">Rp{product.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

    </ProductListLayoutRoot>
  );
}