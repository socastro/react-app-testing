import Dispositivo from './Device';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';

test('renderiza atributos del dispositivo', () => {
    const microscopio =
    {
        name:"Microscopio",
        brand: "Leica",
        station: "Piso 1",
        available: false
    }

    const componenteDispositivo = render(<Dispositivo item={microscopio} />)
 
    componenteDispositivo.getByText('Microscopio')
    componenteDispositivo.getByText('No disponible')
})