import { useState } from "react";
import CryptoJS from "crypto-js";

// function generateSecureKey() {
//     const array = new Uint8Array(32);
//     window.crypto.getRandomValues(array);
//     return Array.from(array).map(byte => byte.toString(16).padStart(2, '0')).join('');
// }

const encryptionKey = "secure key";

export function useLocalStorage(key, initialValue) {
    const decrypt = (encryptedValue) => {
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedValue, encryptionKey);
            return bytes.toString(CryptoJS.enc.Utf8);
        } catch (error) {
            console.error("Error during decryption:", error);
            return null;
        }
    };

    const encrypt = (value) => {
        try {
            if (typeof value !== 'string') {
                value = JSON.stringify(value);
            }
            return CryptoJS.AES.encrypt(value, encryptionKey).toString();
        } catch (error) {
            console.error("Error during encryption:", error);
            return null;
        }
    };

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            console.log("item", item);  
            if (item) {
                const decryptedItem = decrypt(item);
                return decryptedItem ? JSON.parse(decryptedItem) : initialValue;
            }
            return initialValue;
        } catch (error) {
            console.error("Error accessing localStorage:", error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            const encryptedValue = encrypt(valueToStore);
            if (encryptedValue !== null) {
                setStoredValue(valueToStore);
                localStorage.setItem(key, encryptedValue);
            }
        } catch (error) {
            console.error("Error setting localStorage:", error);
        }
    };

    return [storedValue, setValue];
}
