using Microsoft.EntityFrameworkCore;

namespace ProductUtility.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext (DbContextOptions<ProductContext> options)
            : base(options)
        {
        }

        public DbSet<ProductUtility.Models.Product> Product { get; set; }
    }
}
