import { get, getById } from '../src/services/http.service';

describe('http.service', () => {
    test('get', () => {
        const url = 'character';
        const result = get(url);
        expect(result).toBeInstanceOf(Promise);
    });

    test('getById', () => {
        const url = 'character';
        const id = 1;
        const result = getById(url, id);
        expect(result).toBeInstanceOf(Promise);
    });
});