export interface ITableFilters {
    header: boolean;
    key: string;
    label: string;
    selected: boolean;
}
export interface ITableSorting {
    direction: string;
    column?: ITableColumn;
}
export interface ITableRowAction {
    title: string;
    action: string;
    icon: string;
    switch?: boolean;
    isChecked?: (row: ITableRow) => boolean;
    isDisabled?: (row: ITableRow) => boolean;
    isVisible?: (row: ITableRow) => boolean;
    hideOnMobile?: boolean;
}
export interface ITablePagination {
    pageSize: number;
    showPageSelection?: boolean;
    showPageSizeSelection?: boolean;
    position?: 'left' | 'center' | 'right';
}
export interface ITableColumn {
    dataKey: string;
    title: string;
    type: 'string' | 'date' | 'number' | 'image' | 'html' | 'boolean' | 'array' | 'icon' | 'edit-in-place';
    dateFormat?: string;
    sortable?: boolean;
    hideOnMobile?: boolean;
}
export interface ITableTemplate {
    enableSearch?: boolean;
    sort?: {
        dataKey: string;
        direction: 'ascending' | 'descending';
    };
    columns: Array<ITableColumn>;
    actions?: Array<ITableRowAction>;
    pagination?: ITablePagination;
    filters?: Array<IFilter>;
}
export type IFilter = {
    key: string;
    selected?: Array<string>;
};
export type ITableRow = Record<string, string | Array<string> | null | boolean | number>;
export type ITable = Array<ITableRow>;
export type ITableDataRow = Record<string, string>;
export type ITableData = Array<ITableDataRow>;
