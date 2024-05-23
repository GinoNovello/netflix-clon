import {useCallback, useEffect, useState} from "react";

export const useScroll = ({scrollSize}: {scrollSize: number}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        setIsVisible(window.scrollY >= scrollSize);
    }, [scrollSize]);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, [toggleVisibility]);

    return {isVisible};
};
