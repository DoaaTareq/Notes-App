import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useLocalStorage } from './useLocalStorage';
import CryptoJS from 'crypto-js';

const encryptionKey = "secure key";

describe('useLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    const encrypt = (value) => {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        return CryptoJS.AES.encrypt(value, encryptionKey).toString();
    };

    test('should return initial value if no value is stored', () => {
        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        expect(result.current[0]).toBe('initial');
    });

    test('should update localStorage when value is set', () => {
        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        act(() => {
            result.current[1]('new value');
        });
        const encryptedValue = localStorage.getItem('key');
        const bytes = CryptoJS.AES.decrypt(encryptedValue, encryptionKey);
        const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
        expect(decryptedValue).toBe('new value');
    });

    test('should handle errors when accessing localStorage', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
            throw new Error('Error accessing localStorage');
        });

        const { result } = renderHook(() => useLocalStorage('key', 'initial'));
        expect(result.current[0]).toBe('initial');
        expect(console.error).toHaveBeenCalledWith('Error accessing localStorage:', expect.any(Error));

        console.error.mockRestore();
        Storage.prototype.getItem.mockRestore();
    });
});