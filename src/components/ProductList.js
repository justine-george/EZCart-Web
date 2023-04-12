import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';
import ProductFilter from './ProductFilter';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const cachedProductsData = localStorage.getItem('allProducts');
            const currentTime = new Date().getTime();
            const cacheTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds

            if (cachedProductsData) {
                const { productsData, timestamp } = JSON.parse(cachedProductsData);

                if (currentTime - timestamp < cacheTimeout) {
                    console.log('Using cached products:', productsData); // Add log
                    setProducts(productsData);
                    setCategories([...new Set(productsData.map((product) => product.category))]);
                    return;
                }
            }

            const fetchedProducts = await ProductService.getAllProducts();
            console.log('Fetched products:', fetchedProducts.data); // Add log
            setProducts(fetchedProducts.data);
            setCategories([...new Set(fetchedProducts.data.map((product) => product.category))]);
            localStorage.setItem(
                'allProducts',
                JSON.stringify({ productsData: fetchedProducts.data, timestamp: currentTime })
            );
        };

        fetchProducts();
    }, []);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    const handleFilter = (category) => {
        if (category) {
            ProductService.getProductsByCategory(category).then((response) => {
                setProducts(response.data);
            });
        } else {
            ProductService.getAllProducts().then((response) => {
                setProducts(response.data);
            });
        }
    };

    return (
        <div>
            <Typography variant="h2" component="h2" sx={{ paddingTop: 5, paddingBottom: 3 }}>
                EZ-Cart
            </Typography>
            <ProductFilter categories={categories} onFilter={handleFilter} />
            <Grid sx={{ paddingTop: 5 }} container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.image}
                                alt={product.title}
                                sx={{
                                    aspectRatio: 1/1
                                }}
                            />
                            <CardContent >
                                <Typography component={Link} to={`/product/${product.id}`} variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="body1">${product.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
