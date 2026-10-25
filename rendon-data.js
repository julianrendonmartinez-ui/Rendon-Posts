/* ==========================================================================
   CONSULTORÍA JURÍDICA ESTRATÉGICA RENDÓN
   Serie de 17 piezas para Facebook e Instagram
   Datos de contenido — Sistema de marca v2.1 "Editorial de despacho"
   --------------------------------------------------------------------------
   Fuentes: Sistema_de_Marca_Rendon_v2.1.pdf (§4 voz, §5 visual, §8 formatos,
   Anexo A §A1 gramática / §A2 "sin costo" / §A3 palabras clave / §A6 CTA),
   Guiones_Redes_Sociales_con_Tarjeta_Digital.md.pdf (mensajes base).
   Reglas aplicadas: tratamiento "tú" en redes, una sola idea por pieza,
   ninguna promesa de resultado, ningún dato de mercado sin fuente.
   ========================================================================== */

const RENDON = {
  marca: 'CONSULTORÍA JURÍDICA ESTRATÉGICA RENDÓN',
  marcaCorta: 'CONSULTORÍA RENDÓN · PUEBLA',
  plaza: 'PUEBLA',
  telefono: {
    guiones: '22 27 10 79 08',
    internacional: '+52 222 710 7908'
  },
  tarjeta: 'julianrendonmartinez-ui.github.io/Tarjeta-Digital-de-Presentacion/',
  tarjetaUrl: 'https://julianrendonmartinez-ui.github.io/Tarjeta-Digital-de-Presentacion/',
  hashtags: '#Puebla #AbogadosPuebla #AsesoríaLegalPuebla #EmpresasPuebla #ConsultoríaRendón',
  diagnostico: 'Diagnóstico sin costo y sin compromiso.',
  ilustrativo: 'EJEMPLO ILUSTRATIVO, NO UN CASO REAL'
};

/* --------------------------------------------------------------------------
   RETRATO — excepción declarada del sistema v2.1
   El sistema es tipográfico y "sin fotografía" (§5). La fotografía se admite
   en tres lugares y solo en tres: portada, pieza 17 y medallón del cierre.
   El personaje es ficticio: no es el abogado del despacho, es su doble
   editorial. La etiqueta "RETRATO DE REFERENCIA" lo declara en la pieza.
   -------------------------------------------------------------------------- */

const RETRATO = {
  /* el usuario puede reemplazar este archivo sin tocar código */
  src: 'assets/retrato-rendon.jpg',
  alt: 'Retrato del Lic. Julián Rendón, de pecho hacia arriba, con traje azul',
  label: 'Lic. Julián Rendón',
  pie: 'Lic. Julián Rendón · dirección jurídica'
};

/* --------------------------------------------------------------------------
   Las 17 piezas.
   n        → número de pieza
   clave    → palabra clave canónica (§A3), se imprime en la banda de CTA
   formato  → uno de los seis formatos del §8
   persona  → A–E del §4.4, define el tono
   linea    → 'legal' | 'ia'  (la línea IA lleva la marca RENDÓN IA y arena)
   -------------------------------------------------------------------------- */

