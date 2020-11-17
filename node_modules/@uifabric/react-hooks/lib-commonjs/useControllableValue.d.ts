import * as React from 'react';
export declare type ChangeCallback<TElement extends HTMLElement, TValue> = (ev: React.FormEvent<TElement> | undefined, newValue: TValue | undefined) => void;
/**
 * Hook to manage a value that could be either controlled or uncontrolled, such as a checked state or
 * text box string.
 * @param controlledValue- The controlled value passed in the props. This value will always be used if provided, and the
 * internal state will be updated to reflect it.
 * @param defaultUncontrolledValue- Initial value for the internal state in the uncontrolled case.
 * @see https://reactjs.org/docs/uncontrolled-components.html
 */
export declare function useControllableValue<TValue, TElement extends HTMLElement>(controlledValue: TValue | undefined, defaultUncontrolledValue: TValue | undefined): Readonly<[TValue | undefined, (newValue: TValue | undefined) => void]>;
export declare function useControllableValue<TValue, TElement extends HTMLElement, TCallback extends ChangeCallback<TElement, TValue> | undefined>(controlledValue: TValue | undefined, defaultUncontrolledValue: TValue | undefined, onChange: TCallback): Readonly<[TValue | undefined, (newValue: TValue | undefined, ev?: React.FormEvent<TElement>) => void]>;
