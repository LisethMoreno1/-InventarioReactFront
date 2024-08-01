import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { Button } from '@mui/material';
import { PictureAsPdf as PictureAsPdfIcon } from '@mui/icons-material';


interface PDFExporterProps {
    data: any[];
    filename: string;
    tableColumns: string[];
    tableRows: any[][];
}

const PDFExporter: React.FC<PDFExporterProps> = ({ data, filename, tableColumns, tableRows }) => {
    const exportToPDF = () => {
        const doc = new jsPDF();

        // Agregar logotipo de la empresa
     /*    const logoImgData = '../../../../public/logo192.png';
        doc.addImage(logoImgData, 'PNG', 10, 10, 50, 20); */

        // Personalizar encabezado con información de la empresa
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text('Reporte de Compras', 70, 15);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text('Nombre de la Empresa', 70, 25);
        doc.text('Dirección de la Empresa', 70, 30);
        doc.text('Teléfono: (123) 456-7890', 70, 35);
        doc.text('Email: info@empresa.com', 70, 40);

        // Agregar tabla al PDF
        autoTable(doc, {
            head: [tableColumns],
            body: tableRows,
            startY: 50, // Asegúrate de que la tabla comience debajo del encabezado
            theme: 'grid', // Cambia a 'striped' o 'plain' si prefieres
            styles: {
                fontSize: 10,
                cellPadding: 5,
                halign: 'center'
            },
            headStyles: {
                fillColor: [22, 160, 133], // Color de fondo de encabezados
                textColor: [255, 255, 255], // Color del texto de encabezados
                fontSize: 12,
                fontStyle: 'bold'
            },
            columnStyles: {
                0: { halign: 'left' },
                1: { halign: 'left' },
                2: { halign: 'right' },
                3: { halign: 'left' },
                4: { halign: 'right' },
                5: { halign: 'left' }
            }
        });

        doc.setFontSize(10);
        doc.text('Página 1 de 1', 190, doc.internal.pageSize.height - 10, { align: 'right' });
        doc.save(filename);
    };

    return (
        <Button
        onClick={exportToPDF}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<PictureAsPdfIcon />}
    >
        PDF
    </Button>
    );
};

export default PDFExporter;
