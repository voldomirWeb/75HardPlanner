using API.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services
    .AddControllers().Services
    .AddEndpointsApiExplorer()
    .AddSwaggerGen()
    .AddSingleton<TeamService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseCors();

app.MapControllers();

app.Run();