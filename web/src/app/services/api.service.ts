import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

  public async createTeam(teamName: string, memberName: string) {
    return this.httpClient
      .post<Team>(
        '/api/team',
        {teamName: teamName, name: memberName},
        {responseType: "json"})
  }

}

export type Team = {
  id: number;
  name: string;
  members: string[];
}
