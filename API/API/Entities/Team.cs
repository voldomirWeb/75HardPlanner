namespace API.Entities;

public class Team
{
    public string Id { get; set; } = null!;
    public string Name { get; set; } = null!;
    public List<string> Members { get; set; } = [];
}