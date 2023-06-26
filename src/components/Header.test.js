import Header from './Header';
import '@testing-library/jest-dom/extend-expect'
import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

function fireResize(width) {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
}

test('callback es invocada despues del resize', async () => {
  let aResizeEventListenerWasAddedToWindow = false;

  const originalMethod = window.addEventListener;
  const spy = jest.spyOn(window, 'addEventListener');

  spy.mockImplementation((...args) => {
    originalMethod(...args);

    const [eventType] = args;
    if (eventType === 'resize') aResizeEventListenerWasAddedToWindow = true;
  });

  const callback = jest.fn(); 
  const header = render(<Header {...{callback}}/>) 

  await waitFor(() => expect(aResizeEventListenerWasAddedToWindow).toBeTruthy());
    fireEvent.resize(window);
    await fireResize(1000);
    expect(callback).toHaveBeenCalled()
    const toogle = header.getByText('T')
    expect(toogle).toHaveStyle("display: flex");

  spy.mockRestore();
});

describe('Botón toogle',   () => {
    test('Muestra el botón toogle para pantallas pequeñas', async() => {
        await fireResize(100);
        const button = render(<Header/>)

        const toogle = button.getByRole('button', {name:'T'})
        expect(toogle.parentNode).not.toHaveStyle("display: none");
    })

    test('No muestra el botón toogle para pantallas grandes', async() => {
        await fireResize(500);
        const button = render(<Header/>)
        const toogle = screen.getByRole('button', {name:'T'})
        expect(toogle.parentElement).toHaveStyle("display: none");

    })
    
})

