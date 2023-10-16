import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, callbackFunction, posts) => {
    const observer = useRef();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        var callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                callbackFunction();
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])
}