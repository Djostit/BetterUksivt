using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Users.Dal.Entities;

namespace Users.Dal.Context
{
    public partial class UsersContext : DbContext
    {
        public UsersContext(DbContextOptions options) : base(options)
        {
        }
        public virtual DbSet<User> Users { get; set; } = null!;
    }
}
