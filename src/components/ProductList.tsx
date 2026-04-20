import {
  Grid,
  Box,
  Paper,
  Pagination,
  Card,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useProducts } from "../hooks/UseProducts";
import type { Product } from "../types/Product";
import { ProductView } from "./ProductView";
import { FiltersList } from "./FiltersList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { useState } from "react";

export function ProductList() {
  const {
    products,
    loading,
    error,
    listProducts,
    createProduct,
    deleteProduct,
    updateProduct,
  } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState("creationDate,desc");
  const pageSize: number = 12;

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
    listProducts(value - 1, pageSize, currentSort);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setCurrentSort(event.target.value as string);
    listProducts(currentPage - 1, pageSize, event.target.value as string);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ShoppingCartIcon sx={{ fontSize: 48, p: 0.5 }} />
            <Typography variant="h4" component="div">
              NIE ALLEGRO
            </Typography>
            <Card sx={{ p: 2, m: 4, flexGrow: 1 }}>
              <TextField
                label="Czego szukasz?"
                variant="standard"
                color="primary"
                sx={{ width: "100%" }}
              />
            </Card>
            <Avatar
              sx={{
                bgcolor: "white",
                color: "primary.main",
                fontSize: 36,
                width: 56,
                height: 56,
              }}
            >
              A
            </Avatar>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={3}>
          <FiltersList />
        </Grid>
        {!loading && error === null && products != null && (
          <>
            <Grid size={9}>
              <Card>
                <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                  <FormControl
                    sx={{ width: "fit-content", minWidth: 140 }}
                    fullWidth
                  >
                    <InputLabel id="Sorting-id">Sortowanie</InputLabel>
                    <Select
                      defaultValue="creationDate,desc"
                      labelId="Sorting-id"
                      value={currentSort}
                      label="Sortowanie"
                      onChange={handleSortChange}
                    >
                      <MenuItem value="title,asc">Tytuł: A-Z</MenuItem>
                      <MenuItem value="title,desc">Tytuł Z-A</MenuItem>
                      <MenuItem value="price,asc">Cena: od najnizszej</MenuItem>
                      <MenuItem value="price,desc">
                        Cena: od najwyzszej
                      </MenuItem>
                      <MenuItem value="creationDate,desc">
                        Czas dodania: najnowsze
                      </MenuItem>
                      <MenuItem value="creationDate,asc">
                        Czas dodania: najstarsze
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Grid
                  container
                  sx={{ justifyContent: "center", p: 1 }}
                  spacing={0.5}
                >
                  {products.content.map((product: Product) => {
                    return (
                      <Grid size={4} key={product.id}>
                        <ProductView
                          id={product.id}
                          creation_date={product.creationDate}
                          title={product.title}
                          description={product.description}
                          creator_user_id={product.creatorUserId}
                          image_url={product.imageUrl}
                          price={product.price}
                        />
                      </Grid>
                    );
                  })}
                  <Grid size={12}>
                    <Paper
                      elevation={0}
                      sx={{
                        py: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Pagination
                        count={products.totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        size="large"
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
