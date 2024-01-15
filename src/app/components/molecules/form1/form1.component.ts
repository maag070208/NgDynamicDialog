import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicDialogComponent } from 'src/app/core/models/dialog';
import { IUser } from 'src/app/core/models/user';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [CommonModule, MatInputModule,MatButtonModule, ReactiveFormsModule],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component implements DynamicDialogComponent<IUser> {
  //this is the output event that you need to emit when the form is submitted
  @Output() onSubmit: EventEmitter<IUser> = new EventEmitter<IUser>();

  //this is the form that you need to create
  public form1!: FormGroup;
  //this is the user that you need to pass to the form
  public user!: IUser;
  //this method replace the ngOnInit() method
  initComponent(data: IUser): void {
    //this is the data that you pass from the parent component
    this.user = data;
    //this is the method that initialize the form
    this.initForm();
  }
  //if you have a form, you need to create a method to initialize it
  initForm(): void {
    this.form1 = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
    });
  }
}
