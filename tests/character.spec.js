import Character from '../src/components/Character.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('Character.vue', () => {
    test('exists', () => {
        const wrapper = mount(Character);
        expect(wrapper.exists()).toBe(true);
    });

    test('props work', () => {
        const mockProps = {
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            specie: 'Human'
        };
        const wrapper = mount(Character, {
            props: {
                name: mockProps.name,
                image: mockProps.image,
                specie: mockProps.specie
            }
        });

        expect(wrapper.props().name).toBe(mockProps.name);
    });
});
