using System;
using System.Collections.Generic;

namespace QLThietBiCongCu.Models
{
    public partial class PerDetail1
    {
        public int IdDetail { get; set; }
        public int? IdPer { get; set; }
        public int? CreateRole { get; set; }
        public int? EditByName { get; set; }
        public int? EditFull { get; set; }
        public int? DeleteRole { get; set; }

        public virtual Permission IdPerNavigation { get; set; }
    }
}
