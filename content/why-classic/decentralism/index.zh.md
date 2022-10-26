---
title: 分权制
updated: 2022-02-22
disclaimer: 意 见
seo: 一篇论文解释了以太基姆古典的原则和核心价值主张为基础的权力下放价值观，使它能够带来光明的未来， 与许多其他区块链走的黑暗的中央集权路径形成对比。
contributors:
  - "IstoraMandiri"
  - "DonaldMcIntyre"
---

## 关键点

- 权力下放有利于权力下放；在一个系统中单一的失败点较少，难以抓住。
- In blockchain systems, decentralization is extremely important. To make a blockchain useful, a certain threshold must be met, depending on the application. 要使区块链有用，必须满足某个阈值，这取决于应用程序。 要使区块链有用，必须满足某个阈值，这取决于应用程序。
- 许多项目利用权力下放计量的难度来掩盖它们真正容易被抓获。
- 社会和技术层面可以通过各种手段来抓住，因此它们都必须放权，而不应依赖一个中心群体。
- 以太古经典为目标的 _最高分级_ 级权力下放，这意味着世界上没有任何组织能够抓住它。
- Ethereum Classic 应用 _原理_, _分散最大化_, _制衡_ 和 _协议中立_ 以实现长期预防捕获。

## 一. 导言

One of the first publications about Ethereum Classic that came out after The DAO Hard fork was [A Crypto-Decentralist Manifesto](/blog/2016-07-11-crypto-decentralist-manifesto). In protest of The Fork, it underlined the classic decentralized approach to organizing blockchain projects. This document set the tone for ETC's future development. Since its creation, much has been discovered about the nature of the elusive but vital concept. 为了抗议Fork，它强调了组织区块链项目的典型分散办法。 为了抗议Fork，它强调了组织区块链项目的典型分散办法。 本文件为ETC今后的发展确定了基调。 自成立以来，人们已经发现许多关于难以捉摸但至关重要的概念的性质的问题。

> 分散、不可阻挡。
> 
> - Ethereum Classic 网站 2016

这个系列的蜂窝字是解锁区块链技术真正的潜在价值的一种方法。 This series of buzzwords is a recipe for unlocking the true value potential of blockchain technology. First you need decentralization, which enables immutability, allowing unstoppability, and making possible the [bright future](/why-classic/code-is-law) we discussed earlier.

## 权力下放的数量

