import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas sobre el archivo GifGridItem', () => {
    
    const title = 'Un titulo'
    const url = 'https://mipagina.com'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrar el componente correctamente', () => {
        
    expect(wrapper).toMatchSnapshot();

    });

    test('El párrafo debe de contener únicamente el title', () => {

        const p = wrapper.find('p');

        expect(p.text()).toBe(title);
        
    });

    test('El src y el alt de la imagen debe ser igual a las props', () => {
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe de tener la clase animate__bounce', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__bounce')).toBe(true);

    });
    
});
