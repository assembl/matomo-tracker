"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useOutboundClickListener = function (_a) {
    var trackLink = _a.trackLink;
    var handleOutboundClick = function (event) {
        if (!event.target) {
            return;
        }
        var target = event.target;
        var nodeName = target.nodeName;
        if (nodeName === 'A' && trackLink) {
            var href = target.href; // We know from the nodeName that the element is an anchor
            // Check if the click target differs from the current hostname, meaning it's external
            if (href &&
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
                !href.match(new RegExp("^(http://www.|https://www.|http://|https://)+(" + window.location.hostname + ")"))) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                trackLink({ href: href });
            }
        }
    };
    react_1.default.useEffect(function () {
        window.document.addEventListener('click', handleOutboundClick);
        return function () {
            return window.document.removeEventListener('click', handleOutboundClick);
        };
    }, []);
};
exports.default = useOutboundClickListener;
//# sourceMappingURL=useOutboundClickListener.js.map