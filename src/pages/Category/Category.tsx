import { Container } from '@mui/material';
import React from 'react';
import CreateCategory from '../../components/Manteniemiento/category/categorys';
import CategoryList from '../../components/Manteniemiento/category/listCategorys';

const CategoryPages: React.FC = () => {
    return (
        <Container >
            <CreateCategory />
            <  CategoryList />
        </Container>
    );
};

export default CategoryPages;
