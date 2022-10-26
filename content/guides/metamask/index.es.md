---
title: Usando MetaMask con ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Una guía paso a paso que cubre cómo usar MetaMask con Ethereum Classic para enviar ETC e interactuar con aplicaciones descentralizadas.
info: Este artículo fue [creado por Etherplan](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Para obtener más tutoriales de Ethereum Classic , teoría y conceptos de criptomonedas, por favor echa un vistazo a [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

importar AddNetwork de '../../../src/components/addNetwork.js'

**⚠️ Update**  
Ahora puede agregar fácilmente ETC a la máscara haciendo clic en "Connect-Wallet" en ChainList:

<AddNetwork />

Puede encontrar este enlace en la parte inferior de cada página de este sitio web.

---

[MetaMask](https://metamask.io) puede utilizarse como una cartera para administrar su ETC y sus Tokens, así como interactuar con aplicaciones que lo soporten. Este post explica cómo empezar a usar MetaMask con la red Ethereum Classic (ETC).

También puede considerar [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), una bifurcación de MetaMask que soporta ETC desde la caja.

## 1. Iniciar sesión en MetaMask

El primer paso es iniciar sesión para desbloquear tu MetaMask.

![Paso 1](./01.png)

## 2. Ver pantalla inicial

Verá su pantalla inicial normal. En este caso la red por defecto es Ethereum (ETH) y su cuenta se mostrará como de costumbre. Como usas otras redes, se mostrarán por defecto cuando desbloquees tu MetaMask si fueron las últimas usadas.

En mi caso, muestra Ethereum como la red inicial, y tengo un saldo cero en mi cuenta ETH `0x48c1...EfF3`.

![Paso 2](./02.png)

## 3. Abrir el menú desplegable de redes

El siguiente paso es abrir el menú desplegable de redes. Puede hacer esto haciendo clic en la barra donde vea la red por defecto.

Como se puede ver arriba, la lista por defecto de redes es Ethereum mainnet y sus redes de pruebas más populares.

El “Host Local 8545” sería una conexión a un nodo Ethereum si estuviera ejecutando uno en su máquina.

“Custom RPC” es la opción de añadir redes personalizadas, en este caso ETC.

“RPC” significa “llamada a procedimientos remotos”, que es el término para las máquinas de protocolo que utilizan programas para llamar a otros programas en máquinas remotas.

![Paso 3](./03.png)

## 4. Seleccionar RPC personalizado

Por lo tanto, el siguiente paso es hacer clic en “Custom RPC”.

![Paso 4](./04.png)

## 5. Ver el nuevo formulario de red

Después de seleccionar “Personalizar RPC” verá el formulario para agregar una red. Tiene un mensaje de seguridad en la parte superior y cinco opciones con campos vacíos para introducir la nueva red que desea utilizar:

- Nombre de red: El nombre de la red que desea añadir.
- Nueva URL RPC: Una URL para la red RPC que desea añadir.
- ID de cadena: El ID para enviar y dirigir transacciones a la red que desea añadir.
- Símbolo de moneda (opcional): El símbolo de moneda de la red que desea añadir. Por ejemplo, “ETH” es el símbolo de Ethereum, y “ETC” es el símbolo de Ethereum Classic.
- URL del Explorador de Bloques (opcional): MetaMask tiene enlaces a exploradores de blockchain por red para comprobar el historial de cuentas. nuevas transacciones enviadas, y saldos en ellas, así que aquí añadirías un explorador de bloques para la red que quieres añadir.

![Paso 5](./05.png)

## 6. Introduzca la información de red clásica de Ethereum

El siguiente paso es añadir la información específica de Ethereum Classic. A continuación están los datos de red que he utilizado:

- Nombre de red: `Ethereum Classic`
- Nueva URL RPC: `https://www.ethercluster.com/etc`
- ID de cadena: `61`
- Símbolo de moneda (opcional): `ETC`
- URL del explorador de bloque (opcional): `https://blockscout.com/etc/mainnet/`

Para la “URL RPC” usé la proporcionada para este propósito por la [cooperativa ETC](https://etccooperative.org/), que es de un producto que construyeron llamado [Ethercluster](https://ethercluster.com/)

_[Nota del editor] Ethercluster está operado ahora por [RIVET](https://rivet.cloud/). Puede encontrar más puntos finales RPC en la sección de [red](/network/endpoints)._

El “Chain ID” debe ser “61” porque es el ID específico de la red Ethereum Classic para enviar transacciones ETC por carteras y nodos a la cadena de bloques operativa.

Aunque el "símbolo" y la "URL del explorador de bloques" son opcionales, Recomiendo el uso de “ETC” como símbolo porque es el símbolo de mercado ampliamente conocido de la red, y BlockScout como explorador de blockchain porque es el que suelo usar (¡pero puedes añadir el que prefieres!).

Haga clic en "guardar" para añadir ETC a MetaMask.

![Paso 6](./06.png)

## 7. Ver Ethereum Classic en el menú Dropdown de redes

Una vez que se agrega ETC, verá en el menú desplegable de redes que se añade a la lista de redes.

![Paso 7](./07.png)

## 8. Puede que vea su misma cuenta pero en ETC

Si usted va a su cuenta, usted notará que es lo mismo que su cuenta ETH. En mi caso, es la misma cuenta `0x48c1...EfF3`.

Esto se debe a que tanto ETH como ETC utilizan el mismo formato de cuenta, por lo que las cuentas en Ethereum también pueden ser utilizadas en Ethereum Classic.

De hecho, puede que recuerden que tenía un saldo cero en mi cuenta ETH pero ahora un saldo de 1 ETC puede ser visto en la misma cuenta, pero en Ethereum Classic. Esto se debe a que envié 1 ETC a esta cuenta en la red Ethereum Classic para esta manifestación.

Tenga en cuenta también que la red ETC es ahora la que se muestra en la barra de redes, y el símbolo “ETC” ahora se utiliza para mostrar el balance.

![Paso 8](./08.png)

## 9. Puede mover de vuelta a Ethereum con la misma cuenta

Así que, como ambas redes utilizan el mismo formato de cuenta, puede volver a la red principal de Ethereum y podrá ver su cuenta ETH con el mismo número de nuevo.

![Paso 9](./09.png)

## 10. Puede mover de vuelta a Ethereum Classic con la misma cuenta

Para utilizar la red ETC, simplemente seleccione Ethereum Classic de nuevo en el menú desplegable de redes, donde verá sus balances ETC de nuevo.

![Paso 10](./10.png)

//

Le deseo éxito invirtiendo y usando ETC!

---

** Código es Ley **
