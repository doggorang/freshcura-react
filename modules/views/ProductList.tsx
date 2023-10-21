'use client'
import { forwardRef, useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import { Modal } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import CloseIcon from '@mui/icons-material/Close';

const ProductListLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
}));

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  ref_benefit?: string;
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

type ModalProps = {
  product: Product,
  handleClose: any
};
const ProductModal = forwardRef<HTMLDivElement, ModalProps>(({ product, handleClose }, ref) => {
  return (
    <Box
      ref={ref}
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h6">{product.name}</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
      >
        <img src={product.image} alt={product.name} width={"370px"} height={"280px"}/>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Typography variant="body1" color="black">{product.description}</Typography>
          
          <Link href={product.ref_benefit}>Journal Reference</Link>
        </Stack>
      </Stack>
    </Box>
  );
});

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dataResponse, setDataResponse] = useState([]);
  const [page, setPage] = useState(1);
  const { openBoolean, handleClickOpen, handleClose } = useHandleClickOpen();
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    handleClickOpen();
  };
  useEffect(() => {
    async function getIngredients() {
      const limit = 3;
      const apiURLEndpoint = `https://vcoapi.000webhostapp.com/api/v1/ingredients?limit=${limit}&offset=${(page - 1) * limit}`;
      const response = await fetch(apiURLEndpoint);
      const res = await response.json();
      setDataResponse(res.data);
    };
    getIngredients();
  }, [page]);

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
        {dataResponse.map((product: Product) => (
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
              <Typography variant="body1" color="black">{product.description}</Typography>
              <Button onClick={() => handleProductClick(product)}>
                Detail
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        m="auto"
      >
        <Pagination count={3}
          size="large"
          showFirstButton
          showLastButton
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={(event, page) => {
            setPage(page);
          }}
        />
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