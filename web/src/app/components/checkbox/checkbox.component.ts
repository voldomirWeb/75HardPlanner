import { Component, Input } from "@angular/core";
import {
	type FormControl,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";

@Component({
	selector: "app-checkbox",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: "./checkbox.component.html",
})
export class CheckboxComponent {
	@Input() public label = "Label";
	@Input() public formControlElement!: FormControl;
}
