/* eslint-disable no-undef */

import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
   
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });

    });

    test('getHeroeByIdAsync debe obtener un error si el heroe no existe', (done) => { 

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error =>{
                
                expect(error).toBe(`No se pudo encontrar el héroe con id ${id}`)

                done();
            });

    });

});