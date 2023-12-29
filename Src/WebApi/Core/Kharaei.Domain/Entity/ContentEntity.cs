using Kharaei.Domain.Interface;

namespace Kharaei.Domain.Entity;

public class ContentEntity : BaseEntity<int>, IEntity
{
    public string Title { get; set; }
    public string? DefaultImage { get; set; }
    public string Text { get; set; }
    public DateTime PublishDateTime { get; set; }
    public bool Disabled { get; set; }
    public int UserId { get; set; }
    public int ContentCategoryId { get; set; }

    // Navigation Property
    public ContentCategoryEntity ContentCategory { get; set; }
    public UserEntity User { get; set; }
}