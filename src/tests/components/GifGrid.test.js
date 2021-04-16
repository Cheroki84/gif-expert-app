import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas sobre el componente GifGrid', () => {
    
    const category = 'Hola Cheroki';

    test('Debe de mostrarse el componente GifGrid correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        expect(wrapper).toMatchSnapshot();

    });
    

});
