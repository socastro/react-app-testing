import DisponibilidadDispositivo from './DeviceButton';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'


describe('Boton de disponibilidad',  () => {
    const microscopio =
        {
            "name":"Microscopio",
            "brand": "Leica",
            "station": "Piso 1",
            "available": false
        }
    
    const button = render(<DisponibilidadDispositivo available={microscopio.available}/>)


    test("clickear el botón de disponibilidad", async () => {
    
        const botonNoDisponible = screen.getByRole('button', {name:'No disponible'})
        expect(botonNoDisponible).toBeInTheDocument()
        expect(botonNoDisponible).toHaveStyle('background-color: red')
        
        await userEvent.click(botonNoDisponible)

        const botonDisponible = screen.getByRole('button', {name:'Disponible'})
        expect(botonDisponible).toBeInTheDocument()
        const textDisponible = button.getByText("Disponible")
        expect(textDisponible).toHaveStyle('background-color: green')

    })

    test("color empieza con estado inicial", () => {
        const button = render(<DisponibilidadDispositivo available={microscopio.available}/>)
        const text = button.getByText("No disponible")
        expect(text).toHaveStyle('background-color: red')
    })
})