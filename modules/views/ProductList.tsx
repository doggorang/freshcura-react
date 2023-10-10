'use client'
import { usePathname } from 'next/navigation'
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
  ID: number;
  NAME: string;
  IMAGE: string;
  DESCRIPTION: string;
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
        <Typography variant="h6">{product.NAME}</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Box display="flex">
        <Box display="contents" marginRight={"2%"}>
          <img src={product.IMAGE} alt={product.NAME} width={"370px"} height={"280px"}/>
        </Box>
        <Box marginLeft={"2%"}>
          <Typography variant="body1" color="black">{product.DESCRIPTION}</Typography>
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
      const apiURLEndpoint = `${window.location.origin}/api/ingredients`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.results);
    }
    getIngredients();
  }, []);

  const products: Product[] = [
    {
      ID: 1,
      NAME: 'LEGO Brand Day!',
      IMAGE: 'https://i.imgur.com/YNIchsz.jpeg',
      DESCRIPTION: 'Toys',
    },
    {
      ID: 2,
      NAME: 'Huawei Band 8',
      IMAGE: 'https://i.imgur.com/gvftwMw.jpeg',
      DESCRIPTION: 'Electronics',
    },
    {
      ID: 3,
      NAME: 'Kiddy Food Maker 7 in 1 Set',
      IMAGE: 'https://i.imgur.com/KW21v2P.jpeg',
      DESCRIPTION: 'Home & Kitchen',
    },
    {
      ID: 4,
      NAME: 'Advan Notebook Laptop Workpro',
      IMAGE: 'https://i.imgur.com/1o3KcN6.png',
      DESCRIPTION: 'Electronics',
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
          <Grid item key={product.ID} xs={12} sm={6} md={4}>
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
                  backgroundImage: `url(${product.IMAGE})`,
                  backgroundSize: 'cover',
                }}
              >
              </Box>
              <Typography variant="h6">{product.NAME}</Typography>
              <Typography variant="body1" color="black">{product.DESCRIPTION}</Typography>
              <Button onClick={() => handleProductClick(product)}>
                Detail
              </Button>
            </Box>
          </Grid>
        ))}
        {dataResponse.map((p: Product) => (
          <Grid item key={p.ID} xs={12} sm={6} md={4}>
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
                  backgroundImage: `url(${p.IMAGE})`,
                  backgroundSize: 'cover',
                }}
              >
              </Box>
              <Typography variant="h6">{p.NAME}</Typography>
              <Typography variant="body1" color="black">Rp{p.DESCRIPTION}</Typography>
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