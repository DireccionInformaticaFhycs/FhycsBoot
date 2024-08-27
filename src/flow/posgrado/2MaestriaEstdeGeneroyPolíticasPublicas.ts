import { addKeyword} from '@builderbot/bot';
import { join } from 'path'

export const flowMaestriaEstdeGeneroyPolíticasPublicas = addKeyword(['02']).addAnswer([
    '📄 *Maestria en Estudios de Género y Políticas Publicas*',
    '📄 Materias de la carrera',
    '\n*Eje 1: Ciclo formativo (cinco obligatorias, es “estructurado”)*',
    '1.1	Genealogías feministas',
    '1.2	Estado, políticas públicas y género',
    '1.3	Corporalidades: perspectivas teóricas y dimensiones históricas',
    '1.4	Construcción de agendas públicas feministas',
    '1.5	Epistemología feminista',
    
    '\n*Eje 2: Ciclo personalizado o flexible (cinco cursos electivos, es “semiestructurado”)*',
    '2.1	Agendas públicas feministas: coeducación y políticas de Educación Sexual Integral',
    '2.2	Articulaciones heteropatriarcales de la imaginación social y políticas de comunicación y cultura',
    '2.3	Economías feministas y desigualdad de género',
    '2.4	Agendas públicas feministas: violencias de género',
    '2.5	Agendas públicas feministas: organización social del cuidado y políticas públicas',
    '2.6	Agendas públicas feministas: salud sexual, reproductiva y no reproductiva',
    '2.7	Infancias, Tecnologías y Género',
    '2.8	Feminismos populares y comunitarios',
    '2.9	Masculinidades y feminismos: Tópicos emergentes en los estudios de género y sexualidades',
    '2.10	Perspectivas feministas del Derecho',
    '2.11	Tecnologías y género. Militancias feministas online y equidad tecnológica',
    '2.12	Políticas alimentarias y derecho a la tierra: relaciones de género, familia y comunidad en estudios rurales',
    '2.13	Migraciones y género ',

    '\n*Eje 3: Ciclo metodológico (es “estructurado”)*',
    '3.1	Metodología de la investigación cualitativa. Investigaciones sociales con perspectivas y formatos indisciplinados',
    '3.2	Metodología de la investigación cuantitativa',
    '3.3	Seminario de tesis',
    
    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=111',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '2MaestriaEnGenero.pdf')
})