using Kharaei.Domain.Interface;

namespace Kharaei.Domain.Entity;

public class UserEntity: BaseEntity<int>, IEntity
{
    public string Username { get; set; }
    public string Password { get; set; }
    public string Fullname { get; set; }
}