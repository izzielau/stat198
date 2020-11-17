import { useRef, useCallback } from 'react';
/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs- Refs to collectively update with one ref value.
 */
export function useMergedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var state = useRef();
    // Update refs list.
    state.current = refs;
    return useCallback(function (value) {
        for (var _i = 0, _a = state.current; _i < _a.length; _i++) {
            var ref = _a[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, []);
}
//# sourceMappingURL=useMergedRefs.js.map