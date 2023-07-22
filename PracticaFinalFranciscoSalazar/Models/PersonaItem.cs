using System;
using System.Collections.Generic;

namespace PracticaFinalFranciscoSalazar.Models;

public partial class PersonaItem
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Descripcion { get; set; }

    public int? Completado { get; set; }
}
