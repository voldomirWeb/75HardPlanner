import { AsyncPipe, DatePipe } from "@angular/common";
import { Component, computed } from "@angular/core";
import { addDays } from "date-fns";
import { ConfigurationService } from "../configuration.service";

@Component({
	selector: "app-plan",
	standalone: true,
	imports: [DatePipe, AsyncPipe],
	templateUrl: "./plan.component.html",
})
export class PlanComponent {
	constructor(private configurationService: ConfigurationService) {}

	public readonly configuration = this.configurationService.configuration;

	public days = computed(() =>
		Array.from({ length: this.configuration().totalDays }, (_, i) => i),
	);

	protected readonly addDays = addDays;
}
