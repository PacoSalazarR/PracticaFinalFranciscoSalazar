using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PracticaFinalFranciscoSalazar.Models;

public partial class BdtareaContext : DbContext
{
    public BdtareaContext()
    {
    }

    public BdtareaContext(DbContextOptions<BdtareaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<PersonaItem> PersonaItems { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; DataBase=BDTAREA;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PersonaItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PersonaI__3213E83FDB7BE468");

            entity.ToTable("PersonaItem");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Completado).HasColumnName("completado");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(100)
                .HasColumnName("descripcion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
