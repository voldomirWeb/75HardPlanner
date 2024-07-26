import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ConfigurationService } from "../configuration.service";
import {CardComponent} from "../components/card/card.component";

@Component({
	selector: "app-rules",
	standalone: true,
  imports: [DatePipe, RouterLink, CardComponent],
	templateUrl: "./rules.component.html",
})
export class RulesComponent {
	constructor(public configuratorService: ConfigurationService) {}
}
