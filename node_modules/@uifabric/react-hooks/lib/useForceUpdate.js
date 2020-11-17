import * as React from 'react';
/**
 * Hook to force update a function component by updating a dummy state.
 */
export function useForceUpdate() {
    var _a = React.useState(0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}
//# sourceMappingURL=useForceUpdate.js.map