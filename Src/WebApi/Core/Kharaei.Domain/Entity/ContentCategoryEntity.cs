using Kharaei.Domain.Interface;

namespace Kharaei.Domain.Entity;

public class ContentCategoryEntity: BaseEntity<int>, IEntity
{
    public string Title { get; set; }
    public int? ParentId { get; set; }

}