import {Component} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ConfigurationService} from "../../configuration.service";
import {ButtonDirective} from "../../directivs/button.directive";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CardComponent,
    NgOptimizedImage,
    MatIcon,
    ButtonDirective
  ],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  public id = 11

  constructor(public configuratorService: ConfigurationService) {
  }

  public removeParticipant(index: number) {
    console.log(`Participant ${index} is removed`)
  }

  public async copyInviteUrl() {
    const url = window.location.host + "/challenge/" + this.id + "/team/join";
    await navigator.clipboard.writeText(url);
  }
}
