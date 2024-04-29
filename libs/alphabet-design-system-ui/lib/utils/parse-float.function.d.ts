/**
 * Parse floats regardless of locale. The API returns floats in the "EU" way: #.###,##
 * Parse float expects no comma's in the number and the decimals should be prefixed with a . like: #####.##
 */
export declare function realParseFloat(input: string | number | boolean): number;
