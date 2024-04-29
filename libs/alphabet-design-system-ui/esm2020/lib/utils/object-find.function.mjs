/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function findObjectEntry(object, key, value) {
    for (const child of object) {
        for (const [objectKey, objectValue] of Object.entries(child)) {
            if (objectKey === key &&
                key !== 'id' &&
                objectValue.toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1) {
                return child;
            }
            if (objectKey === key &&
                key === 'id' &&
                objectValue.toString().toLowerCase() === value.toString().toLowerCase()) {
                return child;
            }
            if (Array.isArray(objectValue)) {
                const newObject = findObjectEntry(objectValue, key, value);
                if (newObject) {
                    return newObject;
                }
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWZpbmQuZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FscGhhYmV0LWRlc2lnbi1zeXN0ZW0tdWkvc3JjL2xpYi91dGlscy9vYmplY3QtZmluZC5mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUMsdURBQXVEO0FBRXZELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBVyxFQUFFLEdBQVEsRUFBRSxLQUFVO0lBQzdELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQ3hCLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBUSxFQUFFO1lBQ2pFLElBQ0ksU0FBUyxLQUFLLEdBQUc7Z0JBQ2pCLEdBQUcsS0FBSyxJQUFJO2dCQUNaLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25GO2dCQUNFLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsSUFDSSxTQUFTLEtBQUssR0FBRztnQkFDakIsR0FBRyxLQUFLLElBQUk7Z0JBQ1osV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDekU7Z0JBQ0UsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sU0FBUyxHQUFRLGVBQWUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLFNBQVMsRUFBRTtvQkFDWCxPQUFPLFNBQVMsQ0FBQztpQkFDcEI7YUFDSjtTQUNKO0tBQ0o7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb25hbC9pbW11dGFibGUtZGF0YSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZE9iamVjdEVudHJ5KG9iamVjdDogYW55LCBrZXk6IGFueSwgdmFsdWU6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBvYmplY3QpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IFtvYmplY3RLZXksIG9iamVjdFZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjaGlsZCkgYXMgYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG9iamVjdEtleSA9PT0ga2V5ICYmXHJcbiAgICAgICAgICAgICAgICBrZXkgIT09ICdpZCcgJiZcclxuICAgICAgICAgICAgICAgIG9iamVjdFZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBvYmplY3RLZXkgPT09IGtleSAmJlxyXG4gICAgICAgICAgICAgICAga2V5ID09PSAnaWQnICYmXHJcbiAgICAgICAgICAgICAgICBvYmplY3RWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0gZmluZE9iamVjdEVudHJ5KG9iamVjdFZhbHVlLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==