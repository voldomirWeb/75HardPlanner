import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "plan",
    loadComponent: () =>
      import("./plan/plan.component").then((m) => m.PlanComponent),
  },
  {
    path: "rules",
    loadComponent: () =>
      import("./rules/rules.component").then((m) => m.RulesComponent),
  },
  {
    path: "config",
    loadComponent: () =>
      import("./configurator/configurator.component").then(
        (m) => m.ConfiguratorComponent,
      ),
  },
  {
    path: "home",
    loadComponent: () =>
      import("./home/home.component").then(
        (m) => m.HomeComponent,
      )
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
