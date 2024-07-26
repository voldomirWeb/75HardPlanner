import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { parse, toDate } from 'date-fns';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './date-input.component.html',
  providers: [DatePipe]
})
export class DateInputComponent implements OnInit {
  @Input() public label = "Label";
  @Input() public placeholder = "Placeholder";
  @Input() public formControlElement!: FormControl;

  public currentValue: string | null = null;

  constructor(private datePipe: DatePipe) {
  }

  public ngOnInit(): void {
    this.currentValue = this.datePipe.transform(this.formControlElement.value, "yyyy-MM-dd");
  }

  public handleChanges(value: string) {
    this.currentValue = value;

    this.formControlElement.setValue(parse(value, "yyyy-MM-dd", new Date()));
  }

}
