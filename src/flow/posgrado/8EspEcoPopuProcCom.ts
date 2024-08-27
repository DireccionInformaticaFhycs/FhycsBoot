import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowEspEcoPopuProcCom = addKeyword(['08']).addAnswer([
    '📄 *Especialización en Economía Popular y Procesos Comunitario*',
    '📄 Materias de la carrera',
    
    '\n*Eje 1: Ciclo teórico*',
    'Procesos económicos populares y comunitarios en las políticas públicas (Dr. Matías Iucci)',
    'Economía social y cooperativa (Dra. Ma. Victoria Deux Marzi)',
    'Economía popular y comunitaria (Dra. Liliana Bergesio)',

    '\n*Eje 2: Ciclo de orientación*',
    'Organizaciones populares y comunitarias en América Latina (Mg. Olga Sulca)',
    'Administración y formas organizativas de la economía popular (Mg. Mariano Merubia y CPN Mirta Cruz)',
    'Tecnologías y cadenas de valor en la economía popular (Mg. Roberto Bernal y Dra. Ana Mosso)',
    'Economía popular y agricultura familiar (Mg. Laura Alcoba y Dra. Natividad González)',
    'Desarrollo rural y ambiente (Dr. Lucio Malizia y Mg. Mario Bonillo)',
    'Feminismos y procesos socioeconómicos: enfoques interseccionales (Dra. Andrea López y Dra. Alejandra García Vargas)',
    'Comunicación y Educación en proceso comunitarios (Dr. Ramón Burgos y Esp. Sabrina Zinger)',

    '\n*Eje 3: Ciclo final (dos obligatorias)*',
    'Formación práctica (turorías a designar)',
    'Taller de Trabajo Final (Dra. Natividad González, Dra. María Rosa Chachagua, Dra. Agustina Romero y Mg. Luciana Barconte)',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=106',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '8EspEcoPopuProcCom.pdf')
})