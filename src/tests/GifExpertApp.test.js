import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas sobre el componente GifExpertApp', () => {
    
    test('El componente debe mostrarse correctamente (snapshot)', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorías', () => {
        
        const categories = ['Dragon Ball', 'Pokemon']

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });

});
