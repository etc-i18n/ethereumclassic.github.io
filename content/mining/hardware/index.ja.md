---
title: マイニングハードウェアガイド
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: ETHash vs ETCHash, SHA3, GPU, ASICをカバーする、Ethereum Classicのハードウェア要件の簡単な説明。
---

マイニングEthereum Classicは、マイニングEthereumとほぼ同じで、同じハードウェアとマイニングソフトウェアをサポートしています。 あなたが最近立ち上がったEthereum鉱山労働者であれば、Ethereum Classicはその鉱山労働者を愛し、あなたを歓迎します また、Ethereum Classicをサポートする [マイニングプール](/mining/pools) に切り替えるだけで、既存のハードウェアを使用してETCのマイニングを開始できます。

## ETCHash

ETCマイニングアルゴリズムはEthereumのETHashとほぼ同じで、小さなアップグレードにより、よりマイナーに優しいものになりました。 2020年後半には、 [Thanosのアップグレード](/blog/2020-11-27-thanos-hard-fork-upgrade)、ETCは [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099)を実装しました。 ETCHashとして知られるようになったETHashアルゴリズムを調整しました。

基本的に2020では、EthereumのDAGは4 GBを超えています。 つまり、4 GBのメモリを持つ多くのGPUはETHのマイニングを継続できないでしょう。 In response, Ethereum Classic tweaked it's algorithm to ensure that cards with 4 GB would be able to continue mining ETC until [approximately mid-2025](https://minerstat.com/dag-size-calculator).

## ハードウェア要件

Ethereum Classicを採掘するために使用できる2つの主なタイプのハードウェアがあります。

### GPU

一般的に、Ethereum Classicを採掘するのに最適なグラフィックスカードは、少なくとも4 GBのメモリを備えた最も電力効率の高いカードです。 GPUを選択する前に、ETCHashのマイニングに関するレビューを探してください。 オンラインで「 [でEthereum Classicを採掘するための最良のGPU」を検索し、提案については](https://whattomine.com/coins?e4g=true) WhatToMine format@@2を参照してください。

### ASICs

ASIC、またはアプリケーション固有集積回路は、名前が示すように設計された特別に製造されたチップで、特定のアルゴリズムを1つだけ採掘することができます。 もともと、DAGのメモリ強度の要件のために、ETHashはASICに対してかなり耐性がありましたが、時間とともに。 すべての収益性の高いアルゴリズムのように、ETHash 用の ASIC を構築する大きなインセンティブがありました。

様々なASIC鉱夫Ethereum Classicが利用可能で、オンラインで「ETHash ASIC Miners」を検索することで見つけることができます。 また、ETCHash に対応しているかどうかメーカーの仕様を確認してください。

## サポート

ETCコミュニティの他の鉱夫からのさらなる助けと指導のために、 [Discord](https://ethereumclassic.org/discord) の#mining channel で連絡を取ることができます。
