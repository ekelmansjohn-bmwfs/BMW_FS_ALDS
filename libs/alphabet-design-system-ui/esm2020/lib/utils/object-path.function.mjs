/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function getObjectPath(obj, value, key = 'id') {
    const path = [];
    const checkObjectKey = (object) => {
        if (!object || (typeof object !== 'object' && !Array.isArray(object))) {
            return false;
        }
        else if (Object.prototype.hasOwnProperty.call(object, key) && object[key] === value) {
            return true;
        }
        else if (Array.isArray(object)) {
            for (let i = 0; i < object.length; i++) {
                const result = checkObjectKey(object[i]);
                if (result) {
                    path.push(object[i]);
                    return result;
                }
            }
        }
        else {
            for (const k in object) {
                const result = checkObjectKey(object[k]);
                if (result) {
                    return result;
                }
            }
        }
        return false;
    };
    checkObjectKey(obj);
    return path.reverse();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXBhdGguZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FscGhhYmV0LWRlc2lnbi1zeXN0ZW0tdWkvc3JjL2xpYi91dGlscy9vYmplY3QtcGF0aC5mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUMsdURBQXVEO0FBRXZELE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBUSxFQUFFLEtBQVUsRUFBRSxNQUFjLElBQUk7SUFDbEUsTUFBTSxJQUFJLEdBQWUsRUFBRSxDQUFDO0lBRTVCLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBVyxFQUFXLEVBQUU7UUFDNUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNuRSxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ25GLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLE1BQU0sTUFBTSxHQUFZLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFckIsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO2FBQ0o7U0FDSjthQUFNO1lBQ0gsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLE1BQU0sTUFBTSxHQUFZLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO2FBQ0o7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUVGLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb25hbC9pbW11dGFibGUtZGF0YSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0UGF0aChvYmo6IGFueSwgdmFsdWU6IGFueSwga2V5OiBzdHJpbmcgPSAnaWQnKSB7XHJcbiAgICBjb25zdCBwYXRoOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgY29uc3QgY2hlY2tPYmplY3RLZXkgPSAob2JqZWN0OiBhbnkpOiBib29sZWFuID0+IHtcclxuICAgICAgICBpZiAoIW9iamVjdCB8fCAodHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob2JqZWN0KSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBvYmplY3Rba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGNoZWNrT2JqZWN0S2V5KG9iamVjdFtpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG9iamVjdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IGJvb2xlYW4gPSBjaGVja09iamVjdEtleShvYmplY3Rba10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tPYmplY3RLZXkob2JqKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XHJcbn1cclxuIl19