import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import ComponenteButton from '../../componentesGenerales/Boton/boton.components';
import customTheme from './Styles';


function TypeOfIdentification() {
  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr 1fr' },
        gap: 2,
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField label="Tipo de Identificacion" />
        <TextField label="Identificador" />
        <ComponenteButton text="Guardar" onClick={() => console.log('Button clicked!')} />
      </ThemeProvider>
    </Box>
  );
}

export default TypeOfIdentification;
