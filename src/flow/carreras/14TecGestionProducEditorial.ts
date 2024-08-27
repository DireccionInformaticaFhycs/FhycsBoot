import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowTecGestionProducEditorial = addKeyword(['14']).addAnswer([
    '📄 *Tecnicatura en Gestión y Producción Editorial*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',

    '\n*PRIMER AÑO*',
    '1	Introducción al campo editorial',
    '2	Taller de lectura y escritura académica y del campo editorial',
    '3	Gramática, norma y discurso I',
    '4	Taller de Edición I',
    '5	Teorías de la Gestión Editorial',
    '6	Gramática, norma y discurso II',
    '7	Comunicación y organizaciones',

    '\n*SEGUNDO AÑO*',
    '8 Corrección de estilo',
    '9 Políticas editoriales',
    '10 Taller de edición II',
    '11 Semiótica aplicada',
    '12 Promoción, distribución y comercialización editorial',
    '13 Calidad de gestión y administración editorial',
    '14 Práctica profesionalizante I',

    '\n*TERCER AÑO*',
    '15 Taller de diseño gráfico y maquetación',
    '16 Taller de edición III: producción editorial multimedial',
    '17 Legislación: derechos editoriales y del autor',
    '18 Catalogación y registro editorial',
    '19 Seminario I: Género, Comunicación, Sociedad y Políticas Editoriales',
    '20 Optativa',
    '21 Seminario II: Gestión de la Infraestructura y la tecnología editorial',
    '22 Práctica profesionalizante II',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifTecUnivGestyProdEditWeb.html',

]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '14TecGestionProducEditorial.pdf')
})