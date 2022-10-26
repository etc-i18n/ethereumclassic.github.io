---
title: ETCでメタマスクを使用する
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Ethereum ClassicとMetaMaskを使用してETCを送信し、分散型アプリケーションと対話する方法を説明するステップバイステップガイド。
info: この記事は Etherplan(https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/)によって作成されました。 より多くのEthereum Classicのチュートリアル、理論、および暗号通貨の概念については、 [etherplan.com](https://etherplan.com)をご覧ください。
contributors:
  - DonaldMcIntyre
---

import AddNetwork from '../../src/components/addNetwork.js'

**⚠️ 更新**  
ChainListの「Connect-Wallet」をクリックすると、ETCをMetaMaskに簡単に追加できるようになりました:

<AddNetwork />

このリンクは、このウェブサイトのすべてのページの下部にあります。

---

[MetaMask](https://metamask.io) は、ETCとトークンを管理したり、それをサポートするアプリケーションと対話するためのウォレットとして使用できます。 この記事では、Ethereum Classic(ETC)ネットワークでMetaMaskの使用を開始する方法を説明します。

ETCをサポートするMetaMaskのフォークである [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1)も考慮できます。

## 1. メタマスクにログインする

最初のステップは、ログインしてメタマスクのロックを解除することです。

![ステップ 1](./01.png)

## 2. 初期画面を表示

通常の初期画面が表示されます。 この場合、デフォルトのネットワークはEthereum(ETH)で、アカウントは通常通り表示されます。 他のネットワークを使用している場合、MetaMaskのロックを解除するとデフォルトとして表示されます。

私の場合、それは初期のネットワークとしてEthereumを示し、私は私のETHアカウントにゼロバランスを持っています `0x48c1...EF3`.

![ステップ 2](./02.png)

## 3. ネットワークのドロップダウンメニューを開く

次のステップは、ネットワークのドロップダウンメニューを開くことです。 これを行うには、デフォルトのネットワークを表示するバーをクリックします。

上記のように、ネットワークのデフォルトのリストは、イーサリアムのmainnetとその最も人気のあるtestnetです。

マシンで実行している場合、「ローカルホスト8545」はEthereumノードとの接続になります。

「カスタムRPC」は、この場合ETCのカスタムネットワークを追加するオプションです。

「RPC」は「リモートプロシージャコール」の略で、プロトコルマシンがリモートマシンで他のプログラムを呼び出すために使用することを意味します。

![ステップ 3](./03.png)

## 4. カスタムRPCを選択

したがって、次のステップは「カスタムRPC」をクリックすることです。

![ステップ 4](./04.png)

## 5. 新しいネットワークフォームを表示

「カスタムRPC」を選択すると、ネットワークを追加するフォームが表示されます。 上部にセキュリティメッセージが表示され、空のフィールドがある5つのオプションが表示され、新しいネットワークを使用します。

- ネットワーク名: 追加するネットワークの名前。
- 新しいRPCURL:追加したいネットワークRPCのURL。
- チェーン ID: 追加したいネットワークへのトランザクションの送信とダイレクト転送を行うID。
- 通貨記号 (オプション): 追加するネットワークの通貨記号。 例えば、「ETH」はEthereumのシンボルで、「ETC」はEthereum Classicのシンボルです。
- ブロックエクスプローラURL(オプション):MetaMaskには、アカウントの履歴を確認するためにネットワークごとのブロックチェーンエクスプローラへのリンクがあります。 新しいトランザクションが送信され、それらの上に残高があります。ここでは、追加したいネットワーク用のブロックエクスプローラを追加します。

![ステップ 5](./05.png)

## 6. イーサリアムクラシックネットワーク情報を入力

次のステップは、Ethereum Classicの特定の情報を追加することです。 以下は私が使用したネットワークデータです:

- ネットワーク名: `Ethereum Classic`
- New RPC URL: `https://www.ethercluster.com/etc`
- チェーン ID: `61`
- 通貨記号 (オプション): `ETC`
- Block Explorer URL (オプション): `https://blockscout.com/etc/mainnet/`

For the “RPC URL” I used the one provided for this purpose by the [ETC Cooperative](https://etccooperative.org/), which is from a product they built called [Ethercluster](https://ethercluster.com/)

_[Etherclusterは](https://rivet.cloud/) RIVET format@@2によって運用されています。 [ネットワーク](/network/endpoints) セクションには、より多くの RPC エンドポイントがあります。_

「チェーン ID」は「61」でなければなりません。なぜなら、これは、ウォレットとノードでETCトランザクションをオペレーティングブロックチェーンに送信するためのイーサリアム・クラシックネットワークの特定のIDだからです。

「シンボル」と「ブロックエクスプローラのURL」はオプションですが。 ネットワークの広く知られているマーケットシンボルであるため、「ETC」をシンボルとして使用することをお勧めします。 ブロックチェーンエクスプローラとしてのBlockScoutは、私が普段使っているものだからです(しかし、あなたの好みのものを追加することができます!)。

「保存」をクリックしてETCをMetaMaskに追加します。

![ステップ 6](./06.png)

## 7. イーサリアムクラシックをネットワークドロップダウンメニューで表示

ETCが追加されると、ネットワークのドロップダウンメニューでネットワークのリストに追加されることが表示されます。

![ステップ 7](./07.png)

## 8. ETCで同じアカウントを閲覧することができます。

アカウントにアクセスすると、ETHアカウントと同じであることがわかります。 私の場合は、同じ `0x48c1...EF3` アカウントです。

これは、ETHとETCの両方が同じアカウント形式を使用するため、EthereumのアカウントもEthereum Classicで使用することができます。

実際、ETHアカウントにはゼロ残高があったことを覚えているかもしれません。 しかし今では、1 ETCのバランスが同じアカウントで見られるかもしれませんが、Ethereum Classicで見ることができます。 これは、このデモのためにEthereum Classicネットワーク内のこのアカウントに1ETCを送信したためです。

なお、ETCネットワークは現在ネットワークバーに表示されているものであることに注意してください。 そして、「ETC」記号が残高の表示に使用されるようになりました。

![ステップ 8](./08.png)

## 9. 同じアカウントでEthereumに戻ることができます

したがって、両方のネットワークが同じアカウント形式を使用しているため、Ethereumメインネットに戻ることができ、同じ番号でETHアカウントを再度見ることができます。

![ステップ 9](./09.png)

## 10. 同じアカウントでEthereum Classicに戻ることができます

ETCネットワークを使用するには、ETC残高が再び表示されるネットワークドロップダウンメニューでEthereum Classicをもう一度選択します。

![ステップ 10](./10.png)

//

私はあなたがETCに投資し、使用する成功を願っています!

---

** Code is Law **
