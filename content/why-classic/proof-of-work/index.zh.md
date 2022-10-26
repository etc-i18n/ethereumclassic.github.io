---
title: 工作证明
updated: 2022-02-22
disclaimer: 意 见
seo: 为什么Stake证明并不是希望带来巨大变化的区块链的适当解决方案的论点， 以及为什么工作证明是唯一能够做到的已知协商一致机制。
---

## 关键点

- Ethereum Classic 致力于无限期地保留工作证明，以期实现 _分散最大化_。
- 工作证明是一个经过考验的真正协商一致的机制，是唯一一个据知能够提供 _主权等级审查抗性_ 的机制。
- 利益攸关方的证据是已知的安全权衡，包括：额外的复杂性、33%的攻击、易受金融操纵的影响。 集中保管、卢旺达爱国军军备竞赛、没有任何利害关系，取消制衡，富国更富裕。
- 同样，使用利益证明的决定很可能是出于财政动机，而不是出于特定的环境考虑。

## 一. 导言

在技术方面，以太坊传统习俗与兄弟姐妹以太坊传统习俗之间最大的差别之一是ETC承诺继续留在工作证明上。 On a technical level, one of the biggest differentiators between Ethereum Classic and its sibling Ethereum™ is ETC's commitment to remain on Proof of Work. Some might assume that this is due to a lack of development, ambition or ability to move to a "more advanced" Proof of Stake system, but this section aims to dispel that myth by explaining the reasoning behind Ethereum Classic's very intentional decision to stay with Proof of Work in the name of decentralization and security.

## 未来之引擎

A blockchain's consensus mechanism is its engine. It is the most critical piece of technological infrastructure, from which all security, value and utility depends on. Like an engine, if it stops working correctly, all other systems that rely on it functioning become useless, or worse, a danger to its users. 它是技术基础设施中最关键的部分，所有安全、价值和用途都取决于此。 像一个引擎一样，如果它停止正常工作，依赖它运作的所有其他系统就变得毫无用处，或者更糟的是，它对其使用者构成威胁。

