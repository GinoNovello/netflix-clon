import {useRef, useState} from "react";
/**
 *
 * @param delay Time to execute the debounce
 */
export const useDebounce = (delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState("");
    const debounceRef = useRef<any>();
    /**
     *
     * @param value Value to debounce
     */
    const onQueryChange = (value: string) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    };

    return {onQueryChange, debouncedValue};
};
