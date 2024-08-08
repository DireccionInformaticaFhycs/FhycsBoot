import { addKeyword} from '@builderbot/bot';
import { join } from 'path'

export const flowComunicacionDigital = addKeyword(['01', 'digital']).addAnswer([
    '📄 *Tecnicatura en Comunicación Digital Convergente*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Enfoques de la Comunicación Digital (Anual)',
    '2	Seminario Tecnología de la Comunicación (1 Cuat.)',
    '3	Taller de Producción y Comprensión de Textos Periodísticos 1 Cuat.',
    '4	Procesos Culturales Digitales I	(2 correlativa 2 Cuat.)',
    '5	Sociología de la Comunicación (2 Cuat.)',
    '6	Fuentes de Información y Documentación - Seminario (2 Cuat.)',
    '7	Taller de Producción Gráfica (2 Cuat.)',
    
    '\n*SEGUNDO AÑO*',
    '8	Procesos Culturales Digitales II (1,4 correlativa 1 Cuat.)',
    '9	Seminario de Periodismo Digital	(2,3,7 correlativa 1 Cuat.)',
    '10	Taller de Televisión I (2 correlativa 1 Cuat.)',
    '11	Taller de Producción Radiofónica I (1 Cuat.)',
    '12	Narrativas Transmedia (2,3,7 correlativa 2 Cuat.)',
    '13	Taller de Televisión II	10 (10 correlativa 2 Cuat.)',
    '14	Taller de Producción Radiofónica (11 correlativa 2 Cuat.)',
    '15	Taller de Publicidad y Propaganda (2 Cuat.)',
    
    '\n*TERCER AÑO*',
    '16	Problemática de la Convergencia Digital (8 correlativa 1 Cuat.)',
    '17	Audiencias Transmediales (5 correlativa 1 Cuat.)',
    '18	Gestión de Medios Digitales (8 correlativa 1 Cuat.)',
    '19	Social Media Marketing (15 correlativa 1 Cuat.)',
    '20	Periodismo de Datos	(6,9 correlativa 2 Cuat.)',
    '21	Seminario de Diseño Multimedial (12 correlativa 2 Cuat.)',
    '22	Comunicación Digital con Perspectiva de Género (2 Cuat.)',
    '23	Seminario Integrador de Práctica Digital Transmedial (1 al 15 correlativa Anual)',
    
    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifTecComDigConv.html',
    '\n*ofertas* Para mostrar todas las carreras.',
    '\n*Menu* Para volver al Menu principal.',
])
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '1TecComDigConv.pdf')
})