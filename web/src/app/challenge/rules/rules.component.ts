import {DatePipe, NgOptimizedImage} from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ConfigurationService } from "../../configuration.service";
import {CardComponent} from "../../components/card/card.component";
import {MatIcon} from "@angular/material/icon";

@Component({
	selector: "app-rules",
	standalone: true,
  imports: [DatePipe, RouterLink, CardComponent, NgOptimizedImage, MatIcon],
	templateUrl: "./rules.component.html",
})
export class RulesComponent {
	constructor(public configuratorService: ConfigurationService) {}
}
