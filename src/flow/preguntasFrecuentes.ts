import { addKeyword} from '@builderbot/bot';

export const flowPreguntasFrec = addKeyword(['preguntas', 'frecuentes', 'Preguntas']).addAnswer(
    [
        '🤔 Preguntas Frecuentes',
        '❓ *¿SE RINDE EXAMEN DE INGRESO?* ',
        'Para estudiar las distintas carreras que se dictan en nuestra unidad académica no se rinde examen de ingreso, pero los ingresantes pueden realizar las Jornadas de Ambientación y Orientación Estudiantil que se desarrollan antes del inicio del ciclo lectivo y que se informan a través de nuestro sitio web y redes sociales.\n',

        '❓ *¿SE PAGA UNA MATRÍCULA O CUOTA MENSUAL?* ',
        'No, la Facultad de Humanidades y Ciencias Sociales (FHyCS) pertenece a la Universidad Nacional de Jujuy (UNJu), por lo que no se abona matrícula de inscripción ni ningún tipo de arancel o cuota mensual.\n',

        '❓ *¿COMO ME INSCRIBO SI YA SOY ESTUDIANTE DE ESTA FACULTAD O DE OTRA UNIDAD ACADEMICA DE LA UNJU?* ',
        'Si estudias alguna carrera de la UNJu, o si alguna vez te inscribiste en una pero no cursaste, estás registrado/a en el Sistema SIU GUARANÍ, por lo que para inscribirte en una nueva carrera deberás ingresar con tu usuario y contraseña al Sistema SIU GUARANÍ. https://www.alumnos.unju.edu.ar/unju/ \n',

         '❓ *¿QUÉ PASO DEBO SEGUIR?* ',
        '1 - Ingresá con tu usuario y contraseña a: Sistema SIU GUARANÍ',
        '2 - Dirigite a: Inscripción a propuestas',
        '3 - Completá los datos del formulario',
        '4 - Posteriormente deberás presentar los requisitos de ingreso ante Dirección Alumnos. (Son los mismos que se detallan anteriormente, excepto el formulario de preinscripción, ya que al preinscribirte el Sistema no emitirá un comprobante de preinscripción a propuestas pero estarás registrado/a en el Sistema.)\n',
        'Si no contás con tu usuario y/o contraseña debes comunicarte con la Facultad donde estudias o en la unidad académica donde te inscribiste alguna vez en una carrera para recuperar tu usuario y poder ingresar al Sistema.',
        
        '\n📌 *Menu* Para volver al Menu principal.',
    ])