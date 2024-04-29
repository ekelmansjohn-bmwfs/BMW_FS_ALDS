export const FOCUSABLE_ELEMENT_SELECTORS = [
    'a[href]:not([disabled])',
    'a[tel]:not([disabled])',
    'a[routerlink]:not([disabled])',
    'area[href]',
    'button:not([disabled])',
    'input[type="date"]:not([disabled])',
    'input[type="email"]:not([disabled])',
    'input[type="number"]:not([disabled])',
    'input[type="password"]:not([disabled])',
    'input[type="phone"]:not([disabled])',
    'input[type="text"]:not([disabled])',
    'input[type="time"]:not([disabled])',
    'input[type="radio"]:not([disabled]):checked',
    'input[type="checkbox"]:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex="0"]',
    '[contenteditable]',
].toString();
export function focusTrap(event, parent) {
    const focusable = parent.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
    const index = Array.from(focusable).findIndex(element => element === document.activeElement);
    if (!event.shiftKey) {
        const next = index + 1 > focusable.length - 1 ? 0 : index + 1;
        focusable[next].focus();
    }
    else {
        const previous = index - 1 < 0 ? focusable.length - 1 : index - 1;
        focusable[previous].focus();
    }
    event.preventDefault();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL3V0aWxzL2ZvY3VzLXRyYXAuZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDdkMseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0Qyx3Q0FBd0M7SUFDeEMscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUViLE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBb0IsRUFBRSxNQUFtQjtJQUMvRCxNQUFNLFNBQVMsR0FBNEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDaEcsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM5RCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7U0FBTTtRQUNILE1BQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDL0I7SUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGT0NVU0FCTEVfRUxFTUVOVF9TRUxFQ1RPUlMgPSBbXHJcbiAgICAnYVtocmVmXTpub3QoW2Rpc2FibGVkXSknLFxyXG4gICAgJ2FbdGVsXTpub3QoW2Rpc2FibGVkXSknLFxyXG4gICAgJ2Fbcm91dGVybGlua106bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICdhcmVhW2hyZWZdJyxcclxuICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICdpbnB1dFt0eXBlPVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSknLFxyXG4gICAgJ2lucHV0W3R5cGU9XCJlbWFpbFwiXTpub3QoW2Rpc2FibGVkXSknLFxyXG4gICAgJ2lucHV0W3R5cGU9XCJudW1iZXJcIl06bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICdpbnB1dFt0eXBlPVwicGhvbmVcIl06bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXTpub3QoW2Rpc2FibGVkXSknLFxyXG4gICAgJ2lucHV0W3R5cGU9XCJ0aW1lXCJdOm5vdChbZGlzYWJsZWRdKScsXHJcbiAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdChbZGlzYWJsZWRdKTpjaGVja2VkJyxcclxuICAgICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJyxcclxuICAgICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLFxyXG4gICAgJ1t0YWJpbmRleD1cIjBcIl0nLFxyXG4gICAgJ1tjb250ZW50ZWRpdGFibGVdJyxcclxuXS50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzVHJhcChldmVudDogS2V5Ym9hcmRFdmVudCwgcGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9jdXNhYmxlOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UX1NFTEVDVE9SUyk7XHJcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20oZm9jdXNhYmxlKS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gaW5kZXggKyAxID4gZm9jdXNhYmxlLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxO1xyXG4gICAgICAgIGZvY3VzYWJsZVtuZXh0XS5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGluZGV4IC0gMSA8IDAgPyBmb2N1c2FibGUubGVuZ3RoIC0gMSA6IGluZGV4IC0gMTtcclxuICAgICAgICBmb2N1c2FibGVbcHJldmlvdXNdLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcbiJdfQ==