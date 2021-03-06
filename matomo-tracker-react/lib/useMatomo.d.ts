import { TrackPageViewParams, TrackEventParams, TrackSiteSearchParams, TrackLinkParams } from './types';
declare function useMatomo(): {
    trackEvent: (params: TrackEventParams) => void | undefined;
    trackEvents: () => void | undefined;
    trackPageView: (params: TrackPageViewParams) => void | undefined;
    trackSiteSearch: (params: TrackSiteSearchParams) => void | undefined;
    trackLink: (params: TrackLinkParams) => void | undefined;
    enableLinkTracking: () => void;
    pushInstruction: (name: string, ...args: any[]) => void;
};
export default useMatomo;
//# sourceMappingURL=useMatomo.d.ts.map