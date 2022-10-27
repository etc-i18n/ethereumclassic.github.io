---
title: Futuro clásico
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Una visión general del mapa de desarrollo futuro y cómo se toman las decisiones en el ecosistema Ethereum Classic basado en su historia, principios.
---

A diferencia de muchos otros proyectos de blockchain, Ethereum Classic no tiene un comité organizador central que llame a los shots, por lo que lo que se implementa en el protocolo se determina a través de un sistema orgánico, meritocrático, emergente en lugar de arriba. Si bien este enfoque no está diseñado al principio para producir una expansión explosiva, la compensación está hecha para la sostenibilidad a largo plazo. y la persistencia de Ethereum Classic la ha colocado en una posición fuerte para su siguiente etapa de crecimiento cuando los efectos de la red comienzan a adoptar bola de nieve.

En esta sección, desempaquetaremos este proceso, tomaremos una visión general de alto nivel del estado actual de ETC, y cubren brevemente algunas actualizaciones potenciales que actualmente se están discutiendo y que pueden estar en el horizonte para ETC.

## Proceso de actualización

Ethereum Classic, al igual que Bitcoin, no tiene un mapa de ruta en el sentido de desarrollo de software tradicional, pero más bien un proceso que permite que se implementen buenas características si y cuando vienen y son aprobadas por la comunidad.

### EQUIPORES

El proceso de [Propuesta de Mejora Clásica Ethereum (ECIP)](/development/ecips) es cómo se discuten las actualizaciones a Ethereum Classic y son rigurosamente revisadas por su comunidad de desarrolladores. Este proceso está abierto y cualquiera puede contribuir elaborando un ECIP que algún día pueda ser incluido en Ethereum Classic.

### Mover despacio & No romper cosas

Por lo general, implementar nuevas características requiere un apoyo abrumador o, al menos, ninguna oposición significativa de la comunidad Ethereum Classic por parte de ETC, lo que hace que ETC, como BTC, sea bastante cautelosa en su desarrollo tecnológico. Sin que el grupo central tome decisiones sesgadas sobre qué mejoras se implementan, la amenaza de una división en cadena debido a un empujón significativo significa que los Forks duros en ETC tienden a ser seguros, incrementales y, sobre todo, no polémicos.

En lugar de una mentalidad de "moverse rápido y romper cosas", que puede causar daños financieros si las cosas salen mal, las actualizaciones significativas suelen ser mullidas, refinado y probado durante largos periodos antes de ser implementado en el protocolo para que se pueda alcanzar el consenso _antes_ de una bifurcación.

los contratos que fueron implementados ya en 2015 pueden operar de manera fidedigna y que _Código es Ley_ se mantiene.

