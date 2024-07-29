import * as core from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import * as router from "@angular/router";
import {addDays} from "date-fns";
import {take} from "rxjs";
import {CardComponent} from "../components/card/card.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";
import {InputComponent} from "../components/input/input.component";
import {ConfigurationService} from "../configuration.service";
import {ButtonDirective} from "../directivs/button.directive";
import * as apiService from "../services/api.service";
import {Component} from "@angular/core";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {DateInputComponent} from "../components/date-input/date-input.component";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: "app-configurator",
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, CheckboxComponent, CardComponent, ButtonDirective, DatePipe, DateInputComponent, MatIconModule, NgOptimizedImage],
  templateUrl: "./configurator.component.html",
})
export class ConfiguratorComponent implements core.OnInit {
  public form = new FormGroup({
    startDate: new FormControl(addDays(new Date(), 1), {
      validators: [Validators.required],
      nonNullable: true,
    }),
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
    participant:
      new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
  });

  constructor(
    private configuratorService: ConfigurationService,
    private apiService: apiService.ApiService,
    private router: router.Router,
  ) {
  }

  public ngOnInit() {
    const config = this.configuratorService.configuration();

    if (config.customRules) {
      const loadedRules = config.rules.map((rule: string) => {
        return new FormControl<string>(rule, {
          validators: [Validators.required],
          nonNullable: true,
        });
      });

      this.form.controls.rules = new FormArray(loadedRules);
    }

    this.form.patchValue(
      this.configuratorService.configuration()
    );
  }

  public addRule() {
    this.form.controls.rules.push(
      new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
    );
  }

  public removeRule(index: number) {
    this.form.controls.rules.removeAt(index);
  }

  public submit() {
    if (this.form.controls.customRules.value) {
      this.configuratorService.setConfiguration(
        new Date(this.form.controls.startDate.value),
        this.form.controls.participant.value,
        this.form.controls.totalDays.value,
        this.form.controls.rules.value,
        this.form.controls.customRules.value,
      );
    } else {
      this.configuratorService.setConfiguration(
        new Date(this.form.controls.startDate.value),
        this.form.controls.participant.value,
        undefined,
        undefined,
        false,
      );
    }

    //todo id von server

    this.router.navigate(["/challenge/11/rules"]);
  }

  public untilDate() {
    const dateUtc = this.form.controls.startDate.value
    const date = new Date(dateUtc);

    const newDate = addDays(date, this.form.controls.totalDays.value);
    console.log("newDate", newDate);
    return newDate
  }
}
