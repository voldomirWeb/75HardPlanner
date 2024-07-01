using System.Security.Cryptography;
using API.Entities;

namespace API.Services;

public class TeamService
{
    private const string Choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    private Dictionary<string, Team> teams = new();

    public Team CreateTeam(string teamName, string name)
    {
        var team = new Team
        {
            Id = RandomNumberGenerator.GetString(Choices, 6),
            Name = teamName,
            Members = [name]
        };
        
        teams.Add(team.Id, team);

        return team;
    }
    
    public Team? GetTeam(string teamId)
    {
        var success = teams.TryGetValue(teamId, out var team);
        
        return success ? team : null;
    }
    
    public bool JoinTeam(string teamId, string name)
    {
        var team = teams[teamId];
        team.Members.Add(name);
        return true;
    }
}