import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should return initial value if no value is stored', () => {
        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        expect(result.current[0]).toBe('initial');
    });

    test('should return stored value if value is stored', () => {
        localStorage.setItem('key', JSON.stringify('stored'));
        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        expect(result.current[0]).toBe('stored');
    });

    test('should update localStorage when value is set', () => {
        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        act(() => {
            result.current[1]('new value');
        });
        expect(localStorage.getItem('key')).toBe(JSON.stringify('new value'));
    });

    test('should handle errors when accessing localStorage', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
            throw new Error('Error accessing localStorage');
        });

        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        expect(result.current[0]).toBe('initial');
        expect(console.error).toHaveBeenCalledWith('Error accessing localStorage', expect.any(Error));

        console.error.mockRestore();
        Storage.prototype.getItem.mockRestore();
    });
});