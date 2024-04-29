import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import * as i0 from "@angular/core";
export class CollisionDetectionService {
    constructor(windowRef) {
        this.windowRef = windowRef;
    }
    detect(parent, child) {
        let placeY = "place-floating-element-at-bottom" /* Position.Bottom */;
        let placeX = "place-floating-element-left" /* Position.Left */;
        /* eslint-disable  */
        parent.classList.remove("place-floating-element-at-top" /* Position.Top */, "place-floating-element-at-bottom" /* Position.Bottom */, "place-floating-element-left" /* Position.Left */, "place-floating-element-right" /* Position.Right */, "place-floating-element-fallback" /* Position.Fallback */);
        child.style.transform = '';
        this.dimensions = {
            parent: parent.getBoundingClientRect(),
            child: child.getBoundingClientRect(),
        };
        if (this.dimensions.parent.bottom + this.dimensions.child.height >
            this.windowRef.innerHeight) {
            placeY = "place-floating-element-at-top" /* Position.Top */;
        }
        if (this.dimensions.parent.bottom + this.dimensions.child.height <
            this.windowRef.innerHeight) {
            placeY = "place-floating-element-at-bottom" /* Position.Bottom */;
        }
        if (this.dimensions.parent.left - this.dimensions.child.width > 0) {
            placeX = "place-floating-element-left" /* Position.Left */;
        }
        if (this.dimensions.parent.right + this.dimensions.child.width <
            this.windowRef.innerWidth) {
            placeX = "place-floating-element-right" /* Position.Right */;
        }
        parent.classList.add(placeX);
        parent.classList.add(placeY);
    }
}
CollisionDetectionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: CollisionDetectionService, deps: [{ token: WINDOW }], target: i0.ɵɵFactoryTarget.Injectable });
CollisionDetectionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: CollisionDetectionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: CollisionDetectionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGlzaW9uLWRldGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hbHBoYWJldC1kZXNpZ24tc3lzdGVtLXVpL3NyYy9saWIvdXRpbHMvY29sbGlzaW9uLWRldGVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFrQjdDLE1BQU0sT0FBTyx5QkFBeUI7SUFHbEMsWUFBcUMsU0FBaUI7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUFHLENBQUM7SUFFMUQsTUFBTSxDQUFDLE1BQW1CLEVBQUUsS0FBa0I7UUFDMUMsSUFBSSxNQUFNLDJEQUFrQixDQUFDO1FBQzdCLElBQUksTUFBTSxvREFBZ0IsQ0FBQztRQUUzQixxQkFBcUI7UUFDckIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLGlSQU10QixDQUFDO1FBQ0YsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxNQUFNLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMscUJBQXFCLEVBQUU7U0FDdkMsQ0FBQztRQUVGLElBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQzVCO1lBQ0UsTUFBTSxxREFBZSxDQUFDO1NBQ3pCO1FBRUQsSUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFDNUI7WUFDRSxNQUFNLDJEQUFrQixDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUMvRCxNQUFNLG9EQUFnQixDQUFDO1NBQzFCO1FBRUQsSUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFDM0I7WUFDRSxNQUFNLHNEQUFpQixDQUFDO1NBQzNCO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7c0hBbERRLHlCQUF5QixrQkFHZCxNQUFNOzBIQUhqQix5QkFBeUIsY0FGdEIsTUFBTTsyRkFFVCx5QkFBeUI7a0JBSHJDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFJZ0IsTUFBTTsyQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xyXG5cclxuaW50ZXJmYWNlIERpbWVuc2lvbnNJbnRlcmZhY2Uge1xyXG4gICAgcGFyZW50OiBDbGllbnRSZWN0O1xyXG4gICAgY2hpbGQ6IENsaWVudFJlY3Q7XHJcbn1cclxuXHJcbmNvbnN0IGVudW0gUG9zaXRpb24ge1xyXG4gICAgVG9wID0gJ3BsYWNlLWZsb2F0aW5nLWVsZW1lbnQtYXQtdG9wJyxcclxuICAgIEJvdHRvbSA9ICdwbGFjZS1mbG9hdGluZy1lbGVtZW50LWF0LWJvdHRvbScsXHJcbiAgICBMZWZ0ID0gJ3BsYWNlLWZsb2F0aW5nLWVsZW1lbnQtbGVmdCcsXHJcbiAgICBSaWdodCA9ICdwbGFjZS1mbG9hdGluZy1lbGVtZW50LXJpZ2h0JyxcclxuICAgIEZhbGxiYWNrID0gJ3BsYWNlLWZsb2F0aW5nLWVsZW1lbnQtZmFsbGJhY2snLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25EZXRlY3Rpb25TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZGltZW5zaW9ucyE6IERpbWVuc2lvbnNJbnRlcmZhY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChXSU5ET1cpIHJlYWRvbmx5IHdpbmRvd1JlZjogV2luZG93KSB7fVxyXG5cclxuICAgIGRldGVjdChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGxhY2VZID0gUG9zaXRpb24uQm90dG9tO1xyXG4gICAgICAgIGxldCBwbGFjZVggPSBQb3NpdGlvbi5MZWZ0O1xyXG5cclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAgKi9cclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgUG9zaXRpb24uVG9wLFxyXG4gICAgICAgICAgICBQb3NpdGlvbi5Cb3R0b20sXHJcbiAgICAgICAgICAgIFBvc2l0aW9uLkxlZnQsXHJcbiAgICAgICAgICAgIFBvc2l0aW9uLlJpZ2h0LFxyXG4gICAgICAgICAgICBQb3NpdGlvbi5GYWxsYmFjayxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNoaWxkLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHtcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgIGNoaWxkOiBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5wYXJlbnQuYm90dG9tICsgdGhpcy5kaW1lbnNpb25zLmNoaWxkLmhlaWdodCA+XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93UmVmLmlubmVySGVpZ2h0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHBsYWNlWSA9IFBvc2l0aW9uLlRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLnBhcmVudC5ib3R0b20gKyB0aGlzLmRpbWVuc2lvbnMuY2hpbGQuaGVpZ2h0IDxcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dSZWYuaW5uZXJIZWlnaHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcGxhY2VZID0gUG9zaXRpb24uQm90dG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGltZW5zaW9ucy5wYXJlbnQubGVmdCAtIHRoaXMuZGltZW5zaW9ucy5jaGlsZC53aWR0aCA+IDApIHtcclxuICAgICAgICAgICAgcGxhY2VYID0gUG9zaXRpb24uTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLnBhcmVudC5yaWdodCArIHRoaXMuZGltZW5zaW9ucy5jaGlsZC53aWR0aCA8XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93UmVmLmlubmVyV2lkdGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcGxhY2VYID0gUG9zaXRpb24uUmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChwbGFjZVgpO1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKHBsYWNlWSk7XHJcbiAgICB9XHJcbn1cclxuIl19