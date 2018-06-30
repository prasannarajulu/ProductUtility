using System.ComponentModel.DataAnnotations;

namespace ProductUtility.Models
{
    public class Product
    {
        public long? Id { get; set; }
        [Required]
        public string ShortSku { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public decimal RetailPrice { get; set; }
    }
}
