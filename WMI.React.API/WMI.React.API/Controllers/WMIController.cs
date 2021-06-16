using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WMI.React.API.Models;

namespace WMI.React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WMIController : ControllerBase
    {
        private readonly WMICARSContext _dbcontext;
        public WMIController(WMICARSContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        public async Task<List<CarInfoWMI>> GetHondaWMIsAsync()
        {
            return await _dbcontext.CarInfoWMI.ToListAsync();
        }
    }
}
