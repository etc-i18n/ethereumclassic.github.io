---
title: Guía de hardware minero
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Una breve explicación de los requerimientos de hardware para Minar Ethereum Classic, cubriendo ETHash vs ETCHash, SHA3, GPU y ASICs.
---

Minar Ethereum Classic es casi idéntico a la minería Ethereum, y soporta el mismo hardware y software minero. Si eres un minero de Ethereum recién expulsado, Ethereum Classic ama a sus mineros y te da la bienvenida, y puedes empezar a minar ETC usando tu hardware existente simplemente cambiando a un [grupo de minería](/mining/pools) que soporta Ethereum Classic.

## ETCHash

El algoritmo ETC Mining es casi idéntico al ETHash de Ethereum, con una pequeña actualización que lo hacía más amigable con los mineros. A finales de 2020, durante la actualización de [Thanos](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC implementó [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), que modificó el algoritmo ETHash en lo que se conoció como ETCHash.

Básicamente, en 2020, el DAG de Ethereum superó los 4 GB, lo que significa que muchos GPUs con 4 GB de memoria no podrían continuar minando ETH. En respuesta, Ethereum Classic ha modificado su algoritmo para asegurar que las tarjetas de 4 GB puedan continuar minando ETC hasta [aproximadamente mediados de 2025](https://minerstat.com/dag-size-calculator).

## Requisitos de hardware

Hay dos tipos principales de hardware que se pueden utilizar para minar de forma rentable Ethereum Classic.

### GPUs

Generalmente, las mejores tarjetas gráficas para minar Ethereum Classic son las tarjetas más eficientes de potencia con al menos 4 GB de memoria. Antes de elegir un GPU, busque opiniones específicas sobre la minería ETCHash. Puedes buscar sugerencias en línea en los "Mejores GPUs para minar Ethereum Classic en [el año actual]" y visitar [WhatToMine](https://whattomine.com/coins?e4g=true) para obtener más información.

### ASICs

ASIC, o Circuitos Integrados Específicos de Aplicación, son chips especialmente fabricados que están diseñados, como su nombre sugiere, para extraer sólo un algoritmo específico. Originalmente, debido a los intensos requerimientos de memoria de la DAG, ETHash era bastante resistente a las ASIC, pero con el tiempo, como todos los algoritmos rentables, había un gran incentivo para construir ASIC para ETHash, que sí llegó al mercado.

Hay una gama de mineros ASIC Ethereum Classic disponibles y se pueden encontrar buscando en línea "Mineros ETHash ASIC", y compruebe la especificación del fabricante si es compatible con ETCHash.

## Soporte

Para obtener más ayuda y orientación de otros mineros de la comunidad ETC, puedes comunicarte en el canal #mining en [Discord](https://ethereumclassic.org/discord).
