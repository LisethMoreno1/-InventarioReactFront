import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';

interface DataGridProps<T extends GridValidRowModel> {
    rows: T[];
    columns: GridColDef<T>[];
    children?: React.ReactNode;
}

const DataGridComponent = <T extends GridValidRowModel>({ rows, columns, children }: DataGridProps<T>) => {
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
                <Box sx={{ paddingBottom: 2 }}>
      
                    {children && (
                        <Typography variant="h5" component="h2" gutterBottom>
                            {children}
                        </Typography>
                    )}
                </Box>
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
                            height: '100%',
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
