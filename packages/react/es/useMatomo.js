import React from 'react';
import MatomoContext from './MatomoContext';
import useOutboundClickListener from './utils/useOutboundClickListener';
function useMatomo() {
    const instance = React.useContext(MatomoContext);
    const trackPageView = (params) => instance.trackPageView && instance.trackPageView(params);
    const trackEvent = (params) => instance.trackEvent && instance.trackEvent(params);
    const trackEvents = () => instance.trackEvents && instance.trackEvents();
    const trackSiteSearch = (params) => instance.trackSiteSearch && instance.trackSiteSearch(params);
    const trackLink = (params) => instance.trackLink && instance.trackLink(params);
    const enableLinkTracking = () => useOutboundClickListener(instance);
    const pushInstruction = (name, ...args) => {
        if (instance.pushInstruction) {
            instance.pushInstruction(name, ...args);
        }
    };
    return {
        trackEvent,
        trackEvents,
        trackPageView,
        trackSiteSearch,
        trackLink,
        enableLinkTracking,
        pushInstruction,
    };
}
export default useMatomo;
//# sourceMappingURL=useMatomo.js.map