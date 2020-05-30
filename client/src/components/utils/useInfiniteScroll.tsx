import React, {useEffect, useState, useCallback} from 'react';

interface InfiniteScrollHookProps {
    loadMoreContent: any
    container: React.RefObject<HTMLDivElement>
}

type InfiniteScrollHook = (props: InfiniteScrollHookProps) => void

export const useInfiniteScroll: InfiniteScrollHook = ({loadMoreContent, container}) => {
    let debounceTimerId: number;
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {setLoadMore(true)});

        return () => {
            window.removeEventListener('scroll', () => {setLoadMore(true)});
        }
    }, []);

    useEffect(() => {
        if (loadMore) {
            if (debounceTimerId) {
                window.clearTimeout(debounceTimerId);
            }

            debounceTimerId = window.setTimeout(() => {
                const currentY = window.innerHeight + window.scrollY;
                const contentHeight = container.current ? container.current?.offsetHeight : 0;

                if (currentY >= contentHeight) {
                    loadMoreContent();
                }
            }, 100);

            setLoadMore(false);
        }
    }, [loadMore]);
}