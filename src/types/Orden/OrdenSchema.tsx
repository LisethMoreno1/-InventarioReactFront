import * as Yup from 'yup';

export const ordenSchema = Yup.object({
  price: Yup.number()
    .typeError("El precio debe ser un número")
    .required("El precio es obligatorio")
    .min(0, "El precio debe ser un número positivo"), 
  entryDate: Yup.date()
    .required("La fecha de entrada es obligatoria")
    .typeError("La fecha de entrada debe ser una fecha válida"),
});
