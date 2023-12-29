using Kharaei.Domain.Interface;

namespace Kharaei.Domain.Entity;

public class ContactMessageEntity: BaseEntity<int>, IEntity
{
    public string Fulllname { get; set; }
    public string Mobile { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }   
    public DateTime CreateDateTime { get; set; }
}