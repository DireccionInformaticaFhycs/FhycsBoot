import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowMaeEstLitFront = addKeyword(['11']).addAnswer([
    '📄 *Maestría en Estudios Literarios de Frontera*',

    '📄 Materias de la carrera',
    '\n*_Estructura por ciclos- materias_*',
    '*CICLO TEÓRICO BÁSICO*',
    '1° año. Literatura y frontera(s) - Dra. Andrea Bocco (UNC) Dra. Alejandra Cebrelli (UNSa)',
    '1° año. Teorías Contemporáneas de la Literatura - Dra. Alejandra Nallim (UNJu)',
    '1° año. Literaturas Comparadas: culturas, artes y lenguajes - Mg. M. Soledad Blanco (UNJu)',
    '1° año. Filosofía, cultura y estéticas en los Andes - Dr. Mario Vilca y Dra. Lucila Bugallo UNJu',

    '\n*CICLO DE PROFUNDIZACIÓN*',
    '1° año. Problemáticas de la Literatura Latinoamericana - Dra. Irene López (UNSa)',
    '1° año. Literatura, política y sociedad en el NOA - Dra. Liliana Massara (UNT), Dra. Raquel Guzmán (UNSa) y Dra. María Alejandra Nallim (UNJu)',
    '2° año. Literatura y Oralidad I: Relatos Orales - Mg. F. Angulo Villán (UNJu) y Dra. H. Terrón de Bellomo (UNJu)',
    '2° año. Literatura y Oralidad II: Lírica Popular Oral - Dra. María Eduarda Mirande (UNJu)',

    '\n*CICLO DE FORMACIÓN ORIENTADA*',
    '2° año. Opcional 1: Literatura y Arte en el NOA. (Revistas y/o Periodismo cultural en el NOA)',
    '2° año. Opcional 2: Seminarios de Literatura y arte en la región andina',
    '2° año. Opcional 3: Literatura en red- Lenguajes mediáticos, audiovisuales, digitales e hipertextuales',
    '2° año. Opcional 4: Escritura creativa, literatura y otros lenguajes artísticos (Escritura creativa-Teatro-Cine)',

    '\n*_Ciclo de Formación Orientada- módulos opcionales Se eligen 4 (cuatro)_*',
    '*1: Seminarios de Literatura y Arte en el NOA*',
    'Dr. Hernán Sosa (UNSa) Fronteras y regiones en las narrativas recientes argentinas',  
    'Dra. Verónica Juliano (UNT) Narrativas del hampa: periferias urbanas en la enunciación literaria',
    'Dra. Soledad Martínez Zuccardi (UNT) Constitución de un campo literario en el NOA',

    '\n*2: Seminarios de Literatura y arte en los Andes*',
    'Mg. Luciana Mellado (UNSJB) Invención de las distancias y cartografías literarias disidentes en América Latina',
    'Mg. Ana Lía Miranda (UNJu) Itinerarios vanguardistas. Vanguardia e indigenismo en el universo andino: voces y espacios de beligerancia',
    'Dr. Ricardo Kaliman (UNT) La construcción del espacio en el folklore moderno argentino. Nación, región y provincias',

    '\n*3: Seminario-Taller: Literatura y otras artes en la red*',
    'Dra. Gabriela Palazzo (UNT) Territorios enredados: literatura y ciberespacio',
    'Dr. Pedro Arturo Gómez (UNT) Representaciones, identidades y cultura mediática en contextos regionales',
    
    '\n*4: Talleres de escritura creativa y otros lenguajes artísticos*',
    'Dra. Elena Bossi (UNJu) Entre la ficción y la realidad: creación y análisis de textos atípicos ',
    'Lic. Fabián Soberón (UNT) De la literatura al cine: Escritura de escaleta',
    'Dra. Valeria Mozzoni (UNT) Dramaturgias actuales en el NOA: dominios teóricos y lecturas',

    '\n*Ciclo Metodológico (740 hs. totales)*',
    '2- Metodología de la investigación literaria. I° C- 40 hs. Dra. Raquel Guzmán (UNSa)',
    '2- Seminario de Tesis. II° C- 60- Dra. Alejandra Cebrelli (UNSa) y Mg. Lucas Perassi (UNJu). 250 hs.',
    '2- Tutorías de trabajo final (Dirección de Tesis). 160 hs.',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=67',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '11MaesEstuLitFront.pdf')
})
.addAnswer(`TRIFOLIO de la carrera en PDF`, {
    media: join(process.cwd(), 'assets', '11MaestriaFronteras.pdf')
})