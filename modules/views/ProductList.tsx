'use client'
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import { Modal } from '@mui/material';

const ProductListLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
}));

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const useHandleClickOpen = () => {
  const [openBoolean, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return {
    openBoolean,
    handleClickOpen,
    handleClose,
  };
};


const ProductModal = ({ product }: { product: Product }) => {
  return (
    <Box sx={{ width: 400 }}>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body1">{product.price}</Typography>
      <img src={product.image} alt={product.name} />
      <Typography variant="body1">{product.description}</Typography>
    </Box>
  );
};

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openBoolean, handleClickOpen, handleClose } = useHandleClickOpen();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    handleClickOpen();
  };
  //devrecipes.net/modal-component-with-next-js/
  const products: Product[] = [
    {
      id: 1,
      name: 'LEGO Brand Day!',
      price: 519000,
      image: 'https://i.imgur.com/YNIchsz.jpeg',
      category: 'Toys',
    },
    {
      id: 2,
      name: 'Huawei Band 8',
      price: 499000,
      image: 'https://i.imgur.com/gvftwMw.jpeg',
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Kiddy Food Maker 7 in 1 Set',
      price: 48000,
      image: 'https://i.imgur.com/KW21v2P.jpeg',
      category: 'Home & Kitchen',
    },
    {
      id: 4,
      name: 'Advan Notebook Laptop Workpro',
      price: 5099000,
      image: 'https://i.imgur.com/1o3KcN6.png',
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
        m="auto"
        sx={{
          width: 500,
          maxWidth: '100%'
        }}
      >
        <TextField fullWidth label="Search" id="Search" />
      </Box>

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        m="auto"
      >
        {categories.map((category) => (
          <Grid item key={category}>
            <Button variant="outlined">{category}</Button>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={2}
        m="auto"
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Box
              onClick={() => handleProductClick(product)}
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

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={openBoolean}
        onClose={() => handleClose()}
      >
        <ProductModal product={selectedProduct!} />
      </Modal>

    </ProductListLayoutRoot>
  );
}