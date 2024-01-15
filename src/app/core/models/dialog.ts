import { EventEmitter } from "@angular/core";

export interface DynamicDialogComponent<T> {
    //the initComponent method will be called when component is created
    initComponent(data: any): void;
    //the onSubmit event will be emitted when user clicks on submit button
    onSubmit: EventEmitter<T>;
}