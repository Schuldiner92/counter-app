/* eslint-disable no-undef */

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas 08-imp-exp', () => { 

    test('getHeroeById deber retornar un héroe por id', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' }); 

     });
    
    test('getHeroeById deber retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById(id);
    
        expect(hero).toBeFalsy(); 

     }); 

    test('getHeroesByOwner debe retornar un arreglo de heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);        

     });

    test('getHeroesByOwner debe retornar un arreglo de heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);       
        
        // Alternativa escalable
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

    });

 });