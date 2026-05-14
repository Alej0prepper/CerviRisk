# Contexto Conceptual de CerviRisk

CerviRisk no es solo un estudio epidemiológico, sino el desarrollo de una herramienta digital automatizada de estratificación de riesgo para lesiones intraepiteliales escamosas cérvicouterinas (especialmente LIEAG), donde:

- El usuario introduce variables clínicas, conductuales, virales y antropométricas.
- El sistema calcula automáticamente un puntaje acumulativo de riesgo.
- Ese puntaje se traduce en categorías de riesgo (por ejemplo: bajo, intermedio, alto).
- El modelo está pensado para ser adaptable a distintos entornos clínicos, especialmente escenarios de bajos recursos.
- La lógica actual del cálculo se basa en un sistema de puntuación heurístico derivado de variables epidemiológicas y hallazgos estadísticos.
- Los pesos/puntos asignados a cada variable no son definitivos y pueden modificarse posteriormente según:
  - validación clínica,
  - análisis estadísticos adicionales,
  - desempeño predictivo,
  - disponibilidad de datos,
  - contexto clínico específico.

También queda incorporado que los documentos manuscritos representan una versión preliminar del score/risk engine, incluyendo variables como:

- edad,
- inicio precoz de relaciones sexuales,
- número de parejas,
- sexo no protegido,
- antecedentes de ITS,
- tabaquismo,
- uso prolongado de anticonceptivos orales,
- paridad,
- PVH 16/18,
- exceso de adiposidad.

El sistema usa una lógica de suma ponderada de puntos para generar el riesgo final.
