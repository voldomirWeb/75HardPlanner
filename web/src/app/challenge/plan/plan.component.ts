import {AsyncPipe, DatePipe} from "@angular/common";
import {Component, computed} from "@angular/core";
import {addDays} from "date-fns";
import {ConfigurationService} from "../../configuration.service";
import {CardComponent} from "../../components/card/card.component";
import {CheckboxComponent} from "../../components/checkbox/checkbox.component";

@Component({
  selector: "app-plan",
  standalone: true,
  imports: [DatePipe, AsyncPipe, CardComponent, CheckboxComponent],
  templateUrl: "./plan.component.html",
})
export class PlanComponent {
  constructor(public configurationService: ConfigurationService) {
  }

  public days = computed(() =>
    Array.from({length: this.configurationService.configuration().totalDays}, (_, i) => i),
  );

  protected readonly addDays = addDays;

  public updateDay(participant: string, index: number) {
    console.log(`Participant ${participant} is available on day ${index}`)
  }
}
