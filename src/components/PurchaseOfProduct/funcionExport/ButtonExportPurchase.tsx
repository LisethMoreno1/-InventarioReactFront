import { Container } from '@mui/material';
import 'jspdf-autotable';
import React, { useState } from 'react';
import { purchaseOfProductI } from '../../../interfaces/PurchaseOfProduct/purchaseOfProduct';
import PDFExporter from '../../componentesGenerales/PDF/GeneralPDFExporter';
import { Box } from '@mui/system';
import ExcelExporter from './ExcelExporterPurchase';

const ButtonExport = () => {
    const [purchases] = useState<purchaseOfProductI[]>([]);

    // Prepare data for PDF export
    const tableColumns = ['ID', 'Nombre del Producto', 'Precio', 'Cliente', 'Cantidad', 'Codigo de Compra'];
    const tableRows = purchases.map(item => [
        item.id,
        item.product?.nameofProduct ?? '',
        item.product?.price ?? '',
        item.customer?.identificationNumber ?? '',
        item.quantity ?? 0,
        item.purchaseCode ?? ''
    ]);

    // Prepare data for EXCEL export
    const excelColumns = ['id', 'Nombre Producto', 'Precio Producto', 'Identificacion Cliente', 'Cantidad Producto', 'Codigo De Compra'];

    return (
        <Container maxWidth="lg">
            <Box
                display="flex"
                justifyContent="flex-end"
                gap={2}
                mb={2}
            >
                <PDFExporter
                    data={purchases}
                    filename="purchases_report.pdf"
                    tableColumns={tableColumns}
                    tableRows={tableRows}
                />
                <ExcelExporter
                    data={purchases}
                    filename="purchases_report.xlsx"
                    columns={excelColumns}
                />
            </Box>
        </Container>

    )
};

export default ButtonExport;