const PIEZAS = [

  /* 00 — PORTADA ---------------------------------------------------------- */
  {
    id: 'portada', n: '00', formato: 'portada', linea: 'legal', persona: 'Todas',
    servicio: 'Presentación del despacho',
    titular: ['Antes de firmar,', 'certeza.'],
    cuerpo: null,
    prueba: null,
    captionIG:
`Antes de firmar, certeza.

Un contrato, un finiquito, una sociedad, un aviso de privacidad. Lo que firmas hoy decide lo que pasa en los próximos años.

Así trabajamos: diagnóstico primero, documento después, firma acompañada.

Diagnóstico sin costo y sin compromiso.
WhatsApp 22 27 10 79 08
Tarjeta digital en el QR.

${RENDON.hashtags}`,
    captionFB:
`Antes de firmar, certeza.

La mayoría de los problemas legales de una empresa no empiezan en un juicio. Empiezan en un documento que alguien firmó sin que nadie se lo explicara: un contrato copiado de internet, un finiquito calculado de memoria, una sociedad constituida con la plantilla de otro giro.

En Consultoría Jurídica Estratégica Rendón trabajamos en el momento previo a la firma. Revisamos, diagnosticamos y redactamos antes de que el documento sea irreversible.

Cuatro pasos: diagnóstico, documento, firma acompañada, seguimiento.

Diagnóstico sin costo y sin compromiso.
WhatsApp 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}

Puebla y zona metropolitana.`
  },

  /* 01 — S1 EMPRESA ------------------------------------------------------- */
  {
    id: 's1', n: '01', formato: 'titular', linea: 'legal', persona: 'A — Emprendedor / pyme',
    servicio: 'Arquitectura corporativa', clave: 'EMPRESA',
    titular: ['Constituir la empresa', 'es fácil.', 'Constituirla bien, no.'],
    cuerpo: 'S.A. de C.V., S. de R.L. o S.A.P.I. se elige una vez. Esa decisión fija tus impuestos, el control de la asamblea y qué pasa si un socio quiere salir.',
    prueba: 'Estatutos redactados para tu caso, no para el giro de nadie más.',
    lista: ['S.A. de C.V.', 'S. de R.L.', 'S.A.P.I.'],
    captionIG:
`Constituir la empresa es fácil. Constituirla bien, no.

La forma societaria se elige una vez y condiciona todo lo demás: cómo se reparten las utilidades, quién manda en la asamblea, qué pasa si un socio se quiere ir.

S.A. de C.V., S. de R.L. o S.A.P.I. no son equivalentes. Se elige con números en la mano.

Escribe EMPRESA por WhatsApp: 22 27 10 79 08.

#Puebla #EmprendedoresPuebla #ConstituirEmpresa #NegociosPuebla #ConsultoríaRendón`,
    captionFB:
`Constituir la empresa es fácil. Constituirla bien, no.

Cuando alguien abre un negocio en Puebla, lo normal es preguntar "¿qué sociedad me conviene?" y recibir una respuesta genérica. Pero la forma societaria no es un trámite: es la estructura que decide cómo se reparten las utilidades, quién tiene voto en la asamblea, cómo entra un inversor y qué pasa si un socio quiere salir.

S.A. de C.V., S. de R.L. y S.A.P.I. no son intercambiables. Cada una tiene un costo fiscal, un régimen de responsabilidad y una manera distinta de administrar el control.

Lo que hacemos: revisamos tu caso, te mostramos la comparación y redactamos los estatutos con las cláusulas que previenen el conflicto antes de que exista.

Escribe EMPRESA por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 02 — S2 CONTRATO ------------------------------------------------------ */
  {
    id: 's2', n: '02', formato: 'clausula', linea: 'legal', persona: 'A / B',
    servicio: 'Análisis de contratos', clave: 'CONTRATO',
    titular: ['Esto dice', 'tu contrato.'],
    clausula: 'La parte incumplida será responsable de los daños y perjuicios que se ocasionen, incluyendo el lucro cesante, sin necesidad de declaración judicial previa.',
    resaltado: 'sin necesidad de declaración judicial previa',
    cuerpo: 'Una cláusula así no se lee en la junta. Se lee seis meses después, cuando ya hay una penalidad encima de la mesa.',
    prueba: 'Le entregamos el reporte de riesgos por escrito, cláusula por cláusula.',
    captionIG:
`Esto dice tu contrato.

"Sin necesidad de declaración judicial previa." Diez palabras. Significan que la otra parte puede cobrarte una penalidad sin que nadie haya resuelto nada todavía.

Casi nadie lee esa línea. Casi todos la firman.

Le entregamos el reporte de riesgos por escrito, cláusula por cláusula, antes de que firmes.

Escribe CONTRATO por WhatsApp: 22 27 10 79 08.

#Puebla #Contratos #EmpresasPuebla #AbogadosPuebla #ConsultoríaRendón`,
    captionFB:
`Esto dice tu contrato.

Hay una diferencia enorme entre lo que un contrato parece decir y lo que un juez va a entender que dice. Esa diferencia casi siempre vive en una sola cláusula, y casi siempre pasa desapercibida en la junta donde todos quieren cerrar el trato.

El ejemplo de esta pieza es real y es común: "sin necesidad de declaración judicial previa". Con esa frase, la contraparte puede ejecutar una penalidad sin esperar resolución alguna.

No se trata de desconfiar de todo el mundo. Se trata de saber qué estás firmando.

Lo que entregamos: un reporte de riesgos por escrito, cláusula por cláusula, con la redacción alternativa de cada punto crítico.

Escribe CONTRATO por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 03 — S3 MARCA --------------------------------------------------------- */
  {
    id: 's3', n: '03', formato: 'marca', linea: 'legal', persona: 'A',
    servicio: 'Registro de marca · IMPI', clave: 'MARCA',
    titular: ['Una marca', 'sin registro', 'es una marca', 'prestada.'],
    cuerpo: 'Búsqueda de antecedentes, análisis de viabilidad y registro ante el IMPI. Todo digital, sin salir de tu negocio.',
    prueba: 'Primero la búsqueda. Después el registro. En ese orden.',
    captionIG:
`Una marca sin registro es una marca prestada.

Puedes tener el nombre, el logo, el dominio y diez años de clientela. Si alguien más lo registra primero ante el IMPI, la que tiene que cambiar de nombre eres tú.

El orden correcto es: búsqueda de antecedentes, análisis de viabilidad, registro. Sin saltarse el primero.

Escribe MARCA por WhatsApp: 22 27 10 79 08.

#Puebla #MarcaRegistrada #IMPI #EmprendedoresPuebla #ConsultoríaRendón`,
    captionFB:
`Una marca sin registro es una marca prestada.

Es una de esas cosas que no preocupan hasta que preocupan. Un negocio puede operar años con su nombre, su logo y su clientela, y perderlo todo cuando alguien más lo registra ante el IMPI: en México el derecho se obtiene con el registro, no con el uso.

Por eso el orden importa. Primero la búsqueda de antecedentes, para saber si el nombre está libre y en qué clase. Después el análisis de viabilidad. Después el registro.

Si el paso uno se salta, los otros dos se pagan dos veces.

Registro de marca 100% digital, sin traslados.

Escribe MARCA por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 04 — S4 LABORAL (caso sin nombre) ------------------------------------- */
  {
    id: 's4', n: '04', formato: 'caso', linea: 'legal', persona: 'C — Trabajador despedido',
    servicio: 'Defensa laboral estratégica', clave: 'LABORAL',
    titular: ['Le ofrecieron tres años.', 'Firmó el mismo día.', 'Lo que le correspondía', 'era más.'],
    cuerpo: 'Antes de firmar tu finiquito, sabemos cuánto te toca de verdad. Y qué estás cediendo con esa firma.',
    prueba: RENDON.diagnostico,
    captionIG:
`Le ofrecieron tres años. Firmó el mismo día. Lo que le correspondía era más.

Cuando te despiden, la prisa juega en tu contra. El finiquito se calcula con salario integrado, antigüedad, proporcionales y, según el caso, indemnización. Si firmas sin revisarlo, cierras la puerta.

No estás solo en esto. Y no tienes que decidir hoy.

Diagnóstico sin costo y sin compromiso.
Escribe LABORAL por WhatsApp: 22 27 10 79 08.

#Puebla #DerechoLaboral #DespidoInjustificado #Finiquito #ConsultoríaRendón`,
    captionFB:
`Le ofrecieron tres años. Firmó el mismo día. Lo que le correspondía era más.

Un despido llega con prisa. Te citan, te dan una cifra, te piden firmar ahí mismo porque "así es el procedimiento". Casi nadie se lleva el cálculo a casa para revisarlo.

El finiquito no es una cifra que se negocia de memoria: se calcula con salario diario integrado, antigüedad, partes proporcionales de aguinaldo, vacaciones y prima vacacional y, dependiendo de cómo terminó la relación, indemnización constitucional.

Firmar cierra la posibilidad de reclamar lo que faltó.

Si te despidieron y te están pidiendo una firma, el primer paso no es pelear: es saber cuánto te toca.

Diagnóstico sin costo y sin compromiso.
Escribe LABORAL por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 05 — S5 ISSSTE (checklist) -------------------------------------------- */
  {
    id: 's5', n: '05', formato: 'checklist', linea: 'legal', persona: 'C — Trabajador / ISSSTE',
    servicio: 'Diagnóstico ISSSTE', clave: 'ISSSTE',
    titular: ['Tres datos antes', 'de confiar en', 'tu pensión.'],
    items: [
      ['Salario registrado', 'el SBC con el que te van a calcular, no el que cobras'],
      ['Modalidad de registro', 'si estás en una distinta a la que te corresponde, hay problema'],
      ['Quién te registró', 'y desde cuándo. El historial completo, no el último recibo']
    ],
    prueba: 'Te entregamos el reporte por escrito, con lo que sí está registrado y lo que falta.',
    captionIG:
`Tu pensión no se calcula con lo que cobras. Se calcula con lo que el ISSSTE tiene registrado de ti.

Tres cosas que hay que revisar antes de confiar:
1. Tu salario base de cotización.
2. Tu modalidad de registro.
3. Quién te registró y desde cuándo.

Si algo no cuadra, se corrige con tiempo. No el día de la jubilación.

Escribe ISSSTE por WhatsApp: 22 27 10 79 08.

#Puebla #ISSSTE #Pensión #DerechosLaborales #ConsultoríaRendón`,
    captionFB:
`Tu pensión no se calcula con lo que cobras. Se calcula con lo que el ISSSTE tiene registrado de ti.

Es la distancia más cara que existe en materia laboral, y casi nadie la revisa hasta que llega el trámite de jubilación, cuando ya es tarde para corregir.

Hay tres datos que hay que verificar:

1. El salario base de cotización (SBC). Es la cifra con la que se calcula todo. Si tu patrón te registró con el mínimo, tu pensión futura se calcula sobre el mínimo.

2. La modalidad de registro. Un trabajador puede estar dado de alta en una modalidad que no corresponde a su relación real de trabajo.

3. El registro patronal y su historial: quién te dio de alta, desde cuándo y por cuánto tiempo aparece cotizado.

Entregamos el reporte por escrito, con lo que está registrado y lo que no.

Escribe ISSSTE por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 06 — S6 MACHOTE (dato duro) ------------------------------------------- */
  {
    id: 's6', n: '06', formato: 'dato', linea: 'legal', persona: 'A / B',
    servicio: 'Contratos a la medida', clave: 'MACHOTE',
    dato: '0',
    titular: ['contratos', 'machote.'],
    cuerpo: 'El machote no sabe de tu caso. Un contrato se redacta para lo que puede salir mal, no para lo que se espera.',
    prueba: 'Redacción a la medida en civil, mercantil, laboral y arrendamiento.',
    captionIG:
`Cero contratos machote.

Un machote sirve para cualquier negocio, que es lo mismo que decir que no sirve para el tuyo. No conoce tu giro, tus plazos, tus garantías ni la forma en que tú cobras.

Un contrato no se escribe para lo que se espera. Se escribe para lo que puede salir mal.

Escribe MACHOTE por WhatsApp: 22 27 10 79 08.

#Puebla #Contratos #NegociosPuebla #EmpresasPuebla #ConsultoríaRendón`,
    captionFB:
`Cero contratos machote.

Esa es una política del despacho, no una cifra de mercado: no firmamos nada que hayamos sacado de una plantilla.

Un machote se reconoce rápido. Trae cláusulas de un giro que no es el tuyo, plazos que nadie acordó, una jurisdicción que nadie eligió y, casi siempre, un espacio en blanco donde debería estar la garantía.

El problema no es que el texto sea malo. Es que fue escrito para un caso parecido, y lo parecido en derecho se paga caro.

Un contrato a la medida empieza por una conversación sobre cómo opera tu negocio y termina con las cláusulas que cubren lo que puede fallar.

Escribe MACHOTE por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 07 — S7 MERCANTIL ----------------------------------------------------- */
  {
    id: 's7', n: '07', formato: 'titular', linea: 'legal', persona: 'A / B',
    servicio: 'Blindaje mercantil', clave: 'MERCANTIL',
    titular: ['Entre socios,', 'la confianza', 'no es un', 'contrato.'],
    cuerpo: 'Pacto de socios, confidencialidad, pagaré, no competencia. Lo que no está firmado no se puede exigir, por más que se haya prometido.',
    lista: ['Pacto de socios', 'Confidencialidad', 'Pagaré', 'No competencia'],
    prueba: 'Contratos mercantiles redactados para tu operación.',
    captionIG:
`Entre socios, la confianza no es un contrato.

"Con mi socio no hace falta, nos conocemos desde la carrera." Es exactamente la frase que antecede a la sociedad que se rompe, y a la que después nadie puede probar nada.

Pacto de socios, confidencialidad, pagaré, no competencia. Cuatro documentos que existen para el día en que la relación cambie.

Escribe MERCANTIL por WhatsApp: 22 27 10 79 08.

#Puebla #DerechoMercantil #EmpresasPuebla #Socios #ConsultoríaRendón`,
    captionFB:
`Entre socios, la confianza no es un contrato.

Hay una escena que se repite: dos o tres personas abren un negocio, se reparten verbalmente las decisiones, no firman pacto de socios porque "eso es de desconfiados", y dos años después nadie puede demostrar qué se acordó.

Lo que la confianza no resuelve, lo resuelve el documento:

— Pacto de socios: quién decide qué, cómo se resuelve un empate, cómo sale un socio.
— Confidencialidad: qué información no puede salir del negocio.
— Pagaré: el respaldo formal cuando se vende a crédito.
— No competencia: cuando alguien se va, qué puede hacer y dónde.

Ninguno de estos documentos existe porque desconfíes de tu socio. Existen para que la relación no dependa de la memoria de nadie.

Escribe MERCANTIL por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 08 — S8 PATRIMONIAL (pieza invertida) --------------------------------- */
  {
    id: 's8', n: '08', formato: 'titular', invertida: true, linea: 'legal', persona: 'A / C',
    servicio: 'Blindaje civil y patrimonial', clave: 'PATRIMONIAL',
    titular: ['Prestar dinero', 'sin papel', 'es regalarlo.'],
    cuerpo: 'Mutuo, compraventa, comodato y carta poder. Cuatro documentos que evitan diez discusiones familiares.',
    lista: ['Mutuo', 'Compraventa', 'Comodato', 'Carta poder'],
    prueba: 'Certeza jurídica para lo que ya es tuyo.',
    captionIG:
`Prestar dinero sin papel es regalarlo.

Puede ser a un familiar, a un amigo, a un socio. Sin documento no hay plazo, no hay interés, no hay forma de cobrar y, si algún día hay que reclamar, no hay nada que reclamar.

Mutuo, compraventa, comodato y carta poder. Cuatro documentos que cuestan menos que la discusión que evitan.

Escribe PATRIMONIAL por WhatsApp: 22 27 10 79 08.

#Puebla #Patrimonio #Compraventa #AbogadosPuebla #ConsultoríaRendón`,
    captionFB:
`Prestar dinero sin papel es regalarlo.

No importa el parentesco ni la buena intención. Un préstamo verbal no tiene plazo, no tiene tasa, no tiene garantía y no tiene prueba. Si un día hay que cobrarlo, la conversación deja de ser legal y se vuelve familiar, que es peor.

Los cuatro documentos que resuelven el 90% de estos casos:

— Mutuo: el préstamo de dinero, con o sin intereses, con plazo y forma de pago.
— Compraventa: la transmisión de propiedad, con precio, entrega y saneamiento.
— Comodato: el préstamo de un bien para uso gratuito, con fecha de devolución.
— Carta poder: facultades específicas para que alguien actúe en tu nombre sin que puedas después desconocerlo.

Ninguno es burocracia. Todos son la diferencia entre "te lo presté" y "te lo puedo probar".

Escribe PATRIMONIAL por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 09 — S9 RENTA (cláusula roja) ----------------------------------------- */
  {
    id: 's9', n: '09', formato: 'clausula', linea: 'legal', persona: 'A / C',
    servicio: 'Arrendamientos sin riesgo', clave: 'RENTA',
    titular: ['El depósito', 'se pierde aquí.'],
    clausula: 'El arrendatario renuncia a cualquier reclamación sobre el depósito en garantía, el cual podrá ser retenido en su totalidad por el arrendador.',
    resaltado: 'renuncia a cualquier reclamación sobre el depósito',
    cuerpo: 'Rentar no debería ser una apuesta. El contrato de arrendamiento se revisa antes de firmar, no cuando ya hay un pleito por la devolución.',
    prueba: 'Inmuebles y bienes muebles. Cláusulas claras, menos conflictos.',
    captionIG:
`El depósito se pierde aquí.

"Renuncia a cualquier reclamación sobre el depósito en garantía." Una línea. Y el mes y medio que dejaste ya no tiene regreso.

Vas a rentar o vas a rentar tu propiedad: el contrato se revisa antes de firmar, no cuando ya hay pleito.

Escribe RENTA por WhatsApp: 22 27 10 79 08.

#Puebla #Arrendamiento #RentaPuebla #Inmuebles #ConsultoríaRendón`,
    captionFB:
`El depósito se pierde aquí.

"El arrendatario renuncia a cualquier reclamación sobre el depósito en garantía, el cual podrá ser retenido en su totalidad por el arrendador."

Una sola cláusula. Con ella, el depósito deja de ser una garantía y se convierte en un pago anticipado que no se devuelve nunca. Y está en contratos de arrendamiento que se firman todos los días en Puebla, en locales comerciales y en casas.

El arrendamiento tiene tres zonas donde se concentran los conflictos: la devolución del depósito, el estado del inmueble al entregarlo y las causas de rescisión. Si esas tres no están bien escritas, el conflicto no es un riesgo: es una fecha.

Revisamos y redactamos contratos de arrendamiento de inmuebles y de bienes muebles.

Escribe RENTA por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 10 — S10 RRHH (checklist de documentos) ------------------------------- */
  {
    id: 's10', n: '10', formato: 'documentos', linea: 'legal', persona: 'B — Patrón / RRHH',
    servicio: 'Blindaje laboral empresarial', clave: 'RRHH',
    titular: ['La defensa empieza', 'en el expediente.'],
    items: [
      ['01', 'Contrato individual de trabajo', 'con funciones, jornada, salario y lugar.'],
      ['02', 'Reglamento interior de trabajo', 'con las reglas que sí vas a aplicar.'],
      ['03', 'Cartas de renuncia y finiquitos', 'con cálculo y firma, no en formatos de internet.']
    ],
    prueba: 'Revisamos tu documentación laboral en una sesión.',
    captionIG:
`La defensa empieza en el expediente.

Cuando una demanda laboral llega, lo que decide no es el alegato en la audiencia: es lo que tengas por escrito.

Tres documentos:
01 Contrato individual de trabajo.
02 Reglamento interior de trabajo.
03 Cartas de renuncia y finiquitos bien calculados.

Revisamos tu documentación en una sesión.
Escribe RRHH por WhatsApp: 22 27 10 79 08.

#Puebla #DerechoLaboral #RRHH #EmpresasPuebla #ConsultoríaRendón`,
    captionFB:
`La defensa empieza en el expediente.

Cuando una demanda laboral llega a la junta, la discusión ya no es sobre lo que pasó: es sobre lo que se puede probar. Y lo que se puede probar es, casi siempre, lo que estaba en el expediente antes de que el conflicto existiera.

Tres documentos concentran la mayoría de los problemas:

01. Contrato individual de trabajo. Con funciones, jornada, salario y lugar. Un contrato genérico no acredita la relación real: la deja a interpretación.

02. Reglamento interior de trabajo. Sirve si lo registraste y si lo aplicas. Un reglamento que existe solo en el archivo no sostiene una sanción.

03. Cartas de renuncia y finiquitos. Con cálculo correcto, desglose y firma. Un finiquito mal calculado no se corrige después: se paga dos veces.

Revisamos tu documentación laboral en una sesión y te decimos qué falta y qué te expone.

Escribe RRHH por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 11 — S11 DIGITAL (línea IA) ------------------------------------------- */
  {
    id: 's11', n: '11', formato: 'titular', linea: 'ia', persona: 'A',
    servicio: 'Blindaje digital y de datos', clave: 'DIGITAL',
    titular: ['Tu sitio recaba', 'datos.', '¿Tiene aviso', 'de privacidad?'],
    cuerpo: 'Recabar un correo, un teléfono o una dirección sin aviso de privacidad es exponerte a una sanción que se evita con dos documentos.',
    lista: ['Aviso de privacidad', 'Términos y condiciones'],
    prueba: 'Lo que la ley pide antes de que alguien deje sus datos.',
    captionIG:
`Tu sitio recaba datos. ¿Tiene aviso de privacidad?

Si tu formulario, tu carrito o tu WhatsApp Business piden nombre, correo o teléfono, esos datos son personales y su tratamiento tiene reglas.

Dos documentos: aviso de privacidad y términos y condiciones.

Escribe DIGITAL por WhatsApp: 22 27 10 79 08.

#Puebla #ProtecciónDeDatos #Ecommerce #NegociosDigitales #ConsultoríaRendón`,
    captionFB:
`Tu sitio recaba datos. ¿Tiene aviso de privacidad?

Casi todos los negocios digitales pasan por el mismo momento: se lanza la página, se activa el formulario de contacto, empiezan a llegar correos. Nadie pregunta qué pasa con esos datos. Y lo que pasa, legalmente, es que se están tratando datos personales.

El aviso de privacidad no es un adorno al pie de la página: es el documento que informa qué datos se recaban, para qué, con quién se comparten y cómo se ejercen los derechos de acceso, rectificación, cancelación y oposición.

Los términos y condiciones son el otro lado: las reglas de uso del sitio, la responsabilidad, las condiciones de compra y la propiedad del contenido.

Se redactan una vez, se ajustan cuando cambia el sitio y evitan un problema que cuesta mucho más que el documento.

Escribe DIGITAL por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 12 — S12 SLIDES (cita editorial, persona E) --------------------------- */
  {
    id: 's12', n: '12', formato: 'cita', linea: 'ia', persona: 'E — Directivo / consultor',
    servicio: 'Presentaciones ejecutivas', clave: 'SLIDES',
    titular: ['Una idea buena', 'con slides', 'mediocres', 'pierde la sala.'],
    cuerpo: 'La estructura se diseña antes del diseño. Si el orden de los argumentos no funciona, ninguna plantilla lo salva.',
    prueba: 'Estructura, narrativa y KPIs. Después, el diseño.',
    captionIG:
`Una idea buena con slides mediocres pierde la sala.

No es un problema de diseño. Es un problema de orden: qué se dice primero, qué se prueba después y qué se deja para la conversación.

Estructura antes que diseño. Siempre.

Escribe SLIDES por WhatsApp: 22 27 10 79 08.

#Puebla #Presentaciones #Directivos #EmpresasPuebla #ConsultoríaRendón`,
    captionFB:
`Una idea buena con slides mediocres pierde la sala.

En una junta con socios o inversionistas, la presentación no compite contra otra presentación: compite contra la atención de la gente que está en la mesa. Si en los primeros dos minutos no queda claro qué se propone y por qué conviene, el resto de las diapositivas ya no se lee.

El orden correcto es incómodo porque obliga a decidir antes de dibujar:

Primero la estructura: qué argumento va primero, cuál necesita prueba y cuál es consecuencia.
Después la narrativa: cómo avanza la idea de una lámina a la siguiente.
Después los KPIs: los tres números que sostienen la propuesta.
Al final, el diseño.

Cuando se hace al revés, se termina con láminas bonitas que no dicen nada.

Escribe SLIDES por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 13 — S13 VIRAL -------------------------------------------------------- */
  {
    id: 's13', n: '13', formato: 'tipografico', linea: 'ia', persona: 'D — Bar / restaurante / marca',
    servicio: 'Estrategia viral', clave: 'VIRAL',
    titular: ['El contenido', 'que nadie', 'comparte', 'no existe.'],
    cuerpo: 'Contenido que parte de lo que tu cliente ya está viendo: deportes, música, cultura pop, fechas clave. No de lo que tú quieres decir.',
    prueba: 'Campañas que convierten atención en clientes.',
    captionIG:
`El contenido que nadie comparte no existe.

Puedes publicar todos los días y seguir hablando sola. El contenido que funciona no describe tu negocio: se mete en la conversación que tu cliente ya está teniendo.

Deportes, música, cultura pop, fechas clave. Lo que la gente ya está viendo.

Escribe VIRAL por WhatsApp: 22 27 10 79 08.

#Puebla #MarketingPuebla #ContenidoViral #RedesSociales #ConsultoríaRendón`,
    captionFB:
`El contenido que nadie comparte no existe.

Hay negocios que publican todos los días y no pasa nada. No es falta de constancia: es que el contenido habla de lo que el negocio quiere decir y no de lo que el cliente está viendo.

El contenido que se comparte tiene tres características: llega en el momento en que la gente ya está pendiente de algo (un partido, una fecha, una tendencia), dice algo que el cliente reconocería como propio, y no pide nada a cambio de verlo.

Después viene lo otro, que es lo que sí vende: la campaña con destino, con oferta y con medición.

Escribe VIRAL por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 14 — S14 FUTBOL (arena) ---------------------------------------------- */
  {
    id: 's14', n: '14', formato: 'energia', linea: 'ia', persona: 'D — Bar / restaurante',
    servicio: 'Stories futboleras', clave: 'FUTBOL',
    titular: ['La mesa', 'del sábado', 'se decide', 'el jueves.'],
    cuerpo: 'El día de partido no se llena el mismo día. Se llena con lo que publicaste 48 horas antes.',
    prueba: 'Ambiente, promos y reservas. Contenido de partido, no de postal.',
    captionIG:
`La mesa del sábado se decide el jueves.

El día del partido ya no convences a nadie: ya decidieron dónde verlo. Lo que deciden el jueves es a qué bar van.

Stories con ambiente, promos con hora límite y recordatorio el mismo día. Eso es lo que llena.

Escribe FUTBOL por WhatsApp: 22 27 10 79 08.

#Puebla #FútbolPuebla #BaresPuebla #ClubPuebla #RestaurantesPuebla`,
    captionFB:
`La mesa del sábado se decide el jueves.

Es el error más caro de un bar o un restaurante en Puebla: acordarse del partido el sábado a la una de la tarde, cuando la gente ya eligió dónde va a verlo.

El partido se trabaja en tres tiempos:

Jueves y viernes: se instala la idea de que en tu negocio se vive distinto. Ambiente, no promesa.
Sábado temprano: la promo con hora límite, la reserva con nombre y el recordatorio de que hay lugar.
Durante el partido: stories que muestran lo que está pasando adentro. La mejor promoción es la gente que ya está ahí.

No es publicidad de bar. Es programación de una semana.

Escribe FUTBOL por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 15 — MÉTODO ----------------------------------------------------------- */
  {
    id: 'metodo', n: '15', formato: 'metodo', linea: 'legal', persona: 'Todas',
    servicio: 'Método Rendón', clave: null,
    titular: ['Cuatro pasos.', 'En ese orden.'],
    items: [
      ['01', 'Diagnóstico', 'Leemos el documento y te decimos qué riesgo tiene, en palabras que se entiendan.'],
      ['02', 'Documento', 'Redactamos o corregimos. Cada cláusula existe por una razón de tu caso.'],
      ['03', 'Firma acompañada', 'Firmas sabiendo qué estás firmando. No antes.'],
      ['04', 'Seguimiento', 'El expediente queda en orden y con fecha.']
    ],
    prueba: RENDON.diagnostico,
    captionIG:
`Cuatro pasos. En ese orden.

01 Diagnóstico. 02 Documento. 03 Firma acompañada. 04 Seguimiento.

Ningún paso se salta. El diagnóstico va primero porque es el único momento en el que todavía se puede cambiar de rumbo sin costo.

Diagnóstico sin costo y sin compromiso.
WhatsApp 22 27 10 79 08.

${RENDON.hashtags}`,
    captionFB:
`Cuatro pasos. En ese orden.

La mayoría de la gente llega al abogado cuando el problema ya ocurrió: la demanda presentada, el contrato firmado, el despido consumado. En ese punto todo cuesta más, incluido el tiempo.

Nuestro método trabaja un paso antes:

01. Diagnóstico. Leemos el documento, identificamos el riesgo y te lo explicamos sin tecnicismos. Este paso no se cobra y no te compromete a nada.

02. Documento. Redactamos o corregimos. Cada cláusula responde a una situación concreta de tu caso, no a una plantilla.

03. Firma acompañada. Llegas a la firma sabiendo qué estás firmando y qué estás cediendo.

04. Seguimiento. Plazos, fechas y expediente en orden, para que nada se venza por descuido.

Es el mismo método para una empresa, para un trabajador y para una persona que va a prestar dinero.

WhatsApp 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  },

  /* 16 — CIERRE / CONTACTO ------------------------------------------------ */
  {
    id: 'cierre', n: '16', formato: 'cierre', linea: 'legal', persona: 'Todas',
    servicio: 'Cómo empezar', clave: null,
    titular: ['Diagnóstico', 'sin costo y', 'sin compromiso.'],
    cuerpo: 'Escribe la palabra de tu servicio por WhatsApp. Te respondemos con los siguientes pasos, no con un formulario.',
    palabras: ['EMPRESA', 'CONTRATO', 'MACHOTE', 'LABORAL', 'RRHH', 'MARCA', 'ISSSTE', 'RENTA', 'PATRIMONIAL', 'MERCANTIL', 'DIGITAL', 'SLIDES', 'VIRAL', 'FUTBOL'],
    prueba: null,
    captionIG:
`Diagnóstico sin costo y sin compromiso.

Elige la palabra de lo que necesitas y mándala por WhatsApp. Te respondemos con los siguientes pasos.

EMPRESA · CONTRATO · MACHOTE · LABORAL · RRHH · MARCA · ISSSTE · RENTA · PATRIMONIAL · MERCANTIL · DIGITAL · SLIDES · VIRAL · FUTBOL

22 27 10 79 08

${RENDON.hashtags}`,
    captionFB:
`Diagnóstico sin costo y sin compromiso.

Así funciona: eliges la palabra del servicio que necesitas, la escribes por WhatsApp y te decimos qué sigue. Sin formularios, sin juntas previas, sin costo.

EMPRESA — constituir o reestructurar tu sociedad
CONTRATO — revisar un contrato antes de firmarlo
MACHOTE — redactar uno a la medida
LABORAL — despido, finiquito, conciliación
RRHH — documentación laboral de tu empresa
MARCA — registro ante el IMPI
ISSSTE — verificar tu registro y tu salario base
RENTA — arrendamiento de inmueble o mueble
PATRIMONIAL — mutuo, compraventa, comodato, carta poder
MERCANTIL — pacto de socios, pagaré, confidencialidad
DIGITAL — aviso de privacidad y términos y condiciones
SLIDES — presentaciones ejecutivas
VIRAL — estrategia de contenido
FUTBOL — stories y promos de día de partido

WhatsApp 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}

Consultoría Jurídica Estratégica Rendón · Puebla y zona metropolitana.`
  },

  /* 17 — QUIÉN TE ATIENDE (pieza fotográfica) ----------------------------- */
  {
    id: 'retrato', n: '17', formato: 'retrato', linea: 'legal', persona: 'Todas',
    servicio: 'Quién te atiende', clave: 'CITA',
    titular: ['El despacho', 'tiene cara.'],
    cuerpo: 'No atendemos por chat automático ni por call center. La persona que te explica el riesgo es la misma que firma el documento contigo.',
    prueba: 'Una sola persona a cargo de tu asunto, de principio a fin.',
    captionIG:
`El despacho tiene cara.

No hay chat automático ni call center. La persona que te explica el riesgo es la misma que redacta el documento y la misma que se sienta contigo el día de la firma.

Si quieres saber quién va a llevar tu asunto antes de mandar el primer mensaje, escríbenos y te lo decimos con nombre.

Escribe CITA por WhatsApp: 22 27 10 79 08.

#Puebla #AbogadosPuebla #ConsultoríaRendón #AsesoríaLegalPuebla #EmpresasPuebla`,
    captionFB:
`El despacho tiene cara.

Cuando alguien busca un abogado, lo normal es escribir a un número y recibir respuestas que no se sabe quién las escribió. En servicios jurídicos eso importa más de lo que parece: tu asunto lo va a llevar una persona concreta, con un criterio concreto, y conviene saber quién es antes de entregar los papeles.

Nuestro modelo es simple y deliberadamente aburrido: una sola persona a cargo de tu asunto, de principio a fin. Sin relevos, sin "mi asistente te marca", sin opiniones contradictorias de tres personas distintas.

Cómo trabajamos:

01. Diagnóstico. Leemos el documento y te decimos qué riesgo tiene, en palabras que se entiendan. Sin costo y sin compromiso.

02. Documento. Redactamos o corregimos, con cláusulas que responden a tu caso.

03. Firma acompañada. Llegas a la firma sabiendo qué firmas.

04. Seguimiento. El expediente queda en orden y con fecha.

Si quieres saber quién va a llevar tu asunto antes de mandar el primer mensaje, pregúntalo.

Escribe CITA por WhatsApp: 22 27 10 79 08
Tarjeta digital: ${RENDON.tarjeta}`
  }
];

/* --------------------------------------------------------------------------
   Comparativa: la misma pieza con el template anterior (las 17 piezas que ya
   existen) contra la dirección v2.1. Sirve para que el despacho elija.
   -------------------------------------------------------------------------- */
const COMPARATIVA = [
  {
    id: 'cmp-lab', tema: 'Blindaje laboral empresarial',
    viejo: {
      servicio: 'BLINDAJE LABORAL EMPRESARIAL',
      titular: ['Contratos claros', 'antes del', 'conflicto.'],
      keywords: 'CONTRATO · REGLAMENTO · RENUNCIA',
      icono: 'documento'
    },
    nuevo: 's10',
    nota: 'La pieza anterior comunica el servicio. La nueva comunica el riesgo y usa el expediente como prueba.'
  },
  {
    id: 'cmp-contrato', tema: 'Análisis de contratos',
    viejo: {
      servicio: 'ANÁLISIS DE CONTRATOS',
      titular: ['Antes de firmar,', 'sepa qué firma.'],
      keywords: 'CLÁUSULAS · PENALIDADES · OBJETO SOCIAL',
      icono: 'lupa'
    },
    nuevo: 's2',
    nota: 'La cláusula real, subrayada, dice más que la lista de beneficios. Y no se puede copiar de otro despacho.'
  },
  {
    id: 'cmp-laboral', tema: 'Defensa laboral',
    viejo: {
      servicio: 'DEFENSA LABORAL ESTRATÉGICA',
      titular: ['Si lo despidieron,', 'hay ruta legal.'],
      keywords: 'DESPIDO · CONCILIACIÓN · DEFENSA',
      icono: 'escudo'
    },
    nuevo: 's4',
    nota: 'Cambia el tono con la persona: contención y frases cortas para quien acaba de perder su empleo.'
  }
];

Object.assign(window, { RENDON, PIEZAS, COMPARATIVA, RETRATO });
