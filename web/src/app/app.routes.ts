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
		path: "*",
		redirectTo: "config",
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "config",
	},
];
