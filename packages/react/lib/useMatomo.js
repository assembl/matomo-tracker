"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MatomoContext_1 = __importDefault(require("./MatomoContext"));
var useOutboundClickListener_1 = __importDefault(require("./utils/useOutboundClickListener"));
function useMatomo() {
    var instance = react_1.default.useContext(MatomoContext_1.default);
    var trackPageView = function (params) {
        return instance.trackPageView && instance.trackPageView(params);
    };
    var trackEvent = function (params) {
        return instance.trackEvent && instance.trackEvent(params);
    };
    var trackEvents = function () { return instance.trackEvents && instance.trackEvents(); };
    var trackSiteSearch = function (params) {
        return instance.trackSiteSearch && instance.trackSiteSearch(params);
    };
    var trackLink = function (params) {
        return instance.trackLink && instance.trackLink(params);
    };
    var enableLinkTracking = function () { return useOutboundClickListener_1.default(instance); };
    var pushInstruction = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (instance.pushInstruction) {
            instance.pushInstruction.apply(instance, __spreadArrays([name], args));
        }
    };
    return {
        trackEvent: trackEvent,
        trackEvents: trackEvents,
        trackPageView: trackPageView,
        trackSiteSearch: trackSiteSearch,
        trackLink: trackLink,
        enableLinkTracking: enableLinkTracking,
        pushInstruction: pushInstruction,
    };
}
exports.default = useMatomo;
//# sourceMappingURL=useMatomo.js.map