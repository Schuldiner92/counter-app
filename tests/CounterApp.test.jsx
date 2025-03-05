import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp/>', () => { 

    const value = 10;

    test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar el valor inicial de 10', () => { 
       
        render(<CounterApp value={value}/>);     
        expect(screen.getByText(value)).toBeTruthy;        

    });

    test('Debe de incrementar con el botón +1', () => { 

        render(<CounterApp value={value}/>); 
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    });

    test('Debe de decrementar con el botón +1', () => { 

        render(<CounterApp value={value}/>); 
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();

    });

    test('Debe de funcionar el botón de reset', () => {  

        render(<CounterApp value={value}/>); 
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));                
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        screen.debug(); 

        expect(screen.getByText(10)).toBeTruthy();  

        

    });
    
});