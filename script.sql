
CREATE OR REPLACE VIEW VW_PRODUCTIVIDAD_EJECUTIVOS AS
SELECT e.IdEjecutivo,
       e.Nombre || ' ' || e.Apellido                                            AS ejecutivo,
       COUNT(DISTINCT v.IdVisita)                                               AS Total_visitas,
       COUNT(DISTINCT ve.IdVenta)                                               AS Total_ventas,
       SUM(ve.Monto)                                                            AS Monto_total_vendido,
       COUNT(DISTINCT ve.IdVenta) * 1.0 / NULLIF(COUNT(DISTINCT v.IdVisita), 0) AS Ratio_ventas_por_visita
FROM Ejecutivos e
         LEFT JOIN Visitas v ON e.IdEjecutivo = v.IdEjecutivo
         LEFT JOIN Ventas ve ON ve.IdCliente = v.IdCliente
GROUP BY e.IdEjecutivo, e.Nombre, e.Apellido
ORDER BY Monto_total_vendido DESC
