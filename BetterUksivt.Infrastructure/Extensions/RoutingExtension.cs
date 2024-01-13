using BetterUksivt.Infrastructure.Services.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace BetterUksivt.Infrastructure.Extensions
{
    public static class RoutingExtension
    {
        public static void AddLowerRouting(this IServiceCollection services)
        {
            services.AddRouting(x =>
            {
                x.LowercaseQueryStrings = true;
                x.LowercaseUrls = true;
            });
        }
    }
}
