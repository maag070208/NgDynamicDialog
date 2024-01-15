import { EventEmitter } from "@angular/core";

export interface DynamicDialogComponent<T> {
    initComponent(data: any): void;
    onSubmit: EventEmitter<T>;
}