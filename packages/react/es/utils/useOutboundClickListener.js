import React from 'react';
const useOutboundClickListener = ({ trackLink }) => {
    const handleOutboundClick = (event) => {
        if (!event.target) {
            return;
        }
        const { target } = event;
        const { nodeName } = target;
        if (nodeName === 'A' && trackLink) {
            const { href } = target; // We know from the nodeName that the element is an anchor
            // Check if the click target differs from the current hostname, meaning it's external
            if (href &&
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
                !href.match(new RegExp(`^(http://www.|https://www.|http://|https://)+(${window.location.hostname})`))) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                trackLink({ href });
            }
        }
    };
    React.useEffect(() => {
        window.document.addEventListener('click', handleOutboundClick);
        return () => window.document.removeEventListener('click', handleOutboundClick);
    }, []);
};
export default useOutboundClickListener;
//# sourceMappingURL=useOutboundClickListener.js.map