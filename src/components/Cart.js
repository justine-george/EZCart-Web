import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Box, Divider } from '@mui/material';

const Cart = ({ cart, moveToWishlist, removeFromCart }) => {
    const getTotalPrice = () => {
        const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
        return totalPrice.toFixed(2);
    };

    return (
        <Box mt={4}>
            <Divider variant="middle" sx={{margin: 0, padding: 3}}/>
            <Typography variant="h3" component="h3" sx={{paddingTop: 5, paddingBottom: 1 }}>
                Cart
            </Typography>
            {cart.length === 0 ? (
                <div>Cart is empty</div>
            ) : (
                <div>
                    <List>
                        {cart.map((item) => (
                            <ListItem key={item.id}>
                                <ListItemText
                                    primary={item.title}
                                    secondary={`$${item.price} x ${item.quantity}`}
                                />
                                <ListItemSecondaryAction>
                                    <Button color="primary" onClick={() => moveToWishlist(item)}>
                                        Move to Wishlist
                                    </Button>
                                    <Button color="secondary" onClick={() => removeFromCart(item)}>
                                        Remove from Cart
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h6">Total: ${getTotalPrice()}</Typography>
                </div>
            )}
        </Box>
    );
};

export default Cart;
