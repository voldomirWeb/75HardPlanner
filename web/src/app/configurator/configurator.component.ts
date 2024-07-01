import { Component, OnInit } from "@angular/core";
import {
	FormArray,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { addDays } from "date-fns";
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { InputComponent } from "../components/input/input.component";
import { ConfigurationService } from "../configuration.service";

@Component({
	selector: "app-configurator",
	standalone: true,
	imports: [ReactiveFormsModule, InputComponent, CheckboxComponent],
	templateUrl: "./configurator.component.html",
})
export class ConfiguratorComponent implements OnInit {
	public form = new FormGroup({
		startDate: new FormControl(addDays(new Date(), 1)),
		customRules: new FormControl<boolean>(false),
		totalDays: new FormControl(75, {
			validators: [Validators.required],
			nonNullable: true,
		}),
		rules: new FormArray([
			new FormControl<string>("", {
				validators: [Validators.required],
				nonNullable: true,
			}),
		]),
		participants: new FormArray([
			new FormControl<string>("", {
				validators: [Validators.required],
				nonNullable: true,
			}),
		]),
	});

	constructor(
		private configuratorService: ConfigurationService,
		private router: Router,
	) {}

	public ngOnInit() {
		const config = this.configuratorService.configuration();

		const loadedParticipants = config.participants.map(
			(participant: string) => {
				return new FormControl<string>(participant, {
					validators: [Validators.required],
					nonNullable: true,
				});
			},
		);

		this.form.controls.participants = new FormArray(loadedParticipants);
		if (config.customRules) {
			const loadedRules = config.rules.map((rule: string) => {
				return new FormControl<string>(rule, {
					validators: [Validators.required],
					nonNullable: true,
				});
			});

			this.form.controls.rules = new FormArray(loadedRules);
		}

		this.form.patchValue(this.configuratorService.configuration());
	}

	public addRule() {
		this.form.controls.rules.push(
			new FormControl<string>("", {
				validators: [Validators.required],
				nonNullable: true,
			}),
		);
	}

	public addParticipant() {
		this.form.controls.participants.push(
			new FormControl<string>("", {
				validators: [Validators.required],
				nonNullable: true,
			}),
		);
	}

	public removeRule(index: number) {
		this.form.controls.rules.removeAt(index);
	}

	public removeParticipant(index: number) {
		this.form.controls.participants.removeAt(index);
	}

	public submit() {
		if (this.form.controls.customRules.value) {
			this.configuratorService.setConfiguration(
				this.form.controls.startDate.value ?? new Date(),
				this.form.controls.participants.value,
				this.form.controls.totalDays.value,
				this.form.controls.rules.value,
				this.form.controls.customRules.value,
			);
		} else {
			this.configuratorService.setConfiguration(
				this.form.controls.startDate.value ?? new Date(),
				this.form.controls.participants.value,
				undefined,
				undefined,
				false,
			);
		}

		this.router.navigate(["/rules"]);
	}
}
