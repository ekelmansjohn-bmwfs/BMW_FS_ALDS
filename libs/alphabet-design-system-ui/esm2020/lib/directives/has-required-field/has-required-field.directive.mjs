import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
export class ADSHasRequiredFieldDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (this.adsHasRequiredField.hasValidator(Validators.required)) {
            // eslint-disable-next-line functional/immutable-data
            this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML.trim()}<span class="text-color-warm-coral ml-1">*</span>`;
        }
    }
}
ADSHasRequiredFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSHasRequiredFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ADSHasRequiredFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: ADSHasRequiredFieldDirective, selector: "[adsHasRequiredField]", inputs: { adsHasRequiredField: "adsHasRequiredField" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSHasRequiredFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[adsHasRequiredField]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { adsHasRequiredField: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLXJlcXVpcmVkLWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL2RpcmVjdGl2ZXMvaGFzLXJlcXVpcmVkLWZpZWxkL2hhcy1yZXF1aXJlZC1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzdELE1BQU0sT0FBTyw0QkFBNEI7SUFDckMsWUFBNkIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBRS9DLFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVELHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLG1EQUFtRCxDQUFDO1NBQ2xJO0lBQ0wsQ0FBQzs7eUhBUlEsNEJBQTRCOzZHQUE1Qiw0QkFBNEI7MkZBQTVCLDRCQUE0QjtrQkFIeEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNwQztpR0FHWSxtQkFBbUI7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYWRzSGFzUmVxdWlyZWRGaWVsZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBBRFNIYXNSZXF1aXJlZEZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmKSB7fVxuICAgIEBJbnB1dCgpIGFkc0hhc1JlcXVpcmVkRmllbGQhOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkc0hhc1JlcXVpcmVkRmllbGQuaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuY3Rpb25hbC9pbW11dGFibGUtZGF0YVxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGAke3RoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwudHJpbSgpfTxzcGFuIGNsYXNzPVwidGV4dC1jb2xvci13YXJtLWNvcmFsIG1sLTFcIj4qPC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=