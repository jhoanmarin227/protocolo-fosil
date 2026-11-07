# Protocolo Fósil - Hoja de ruta

Protocolo Fósil es un juego completo, no una demo. Este documento explica cuánto debe durar, de dónde sale esa duración y en qué versiones lo vamos a construir.

## Duración objetivo

El juego completo debe durar **entre 2 y 3 horas** en una primera partida.

| Capítulo                  | Contenido                                          | Duración estimada           |
| ------------------------- | -------------------------------------------------- | --------------------------- |
| 1. Aterrizaje             | Intro de la nave, el hangar y la entrada a la base | 10-15 min                   |
| 2. Nivel -1               | Base vacía, primeras notas y la tarjeta negra      | 20-25 min                   |
| 3. La huida               | Persecución hasta el elevador                      | 5-10 min                    |
| 4. Sector Militar (-4)    | La radio, la científica y el inicio de la subida   | 20-25 min                   |
| 5. Subiendo (-3, -2 y -1) | Excavaciones, Laboratorios y Operaciones           | 45-60 min                   |
| 6. El Biodomo             | La selva y la persecución del cuello largo         | 20-25 min                   |
| 7. El escape              | El temporizador del hangar, el despegue y el final | 10-15 min                   |
| **Total**                 |                                                    | **2 h 10 min a 2 h 55 min** |

## De dónde sale la duración

La duración no sale de alargar pasillos. Sale del contenido:

- **Pisos grandes**, cada uno con su propio mapa hecho en el editor Tiled.
- **Rompecabezas**: tarjetas por rango, generadores apagados, códigos escondidos en las notas y ductos que conectan zonas.
- **Un dinosaurio distinto por piso**, cada uno con su propia forma de cazar.
- **Contenido opcional**: notas y grabaciones escondidas que cuentan la historia completa.
- **Guardado en terminales**, para que el juego se pueda jugar en varias sesiones.

## Versiones

Cada versión es jugable de principio a fin. Cada una corresponde a un milestone en GitHub.

| Versión                                                                                         | Qué agrega                                                                                                                  |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [v0.1 - First playable prototype](https://github.com/jhoanmarin227/protocolo-fosil/milestone/1) | Un cuarto oscuro con linterna, ruido, un raptor y una salida. Prueba que el juego da miedo.                                 |
| [v0.2 - Core systems](https://github.com/jhoanmarin227/protocolo-fosil/milestone/2)             | Tarjetas y puertas, elevadores que retienen la tarjeta, escondites, notas y grabaciones, guardado y mapas hechos con Tiled. |
| [v0.3 - Chapters 1 to 3](https://github.com/jhoanmarin227/protocolo-fosil/milestone/3)          | Aterrizaje, el Nivel -1 y la caída por el elevador, con el primer arte y sonido.                                            |
| [v0.4 - Chapters 4 and 5](https://github.com/jhoanmarin227/protocolo-fosil/milestone/4)         | El Sector Militar y la subida por Excavaciones, Laboratorios y Operaciones.                                                 |
| [v0.5 - Biodome and escape](https://github.com/jhoanmarin227/protocolo-fosil/milestone/5)       | El Biodomo, el escape, la intro de la nave y el final. La historia completa se puede jugar.                                 |
| [v1.0 - Release](https://github.com/jhoanmarin227/protocolo-fosil/milestone/6)                  | Pulido, pruebas con otras personas, corrección de errores y lanzamiento público.                                            |

## Reglas para no perder el control

Un juego largo hecho por una sola persona se puede volver interminable. Estas reglas lo evitan:

1. **Cada versión se puede jugar.** Nunca hay una versión a medias en `main`.
2. **Las ideas nuevas no entran en la versión actual.** Se anotan como issue en el milestone siguiente.
3. **Primero figuras, después arte.** Cada mecánica se prueba con cuadros y círculos; el arte llega cuando la mecánica ya es divertida.
4. **Probar con alguien más** al cerrar cada versión, y anotar lo que no se entendió o no asustó.
5. **Si algo se atrasa, se recorta** contenido opcional antes que mover la fecha de toda la versión.
