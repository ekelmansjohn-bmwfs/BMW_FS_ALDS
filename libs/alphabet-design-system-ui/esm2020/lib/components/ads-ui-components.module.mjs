import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { IconsModule } from '../assets/icons/icons.module';
import { ADSUiDirectivesModule } from '../directives/ads-ui-directives.module';
import { ADSAccordionComponent } from './accordion/accordion.component';
import { ADSAvatarComponent } from './avatar/avatar.component';
import { ADSBreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ADSButtonComponent } from './button/button.component';
import { ADSCarouselComponent } from './carousel/carousel.component';
import { ADSChipComponent } from './chip/chip.component';
import { ADSConfirmationBoxComponent } from './confirmation-box/confirmation-box.component';
import { ADSContextMenuComponent } from './context-menu/context-menu.component';
import { ADSDataTableComponent } from './data-table/data-table.component';
import { ADSEditInPlaceComponent } from './edit-in-place/edit-in-place.component';
import { ADSFinderComponent } from './finder/finder.component';
import { ADSFormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { ADSFormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { ADSFormDropdownComponent } from './form-dropdown/form-dropdown.component';
import { ADSFormFieldValidationComponent } from './form-field-validation/form-field-validation.component';
import { ADSFormFieldComponent } from './form-field/form-field.component';
import { ADSFormFieldsetComponent } from './form-fieldset/form-fieldset.component';
import { ADSFormHtmlComponent } from './form-html/form-html.component';
import { ADSFormInputFilesComponent } from './form-input-files/form-input-files.component';
import { ADSFormMultiSelectComponent } from './form-multi-select/form-multi-select.component';
import { ADSFormRadioComponent } from './form-radio/form-radio.component';
import { ADSFormRangeSliderComponent } from './form-range-slider/form-range-slider.component';
import { ADSHeaderComponent } from './header/header.component';
import { ADSHorizontalScrollerComponent } from './horizontal-scroller/horizontal-scroller.component';
import { ADSIconComponent } from './icon/icon.component';
import { ADSLanguageSelectorComponent } from './language-selector/language-selector.component';
import { ADSLogoComponent } from './logo/logo.component';
import { ADSMarkdownComponent } from './markdown/markdown.component';
import { ADSNavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { ADSNavigationComponent } from './navigation/navigation.component';
import { ADSNotificationComponent } from './notification/notification.component';
import { ADSPaginatorComponent } from './paginator/paginator.component';
import { ADSPopUpComponent } from './popup/popup.component';
import { ADSSideBarComponent } from './side-bar/side-bar.component';
import { ADSSpinnerComponent } from './spinner/spinner.component';
import { ADSStepPanelComponent } from './step-panel/step-panel.component';
import { ADSStepComponent } from './step/step.component';
import { ADSStepperComponent } from './stepper/stepper.component';
import { ADSTabPanelComponent } from './tab-panel/tab-panel.component';
import { ADSTabComponent } from './tab/tab.component';
import { ADSTabsComponent } from './tabs/tabs.component';
import { ADSTooltipComponent } from './tooltip/tooltip.component';
import { ADSFormTypeaheadComponent } from './typeahead/typeahead.component';
import * as i0 from "@angular/core";
export class ADSUiComponentsModule {
}
ADSUiComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSUiComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ADSUiComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.6", ngImport: i0, type: ADSUiComponentsModule, declarations: [ADSAccordionComponent,
        ADSAvatarComponent,
        ADSBreadcrumbsComponent,
        ADSButtonComponent,
        ADSCarouselComponent,
        ADSChipComponent,
        ADSConfirmationBoxComponent,
        ADSContextMenuComponent,
        ADSDataTableComponent,
        ADSEditInPlaceComponent,
        ADSFinderComponent,
        ADSFormCheckboxComponent,
        ADSFormDropdownComponent,
        ADSFormInputFilesComponent,
        ADSFormFieldComponent,
        ADSFormDatepickerComponent,
        ADSFormFieldsetComponent,
        ADSFormFieldValidationComponent,
        ADSFormMultiSelectComponent,
        ADSFormRadioComponent,
        ADSFormHtmlComponent,
        ADSHeaderComponent,
        ADSHorizontalScrollerComponent,
        ADSIconComponent,
        ADSLanguageSelectorComponent,
        ADSLogoComponent,
        ADSMarkdownComponent,
        ADSNavigationComponent,
        ADSNavigationToolbarComponent,
        ADSNotificationComponent,
        ADSPaginatorComponent,
        ADSPopUpComponent,
        ADSSideBarComponent,
        ADSSpinnerComponent,
        ADSTabsComponent,
        ADSTabComponent,
        ADSTabPanelComponent,
        ADSTooltipComponent,
        ADSStepComponent,
        ADSStepPanelComponent,
        ADSStepperComponent,
        ADSFormTypeaheadComponent,
        ADSFormRangeSliderComponent], imports: [CommonModule,
        IconsModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        DragDropModule,
        A11yModule,
        ADSUiDirectivesModule,
        CKEditorModule], exports: [ADSAccordionComponent,
        ADSAvatarComponent,
        ADSBreadcrumbsComponent,
        ADSButtonComponent,
        ADSCarouselComponent,
        ADSChipComponent,
        ADSConfirmationBoxComponent,
        ADSContextMenuComponent,
        ADSDataTableComponent,
        ADSEditInPlaceComponent,
        ADSFinderComponent,
        ADSFormCheckboxComponent,
        ADSFormDropdownComponent,
        ADSFormInputFilesComponent,
        ADSFormFieldComponent,
        ADSFormDatepickerComponent,
        ADSFormFieldsetComponent,
        ADSFormFieldsetComponent,
        ADSFormFieldValidationComponent,
        ADSFormMultiSelectComponent,
        ADSFormRadioComponent,
        ADSFormHtmlComponent,
        ADSHeaderComponent,
        ADSHorizontalScrollerComponent,
        ADSIconComponent,
        ADSLanguageSelectorComponent,
        ADSLogoComponent,
        ADSMarkdownComponent,
        ADSNavigationComponent,
        ADSNavigationToolbarComponent,
        ADSNotificationComponent,
        ADSPaginatorComponent,
        ADSPopUpComponent,
        ADSSideBarComponent,
        ADSSpinnerComponent,
        ADSTabsComponent,
        ADSTabComponent,
        ADSTabPanelComponent,
        ADSTooltipComponent,
        ADSStepComponent,
        ADSStepPanelComponent,
        ADSStepperComponent,
        ADSFormTypeaheadComponent,
        ADSFormRangeSliderComponent] });
ADSUiComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSUiComponentsModule, imports: [CommonModule,
        IconsModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        DragDropModule,
        A11yModule,
        ADSUiDirectivesModule,
        CKEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSUiComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ADSAccordionComponent,
                        ADSAvatarComponent,
                        ADSBreadcrumbsComponent,
                        ADSButtonComponent,
                        ADSCarouselComponent,
                        ADSChipComponent,
                        ADSConfirmationBoxComponent,
                        ADSContextMenuComponent,
                        ADSDataTableComponent,
                        ADSEditInPlaceComponent,
                        ADSFinderComponent,
                        ADSFormCheckboxComponent,
                        ADSFormDropdownComponent,
                        ADSFormInputFilesComponent,
                        ADSFormFieldComponent,
                        ADSFormDatepickerComponent,
                        ADSFormFieldsetComponent,
                        ADSFormFieldValidationComponent,
                        ADSFormMultiSelectComponent,
                        ADSFormRadioComponent,
                        ADSFormHtmlComponent,
                        ADSHeaderComponent,
                        ADSHorizontalScrollerComponent,
                        ADSIconComponent,
                        ADSLanguageSelectorComponent,
                        ADSLogoComponent,
                        ADSMarkdownComponent,
                        ADSNavigationComponent,
                        ADSNavigationToolbarComponent,
                        ADSNotificationComponent,
                        ADSPaginatorComponent,
                        ADSPopUpComponent,
                        ADSSideBarComponent,
                        ADSSpinnerComponent,
                        ADSTabsComponent,
                        ADSTabComponent,
                        ADSTabPanelComponent,
                        ADSTooltipComponent,
                        ADSStepComponent,
                        ADSStepPanelComponent,
                        ADSStepperComponent,
                        ADSFormTypeaheadComponent,
                        ADSFormRangeSliderComponent,
                    ],
                    imports: [
                        CommonModule,
                        IconsModule,
                        FormsModule,
                        RouterModule,
                        ReactiveFormsModule,
                        DragDropModule,
                        A11yModule,
                        ADSUiDirectivesModule,
                        CKEditorModule,
                    ],
                    exports: [
                        ADSAccordionComponent,
                        ADSAvatarComponent,
                        ADSBreadcrumbsComponent,
                        ADSButtonComponent,
                        ADSCarouselComponent,
                        ADSChipComponent,
                        ADSConfirmationBoxComponent,
                        ADSContextMenuComponent,
                        ADSDataTableComponent,
                        ADSEditInPlaceComponent,
                        ADSFinderComponent,
                        ADSFormCheckboxComponent,
                        ADSFormDropdownComponent,
                        ADSFormInputFilesComponent,
                        ADSFormFieldComponent,
                        ADSFormDatepickerComponent,
                        ADSFormFieldsetComponent,
                        ADSFormFieldsetComponent,
                        ADSFormFieldValidationComponent,
                        ADSFormMultiSelectComponent,
                        ADSFormRadioComponent,
                        ADSFormHtmlComponent,
                        ADSHeaderComponent,
                        ADSHorizontalScrollerComponent,
                        ADSIconComponent,
                        ADSLanguageSelectorComponent,
                        ADSLogoComponent,
                        ADSMarkdownComponent,
                        ADSNavigationComponent,
                        ADSNavigationToolbarComponent,
                        ADSNotificationComponent,
                        ADSPaginatorComponent,
                        ADSPopUpComponent,
                        ADSSideBarComponent,
                        ADSSpinnerComponent,
                        ADSTabsComponent,
                        ADSTabComponent,
                        ADSTabPanelComponent,
                        ADSTooltipComponent,
                        ADSStepComponent,
                        ADSStepPanelComponent,
                        ADSStepperComponent,
                        ADSFormTypeaheadComponent,
                        ADSFormRangeSliderComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRzLXVpLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hbHBoYWJldC1kZXNpZ24tc3lzdGVtLXVpL3NyYy9saWIvY29tcG9uZW50cy9hZHMtdWktY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0s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ZGsvYTExeSc7XHJcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XHJcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2ljb25zLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFEU1VpRGlyZWN0aXZlc01vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWRzLXVpLWRpcmVjdGl2ZXMubW9kdWxlJztcclxuaW1wb3J0IHsgQURTQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU0F2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU0Nhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNDaGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jaGlwL2NoaXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTQ29uZmlybWF0aW9uQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tYm94L2NvbmZpcm1hdGlvbi1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRWRpdEluUGxhY2VDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtaW4tcGxhY2UvZWRpdC1pbi1wbGFjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNGaW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbmRlci9maW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRm9ybUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWNoZWNrYm94L2Zvcm0tY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRm9ybURhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZGF0ZXBpY2tlci9mb3JtLWRhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRm9ybURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWRyb3Bkb3duL2Zvcm0tZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRm9ybUZpZWxkVmFsaWRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1maWVsZC12YWxpZGF0aW9uL2Zvcm0tZmllbGQtdmFsaWRhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNGb3JtRmllbGRzZXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGRzZXQvZm9ybS1maWVsZHNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNGb3JtSHRtbENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1odG1sL2Zvcm0taHRtbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNGb3JtSW5wdXRGaWxlc0NvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1pbnB1dC1maWxlcy9mb3JtLWlucHV0LWZpbGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU0Zvcm1NdWx0aVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1tdWx0aS1zZWxlY3QvZm9ybS1tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRm9ybVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLXJhZGlvL2Zvcm0tcmFkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTRm9ybVJhbmdlU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLXJhbmdlLXNsaWRlci9mb3JtLXJhbmdlLXNsaWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTSG9yaXpvbnRhbFNjcm9sbGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLXNjcm9sbGVyL2hvcml6b250YWwtc2Nyb2xsZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU0xhbmd1YWdlU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2xhbmd1YWdlLXNlbGVjdG9yL2xhbmd1YWdlLXNlbGVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU0xvZ29Db21wb25lbnQgfSBmcm9tICcuL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNNYXJrZG93bkNvbXBvbmVudCB9IGZyb20gJy4vbWFya2Rvd24vbWFya2Rvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTTmF2aWdhdGlvblRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24tdG9vbGJhci9uYXZpZ2F0aW9uLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU05vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNQYWdpbmF0b3JDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTUG9wVXBDb21wb25lbnQgfSBmcm9tICcuL3BvcHVwL3BvcHVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU1NpZGVCYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNTdGVwUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtcGFuZWwvc3RlcC1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTU3RlcHBlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU1RhYlBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi90YWItcGFuZWwvdGFiLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU1RhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiL3RhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBRFNUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQURTVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFEU0Zvcm1UeXBlYWhlYWRDb21wb25lbnQgfSBmcm9tICcuL3R5cGVhaGVhZC90eXBlYWhlYWQuY29tcG9uZW50JztcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFEU0FjY29yZGlvbkNvbXBvbmVudCxcclxuICAgICAgICBBRFNBdmF0YXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTQnJlYWRjcnVtYnNDb21wb25lbnQsXHJcbiAgICAgICAgQURTQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Nhcm91c2VsQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0NoaXBDb21wb25lbnQsXHJcbiAgICAgICAgQURTQ29uZmlybWF0aW9uQm94Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0NvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0RhdGFUYWJsZUNvbXBvbmVudCxcclxuICAgICAgICBBRFNFZGl0SW5QbGFjZUNvbXBvbmVudCxcclxuICAgICAgICBBRFNGaW5kZXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybUNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtSW5wdXRGaWxlc0NvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtRmllbGRDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybURhdGVwaWNrZXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybUZpZWxkc2V0Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1GaWVsZFZhbGlkYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybU11bHRpU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1SYWRpb0NvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtSHRtbENvbXBvbmVudCxcclxuICAgICAgICBBRFNIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTSG9yaXpvbnRhbFNjcm9sbGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0ljb25Db21wb25lbnQsXHJcbiAgICAgICAgQURTTGFuZ3VhZ2VTZWxlY3RvckNvbXBvbmVudCxcclxuICAgICAgICBBRFNMb2dvQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU01hcmtkb3duQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU05hdmlnYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgQURTTmF2aWdhdGlvblRvb2xiYXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTTm90aWZpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU1BhZ2luYXRvckNvbXBvbmVudCxcclxuICAgICAgICBBRFNQb3BVcENvbXBvbmVudCxcclxuICAgICAgICBBRFNTaWRlQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU1NwaW5uZXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTVGFic0NvbXBvbmVudCxcclxuICAgICAgICBBRFNUYWJDb21wb25lbnQsXHJcbiAgICAgICAgQURTVGFiUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgQURTVG9vbHRpcENvbXBvbmVudCxcclxuICAgICAgICBBRFNTdGVwQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU1N0ZXBQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBBRFNTdGVwcGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1UeXBlYWhlYWRDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybVJhbmdlU2xpZGVyQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSWNvbnNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICAgICAgQTExeU1vZHVsZSxcclxuICAgICAgICBBRFNVaURpcmVjdGl2ZXNNb2R1bGUsXHJcbiAgICAgICAgQ0tFZGl0b3JNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEFEU0FjY29yZGlvbkNvbXBvbmVudCxcclxuICAgICAgICBBRFNBdmF0YXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTQnJlYWRjcnVtYnNDb21wb25lbnQsXHJcbiAgICAgICAgQURTQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Nhcm91c2VsQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0NoaXBDb21wb25lbnQsXHJcbiAgICAgICAgQURTQ29uZmlybWF0aW9uQm94Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0NvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0RhdGFUYWJsZUNvbXBvbmVudCxcclxuICAgICAgICBBRFNFZGl0SW5QbGFjZUNvbXBvbmVudCxcclxuICAgICAgICBBRFNGaW5kZXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybUNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtSW5wdXRGaWxlc0NvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtRmllbGRDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybURhdGVwaWNrZXJDb21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybUZpZWxkc2V0Q29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1GaWVsZHNldENvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtRmllbGRWYWxpZGF0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1NdWx0aVNlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtUmFkaW9Db21wb25lbnQsXHJcbiAgICAgICAgQURTRm9ybUh0bWxDb21wb25lbnQsXHJcbiAgICAgICAgQURTSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0hvcml6b250YWxTY3JvbGxlckNvbXBvbmVudCxcclxuICAgICAgICBBRFNJY29uQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0xhbmd1YWdlU2VsZWN0b3JDb21wb25lbnQsXHJcbiAgICAgICAgQURTTG9nb0NvbXBvbmVudCxcclxuICAgICAgICBBRFNNYXJrZG93bkNvbXBvbmVudCxcclxuICAgICAgICBBRFNOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU05hdmlnYXRpb25Ub29sYmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU05vdGlmaWNhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBBRFNQYWdpbmF0b3JDb21wb25lbnQsXHJcbiAgICAgICAgQURTUG9wVXBDb21wb25lbnQsXHJcbiAgICAgICAgQURTU2lkZUJhckNvbXBvbmVudCxcclxuICAgICAgICBBRFNTcGlubmVyQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU1RhYnNDb21wb25lbnQsXHJcbiAgICAgICAgQURTVGFiQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU1RhYlBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU1Rvb2x0aXBDb21wb25lbnQsXHJcbiAgICAgICAgQURTU3RlcENvbXBvbmVudCxcclxuICAgICAgICBBRFNTdGVwUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgQURTU3RlcHBlckNvbXBvbmVudCxcclxuICAgICAgICBBRFNGb3JtVHlwZWFoZWFkQ29tcG9uZW50LFxyXG4gICAgICAgIEFEU0Zvcm1SYW5nZVNsaWRlckNvbXBvbmVudCxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBRFNVaUNvbXBvbmVudHNNb2R1bGUge31cclxuIl19