import { addKeyword} from '@builderbot/bot';

export const flowTramites = addKeyword(['tramites', 'tramite', 'tram']).addAnswer(
    [
        '🖥️ Tramites en SIU Guaraní\n',

        //'🖊️ *Preinscripción a la carrera de la Facultad* ',
        //'Ingresa en: https://www.youtube.com/watch?v=-FoE4vsifb8 \n',

        '🖊️ *Inscripción a Materias* ',
        'Mediante esta operación del SIU Guaraní los alumnos podrán inscribirse a las diferentes materias pertenecientes a su plan de estudio.',
        '*Ingresa en:* https://www.youtube.com/watch?v=nzoA4M5saak \n',

        '🖊️ *Inscripción a Exámen* ',
        'Mediante esta operación del SIU Guaraní los alumnos podrán inscribirse para rendir examen final de las diferentes materias pertenecientes a su plan de estudios. Tenga en cuenta que al momento de la inscripción el sistema informa si es en condición de libre o regular.',
        '*Ingresa en:* https://www.youtube.com/watch?v=LFJg59Ook8E \n',

        '🖊️ *Reinscripción anual de la carrera* ',
        'Mediante esta operación del SIU Guaraní los alumnos confirman que continuarán sus estudios en una determinada carrera.',
        '*Ingresa en:* https://www.youtube.com/watch?v=iGepuPO1Svg \n',

        '🖊️ *Autogestión de Constancias y Certificados* ',
        "Mediante esta operación del SIU Guaraní los alumnos pueden solicitar y/o descargar PDF's de las constancias y certificados que necesiten.",
        '*Ingresa en:* https://www.youtube.com/watch?v=y7182Ettzng \n',

    ]).addAnswer(['📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])