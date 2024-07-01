import { Component, Input } from "@angular/core";
import { type FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-input",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./input.component.html",
})
export class InputComponent {
	@Input() public label = "Label";
	@Input() public placeholder = "Placeholder";
	@Input() public type: "text" | "password" | "number" | "date" = "text";
	@Input() public formControlElement!: FormControl;
}
