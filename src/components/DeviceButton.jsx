import { act } from '@testing-library/react';
import { useState } from 'react';
import {Button} from 'react-bootstrap'

function DisponibilidadDispositivo(props){
    const [available, setAvailable] = useState(props.available)
    const initialColor = available? 'green' : 'red';
    const [color, setColor] = useState(initialColor)
    
    const handleClick = () => {
        act(() => {
        if(!available){
            setColor('green')
        }
        else{
            setColor('red')
        }
        setAvailable(!available);
        
    });
    }

    return(
        
            <Button data-testid="botonDisponibilidad" style={{backgroundColor: color}} onClick={handleClick}>
            {available? 
            "Disponible":
            "No disponible"}
            </Button>
    )
}
export default DisponibilidadDispositivo;