import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { User } from '../../../interfaces/Users/User';

interface DataGridProps {
    rows: User[];
    columns: GridColDef<any>[];
}

const DataGridComponent: React.FC<DataGridProps> = ({ rows, columns }) => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default DataGridComponent;
