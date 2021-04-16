import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el custom hook useFetchGifs', () => {
    
    test('Debe de devolver el estado inicial', () => {
        
        const {result} = renderHook(() => useFetchGifs('Dragon Ball'));

        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });
    

});
