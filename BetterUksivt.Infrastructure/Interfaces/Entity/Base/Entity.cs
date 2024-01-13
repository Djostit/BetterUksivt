using System.ComponentModel.DataAnnotations;

namespace BetterUksivt.Infrastructure.Interfaces.Entity.Base
{
    public partial class Entity : IEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
