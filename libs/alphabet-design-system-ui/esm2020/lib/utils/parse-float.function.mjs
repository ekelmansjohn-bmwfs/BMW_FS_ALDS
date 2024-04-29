/* eslint-disable no-param-reassign */
/**
 * Parse floats regardless of locale. The API returns floats in the "EU" way: #.###,##
 * Parse float expects no comma's in the number and the decimals should be prefixed with a . like: #####.##
 */
export function realParseFloat(input) {
    let numberString = String(input);
    // Remove all characters except numbers, dots, commas, and negative sign
    numberString = numberString.replace(/[^\d,.-]/g, '');
    // Check if the number is in the format #,###.######
    const commaSeparatedRegex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
    if (commaSeparatedRegex.test(numberString)) {
        // Remove commas and return the number
        numberString = numberString.replace(/,/g, '');
        return parseFloat(numberString);
    }
    // Check if the number is in the format #.###,########
    const dotSeparatedRegex = /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/;
    if (dotSeparatedRegex.test(numberString)) {
        // Replace dots with commas and return the number
        numberString = numberString.replace(/\./g, '').replace(/,/g, '.');
        return parseFloat(numberString);
    }
    // If the format is unknown, remove commas and return the number
    numberString = numberString.replace(/,/g, '');
    return parseFloat(numberString);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtZmxvYXQuZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FscGhhYmV0LWRlc2lnbi1zeXN0ZW0tdWkvc3JjL2xpYi91dGlscy9wYXJzZS1mbG9hdC5mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFFdEM7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFnQztJQUMzRCxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakMsd0VBQXdFO0lBQ3hFLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVyRCxvREFBb0Q7SUFDcEQsTUFBTSxtQkFBbUIsR0FBRywwQ0FBMEMsQ0FBQztJQUN2RSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN4QyxzQ0FBc0M7UUFDdEMsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DO0lBRUQsc0RBQXNEO0lBQ3RELE1BQU0saUJBQWlCLEdBQUcsMENBQTBDLENBQUM7SUFDckUsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDdEMsaURBQWlEO1FBQ2pELFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DO0lBRUQsZ0VBQWdFO0lBQ2hFLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU5QyxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBmbG9hdHMgcmVnYXJkbGVzcyBvZiBsb2NhbGUuIFRoZSBBUEkgcmV0dXJucyBmbG9hdHMgaW4gdGhlIFwiRVVcIiB3YXk6ICMuIyMjLCMjXHJcbiAqIFBhcnNlIGZsb2F0IGV4cGVjdHMgbm8gY29tbWEncyBpbiB0aGUgbnVtYmVyIGFuZCB0aGUgZGVjaW1hbHMgc2hvdWxkIGJlIHByZWZpeGVkIHdpdGggYSAuIGxpa2U6ICMjIyMjLiMjXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVhbFBhcnNlRmxvYXQoaW5wdXQ6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgbGV0IG51bWJlclN0cmluZyA9IFN0cmluZyhpbnB1dCk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGFyYWN0ZXJzIGV4Y2VwdCBudW1iZXJzLCBkb3RzLCBjb21tYXMsIGFuZCBuZWdhdGl2ZSBzaWduXHJcbiAgICBudW1iZXJTdHJpbmcgPSBudW1iZXJTdHJpbmcucmVwbGFjZSgvW15cXGQsLi1dL2csICcnKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgbnVtYmVyIGlzIGluIHRoZSBmb3JtYXQgIywjIyMuIyMjIyMjXHJcbiAgICBjb25zdCBjb21tYVNlcGFyYXRlZFJlZ2V4ID0gL14tPyg/OlxcZCt8XFxkezEsM30oPzosXFxkezN9KSspKD86XFwuXFxkKyk/JC87XHJcbiAgICBpZiAoY29tbWFTZXBhcmF0ZWRSZWdleC50ZXN0KG51bWJlclN0cmluZykpIHtcclxuICAgICAgICAvLyBSZW1vdmUgY29tbWFzIGFuZCByZXR1cm4gdGhlIG51bWJlclxyXG4gICAgICAgIG51bWJlclN0cmluZyA9IG51bWJlclN0cmluZy5yZXBsYWNlKC8sL2csICcnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtYmVyU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgbnVtYmVyIGlzIGluIHRoZSBmb3JtYXQgIy4jIyMsIyMjIyMjIyNcclxuICAgIGNvbnN0IGRvdFNlcGFyYXRlZFJlZ2V4ID0gL14tPyg/OlxcZCt8XFxkezEsM30oPzpcXC5cXGR7M30pKykoPzosXFxkKyk/JC87XHJcbiAgICBpZiAoZG90U2VwYXJhdGVkUmVnZXgudGVzdChudW1iZXJTdHJpbmcpKSB7XHJcbiAgICAgICAgLy8gUmVwbGFjZSBkb3RzIHdpdGggY29tbWFzIGFuZCByZXR1cm4gdGhlIG51bWJlclxyXG4gICAgICAgIG51bWJlclN0cmluZyA9IG51bWJlclN0cmluZy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoLywvZywgJy4nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtYmVyU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgZm9ybWF0IGlzIHVua25vd24sIHJlbW92ZSBjb21tYXMgYW5kIHJldHVybiB0aGUgbnVtYmVyXHJcbiAgICBudW1iZXJTdHJpbmcgPSBudW1iZXJTdHJpbmcucmVwbGFjZSgvLC9nLCAnJyk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtYmVyU3RyaW5nKTtcclxufVxyXG4iXX0=