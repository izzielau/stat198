import * as React from 'react';
import { IGrid, IGridProps } from './Grid.types';
export declare class GridBase extends React.Component<IGridProps, {}> implements IGrid {
    private _id;
    constructor(props: IGridProps);
    render(): JSX.Element;
}
