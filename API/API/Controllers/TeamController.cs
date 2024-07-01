using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/team")]
public class TeamController : Controller
{
    private readonly TeamService teamService;

    public TeamController(TeamService teamService)
    {
        this.teamService = teamService;
    }

    [HttpPost]
    public ActionResult<Team> CreateTeam(string teamName, string name)
    {
        var team = teamService.CreateTeam(teamName, name);
        return Ok(team);
    }
    
    [HttpPost("{teamId}")]
    public ActionResult<bool> JoinTeam(string teamId, string name)
    {
        var success = teamService.JoinTeam(teamId, name);
        return Ok(success);
    }

    [HttpGet("{teamId}")]
    public ActionResult<Team?> Get(string teamId)
    {
        var team = teamService.GetTeam(teamId);
        return Ok(team);
    }
}