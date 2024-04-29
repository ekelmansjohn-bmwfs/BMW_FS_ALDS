/* eslint-disable @typescript-eslint/no-explicit-any */
export function flatten(arr) {
    let result = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        }
        else {
            // eslint-disable-next-line functional/immutable-data
            result.push(element);
        }
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHRlbi5mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL3V0aWxzL2ZsYXR0ZW4uZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBZTtJQUNuQyxJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDNUIsS0FBSyxNQUFNLE9BQU8sSUFBSSxHQUFHLEVBQUU7UUFDdkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxxREFBcUQ7WUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XHJcbiAgICBsZXQgcmVzdWx0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChmbGF0dGVuKGVsZW1lbnQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuY3Rpb25hbC9pbW11dGFibGUtZGF0YVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iXX0=