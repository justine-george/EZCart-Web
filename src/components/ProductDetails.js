import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';
import { Typography, Button, FormControl, InputLabel, Select, MenuItem, CardMedia } from '@mui/material';

const ProductDetails = ({ addToCart }) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const cachedProductData = localStorage.getItem(`product-${id}`);
            const currentTime = new Date().getTime();
            const cacheTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds

            if (cachedProductData) {
                const { productData, timestamp } = JSON.parse(cachedProductData);

                if (currentTime - timestamp < cacheTimeout) {
                    console.log('Using cached product:', productData); // Add log
                    setProduct(productData);
                    return;
                }
            }

            const fetchedProduct = await ProductService.getProductById(id);
            console.log('Fetched product:', fetchedProduct.data); // Add log
            setProduct(fetchedProduct.data);
            localStorage.setItem(
                `product-${id}`,
                JSON.stringify({ productData: fetchedProduct.data, timestamp: currentTime })
            );
        };

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div>
            <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.title}
                sx={{
                    aspectRatio: 1 / 1
                }}
            />
            <Typography variant="h3" sx={{ paddingTop: 5 }}>{product.title}</Typography>
            <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>Category: {product.category}</Typography>
            <Typography variant="subtitle1">Price: ${product.price}</Typography>
            <Typography variant="body1" sx={{ paddingBottom: 5 }}>Description: {product.description}</Typography>
            <FormControl>
                <InputLabel>Quantity</InputLabel>
                <Select
                    value={quantity}
                    onChange={handleQuantityChange}
                    label="Quantity"
                    sx={{
                        width: 100,
                        height: 50
                    }}
                >
                    {[...Array(10).keys()].map((_, index) => (
                        <MenuItem key={index + 1} value={index + 1}>
                            {index + 1}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleAddToCart}
                sx={{
                    marginLeft: 5,
                    // width: 100,
                    height: 50
                }}>
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductDetails;
