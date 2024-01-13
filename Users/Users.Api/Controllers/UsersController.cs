﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Users.Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get() => Ok("Get");
        [HttpPost]
        public async Task<IActionResult> Post() => Ok("Post");
        [HttpDelete]
        public async Task<IActionResult> Delete() => Ok("Delete");
        [HttpPut]
        public async Task<IActionResult> Put() => Ok("Put");
    }
}