> 权力下放是一个组织的活动，特别是有关规划和决策的活动的过程。 • 在中央、权威地点或团体之外进行分配或下放。
> 
> - [维基百科](https://en.wikipedia.org/wiki/Decentralization)

权力下放有利于权力下放，这种财产存在于许多制度中，并且在整个自然过程中形成。 它不是一种二元财产，而是一种随着时间推移而减弱和流动的一种光谱。 Decentralism favors decentralization, a property that exists in many systems and forms throughout nature. It is not a binary property, but a spectrum that ebbs and flows through time. It's difficult to articulate a hard and fast definition for decentralization in all contexts, but it can be visually understood fairly intuitively.

![随着一个系统变得更加分散，它有较少的制服点，从而更难捕获。](./decentralization.jpg)

In the realm of blockchain projects, there are many ways of measuring decentralization, with one rough quantification being "the ratio of people needed to be compromised in order to take over the system". That is to say, if an attacker wanted to control or censor a chain, a project that required them to compromise 80% of participants is _more decentralized_ than a project that only required 10% to be compromised. That is to say, if an attacker wanted to control or censor a chain, a project that required them to compromise 80% of participants is _more decentralized_ than a project that only required 10% to be compromised. That is to say, if an attacker wanted to control or censor a chain, a project that required them to compromise 80% of participants is _more decentralized_ than a project that only required 10% to be compromised.

This measurement is known as the [Nakamoto coefficient](https://minima.global/blog/the-nakamoto-coefficient-an-attempt-to-quantify-decentralization), and while it is an excellent conceptual tool, is a fairly low-resolution one-dimensional measurement. In reality, decentralized systems can be designed to make capture less likely by assigning different groups with different responsibilities. Due to their diversity of responsibilities and backgrounds, difficulty in capturing a network then becomes linked not simply to the ratio of people, but a complicated mesh of overlapping strengths and weaknesses of different actors within the system. 在现实中，分散的制度可以通过分配不同的责任来减少捕获的可能性。 由于他们的责任和背景多种多样，很难掌握网络，而不仅仅是与人口比例相联系。 但也是系统内不同行为者相互重叠的优势和弱点的复杂轮廓。

For example, in Proof of Work blockchains, an accurate measurement of decentralization would attempt to take into account mining by reward, clients by codebase, developers by commits, exchanges by volume, nodes by count, and ownership by value distribution, etc. But even this more nuanced approach is far from perfect, as a single snapshot measurement does not yield much insight into whether a system can maintain decentralization over time. 但即使这种更细微差别的做法也远非完美无缺， 作为一种单一的快照测量方法，对于一个系统能否在一段时间内保持权力下放的问题并无多大的了解。 但即使这种更细微差别的做法也远非完美无缺， 作为一种单一的快照测量方法，对于一个系统能否在一段时间内保持权力下放的问题并无多大的了解。

Whichever way it is quantified, attackers that wish to "own" the system have a more difficult job the more decentralized a project is. To defend against take-overs, projects need to reach a sufficient level of decentralization, which means minimizing the number of central points of failure and bottlenecks, which can exist in many places in the system. 为了防范接管，项目需要达到足够的权力下放水平。 这意味着最大限度地减少系统内许多地方可能存在的失误和瓶颈中心点的数量。

### Blockchain Trilemma

> 与中央网络相比，分散化网络的基本结构面临着独特的挑战。 早在1980年代，计算机科学家就制定了所谓的联合呼吁程序理论，表达或许是其中最主要的挑战。 根据CAP 理论，分散的数据存储——区块链是其中的一个迭代——只能同时提供三个保证中的两个保证：一致性。 在现代分布网络中，这种理论已经演变成区块链三角形。 这是人们普遍认为公共区块链必须牺牲安全、权力下放或其基础设施的可扩展性。
> 
> - Blockchain Trilemma, [Gemini.com](https://www.gemini.com/cryptopedia/blockchain-trilemma-decentralization-scalability-definition#section-what-is-the-blockchain-trilemma)

![Blockchain Trilemma](./trilemma.png)

The Blockchain Trilemma describes a technological limitation that applies to all blockchain protocols. A similar concept also applies to the social layer of a blockchain project, with a sliding scale of top down vs bottom up decision-making. 一个类似的概念也适用于区块链项目的社会层，其上下与下层决策的滑动尺度。 一个类似的概念也适用于区块链项目的社会层，其上下与下层决策的滑动尺度。

Like creating a video game character, all projects must place themselves somewhere in the space of these sociotechnological dimensions, allocating ability points and sacrificing some attributes for others. The selection defines a blockchain's class, abilities and effectiveness in battle. Like creating a video game character, all projects must place themselves somewhere in the space of these sociotechnological dimensions, allocating ability points and sacrificing some attributes for others. The selection defines a blockchain's class, abilities and effectiveness in battle. 选中定义了区块链在战斗中的阶级、能力和有效性。

正如我们将看到的那样，就协议的属性和基本哲学而言，“以太久经典”已经实现了权力下放和安全。 故意牺牲交易规模和压低社会组织，以便能够加强更重要的技能。

ETC chose to max-out these skills because for a blockchain protocol to scale its base protocol it must make trade-offs in decentralization and security, which may not appear as apparent costs immediately, but in the long run is bound to damage the utility and value of the network. In short, for ETC, scalability is less important than security and decentralization, and this technical trade-off is also mirrored in the social layer; decentralization trumps the expediency of central rule. 简言之，对ETC来说，可扩展性不如安全和权力下放重要，而这种技术上的平衡也反映在社会层面。 权力下放妨碍了中央规则的利弊。 简言之，对ETC来说，可扩展性不如安全和权力下放重要，而这种技术上的平衡也反映在社会层面。 权力下放妨碍了中央规则的利弊。

Today, most blockchain projects have abandoned the idea of maxing-out decentralization in exchange for scalability and the benefits of coordinating from a central group. This may well be useful for short term bootstrapping as it allows the funding of extravagant development or marketing budgets, and there is no obvious downside in an environment that is not antagonistic, but unless the project tapers-off this dependence on centralization, which may be impossible due to the incentivization structures it creates, the network is exposed to take-over through the capture of this relatively centralized set up. 这很可能有助于短期启动，因为它能够为过度发展或营销预算提供资金。 而且在一个不对立的环境中没有明显的消极作用， 但除非项目减少这种对中央集权的依赖，而中央集权由于奖励结构而可能无法产生， 该网络通过捕获这一相对集中的设置而被接管。

### 主权等级审查抵制行为

One question that should be asked when evaluating different blockchain projects is "is it decentralized enough?". The answer to this entirely depends on the use case's [threat model](https://en.wikipedia.org/wiki/Threat_model), which depends on what kind of applications need to be run on a given chain. The question can be reframed as "who would want to stop the applications on this chain from running, and can the chain resist their attempts at censorship?". One question that should be asked when evaluating different blockchain projects is "is it decentralized enough?". The answer to this entirely depends on the use case's [threat model](https://en.wikipedia.org/wiki/Threat_model), which depends on what kind of applications need to be run on a given chain. The question can be reframed as "who would want to stop the applications on this chain from running, and can the chain resist their attempts at censorship?". 这个答案完全取决于使用案例的 [威胁模型](https://en.wikipedia.org/wiki/Threat_model)， 这取决于哪种应用程序需要在指定的链上运行。 这个问题可以恢复为“谁想要阻止这一链上的应用程序运行， 而且链条能够抵制他们进行检查的企图吗？”

For example, in the case of Bitcoin, its main application is the coin itself: digital scarcity and the ability to transfer it without censorship. It competes with many currencies and assets, including the US dollar, and therefore it must withstand attacks from very powerful entities to persist. Many of Bitcoin's [predecessors](https://blog.dassetx.com/the-known-and-possible-influences-of-satoshi-nakamoto-part-1-privately-issued-digital-currencies-before-bitcoin) were shut down because they had central points of failure, and Bitcoin was explicitly designed to circumvent this kind of censorship by being sufficiently decentralized. 它与包括美元在内的许多货币和资产竞争，因此，它必须经受强大实体的攻击才能持续下去。 它与包括美元在内的许多货币和资产竞争，因此，它必须经受强大实体的攻击才能持续下去。 许多比特币的 [个前任](https://blog.dassetx.com/the-known-and-possible-influences-of-satoshi-nakamoto-part-1-privately-issued-digital-currencies-before-bitcoin) 因为他们有中心失败点而被关闭。

In contrast, some blockchains require less censorship resistance than Bitcoin and only intend to, for example, enable the transfer of virtual baseball cards, or have other uncontroversial use cases. As no powerful external forces want to stop these applications, censorship resistance is unnecessary. It may even be seen as a benefit if some central party can override the state of the chain in certain circumstances, so having the whole chain operated by a handful of authorities is acceptable for this use case. In these cases, where the use case is not important enough for a well-funded organization to shut down, it might make sense to sacrifice decentralization for scalability, and other non-blockchain technologies may be more appropriate. 由于没有强大的外部力量想要制止这些应用，因此没有必要进行检查检查。 由于没有强大的外部力量想要制止这些应用，因此没有必要进行检查检查。 如果某些情况下某些中心方能够推翻这一链条的状态，甚至可能被视为一种好处。 因此，在这种情况下，由少数几个当局管理整个链条是可以接受的。 在这种情况下，使用情况对于资金充足的组织关闭并不重要。 为可扩展性而牺牲权力下放也许是有道理的，其他非区块链技术也许更合适。

Ethereum Classic, 即使早在2015年就被称为Etherum, 它旨在实现至少像比特币那样易受检查的目标。

> Ethereum is a decentralized computing platform that executes smart contracts. Applications are ran exactly as programmed without the possibility of censorship, downtime, or third-party interference. 申请的处理完全按计划进行，没有进行审查、停顿或第三方干预的可能性。 申请的处理完全按计划进行，没有进行审查、停顿或第三方干预的可能性。
> 
> - Ethereum.org, 2015

Ethereum's Smart Contract Platform was designed to not only support Bitcoin's base currency use case, but also any kind of blockchain application. Because of this, it is highly likely to attract attempts at censorship from legacy system incumbents at risk being disrupted. 由于这种情况，很可能会吸引那些可能受到干扰的遗留系统的现任人员试图进行审查。

在全球一级提供解决办法，防止遭受民族国家和多国组织等其他主权机构的袭击， 因此，像比特币一样，需要达到一定程度的权力下放，使任何这些群体都无法对其进行审查。 _需要主权等级审查抗性_。

在这个不可确定性水平上达到了临界值。 由于没有其他机构能够检查网络，应用程序变得更加有用，变得不信任了 __。 他们不再依赖某些其他公司或政府的信任或许可经营。 在这些平台上，决定前进方向的是用户，而不是供应商。

_代码是法律_ 只能在已经达到 _主权等级审查抗性的链条上运行_ 这个级别是为了防止其他实体检查其运作。 而这反过来又要求这一链条最大化它的权力下放属性，并始终不折不扣地保持这些属性。 _Code is Law_ can only operate on chains that have achieved _Sovereign Grade Censorship Resistance_. This level is required to prevent other entities from censoring its operation, and this in turn requires the chain to max-out it's decentralization attributes and constantly maintain them without compromise. _Code is Law_ requires _decentralization maximalism_.

## 集权失败状态

在我们探讨集中化问题的解决办法之前，我们必须首先理解缺乏权力下放如何能够迅速倒退到全面失败。

Today, even more so than when Ethereum (Classic) was launched in 2015, it is increasingly apparent that censorship is becoming the weapon of choice of a dying legacy system attempting to cling on to relevance. As these old institutions become increasingly threatened by change, it seems likely that ever-more drastic measures will be taken to defend their position. 随着这些旧的机构日益受到变革的威胁，似乎有可能采取更加严厉的措施来捍卫它们的立场。 随着这些旧的机构日益受到变革的威胁，似乎有可能采取更加严厉的措施来捍卫它们的立场。

在互联网和区块链技术进入场景之前， 由于社会严重依赖中央控制点来进行价值和信息转让，这些机构在很大程度上处于关闭状态。 Before the internet and blockchain technology entered the scene, these institutions had reality pretty much on lockdown as society was heavily reliant on centralized control points for value and information transfer, which was readily exploited. With cryptography, Satoshi retorted just in the Nick of time, turning the tables on [the logic of violence](https://cryptonews.net/en/news/bitcoin/2927549/), and providing humanity with a path towards an alternative emergent order.

随着时间的推移，对自由、公正和公开的现状替代办法的袭击将会增加。 因此，加密货币生态系统将进入一个新阶段，一个高度对立的阶段。 如果区块链技术的不确定性将真正用于测试。 将寻找和开发加密货币系统的主要故障点。 在任职者不同意的情况下，只有 _最高等级_ 才能生存。

今后，为了保持效用和价值，区块链必须抵制将对其进行的一系列社会、经济和技术攻击。 In the future, to maintain utility and value, blockchains must resist a range of social, economic and technological attacks that will be deployed against them. The list of attacks is ever-growing and new forms of attack are sure to be conjured up and countered, but for now, at the very least, the more obvious known failure states must be avoided.

### 短暂基金会

Historically, the number one cause of death for blockchain projects is when the teams responsible for maintaining them no longer operate. Simply put, if a project depends on a central organizing committee or developer team, it will only last for as long as that organization does. 简单地说，如果一个项目依赖一个中央组织委员会或开发者团队，那么它只能持续到该组织所做的时间。 简单地说，如果一个项目依赖一个中央组织委员会或开发者团队，那么它只能持续到该组织所做的时间。

出于许多原因，各组织可以停止运作。 Organizations can cease to operate for many reasons. Be it a simple rugpull, running out of funds, getting hacked, getting hammered by regulators, traffic accidents, or any other reason, these factors are often outside the control of this team, so it is down to luck or the approval of regulators whether a project can survive.

在许多情况下，中央小组的存在使其他小组不愿为某个项目作出贡献，因为它们并不是在平等的竞争环境中。 In many cases, the existence of a central team disincentives others from contributing to a project, as they are not on a level playing field. Third parties will always be second class citizens compared to this central organizing committee, who are calling the shots and disproportionately benefitting from price action in the case of a premine or development tax, which further solidifies reliance on this team to maintain and direct the project, and, at the very least, prevents a natural organizational hierarchy from emerging.

This reliance on a central team may provide direction and big budgets in the short term, but it burdens the protocol with a kind of "centralization debt" that is difficult to pay off. Eventually, like all organizations, the central team will cease to operate. Unless the project sheds this reliance, it is likely to become either abandoned or maladapted to life without this group. 最后，同所有组织一样，中央小组将停止运作。 最后，同所有组织一样，中央小组将停止运作。 除非该项目打破这种依赖，否则它很可能被遗弃或不适应没有这个群体的生活。

### Metatspace 抓取

For high value projects that have an overreliance on centralized teams, as time goes on, a fate far more insidious than mere abandonment becomes increasingly likely. Like clockwork, as with all top-down centralized institutions, they become captured by special interests through various manipulative techniques. 像时钟一样，就像所有自上而下的中央机构一样，它们通过各种操纵手段被特殊利益集团抓获。 像时钟一样，就像所有自上而下的中央机构一样，它们通过各种操纵手段被特殊利益集团抓获。

假定一个强大的机构会受到新技术的威胁。 Suppose a powerful institution feels threatened by new technology. Rather than stamping it out, which may be impossible, it is far more effective to simply compromise and disrupt its operation by influencing the direction of development in a way that does not fundamentally upset the status quo.

This can be achieved by turning influencers and the leadership of an organization into puppets, whose strings are pulled through a variety of carrots and sticks. Humans are fallible and are susceptible to all degrees of manipulation and extortion; peer pressure, angry mobs, politics, kickbacks, bribes, psyops, honey traps, kompromat, physical threats, imprisonment, or worse. 人是可怕的，容易受到各种程度的操纵和敲诈； 同伴压力、愤怒的暴民、政治、回扣、贿赂、精神病患、蜂蜜陷阱、番茄、肉体威胁、监禁或更糟。

有了足够的关键目标，他们就能够通过自己的权力来控制连锁的未来。 • 进行微妙的渐进改革，进一步加强对决策的控制和控制。

这类故障状态中最有问题的因素之一是可以以无法察觉的方式进行。 One of the most problematic elements of this type of failure state is that it can be done in a way that is undetectable. It may be that the level to which a central team is compromised is unknown, and capture only becomes obvious when it is too late to do anything about it.

即使一个集中的小组没有受到公开的损害，这种妥协的潜力本身也会造成不信任和不安。 Even if a centralized team is not overtly compromised, the very potential of this compromise can sow distrust and uneasiness. Conspiracy theories and the questioning of decision-making may undermine a project's leadership and stability if they appear not to be driven by merit alone, and simple divide and conquer tactics deployed against the organizing committee may be enough to paralyze the project.

This failure state shows an inherent contradiction within any blockchain project that relies on a central organizing committee. While the protocol may be decentralized on paper, in reality the project is beholden to a central group which can and will be bent to the will of anyone who feels that the cost of doing so is worth it. 虽然协议可能是书面上的分散化， 实际上，该项目是由一个中央团体承担的，该团体能够而且将会服从任何人的意愿，他们认为这样做的代价是值得的。

### Kabuki Coins

集中化同重力一样，正在不断地拉动和寻找社会技术结构中的任何弱点，以找到它的突破点。 Centralization, like gravity, is constantly pulling and looking for any weakness in a sociotechnological structure to find its breaking point. For a system to overcome this force long term, it must ensure that no central point of failure can be exploited, which means designing robust countermeasures that constantly push back against centralization not just in one place but in all areas.

由于这种情况，在半措施中下放权力是没有意义的。 Because of this, there is no point in having decentralization in half measures. A chain is only as strong as its weakest link, and a blockchain is only as decentralized as its most centralized bottleneck. For this reason, _all_ parts of a blockchain project, both technically and socially, must strive for _decentralization maximalism_. 出于这个原因， _一个区块链项目的所有_ 个部分，无论是技术上还是社会上的，都必须努力实现 _放权最大化_。 出于这个原因， _一个区块链项目的所有_ 个部分，无论是技术上还是社会上的，都必须努力实现 _放权最大化_。

_Decentralization maximalism_ is the only known mechanism to shore off the forces of centralization long term. It is not a predefined set of rules but a general philosophy or way of thinking that seeks to reduce the number of central points of failure throughout a system. 它不是一套预先确定的规则，而是一种一般性的哲学或思维方式，力求减少整个系统失败的中心点数目。

These projects have subtle single points of failure within their systems, but promoters shift the focus to other "decentralized" areas. This is an effective tactic, as proving that a system has potentially capturable central points of failure requires intimate knowledge of the system, and can be very difficult or impossible for the layman, due to the technical skill and insider knowledge required to evaluate properly. 这是一种有效的战术，因为要证明一个系统可能具有潜在的中心故障点，就需要对该系统有深入的了解。 由于适当评价所需的技术技能和内线知识，对非全时工人来说可能非常困难或不可能。

Like the parable of the buildings built on rock and sand, to the untrained eye, two projects may appear to be properly constructed, and under normal conditions they both operate as intended. But under the surface, one project has a fatal flaw that will only lead to ruin in times of stress and will likely end up causing damage to those who expect the project to stand the test of time. 但在表面上， 一个项目有一个致命的缺陷，只会在紧张时期造成破坏，并可能最终对那些期望该项目经受时间检验的人造成损害。

![块链像建筑一样，可以建立在牢固和虚弱的地基上](./rocksand.jpeg)

## 经典问题需要经典解决办法

Corruption is a problem as old as civilization. While it might not have reared its ugly head in the cryptocurrency space yet, as the technology becomes more influential, it is bound to attract forces that wish to bridle its power and shape it towards a future where, far from liberating humanity, blockchains become tools for optimizing enslavement. 虽然它可能还没有在加密货币空间中养成其丑恶的头部，但是随着技术的影响更大， 它必然会吸引那些希望弥合其权力并使之朝着未来方向发展的势力。 区块链远远没有解放人类，成为优化奴役的工具。

In the long run, whatever happens, decentralized blockchains will prevail eventually. Still, if humanity wishes to avoid a dark-ages style period of hampered innovation and stagnation, the word must be spread about the dangers of centralization so that it can be dealt with before they take hold. Luckily, a window of opportunity exists to counter the inevitable ongoing attempts to capture blockchains. For now, projects that strive for _decentralization maximalism_ still exist and are available to those who wish to use them. 然而，如果人类希望避免一个黑暗风格的创新和停滞时期， 这个词必须散布在集中化的危险上，以便在集中化之前能够得到处理。 值得庆幸的是，存在着一个机会之窗，用来对付正在不可避免地要夺取区块链的企图。 目前，力求实现 _分散最大化的项目_ 仍然存在，希望使用这些项目的人可以使用这些项目。

虽然它仍然是自愿的，而不是依靠权威人士或营销运动， 个人可以从第一项原则出发，思考过去的教训，得出自己的结论，哪些区块链可能提供长期价值并值得与之互动。

回到区块链技术、经济理论和历史教训的根基。 比特币背后的设计决定的智慧变得很清楚， 而且这种逻辑可以重新应用于空间的其他技术进步，包括智能合同平台，如“以太空”类课程。

### 原始原理

虽然使它们变得不幸、虚假和脆弱的机构和人是虚假的，但思想却是有弹性的。 不言而喻，与区块链一样重要和有影响力的技术必须建立在不仅仅是人的基础之上。 发展良好的哲学必须成为指导本可捕获的肉袋行动的坚实基础。

Good ideas stand on their own, can be debated in public, and are valid regardless of who proclaims them, making them perfect for constructing a harness to restrain and protect the future of a blockchain project. That is why The Ethereum Classic Foundation is not a *group*, but its *principles*, which come first and inform decision-making. 这就是为什么以太古经典基金会不是 *组*， 但是它的 *原则*, 这些原则首先来指导决策。 这就是为什么以太古经典基金会不是 *组*， 但是它的 *原则*, 这些原则首先来指导决策。

务实主义是维持和遵守健全原则的下游，因为这些原则使两者都能够实际生存下去。 长期可持续性，并作为吸引高质量贡献者的一种广告形式。 原则首先是确保一个项目能够为子孙后代维持其发展方向的漫长途径。 因为它不是以一个中央团体不断变化的利益为指导， 但根据外部哲学参考资料，即使捐款者更替率很高，也是如此。

没有中央团体可以叫喊枪声，意味着任何个人或团体都可以担任任何角色。 只要它们如利害关系方所理解的那样忠实地解释和执行ETC的原则和价值观。 如果有人觉得硬叉与他们所注册的价值之间的差异，它们就可以继续现有的链条版本。 链条分割的风险意味着鼓励所有参与者共同努力解决分歧。 而且如果分歧无法解决，任何一方的辩论都不能推翻另一方。

### 协议中立性

As the night is young in the blockchain game, the problem of [Ephemeral Foundations](#the-ephemeral-foundation) may not be so obvious. Whether conned, crushed, or otherwise captured, the noble intentions that run the show for many blockchain projects are certain to come to an end, and with them, if their chains are not able to shed reliance, so do their ambitions. 许多区块链项目运行的高尚意图，不管是内涵、粉碎还是以其他方式捕获，肯定会结束。 许多区块链项目运行的高尚意图，不管是内涵、粉碎还是以其他方式捕获，肯定会结束。 如果他们的链条无法摆脱依赖，他们的野心也是如此。

当区块链项目中的决策系统长期依赖一个中央集团时，这个问题就更加严重。 组织该项目的其他机制无法演变，因为决策预计将从上而下而不是从下而来。 其结果是，不透明的专制变成了一种标准，这种标准使人感到虚弱，而不是使反脆弱的公开任人唯贤。

这表现为 _集中重力_, 其中更加难以依赖中央决策雪球作为外部贡献而变得更加困难。 因此，项目越来越多地依赖自上而下的领导层，周期又重复。

因此，今后依靠中央组织的项目将逐个成为这种依赖的受害者。 而且事实将会认识到，只有没有这种依赖的项目才能长期维持下去。 Because of this, in the future, projects that rely on centralized organizations will one by one fall victim to this reliance, and the truth will be realized that only projects without this reliance can sustain themselves for long periods. As the wild valuations that cryptocurrencies currently enjoy depends on the hope that these projects have some degree of longevity, it will become increasingly evident that only truly decentralized projects are worth contributing money, talent or time to, and the market will reallocate accordingly.

Only the projects with long term value propositions will remain, which means only those that don't rely on central organizing committees will remain. By the same logic, it will become apparent that, all things being equal, the projects perceived to be the least dependent on central groups will attract the most contribution and value. 根据同样的逻辑，一切情况显然都是平等的。 被认为最不依赖中央群体的项目将获得最大的贡献和价值。

项目不应依赖中央当局不可持续的现金注入，而应逐渐发展，以便完全依靠自然捐款。 例如那些通过 _购买并贡献_ 策略的方法， 因此，个人可以买进一个项目，并从经济上鼓励自己为该项目捐款。

This strategy works best when an individual is reaping the full reward of their contribution, which can only happen when a protocol is neutral. Neutral protocols treat all participants on the same equal footing and do not grant any special privileges to specific parties. Decentralized blockchain projects will compete with each other on this basis; only the most neutral projects, those without a Foundation, Dev Tax, or undiluted premine, will attract the type of natural contribution that enables long term sustainability. 中立议定书平等对待所有参与者，不给予特定当事方任何特殊特权。 仅仅是最中立的项目，没有基金会、Dev Tax或没有预设的项目， 这将吸引能够长期可持续性的自然贡献。

### 平衡功率

As echoed by the structure of existing institutions such as the government of the United States of America, to rein in bad decision-making and prevent one group from hijacking a system as a whole for selfish interests, a balance of power between different players needs to exist in systems that wish to maintain longevity. This concept is known as _checks and balances_. 这个概念被称为 _抑制和平衡_。

![美国政府是实行制衡制度的一个例子。](./congress.png)

与美国政府一样，制衡是工作区块链证明的一个重要特征。 在这种情况下，存在三个主要权力集团并平衡彼此的权力。

| 组别  | 作用           | Veto     |
| --- | ------------ | -------- |
| 开发者 | 维护客户和基础设施    | 停止维护代码   |
| 矿工  | 针对51%的攻击提供安全 | 挖一个不同的链接 |
| 金融商 | 提供流动资金和融资举措  | 出售持有的物品  |

The alignment of three major powers in Proof of Work blockchains provides stability. They each add value to the system in entirely different ways. Each holds the system to account through the power of veto, which ensures that no other groups can screw things up too badly. Whether a government or a blockchain, things tend to go wrong when these checks and balances are interfered with. 它们都以完全不同的方式增加了系统的价值。 它们都以完全不同的方式增加了系统的价值。 每个组织都通过否决权追究该系统的责任，因为否决权确保任何其他团体都不能以太差的方式推翻一切。 无论是政府还是区块链，当这些制衡受到干扰时，情况往往是错误的。

Note that this configuration of three is important, as it also means that the collective can overcome consensus issues through a simple majority rule. This odd-number electorate is a common pattern in distributed systems. A deadlock can ensue with only two participants, as no third party is there to resolve the dispute. 这种奇数选民是分布式制度中常见的一种模式。 只会出现两名参与者的僵局，因为没有第三方解决这一争端。

其结果是权力平衡的交响亮，由相互竞争的利益集团把握在一起，这些利益集团要么鼓励自愿参与，要么排斥不良行为。 矿工提供安全并获得区块奖励， 因为开发者和其他提供商维护协议和建立基础设施，只有网络才有价值， 提供流动性和投资者投机和资助项目的贸易商提供了便利。

如同在塔基座上的步行者一样，这些位置良好的奖励措施依靠彼此的支持。 Like struts holding up the base of a tower, these well-placed incentives rely on each other for support. Together, as long as they are correctly distributed, they can yield a new structure greater than the sum of their parts, and can stand potentially for millennia.

除此之外，各种各样的作用使得一种制度更加难以通过鼓励利益不同的各方参与来实现。 由于多层防御，保护链安全的参与者越多样化，攻击者就越难让步， 由于薄弱环节多种多样，需要进行多种多样的袭击，需要更高的成本来抓住这一系统。 即使与会者人数相同， 由于这种多样性，可以认为比较分散和难以捕捉的制度更加分散。

The blueprint introduced by Bitcoin was also used by many other cryptocurrencies including Ethereum, which essentially copied the fundamentals, tweaked some variables, and (brilliantly) added a Turing-complete virtual machine, the EVM. Much like an architectural blueprint, encoding the structure of a real world building, it would be seemingly unwise to remove one or more of the crucial struts preventing the structure from collapsing into a centralized mess. 就像一个建筑蓝图，对一个真正的世界大厦的结构进行编码。 去掉一个或多个重要的行经似乎是不明智的，这种行经不会防止结构倒塌成为一个集中的行经。

如果一个项目想要长期生存下去，它必须具备这些必要的激励结构的足够数量，以便适当地平衡兼顾。 If a project wants to survive long term, it must have enough of these necessary incentive structure struts to be properly balanced. If Bitcoin is a sturdy tripod made of miners, developers and traders, by sawing off one of these legs, for example, by switching to Proof of Stake and firing the miners, the result is a two-legged barstool; one that can be straddled for a while, but even the faintest breeze will cause it to become a dangerous liability.

### 分散式最大化

_Decentralization maximalism_ is the only known mechanism to shore off the forces of centralization long term. It is not a predefined set of rules but a general philosophy or way of thinking that seeks to reduce the number of central points of failure throughout a system. 它不是一套预先确定的规则，而是一种一般性的哲学或思维方式，力求减少整个系统失败的中心点数目。

它要求在所有领域、在议定书的设计中以及在可能的情况下在社会层面全面实行权力下放。 其目标是使协议不被接管，社会层面不被抓获。 It demands that decentralization be pursued holistically in all areas, in protocol's design, and the social layer, where possible. The goal is to make the protocol secure from take-over and the social layer secure from capture. Satoshi Nakamoto being anonymous and going silent is the classic example of this philosophy being applied to the Bitcoin project, the success of which is wise to emulate.

根据定义，只要这种做法有意义，就不需要任何妥协。 即使是最起码的牺牲、违法行为或例外情况，也应当是最起码的。 除非在已知的停止标准范围内完全不可避免地进行一些总体上有价值的权衡，否则是不能容忍的。 由于中央集权很难消除， 它通常随着时间的推移而累积，堆积到系统以某种方式捕获为止。

无论交叉路口如何， _最大程度的权力下放_ 要求永远保持警惕，并且了解系统自然趋向于集中化的情况。 因此，作出的每一项决定都必须考虑到集中债务所支付的费用，使该制度保持长期免债。

## 向导

If humanity wishes to avoid another dark age, it must embrace systems that can resist the corrupt forces threatening to capture blockchain technology's future. Only systems that strive for _decentralization maximalism_ can achieve this, but of all blockchain projects that exist today, only a handful recognize this requirement. 只有努力实现 _分散最大化_ 的系统才能实现这个目标。 但在今天存在的所有区块链项目中，只有少数几个项目承认了这个要求。

Ethereum's Smart Contract Platform was designed to not only support Bitcoin's base currency use case, but also any kind of blockchain application. Because of this, it is highly likely to attract attempts at censorship from legacy system incumbents at risk being disrupted. 由于这种情况，很可能会吸引那些可能受到干扰的遗留系统的现任人员试图进行审查。

In the not too distant future, as attacks against blockchains ramp up, this need will be all too clear. As one by one, so-called decentralized projects reveal their true colors and succumb to corruption in the form of capture by special interests. As a result, only the genuinely decentralized will remain. 所谓的分散化项目逐一揭示了其真正的颜色，并以特别利益集团抓获的形式屈从于腐败。 因此，只有真正的权力下放才会继续存在。 所谓的分散化项目逐一揭示了其真正的颜色，并以特别利益集团抓获的形式屈从于腐败。 因此，只有真正的权力下放才会继续存在。

通过将以太坊技术与比特币哲学相结合，埃瑟姆经典提供了一个安全、多用途的方法。 分散的区块链和一个自由、公平和繁荣的替代可能是严酷和集中的未来。
