import { FileDownload as FileDownloadIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';
import React from 'react';
import * as XLSX from 'xlsx';
import { ProductIList } from '../../../interfaces/Products/listaProduct';

interface ExcelExporterProps {
    data: ProductIList[];
    filename: string;
    columns: string[];
}

const ExcelExporter: React.FC<ExcelExporterProps> = ({ data, filename, columns }) => {
    const exportToExcel = () => {
        // Crear un nuevo libro de trabajo
        const wb = XLSX.utils.book_new();

        // Preparar datos para la hoja de cálculo
        const formattedData = data.map(item => ({
            id: item.id,
            nameofProduct: item.nameofProduct || '',
            description: item.description || '',
            price: item.price || '',
            quantityAvailable: item.quantityAvailable || '',
            categoryName: item.category?.categoryName || '',
        }));

        // Crear la hoja de cálculo a partir de los datos
        const ws = XLSX.utils.json_to_sheet(formattedData, { header: columns });

        // Agregar la hoja de cálculo al libro de trabajo
        XLSX.utils.book_append_sheet(wb, ws, 'Product');

        // Generar el archivo Excel y descargarlo
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);
    };

    return (
        <Button
            onClick={exportToExcel}
            variant="contained"
            color="primary"
            size="small"
            startIcon={<FileDownloadIcon />}
        >
            Excel
        </Button>
    );
};

export default ExcelExporter;
