import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {} from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  providers: []
})
export class AppComponent {
}
