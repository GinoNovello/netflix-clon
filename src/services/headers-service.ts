import {API_KEY_BEARER} from "./config";

type GetLocalStorageResult<T> = T | null;

export function getLocalStorageUser<T>(key: string): GetLocalStorageResult<T> {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    }

    return null;
}

function getheaders() {
    return {
        ["Authorization"]: `Bearer ${API_KEY_BEARER}`,
        ["accept"]: "application/json",
    };
}

export {getheaders};
