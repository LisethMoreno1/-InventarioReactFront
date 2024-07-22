import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';

interface DataGridProps<T extends GridValidRowModel> {
    rows: T[];
    columns: GridColDef<T>[];
}

const DataGridComponent = <T extends GridValidRowModel>({ rows, columns }: DataGridProps<T>) => {
    return (
        <Container maxWidth="lg">
            <Box sx={{
                backgroundColor: 'white',
                padding: 4,
                borderRadius: 2,
                boxShadow: 5,
                width: '100%',
                height: 500,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography variant="h4" component="h2" gutterBottom>
                 {Typography.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        sx={{
                            height: '80%',
                            width: '100%',
                            '& .MuiDataGrid-main': {
                                height: '100%',
                            }
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default DataGridComponent;
