using Microsoft.OpenApi.Models;
using BetterUksivt.Infrastructure.Extensions;
using Users.Dal.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

services.AddDbContext<UsersContext>(opt => opt.UseInMemoryDatabase("users"));

services.AddLowerRouting();

services.AddControllers();

services.AddEndpointsApiExplorer();

services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Users API", Version = "v1" });
});

var app = builder.Build();

app.UseSwagger()
    .UseSwaggerUI();

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();