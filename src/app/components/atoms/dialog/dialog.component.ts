import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnDestroy, AfterViewInit {
  //this is the target element where component dynamically will be added
  @ViewChild('target', { read: ViewContainerRef }) vcRef!: ViewContainerRef;

  //this will hold the component reference
  private componentRef!: ComponentRef<any>;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    private cdref: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      component: any;
      data: any;
    }
  ) {}

  ngAfterViewInit() {
    //create component dynamically
    this.componentRef = this.vcRef.createComponent(this.data.component);
    //pass some data to component
    this.componentRef.instance.initComponent({ ...this.data.data });
    //subscribe to the event emitter of component
    this.componentRef.instance.onSubmit.subscribe((data: any) => {
      this.dialogRef.close(data);
    });
    //detect changes
    this.cdref.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