Esto no significa que la CET sea incapaz de innovar de forma oportuna. Un ejemplo es la bifurcación de [Thanos](/knowledge/forks#thanos), que aprovechó el aumento del tamaño de Ethereum del DAG barrido de seguridad permitiendo que una categoría de GPUs de otro modo abandonada minara ETC, que era una mejora de ganancia fácil para Ethereum Classic.

### Innovación heredada

Ethereum Classic mantiene compatibilidad con Ethereum Virtual Machine, hereda todas las innovaciones que ocurren en otras cadenas EVM, incluyendo sistemas de contratos, herramientas para desarrolladores, bibliotecas y otros conceptos generales financiados y desarrollados principalmente para estas otras cadenas.

Un excelente ejemplo de esto es el Rollups, una prometedora tecnología de Capa 2 que mejora la escalabilidad a través de transacciones fuera de la cadena. Gracias a la naturaleza del Software Libre de Código Abierto, Millones de dólares de investigación y desarrollo fueron gastados por proyectos y equipos que no tenían ninguna asociación con Ethereum Classic. Esta innovación, gracias a la compatibilidad generalizada con EVM, ha aumentado indirectamente la utilidad y el valor de ETC.

### Ethereum como red de pruebas

Una ventaja de este enfoque es que Ethereum Classic puede mantenerse al margen mientras observa que otras cadenas asumen el riesgo de implementar nuevas características. Sólo después de que hayan demostrado ser seguros y eficaces, se pueden implementar buenas características con un mínimo de riesgo y esfuerzo de desarrollo.

De esta manera, otras cadenas EVM se pueden ver como redes de pruebas de Ethereum Classic, con pruebas mucho más rigurosas que las que podría ofrecer una red de pruebas tradicional.

## Mirando hacia delante

En cuanto a la escritura, 2022 acaba de llegar, y ETC comienza el año experimentando un aumento de la actividad. Una letanía de nuevas [aplicaciones](/services/apps) y usuarios se han reunido orgánicamente, y el ecosistema ETC está comenzando a mostrar signos de efectos de red, lo que dará bola de nieve a la adopción a medida que la red se vuelva más útil y valiosa.

El crecimiento reciente se debe en parte a un creciente ejército de creadores de contenido clásico de Ethereum e influenciadores que han estado creando [vídeos](/videos) y memes, impulsar la adopción a través de las redes sociales.

### La fusión

Cadena mainnet de EthereumTM, aunque experimentando algunos retrasos menores, está cada vez más cerca de completar una migración lejos de la Prueba del trabajo a la prueba de toma, conocida como _La fusión_. Para Ethereum Classic este será un acontecimiento extremadamente relevante. ya que parece probable que los mineros del GPU recién desalojados busquen otras cadenas para minar, y Ethereum Classic es una opción obvia.

La migración de mineros de ETH a ETC probablemente traerá una nueva ola de interés al ecosistema Ethereum Classic aumentar la seguridad de la red y acelerar la adopción y el valor de la red.

Además, si hay algún problema a corto plazo durante o después de "La Combinación", tal vez debido a problemas de teoría de juegos inolvidables o explotaciones de protocolo debido a la complejidad adicional, Ethereum Classic estará listo y esperando para proporcionar una cadena de reserva que permanece en el probado y verdadero protocolo Ethereum de hoy. A largo plazo, el paso a la Prueba de Toma probablemente dará lugar a una mayor centralización del mainnet EthereumTM, que la hace vulnerable a otros tipos de ataques sociales, a los que de nuevo la ETC permanecerá inmune.

### EVM Versioning

Con el objetivo de Ethereum Classic de mantener _el código es la ley_ durante muchas décadas, si no siglos por venir. una característica de la gran utilidad será la de _versionar_ de los contratos desplegados. Esto proporciona varias ventajas significativas para el funcionamiento y mantenimiento a largo plazo de Ethereum Classic, principalmente que hace mucho más fácil mantener _el código es la Ley_ mientras que proporciona flexibilidad para actualizar la ejecución del contrato en el futuro.

En lugar de preocuparse por si un cambio de protocolo, como la revaluación del gas, rompería antiguos contratos, versioning significaría que el código desplegado está garantizado de ejecutar siempre en una versión compatible de la EVM basada en el número de bloque en el que fue desplegado. Además, los contratos futuros podrían optar por una funcionalidad que de otro modo rompería antiguos contratos, significa que Ethereum Classic puede proporcionar nuevas tecnologías como esquemas de firmas, añadir o modificar el comportamiento de código, etcétera, sin afectar a las aplicaciones existentes.

A pesar de que están corriendo en una versión diferente de la EVM, los contratos futuros seguirían siendo capaces de comunicarse con los contratos antiguos sobre la misma API (o traducidos) para mantener la interoperabilidad. Parece que no hay ningún inconveniente aparente en la versión, aparte de la complejidad adicional necesaria para implementarla.

### Capa 2

Cada vez está más claro que las únicas formas razonables de escalar blockchains están en capas. Con Bitcoin Lightning Network liderando este nuevo y prometedor dominio, Ethereum sigue la forma de canales estatales, Rollups, zk-Rollups y otras tecnologías emergentes.

La segunda capa promete proporcionar garantías adecuadas de descentralización y desconfianza, con una transacción mucho mayor mediante la gestión de estado fuera de la cadena y el uso de la cadena base para establecer este estado. En teoría, no hay límite superior al número de transacciones por segundo en muchos sistemas de Capa 2, y puede satisfacer los requisitos de uso de escala de civilización.

Con Ethereum Classic EVM y el compromiso con la prueba de trabajo que eventualmente dominará la minería en ETCHash, será una de las pocas opciones para una capa base de pendiente que puede soportar una gama completa de soluciones L2.
