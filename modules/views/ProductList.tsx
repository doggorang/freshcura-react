'use client'
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProductListLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
}));

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  reference_benefit?: string;
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

const ProductModal = ({ product, handleClose }: { product: Product, handleClose: any }) => {
  return (
    <Box
      sx={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
      alignItems="center"
      justifyContent="center"
      m="auto"
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">{product.name}</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Box display="flex">
        <Box marginRight={"2%"}>
          <Typography variant="body1" color="black">{product.description}</Typography>
          <img src={product.image} alt={product.name} width={"370px"} height={"280px"}/>
        </Box>
        <Box marginLeft={"2%"}>
          <Typography variant="body1" color="black">description</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dataResponse, setDataResponse] = useState([]);
  const { openBoolean, handleClickOpen, handleClose } = useHandleClickOpen();
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    handleClickOpen();
  };
  useEffect(() => {
    async function getIngredients() {
      const apiURLEndpoint = `/api/ingredients`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.results);
    }
    getIngredients();
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: 'LEGO Brand Day!',
      image: 'https://i.imgur.com/YNIchsz.jpeg',
      description: 'Toys',
    },
    {
      id: 2,
      name: 'Huawei Band 8',
      image: 'https://i.imgur.com/gvftwMw.jpeg',
      description: 'Electronics',
    },
    {
      id: 3,
      name: 'Kiddy Food Maker 7 in 1 Set',
      image: 'https://i.imgur.com/KW21v2P.jpeg',
      description: 'Home & Kitchen',
    },
    {
      id: 4,
      name: 'Advan Notebook Laptop Workpro',
      image: 'https://i.imgur.com/1o3KcN6.png',
      description: 'Electronics',
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
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              sx={{
                padding: 2,
                borderRadius: 1,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Box
                width={"370px"}
                height={"280px"}
                sx={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                }}
              >
              </Box>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1" color="black">Rp{product.description}</Typography>
              <Button onClick={() => handleProductClick(product)}>
                Detail
              </Button>
            </Box>
          </Grid>
        ))}
        {dataResponse.map((p: Product) => (
          <Grid item key={p.id} xs={12} sm={6} md={4}>
            <Box
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              sx={{
                padding: 2,
                borderRadius: 1,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Box
                width={"370px"}
                height={"280px"}
                sx={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                }}
              >
              </Box>
              <Typography variant="h6">{p.name}</Typography>
              <Typography variant="body1" color="black">Rp{p.description}</Typography>
              <Button onClick={() => handleProductClick(p)}>
                Detail
              </Button>
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
        <ProductModal product={selectedProduct!} handleClose={handleClose} />
      </Modal>

    </ProductListLayoutRoot>
  );
}