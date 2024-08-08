import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowProfCienciaEduacion = addKeyword(['03']).addAnswer([
    '📄 *Profesorado y Licenciatura en Ciencias de la Educación*',
    'Sede: San Salvador de Jujuy y San Pedro',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Pensamiento Científico',
    '2	Problemática Educativa',
    '3	Problemática Filosófica',
    '4	Sociología General',
    '5	Optativo: Area Socio-Cultural',
    '6	Psicología General',
    
    '\n*SEGUNDO AÑO*',
    '7 Economía',
    '8 Biología del Aprendizaje',
    '9 Historia Social de la Eduación',
    '10 Epistemología',
    '11 Sociología de la Educación',
    '12 Psicología Evolutiva I',
    
    '\n*TERCER AÑO*',
    '13 Psicología Evolutiva II',
    '14 Psicología Educacional',
    '15 Historia de la Educación Argentina y Latinoamericana',
    '16 Política Educacional y Legislación',
    '17 Filosofía de la Eduación',
    '18 Didáctica General',
    '19 Psicología Social',
    
    '\n*CUARTO AÑO*',
    '20 Teoría y Metodología de la Investigación Educativa',
    '21 Planeamiento de la Educación',
    '22 Didáctica de las Áreas Disciplinares',
    '23 Teoría y Desarrollo del curriculum',
    '24 Organización y Administración Educacional',
    '25 Optativo: Área Comunicacional',
    '26 Análisis Institucional',
    
    '\n*QUINTO AÑO*',
    '27 Dificultades del Aprendizaje',
    '28 Educación Especial',
    '29 Orientación e Intervención Pedagógica Institucional',
    '30 Eduación no Formal',
    '31 Universidad y Formación Docente',
    '32 Práctica y Residencia (1) *PARA EL TÍTULO DE PROFESOR EN CIENCIAS DE LA EDUCACIÓN*',
    '33 (1) Trabajo de Campo e Investigación (Trabajo Final) *PARA EL TÍTULO DE LICENCIADO EN CIENCIAS DE LA EDUCACIÓN*',

    '\n(1): Para inscribirse en estos Módulos el alumno deberá tener aprobadas las materias de 4° Año y Regularizadas las de 5°. Para su acreditación se exigirá la previa aprobación de todos los módulos.',
    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifProfLicCiaEdu.html',
    '\n*Menu* Para volver al Menu principal.',
    '\n*Carreras* Para mostrar todas las carreras.',
])
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '3ProfLicCiencias de la Educación.pdf')
})