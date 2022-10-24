---
title: Mining Hardware Guide
contributors: ["IstoraMandiri", "wpwrak"]
updated: 2022-02-22
contribute: true
seo: A short explanation of the Hardware Requirements for Mining Ethereum Classic, covering ETHash vs ETCHash, SHA3, GPUs, and ASICs.
---

Mining Ethereum Classic is almost identical to mining Ethereum, and supports the same hardware and mining software. If you are a recently evicted Ethereum miner, Ethereum Classic loves its miners and welcomes you, and you can start mining ETC using your existing hardware by simply switching to a [mining pool](/mining/pools) that supports Ethereum Classic.

## ETCHash

The ETC Mining algorithm is almost identical to Ethereum's ETHash, with a small upgrade that made it more miner friendly. In late 2020, during the [Thanos upgrade](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC implemented [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), which tweaked the ETHash algorithm into what became known as ETCHash.

Basically, in 2020, Ethereum's DAG exceeded 4 GB, meaning that many GPUs with 4 GB of memory would be unable to continue mining ETH. In response, Ethereum Classic tweaked it's algorithm to ensure that cards with 4 GB would be able to continue mining ETC until [approximately mid-2025](https://minerstat.com/dag-size-calculator).

## Hardware Requirements

There are two main types of hardware that can be used to profitably mine Ethereum Classic.

### GPUs

Generally, the best graphics cards to mine Ethereum Classic are the most power efficient cards with at least 4 GB of memory. Before picking a GPU, look for reviews specifically about mining ETCHash. You can search online for the "Best GPUs for mining Ethereum Classic in [current year]" for suggestions, and visit [WhatToMine](https://whattomine.com/coins?e4g=true) for more info.

### ASICs

ASICs, or Application Specific Integrated Circuits, are specially manufactured chips that are designed, as the name suggests, to mine just one specific algorithm. Originally, due to the memory-intense requirements of the DAG, ETHash was fairly resistant to ASICs, but with time, like all profitable algorithms, there was a big incentive to build ASICs for ETHash, which did come to market.

A range of ASIC miners Ethereum Classic are available and can be found by searching online for "ETHash ASIC Miners", and check the manufacturer's specification for whether it supports ETCHash.

## Support

For further help and guidance from other miners in the ETC community, you can reach out in the #mining channel on [Discord](https://ethereumclassic.org/discord).
