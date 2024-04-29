export interface IFinderNode {
    id: string;
    dataFieldId?: number;
    disabled?: boolean;
    icon?: string;
    selected?: boolean;
    name: string;
    description?: string;
    aggregation?: string;
    classname?: string;
    columnName?: string;
    children?: Array<IFinderNode>;
    hasSortableChildren?: boolean;
    orderId?: string;
}
