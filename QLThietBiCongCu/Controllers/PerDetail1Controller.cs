using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QLThietBiCongCu.Models;

namespace QLThietBiCongCu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerDetail1Controller : ControllerBase
    {
        private readonly DoAnAFinalContext _context;

        public PerDetail1Controller(DoAnAFinalContext context)
        {
            _context = context;
        }

        // GET: api/PerDetail1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PerDetail1>>> GetPerDetail1()
        {
            return await _context.PerDetail1.ToListAsync();
        }

        // GET: api/PerDetail1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PerDetail1>> GetPerDetail1(int id)
        {
            var perDetail1 = await _context.PerDetail1.FindAsync(id);

            if (perDetail1 == null)
            {
                return NotFound();
            }

            return perDetail1;
        }

        // PUT: api/PerDetail1/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerDetail1(int id, PerDetail1 perDetail1)
        {
            if (id != perDetail1.IdDetail)
            {
                return BadRequest();
            }

            _context.Entry(perDetail1).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PerDetail1Exists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PerDetail1
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PerDetail1>> PostPerDetail1(PerDetail1 perDetail1)
        {
            _context.PerDetail1.Add(perDetail1);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerDetail1", new { id = perDetail1.IdDetail }, perDetail1);
        }

        // DELETE: api/PerDetail1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PerDetail1>> DeletePerDetail1(int id)
        {
            var perDetail1 = await _context.PerDetail1.FindAsync(id);
            if (perDetail1 == null)
            {
                return NotFound();
            }

            _context.PerDetail1.Remove(perDetail1);
            await _context.SaveChangesAsync();

            return perDetail1;
        }

        private bool PerDetail1Exists(int id)
        {
            return _context.PerDetail1.Any(e => e.IdDetail == id);
        }
    }
}
