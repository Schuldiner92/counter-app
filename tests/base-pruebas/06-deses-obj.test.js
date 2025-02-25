/* eslint-disable no-undef */
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj.test', () => { 
    
    test('usContext retorna un Objeto', () => { 

        const clave = 'Nightwing';
        const edad = 22;
        const hero = usContext(clave, edad);

        expect(hero).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });      
        
     });
 });
 