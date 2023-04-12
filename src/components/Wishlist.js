import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Divider } from '@mui/material';

const Wishlist = ({ wishlist, moveToCart, removeFromWishlist }) => {
    return (
        <Box mt={4}>
            <Divider variant="middle" sx={{margin: 0, padding: 3}}/>
            <Typography variant="h3" component="h3" sx={{paddingTop: 5, paddingBottom: 1 }}>
                Wishlist
            </Typography>
            {wishlist.length === 0 ? (
                <div>Wishlist is empty</div>
            ) : (
                <div>
                    <List>
                        {wishlist.map((item) => (
                            <ListItem key={item.id}>
                                <ListItemText primary={item.title} secondary={`$${item.price}`} />
                                <ListItemSecondaryAction>
                                    <Button color="primary" onClick={() => moveToCart(item)}>
                                        Move to Cart
                                    </Button>
                                    <Button color="secondary" onClick={() => removeFromWishlist(item)}>
                                        Remove from Wishlist
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
            <Typography variant="h3" component="h3" sx={{paddingBottom: 10 }}>
                
            </Typography>
        </Box>
    );
};

export default Wishlist;
