import { Injectable, OnDestroy, OnInit, signal } from "@angular/core";
import { addDays } from "date-fns";

export interface Configuration {
	startDay: Date;
	endDay: Date;
	totalDays: number;
	rules: Array<string>;
	participants: Array<string>;
	customRules: boolean;
}

@Injectable({
	providedIn: "root",
})
export class ConfigurationService {
	private defaultRules = [
		"Halte einen Ernährungsplan ein, der auf deine persönlichen Ziele zugeschnitten ist – ohne Alkohol und Cheatmeals.",
		"Trainiere 2 täglich für je 45 Minuten. Eine der beiden Trainingseinheiten muss im Freien stattfinden.",
		"Trinke jeden Tag 4 Liter Wasser.",
		"Lese täglich 10 Seiten eines Bildungs,- Sach- oder Ratgeber-Buchs.",
		"Dokumentiere deinen täglichen Fortschritt mit einem Foto.",
		"Wenn du eine dieser Fünf Aufgaben an einem Tag nicht erfüllen konntest, musst du wieder von vorne beginnen.",
	];

	public configuration = signal<Configuration>({
		startDay: new Date("2024-07-14"),
		endDay: new Date("2024-08-30"),
		totalDays: 75,
		rules: this.defaultRules,
		participants: [],
		customRules: false,
	});

	public setConfiguration(
		date: Date,
		participants: Array<string>,
		days = 75,
		rules: Array<string> = this.defaultRules,
		customRules = false,
	) {
		this.configuration.set({
			startDay: date,
			endDay: addDays(date, days),
			totalDays: days,
			rules: rules,
			participants: participants,
			customRules: customRules,
		});

		this.saveConfiguration();
	}

	constructor() {
		const configuration = localStorage.getItem("configuration");
		if (configuration) {
			this.configuration.set(JSON.parse(configuration));
		}
	}

	public saveConfiguration() {
		localStorage.setItem("configuration", JSON.stringify(this.configuration()));
	}
}
