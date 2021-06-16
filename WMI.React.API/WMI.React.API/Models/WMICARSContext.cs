using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace WMI.React.API.Models
{
    public class WMICARSContext : DbContext
    {
        public WMICARSContext(DbContextOptions<WMICARSContext> options) : base(options)
        {
        }

        public DbSet<CarInfoWMI> CarInfoWMI { get; set; }
    }
}
