import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ConfigurationService } from "../configuration.service";

@Component({
	selector: "app-rules",
	standalone: true,
	imports: [DatePipe, RouterLink],
	templateUrl: "./rules.component.html",
})
export class RulesComponent {
	constructor(public configuratorService: ConfigurationService) {}
}