如同汽车引擎一样，区块链建筑师在设计协议时可以使用不同类型的协商一致机制。 As with automobile engines, different types of consensus mechanisms are available to blockchain architects when designing a protocol. The choice of which to use reveals much about which attributes in the [Blockchain Trilemma](/why-classic/decentralism#the-blockchain-trilemma) trade-off are considered a priority. As a chain's consensus mechanism is so important, for _Sovereign Grade_ systems, it is the very last thing that should be on the chopping block when it comes to design constraints and security trade-offs. 由于链中的协商一致机制对 _主权等级_ 系统非常重要。 在设计制约因素和安全权衡方面，这是最不应该出现在制止障碍上的事情。

The first popular blockchain, Bitcoin, uses Proof of Work; a relatively simple, tried and true consensus mechanism that essentially converts electricity into security. The application of Proof of Work as a consensus mechanism for blockchain execution was the keystone crowning achievement in the genius design of Bitcoin. Its application solved the [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault) and thus provided a decentralized solution to double spending, a discovery that made blockchain technology as we know it viable. 应用工作证明作为执行区块链的协商一致机制，是比特币天赋设计的最重要成就。 应用工作证明作为执行区块链的协商一致机制，是比特币天赋设计的最重要成就。 它的应用解决了 [Byzantine Generals Problems](https://en.wikipedia.org/wiki/Byzantine_fault) 并因此提供了一种分散化的解决方案来重复消费， 一种使我们知道的区块链技术可行的发现。

从经济游戏理论的角度来看，工作证明在经验和理论上都是可靠的。 十多年来，使用该系统的链条一直在忠实运作。 有了足够的哈希率，PoW链即使在强大的国家也是不可阻挡的。 目前，地球上任何一方都不能正常地调集必要的电力和硬件来对比特币的协商一致机制发动持续攻击。

工作证明的设计并非100%“完美”，与所有系统一样，工作证明有一套有限的保障。 最著名的是，工作链证明受到 *51%的攻击*， Etherum经典曾多次成为受害者，但仍然顽固存在。 Proof of Work is not designed to be 100% "perfect", and as with all systems, it has a limited set of guarantees. Most famously, Proof of Work chains are subject to *51% attacks*, which Ethereum Classic has fallen victim to on multiple occasions, but persists nonetheless. In PoW systems, 51% attacks are a feature, not a bug, and accepting them is the trade-off required to allow for objective computer-verifiable rules about which version of a chain should be considered "correct"; whichever has the most hashrate contributed to it, regardless of who contributes that hashrate.

_的永恒智慧，如果它没有破裂，就不要修复_ 而且必须有非常重要的理由改变这种状况。

## 不允诺的共识：

An alternative consensus mechanism to Proof of Work that became popular is Proof of Stake, which became a "must have feature" for many second generation blockchain projects. Instead of converting electricity into hashrate and security, Proof of Stake has been described as "virtual mining", where stakers lock up capital in return for the ability to create blocks, and claim a block reward by doing so. 不用将电力转化为哈希拉和安全，而是将Stake探测器描述为“虚拟采矿”， 在这种情况下，利害关系方锁定资本以换取创建方块的能力，并通过这样做要求方块奖励。 不用将电力转化为哈希拉和安全，而是将Stake探测器描述为“虚拟采矿”， 在这种情况下，利害关系方锁定资本以换取创建方块的能力，并通过这样做要求方块奖励。

希望能够在不消耗大量能源的情况下提供与PoW相同或更好的安全保障。

Straight off the bat, the idea that Proof of Stake could provide not just the same but _better_ security guarantees than Proof of Work, with not just the same but _less_ energy expenditure, should have rung alarm bells for those who understand that _there is no such thing as a free lunch_. But for many this essential truth was able to hand-waved away, as the interdisciplinary convolutions of different Proof of Stake systems created a kind of technological [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop), where fixes upon fixes made PoS protocols increasingly complex and obscure moving targets that became difficult to unpack, and the _free lunch_ myth was smuggled along. 但对许多人来说，这一重要的真理得以摆脱。 因为不同的Stake系统的跨学科复杂性产生了一种技术 [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop)， 修复修复使PoS协议变得越来越复杂，模糊移动目标变得难以拆包。 和 _免费午餐_ 神话被走私。

没有任何东西能够象“利益证明”的神话那样体现中央集权的微妙和阴险性质。 表面上，这是一种崇高的尝试，旨在纠正区块链技术的最坏方面，使之与一个可持续的未来兼容。 但经过更密切的视察，这一危险的想法牺牲了技术最解放的品质，以换取低于崇高目标的东西。

实际上，“利益证明书”的流行不仅有浪费时间和资源的危险，而且如果它的通过没有受到质疑，也有可能浪费时间和资源。 “利益攸关”的证明可以将未来归咎于在被夺取的以中立为幌子的系统上运作的未来； 在这种情况下，加密空间的发展不会促进人类的繁荣，而是促使一个超精英的力量不断增长， 以牺牲对所有人开放的功用为代价。

In short, Proof of Work is a sound, battle tested consensus mechanism that correctly prioritizes the delivery of the critical qualities that give rise to a blockchain's utility and value proposition. Proof of Stake, on the other hand, sacrifices these elements in return for prioritizing non-critical secondary ideals, such as reducing carbon emissions, or more truthfully, maximizing returns for large whales. 另一方面，利益攸关者为了优先考虑非关键的次要理想而牺牲了这些要素， 例如减少碳排放，或更真实地最大限度地增加大鲸的收益。

## 安全偏移

声称“利益证明比工作证明更加安全”， 是 "[甚至不错的](https://en.wikipedia.org/wiki/Not_even_wrong)语句，原因是"安全"定义中的细微差别， 如何以具有自己的经济、社会和技术权衡的利益关系体系的多元化来弥补这种差距。

A Google spreadsheet cannot be 51% attacked, but does this make it "more secure" than Bitcoin? The answer to this is "it depends on what you mean by _secure_". In the case of Blockchain systems, as [explored](/why-classic/decentralism), it depends on whether a robust, decentralized, permissionless system that can stand the test of time and achieve _Sovereign Grade Censorship Resistance_ is needed. For _this_ kind of security, a Google spreadsheet is far, far _less_ "secure" than Bitcoin, as it can be taken over by a single party, Google, with zero effort. 答案是“这取决于你的 _安全_ 意味着什么”。 答案是“这取决于你的 _安全_ 意味着什么”。 就区块链系统而言，就像 [探索](/why-classic/decentralism)一样，它取决于是否有一个强大、分散的系统。 需要能够经受时间考验并达到的无权限系统 _主权级审查抗衡机制_ For _this_ kind of security, a Google spreadsheet is far, far _less_ "secure" than Bitcoin, as it can be taken over by a single party, Google, with zero effort.

从这个意义上讲，利益攸关方的证明就像一个谷歌电子表格一样。 在安全保证方面缺乏明确性，难以加以衡量。 甚至技术性很强的用户也不可能看到许多PoS项目提出的营销要求。 因此，这些系统的真正性质及其潜在故障模式模糊不清， 与明示、广为人知和较不复杂的工作证明制度的保证相比较。

由于每个PoS系统都有其独特的缺陷，因此个别地对其进行评估是不切实际的。 As each PoS system has its unique set of flaws, appraising them individually is impractical. Still, some general problems are more or less applicable to all Proof of Stake systems compared to Proof of Work, which will be explored below to demonstrate that chains implicitly make security trade-offs when they decide to use PoS over PoW.

### 自我参考安全

Proof of Work is unique in that it can objectively bridge the gap between the "real world" and the "digital world" using the common language of compute cycles, which, when translated into hashrate, can be verified trustlessly by software. Blockchains that use Proof of Work rely on unforgeable measurements from outside their system to reach consensus about their internal state, converting energy into security in the most direct and efficient way, while offloading the responsibility of generating those measurements to the outside world. 使用工作证明书的区块链依靠其系统外不可忘却的测量来就其内部状况达成共识。 以最直接和最有效的方式将能源转化为安全，同时将产生这些计量的责任移交给外部世界。

工作证明非常像一个消耗能源并以保护链安全的形式将其转化为宝贵工作的燃烧引擎， 鼓励诚实的采矿并确保51%的攻击代价高昂。

![工作引擎证明](./engine.jpg)

Stake区块链的证明不是从其系统外获得安全，而是通过自我引用其自身的状态来保证的。 这些协议包含了额外的责任、复杂性和攻击性表面，这可能影响到如何产生这种安全。

This self-referencing of security can be described as a kind of perpetual motion machine that breaks the laws of thermodynamics. On the surface, the veil of complexity may trick observers into assuming it can self sustain for a long period, but in reality, an unnoticed constraint means it is bound to grind to a halt in the not too distant future. 在表面上，复杂的面纱可能会诱使观察者假定它能够长期维持下去。 但在现实中，一个未注意到的约束意味着它将在不太遥远的将来陷入停顿。

![犯罪动作机的证据](./overbalance.jpg)

### 复杂性和攻击表面

如同所有软件系统一样，复杂性的增加使恶意行为者更多地利用和开发，并可能产生灾难性后果。 As with all software systems, additional complexity creates a greater attack surface for malicious actors to take advantage of and exploit, with potentially catastrophic results. In the context of blockchains, which are economic as well as software systems, this problem is compounded, and many of the potential exploits that lay dormant in such systems may not appear until a significant economic value is at risk.

Subtle game theory bugs and exploits in blockchains are extremely difficult, in some cases impossible to identify, test and eliminate before going into production. One major defense is adhering to the sound technical principle of [Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle), an approach abandoned by Proof of Stake projects when they reject the simple elegance Proof of Work and embrace more complex and exploitable alternatives that offer little to no pragmatic benefit to the network. 一个主要防御是坚持 [保持简单、Stupid](https://en.wikipedia.org/wiki/KISS_principle)这一健全的技术原则。 “利益攸关方证明”项目放弃了一种方法，当它们拒绝接受简单的“优雅的工作证明”而接受了更复杂和可利用的替代办法，这种办法对网络几乎没有什么实际好处。

### 电源不平衡

As [explored earlier](/why-classic/decentralism/#balancing-power), removing miners from a blockchain's socioeconomic model takes away an important regulating force that would otherwise prevent capture; keeping other parties honest through the threat of vetoing poor decisions by the selective mining of chains. On Proof of Stake chains, investors and "miners" (stakers) are the same group, so any abuse of power by this group remains relatively unchecked, and the chain is likely to tend to fork in ways that benefit this group at the expense of others, such as by increasing staking rewards. 根据利益攸关连锁店的证明，投资者和“矿物”（利益攸关者）是同一个群体，因此这个群体滥用权力的行为相对而言仍然没有得到遏制， 而且链条可能倾向于以有利于该群体的方式派生，而牺牲他人的利益， 例如通过增加收藏奖励。

### 钱不是功率

工作证明网络的最终安全来源是电力和硬件制造的配送。 这两者都是按地域分布的，新的供应商可以有机地出现。 The ultimate source of security on Proof of Work networks is a combination of electricity and hardware manufacturing distribution. Both of these are distributed geographically, and new providers can emerge organically. For large Proof of Work networks like Bitcoin, the resources required to muster an attack against the network are outside the means of any worldly organization, including nation states, which either do not have enough affordable electricity going spare or cannot secure the hardware required to mount an attack.

This is why the high energy usage of Proof of Work networks is not "wasted". Instead, the high energy usage is what secures the network against attack by making such attacks prohibitively expensive and logistically impractical. Importantly, electricity sources are distributed globally, and unlike financial resources, are not easy to transport and impossible to centralize in a world of competing nation states that lay claim to geographical boundaries. 相反，高能量的使用正是通过使这种攻击费用过高和在后勤上不切实际来确保网络不受攻击。 重要的是，电力来源分布在全球各地，不同于财政资源。 在一个要求地理边界的相互竞争的国家世界中，运输并不容易，也不可能集中起来。

由于现代金融武器以及该网络通过标记直接与安全联系在一起的价值，利益链的证据很容易受到一整套经济攻击。 与采矿硬件和电力不同， 资本可以在纤维系统中从薄空气中打印出来，资源可以在按键的全球范围内汇集在一起。 中央银行和其他组织可能受到区块链技术威胁的经济杠杆是巨大和先进的。 与更广泛的经济相比，所有利益攸关者网络的总价值略有下降。 (b) 拥有大量流动资本，可以借贷和借贷， 然后由一家拥有芯片的公司使用。

Modern financial institutions threatened by blockchain technology are sure to wage economic war against Proof of Stake, who cannot just mess with the price, but by doing so, potentially cause total system failure. Through the creation of derivative markets and price manipulation, attackers are able to buy up voting rights on the network and hinder or destroy the ability to reach consensus through staking attacks. 通过建立衍生市场和操纵价格， 攻击者能够在网络上购买投票权，并通过发动攻击阻碍或破坏达成共识的能力。 通过建立衍生市场和操纵价格， 攻击者能够在网络上购买投票权，并通过发动攻击阻碍或破坏达成共识的能力。

### 矿工蓄损与富人富有

在工作证明系统中，除了目前的电力成本外，采矿者还必须不断更新硬件，花费额外资源以保持竞争力。 这种情况的结果是，能够获利的个人群不断地在移动。 In Proof of Work systems, beyond ongoing electricity costs, miners must continually upgrade hardware, expending additional resources to remain competitive. The effect of this is that the pool of individuals who can mine profitably is constantly shifting. If a miner is bad at mining, they will eventually lose their ability to earn a living, as they are out-competed by other miners.

作为一个不断变化的矿工库，任何一个矿工都不能把大量时间留在一个网络中，除非他们通过不断增加的哈希率积极地为网络的最佳利益而工作。 为了实现这一目标，采矿者必须投资于研究和开发、基础设施以及扩大作业规模。 所有这些都是密切关注社会层面发生的事件，决定如何平衡力量以及哪个派生到我身边。

这种重要和多方面的作用从利益攸关系统的证明中显得模糊不清。 相反，用相对静态的分配来取代这场不断的争斗，分配给某个特定星标的多少利害关系。 投资于创新或其他外在因素几乎没有什么好处。 有多少利益或损失完全在他们的控制范围之内，没有任何东西就能够不断增加他们的堆栈，不会有与之竞争的风险。

此外，由于规模经济，还要收取煤气费。 以及必须与日生活费用相比较的资金所占比例， 在利益关系系统证明中， _富人以 _的速度获得更丰富的_*, 它将网络的价值集中分配给一段时间最富裕的利害关系方。

没有自然减损来纠正这种趋势， 由于缺乏利害关系生态系统的更替率，这意味着大鲸的电源积聚了越来越多的所有利益关系网络的产量。 使它们越来越容易接管，成为纳卡莫托系数办法0。 随着大型商船将越来越大的袋子传给下一代， 将利益攸关者网络的证明人作为网络的价值和决定赢得的分叉的权力划到顶端之前，这只是一个时间问题。

### 无权限

Permissionlessness, unsurprisingly, is a property that allows new users to onboard into a system without the permission of someone already in said system. All other things being equal, permissionless systems can be more decentralized over time than permissioned systems, as they are indiscriminately open to new participants. 在所有其他情况相同的情况下，无权限的系统可能会随着时间的推移而更加分散化，因为它们对新的参与者不加区别地开放。 在所有其他情况相同的情况下，无权限的系统可能会随着时间的推移而更加分散化，因为它们对新的参与者不加区别地开放。

Mining, and in turn, Proof of Work, is permissionless, as anyone (or anything) can contribute hashrate to the network and have an equal chance of being able to mine a block based on the hashrate they contribute. Each hash is like a lottery ticket, and the more tickets purchased the higher the chance of finding a block and getting that sweet, sweet block reward. 每个哈希就像一个彩票， 和越多的工单购买了越高的寻找方块和获得甜蜜区块奖励的机会。 每个哈希就像一个彩票， 和越多的工单购买了越高的寻找方块和获得甜蜜区块奖励的机会。

Because there are no gatekeepers, Proof of Work consensus mechanisms _can't_ care _how_ hashrate is created, or _who_ contributed. 如果一个链条要保持中立和不被捕获，那么这种质量是必不可少的，因为如果确实存在着守门人。 如果一个链条要保持中立和不被捕获，那么这种质量是必不可少的，因为如果确实存在着守门人。 她们可以基于贡献者的身份或地点拒绝工作。 锁定它们，并通过这样做集中和抓取网络。

Stake系统的证明是 _不是无权限的_ Stake系统的证明是 _不是无权限的_ Stake系统的证明是 _不是无权限的_ The only way to acquire currency needed to transact and stake is by _buying_ it from someone who already has said currency; they need _permission_ from someone inside the network to use the network, with existing holders being the gatekeepers.

从某种意义上讲，所有利益攸关网络的验证已经是 _软捕获的_， 作为PoS硬币持有者，可以集体决定(或被胁迫)停止与某一类别或管辖区的用户进行交易， 而且这些用户无论愿意支付何种价格，都无法在网络上进行交易。

Take the example of a person from a less developed or isolated nation with little to no ability to transact in dollars; without access to the banking system, and thus onboarding through exchanges, and with nobody willing to do an OTC deal in cash in their area, they can always acquire Proof of Work currencies by simply purchasing some hardware to mine it. This same user is locked out of Proof of Stake blockchains, making those networks less accessible, less useful, and less valuable. 这个用户被锁定在Stake区块链的证明之外，使这些网络变得更难访问、更无用和价值更低。 这个用户被锁定在Stake区块链的证明之外，使这些网络变得更难访问、更无用和价值更低。

### 交易记录的集中化

高技术屏障和 _害怕在运行节点和手动刺击时发送消息_ 使得绝大多数加密空间的临时持有者无法接触到它。 因此，几乎所有人都有可能使用第三方服务，通常是交换。

从用户体验的角度来看，对交流的关注是非常好的。 Staking on exchanges is strictly better from a user experience perspective. It has the additional benefit of allowing users to instantly unstake funds with no penalty, as a large excess liquidity enables exchanges to arbitrage the lock-up period that most Proof of Stake chains impose, on behalf of users.

The result is that for most Proof of Stake blockchains, exchanges will, and probably already do, handle the vast majority of a staking activity. This seriously undermines the illusion of decentralization on these projects and makes the capture of the chain far more likely. 这严重破坏了对这些项目实行权力下放的幻想，并使这一链条更有可能被抓获。 这严重破坏了对这些项目实行权力下放的幻想，并使这一链条更有可能被抓获。

为了举例说明，请考虑以下可能的设想：

If an "undesirable" application is operating on a large Proof of Stake chain, a government or powerful multinational organization could compel all exchanges under their authority to simultaneously freeze the funds of that chain. Assuming they hold a certain threshold of staked assets between them, this portion of the stake could be used to either halt the network or force through future hard forks, holding the chain to ransom and censoring whichever applications they desire. 这部分股份可以用来阻止网络或通过未来的硬叉， 按住链进行赎金和检查他们想要的任何应用程序。

在工作的证明中，这种袭击是不可能的，这是因为人们的关切和电力来源在地理上的分散性。

### 卢旺达爱国军的武器

Proof of Stake chains compete with each other for liquid staking capital that, unlike mining hardware that is bound to specific algorithms, can freely move between _all_ PoS chains by trading in open markets. This means that over time, all Proof of Stake chains will be under pressure to increase staking rewards, and in turn inflation rates, to entice enough stakers to stake on their chain. As a result, a "race to the bottom" is likely to engulf all Proof of Stake chains, as they enter into an ever-increasing _APR arms race_. 这意味着随着时间的推移，利益链的所有证明都将面临增加风险奖励的压力。 而通货膨胀率则引诱足够的利益攸关者参与其链。 这意味着随着时间的推移，利益链的所有证明都将面临增加风险奖励的压力。 而通货膨胀率则引诱足够的利益攸关者参与其链。 因此，“竞技到底”很可能会吞没所有Stake链的证明人。 随着他们进入了不断增加的 _APR 军备竞赛_。

For example, if Chain A offers a 12% staking reward, why would stakers stake Chain B's 3% reward, when they could simply stake A and sell those rewards for B, ending up with more B than they would by staking B directly? This forces chain B to increase their reward, which then encourages A to do the same, and so on. 这迫使B链增加其奖励，然后鼓励A采取同样的做法，等等。 这迫使B链增加其奖励，然后鼓励A采取同样的做法，等等。

This situation is great news for large stakers, but terrible for users who have a relatively larger portion of their funds not staked to use the network, and will be taxed exorbitant fees for simply not staking. How this plays out in the long run is unknowable, but it risks damaging the utility and value of all PoS networks, leading to a death spiral of ever-increasing debasement. 从长远来看，这种演奏如何是不可知的，但它有可能破坏所有PoS网络的效用和价值。 导致日益严重的贬低的死亡循环。

### 33%的攻击

如果攻击者获得33%的有关资产，不一定不到所有硬币的33%，那么利益攸关者链的证据就会永久中断。

> So if the average PoS protocol has 70%+ of it’s tokens staked, you’d need to acquire ~25% of the protocol’s total outstanding tokens to launch an attack. Although every PoS is different, 33% is generally only enough to halt the chain so it can’t come to consensus and produce new blocks, not to actually perform a double spend. For that you’d need a whopping 66%. So if the average PoS protocol has 70%+ of it’s tokens staked, you’d need to acquire ~25% of the protocol’s total outstanding tokens to launch an attack. Although every PoS is different, 33% is generally only enough to halt the chain so it can’t come to consensus and produce new blocks, not to actually perform a double spend. For that you’d need a whopping 66%. 虽然每个PS都有不同之处，但通常只有33%能够阻止这一链条，因此无法达成共识并产生新的区块， 不要实际执行双重支出。 为此，您需要花66%的时间。
> 
> - [Viktor Bunin](https://viktorbunin.medium.com/proof-of-stakes-security-model-is-being-dramatically-misunderstood-4ed7b19ca419)

Some argue that there is no _direct_ economic incentive to cause such an attack because the attacker risks devaluing their holdings, which may be true, but this is also an admission that Proof of Stake chains are susceptible to 33% halting via _indirect_ economic incentives such as shorting. 更重要的是，源力链容易受到诸如国家等行为者的33%的袭击，这些行为者的财政奖励不是主要动机。 暗示 _主权等级审查抗性_ 不是关注的对象。

### Pure Pwnage

Proof of Stake's _33% attack_ is a much bigger problem than Proof of Work's _51% attack_, the latter of which is not permanent as it has an ongoing external electricity cost, making them impractically expensive to perform for sustained periods. Moreover, because 51% attacks have an up front cost and are, unlike 33% attacks, not guaranteed to be successful, there is diminished incentive to perform them, let alone front the cost of persisting them. 此外，由于51%的袭击前期费用较高，与33%的袭击不同，因此无法保证成功。 此外，由于51%的袭击前期费用较高，与33%的袭击不同，因此无法保证成功。 这种做法的积极性降低了，更不用说不付出坚持这种做法的代价。

While 51% attacks in Proof of Work systems can be damaging, they only really directly affect those who are exposed to double spends; mostly exchanges, and not long term holders who do not transact frequently. In contrast, 33% attacks can halt the chain in perpetuity on PoS networks. 与此形成对照的是，33%的袭击能够永久性地阻止PoS网络上的这一链路。 与此形成对照的是，33%的袭击能够永久性地阻止PoS网络上的这一链路。

On PoS chains, once an attacker achieves a certain threshold of stake, the chain can never recover; as the attacker does not need to commit external resources, they cannot be unseated. The only solution to this failure state is hard-forking away the attacker, which breaks _Code is Law_, defeats the purpose of having a blockchain, adds subjectivity, and further centralizes the chain. On PoS chains, once an attacker achieves a certain threshold of stake, the chain can never recover; as the attacker does not need to commit external resources, they cannot be unseated. The only solution to this failure state is hard-forking away the attacker, which breaks _Code is Law_, defeats the purpose of having a blockchain, adds subjectivity, and further centralizes the chain. 这个故障状态的唯一解决方案是强硬地把攻击者赶走，它会破坏 _代码是法律_， 击败区块链、增加主观性和进一步集中化链的目的。

### 暂无任何问题

在工作证明中，如果出现分叉， 矿工必须决定一个分叉的哪一边采矿，因为建造区块需要付出外部电费。 In Proof of Work, if a fork occurs, miners have to decide which side of a fork to mine as there is an external electricity cost associated with the creation of blocks. If miners mine the "wrong" fork, their reward will become valueless, and they will have wasted the electricity spent mining it, so they must choose what to mine wisely; there is the _cost of electricity_ at stake.

相反，在利益攸关方证明方面，如果出现分叉，所涉及的资源就会增加。 作为该系统内部状态的一部分，分叉，分叉并增加了一倍。 利益攸关方在一个分叉两侧都有平等的资产，并受到激励来使双方生效，因为他们不敢肯定哪一方会占上风。 这被称为 [个问题不涉及任何问题](https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027)。 它可能会鼓励叉，使叉变得更便宜和风险更小，从而使它更容易通过基于叉的猎人攻击链。 使得就分裂的哪一方达成共识变得更加复杂的是“真的”版本。

It is commonly claimed that the concept of _slashing_ is a solution to the nothing at stake problem, a technique that uses cryptographic proofs to punish stakers that validate the "wrong" side of a split. This is all well and good but slashing only works when forks are running protocols that can validate each other's proofs. 这一切都很好，但只有当分叉运行能够验证对方的验证的协议时，才会起作用。 这一切都很好，但只有当分叉运行能够验证对方的验证的协议时，才会起作用。

攻击者可以推出一个有争议的硬叉，这个硬叉故意使叉在旧版本的链上断裂证明无效， 可选设为反转为 true 并重新引入任何相关的问题，同时鼓励验证器验证这两个链，播发混乱和分割网络的值。

与恶意工场不同，采矿者将浪费新的分叉， 关于这个新的Stake叉证明的验证器不仅可能验证它， 因为没有什么事关重大， 但这样做是受到鼓励的，因为它很可能最终成为获胜的链条――对未来有价值的唯一一方。

### 破裂的争端解决

Alternatively, assuming that both sides of a split _do_ recognize each other's slashing proofs, the chain then has a different problem: the resolution of legitimate differences in opinion that would result in chain split on Proof of Work networks.

以太古姆经典本身就是工作链证明的“最终解决争端机制”的一个很好的例子。 被解释为不会比在 [以太空时更好. rg 网站](https://ethereum.org/en/governance/#dao-fork)。

尽管严重依赖议定书的执行细节，但一般来说是如此。 利益攸关方的证明改变了硬叉的动态，以利于多数利益攸关方在底线上， 而且，在许多情况下，如果他们不同意一个有争议的分叉，就只是摧毁了地下链，迫使他们不得不硬叉到新的协议。

Unlike in Proof of Work, where the classic chain enjoys the advantage of maintaining the status quo and miners having to actively make a switch to a new fork, on Proof of Stake chains, the majority of forkers have the advantage, as the legacy side of a controversial fork has to implement their own defensive hard forks to avoid being slashed by the majority. New forks enjoy the option of either slashing or not-slashing validators on the old chain, optimizing the punishment of laggards to get their desired outcome, and manipulating the economics of a hard fork decision. 新的分叉可以在旧链上使用斜杠或不闪烁验证器， 优化对落后者的惩罚，取得所希望的结果，并操纵硬叉决定的经济性。 新的分叉可以在旧链上使用斜杠或不闪烁验证器， 优化对落后者的惩罚，取得所希望的结果，并操纵硬叉决定的经济性。

_注意：下列三个Stake批评证明是礼节的 [etherplan.com](https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/)_

### 主观分叉选择

分叉选择是决策规则网络参与者在展示一个以上的链时必须使用, 当他们第一次加入时，或当他们离开并再次加入时。 作为一个外部的实际信号，PoW能够以“工作链中最长的证明”形式作出明确的客观派生选择。 这是客观的，因为只有利用整个网络的计算能力，才能建立最长的链。

As PoS systems don’t count with such an objective quantity to decide the correct chain, they have to use a subjective decision-making process by the participants. This means they need to consult off chain with block explorers, developers, miners or other sources to be able to decide what chain to follow. This applies, in case of splits, to participating nodes in the network, new entrants, and nodes who leave and join again. 这意味着他们需要与区块勘探者、开发者、矿工或其他来源在链外进行协商，以便能够决定接下来的链条是什么。 在分割的情况下，这适用于网络中的参与节点，新的进入者和再次离开并加入的节点。

### 不可弥补的成本

健全金钱的一个基本实际特征是，生产保证不会伪造金钱是非常昂贵的。 由于矿工在数据中心和电源中花费巨额成本，能够建造区块，PoW提供这种代币的成本。 这使PoW 令牌像 $ETC 和 $BTC一样在实践中变得不可忘却。

It is simple to objectively verify that a holder's BTC or ETC is not counterfeit because of an external objective measurement embedded into every block header, but this proof does not exist in Proof of Stake systems. In PoS systems, because the database with accounts and balances is trivial to write by nodes and stakers in the system, there is no objective costliness, and verifying the authenticity holdings is far more complex, error-prone, and potentially requires expensive hardware. 在PoS系统中，因为有账户和余额的数据库是由系统中的节点和标签写入的微乎其微， 没有客观的费用， 并核实所持有的真实性要复杂得多，误差，而且可能需要昂贵的硬件。 在PoS系统中，因为有账户和余额的数据库是由系统中的节点和标签写入的微乎其微， 没有客观的费用， 并核实所持有的真实性要复杂得多，误差，而且可能需要昂贵的硬件。

### 累积工作

As miners in PoW blockchains work on a block by block basis, that work is not only a barrier for dishonest nodes to tamper with the current or latest blocks, but that work actually accumulates as the chain is built. This means blocks that are buried further away in the chain become exponentially more difficult for attackers to change or forge. For example, at the time of this writing, it would take 340 days with 100% of the current hashing power in the Bitcoin network to be able to reverse the entire chain. 这意味着那些埋在链上更远处的区块，攻击者更难改变或伪造。 这意味着那些埋在链上更远处的区块，攻击者更难改变或伪造。 例如，在编写本报告时， 比特币网络中100%的当前散列功率需要340天才能扭转整个链。

在 PoS 分发的分类账中，因为他们不使用 PoW。 扭转整个链条的计算工作微不足道，因此可以在几分钟内完成。

## 酒店Towels

即使以环境论者为凭证的论点具有表面价值， 很清楚，PoS需要链才能牺牲工作证明提供的许多安全保障。 利益攸关者连锁店贸易检查制度的证明，以换取减少能源消费的承诺。 除了推销微量元素外，如果与其他可用技术相比，务实地评估区块链的责任和效用，这种权衡似乎没有什么意义。 毕竟没有免费午餐。

But when the environmentalist claim is _not_ taken at face value, the choice to use Proof of Stake starts to make sense. Much like a hotel that requests that guests reuse towels to "save the planet", the PoS environmentalist position is conveniently one that also happens to enrich the holders of said currencies, who can generate passive income by staking. In their eyes, staking allows them to reap the rewards of providing the very same service that miners would otherwise provide; "virtual mining" with next to no expense other than the opportunity cost of locking up stake. 就像一家旅馆，客人要求重新使用面具来“保存星球”， 《穷人方案》的环境主义立场也是为了丰富上述货币的持有者，他们可以通过招贴赚赚取被动收入。 就像一家旅馆，客人要求重新使用面具来“保存星球”， 《穷人方案》的环境主义立场也是为了丰富上述货币的持有者，他们可以通过招贴赚赚取被动收入。 在他们的眼中，刺痛使他们能够从提供与矿工本来一样的服务中获得奖励； “虚拟采矿”，除了锁定临界点的机会成本外，几乎没有其他费用。

这种大规模的经济刺激是出于善意或非善意的，说明了为何尽管存在上述安全等级下降的情况。 毫不奇怪，PoS在加密货币持有人中成为如此受欢迎的选择，并设法招聘了许多航空推销商。

> Proof of Stake is like the hotel asking you to reuse towels to save the planet. On the surface it's for noble intentions, but in reality it's making them money and giving you a worse service. 在表面上，它是出于崇高的目的，但实际上它使它们变得金钱，使你们的服务更糟。 在表面上，它是出于崇高的目的，但实际上它使它们变得金钱，使你们的服务更糟。

For all the known downsides, the projects that nevertheless opt for Proof of Stake must either be _extremely_ concerned about energy usage, or possibly more believably, are primarily concerned that staking will economically benefit stakers. 然而，这种关切本身是错误的，因为一个项目只有在提供效用的情况下才能具有长期价值。 它因利益证明书所要求的集中化和权衡而受到损害。

It may be that holders of such coins believe they are providing a comparable service to mining, but they are not converting an external real world expense into a security benefit, as with mining. Instead, they are _shuffling deck chairs on the Titanic_ by redistributing value from elsewhere in the network to themselves by taxing non-stakers through inflation. It may be that holders of such coins believe they are providing a comparable service to mining, but they are not converting an external real world expense into a security benefit, as with mining. Instead, they are _shuffling deck chairs on the Titanic_ by redistributing value from elsewhere in the network to themselves by taxing non-stakers through inflation. Instead, they are _shuffling deck chairs on the Titanic_ by redistributing value from elsewhere in the network to themselves by taxing non-stakers through inflation.

In any case, because of the inherent trade-offs required in Proof of Stake systems, it is yet another sign that _Sovereign Grade Censorship Resistance_ is not a priority on these chains. As such, they cannot be recommended for deployments that have the potential to disrupt powerful institutions. 因此，不能建议进行可能扰乱强大机构的部署。 因此，不能建议进行可能扰乱强大机构的部署。
