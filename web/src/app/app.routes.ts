import type {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./home/home.component").then(
        (m) => m.HomeComponent,
      )
  },
  {
    path: "config",
    loadComponent: () =>
      import("./configurator/configurator.component").then(
        (m) => m.ConfiguratorComponent,
      ),
  },
  {
    path: "challenge/:id",
    loadComponent: () =>
      import("./challenge/challenge.component").then(
        (m) => m.ChallengeComponent,
      ),
    children: [
      {
        path: "rules",
        loadComponent: () =>
          import("./challenge/rules/rules.component").then((m) => m.RulesComponent),
      },
      {
        path: "plan",
        loadComponent: () =>
          import("./challenge/plan/plan.component").then((m) => m.PlanComponent),
      },
      {
        path: "team",
        loadComponent: () =>
          import("./challenge/team/team.component").then((m) => m.TeamComponent),
      },
      {
        path: "team/join",
        loadComponent: () =>
          import("./challenge/team/join/join.component").then((m) => m.JoinComponent),
      },
      {
        path: "*",
        redirectTo: "rules",
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "rules",
      },
    ]
  },
  {
    path: "*",
    redirectTo: "home",
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
];
