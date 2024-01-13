using BetterUksivt.Infrastructure.Interfaces.Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Users.Dal.Entities
{
    public partial class User : Entity
    {
        public string Username { get; set; }
        public string Password { get; set; }    
    }
}
