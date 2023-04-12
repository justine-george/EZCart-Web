import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ProductFilter = ({ categories, onFilter }) => {
    const [selectedCategory, setSelectedCategory] = React.useState('');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
        onFilter(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                value={selectedCategory}
                onChange={handleChange}
                label="Category"
                sx={{
                    // width: 100
                }}
            >
                <MenuItem value="">
                    <em>All categories</em>
                </MenuItem>
                {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ProductFilter;
