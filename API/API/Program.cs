using API.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().Services.AddEndpointsApiExplorer().AddSwaggerGen().AddSingleton<TeamService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();