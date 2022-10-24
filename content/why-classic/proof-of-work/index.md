---
title: Proof of Work
updated: 2022-02-22
disclaimer: opinion
seo: An argument for why Proof of Stake is not a suitable solution for blockchains that wish to deliver monumental change, and why Proof of Work is the only known consensus mechanism that can.
---

## Key Points

- Ethereum Classic is committed to remaining on Proof of Work indefinitely in pursuit of _decentralization maximalism_.
- Proof of Work is a tried and true consensus mechanism, the only one known to provide _Sovereign Grade Censorship Resistance_.
- Proof of Stake comes with known security trade-offs, including: additional complexity, 33% attacks, vulnerability to financial manipulation, centralization of staking custody, the APR arms race, nothing at stake, removal of checks and balances, and the rich get richer.
- Candidly, the decision to use Proof of Stake is likely financially motivated, rather than the given reason of environmental concern.

## Introduction

On a technical level, one of the biggest differentiators between Ethereum Classic and its sibling Ethereum™ is ETC's commitment to remain on Proof of Work. Some might assume that this is due to a lack of development, ambition or ability to move to a "more advanced" Proof of Stake system, but this section aims to dispel that myth by explaining the reasoning behind Ethereum Classic's very intentional decision to stay with Proof of Work in the name of decentralization and security.

## The Engine of the Future

A blockchain's consensus mechanism is its engine. It is the most critical piece of technological infrastructure, from which all security, value and utility depends on. Like an engine, if it stops working correctly, all other systems that rely on it functioning become useless, or worse, a danger to its users.

As with automobile engines, different types of consensus mechanisms are available to blockchain architects when designing a protocol. The choice of which to use reveals much about which attributes in the [Blockchain Trilemma](/why-classic/decentralism#the-blockchain-trilemma) trade-off are considered a priority. As a chain's consensus mechanism is so important, for _Sovereign Grade_ systems, it is the very last thing that should be on the chopping block when it comes to design constraints and security trade-offs.

The first popular blockchain, Bitcoin, uses Proof of Work; a relatively simple, tried and true consensus mechanism that essentially converts electricity into security. The application of Proof of Work as a consensus mechanism for blockchain execution was the keystone crowning achievement in the genius design of Bitcoin. Its application solved the [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault) and thus provided a decentralized solution to double spending, a discovery that made blockchain technology as we know it viable.

Proof of Work is both empirically and theoretically secure from an economic game theory perspective, and chains using it have been operating faithfully for over a decade. With enough hashrate, PoW chains have shown to be unstoppable even by powerful nation states. Presently, no party on the planet can conventionally muster the electricity and hardware required to launch a sustained attack against Bitcoin's consensus mechanism, which makes it sovereign.

Proof of Work is not designed to be 100% "perfect", and as with all systems, it has a limited set of guarantees. Most famously, Proof of Work chains are subject to *51% attacks*, which Ethereum Classic has fallen victim to on multiple occasions, but persists nonetheless. In PoW systems, 51% attacks are a feature, not a bug, and accepting them is the trade-off required to allow for objective computer-verifiable rules about which version of a chain should be considered "correct"; whichever has the most hashrate contributed to it, regardless of who contributes that hashrate.

The timeless wisdom of _if it ain't broke, don't fix it_ comes to mind, and there must be a seriously important reason to change this state of affairs.

## Compromised Consensus

An alternative consensus mechanism to Proof of Work that became popular is Proof of Stake, which became a "must have feature" for many second generation blockchain projects. Instead of converting electricity into hashrate and security, Proof of Stake has been described as "virtual mining", where stakers lock up capital in return for the ability to create blocks, and claim a block reward by doing so. 

The primary justification for PoS is environmentalism; it was hoped that PoS would be able to provide the same or better security guarantees than PoW without consuming large amounts of energy.

Straight off the bat, the idea that Proof of Stake could provide not just the same but _better_ security guarantees than Proof of Work, with not just the same but _less_ energy expenditure, should have rung alarm bells for those who understand that _there is no such thing as a free lunch_. But for many this essential truth was able to hand-waved away, as the interdisciplinary convolutions of different Proof of Stake systems created a kind of technological [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop), where fixes upon fixes made PoS protocols increasingly complex and obscure moving targets that became difficult to unpack, and the _free lunch_ myth was smuggled along.

Nothing epitomizes the subtle and insidious nature of centralization like the myth of Proof of Stake. On the surface, it is a noble attempt to correct the worst aspects of blockchain technology and make it compatible with a sustainable future, but upon closer inspection, this dangerous idea sacrifices the most liberating qualities of the technology in exchange for less than noble objectives.

In reality, the popularity of Proof of Stake risks not only squandering time and resources, but if its adoption proceeds unchallenged, Proof of Stake could condemn the future to one that operates on captured systems masquerading as neutral; where developments in the cryptocurrency space contribute not towards human flourishing but to the ever-growing power of an ultra-elite, at the expense of open utility for all.

In short, Proof of Work is a sound, battle tested consensus mechanism that correctly prioritizes the delivery of the critical qualities that give rise to a blockchain's utility and value proposition. Proof of Stake, on the other hand, sacrifices these elements in return for prioritizing non-critical secondary ideals, such as reducing carbon emissions, or more truthfully, maximizing returns for large whales.

## Security Trade-offs

The claim that "Proof of Stake is more secure than Proof of Work", is a "[not even wrong](https://en.wikipedia.org/wiki/Not_even_wrong)" statement, due to the nuance in the definition of "secure", and how to square this off with the plurality of Proof of Stake systems that have their own economic, social and technical trade-offs.

A Google spreadsheet cannot be 51% attacked, but does this make it "more secure" than Bitcoin? The answer to this is "it depends on what you mean by _secure_". In the case of Blockchain systems, as [explored](/why-classic/decentralism), it depends on whether a robust, decentralized, permissionless system that can stand the test of time and achieve _Sovereign Grade Censorship Resistance_ is needed. For _this_ kind of security, a Google spreadsheet is far, far _less_ "secure" than Bitcoin, as it can be taken over by a single party, Google, with zero effort.

In this sense, Proof of Stake is much like a Google spreadsheet. Lack of clarity around security guarantees, and the difficulty in measuring them, makes it impossible for even the highly technical users to see past the marketing claims made by many PoS projects. As a result, the true nature of these systems and their potential failure modes is obfuscated, compared with the explicit, well understood, and less complicated guarantees of Proof of Work systems.

As each PoS system has its unique set of flaws, appraising them individually is impractical. Still, some general problems are more or less applicable to all Proof of Stake systems compared to Proof of Work, which will be explored below to demonstrate that chains implicitly make security trade-offs when they decide to use PoS over PoW.

### Self-Referential Security

Proof of Work is unique in that it can objectively bridge the gap between the "real world" and the "digital world" using the common language of compute cycles, which, when translated into hashrate, can be verified trustlessly by software. Blockchains that use Proof of Work rely on unforgeable measurements from outside their system to reach consensus about their internal state, converting energy into security in the most direct and efficient way, while offloading the responsibility of generating those measurements to the outside world.

Proof of Work is very much like a combustion engine that consumes energy and converts it into valuable work in the form of security for the chain, incentivizing honest mining and ensuring that 51% attacks are costly.

![Proof of Work Engine](./engine.jpg)

Instead of sourcing security from outside their system, Proof of Stake blockchains are secured by self-referencing their own state, and, as such, these protocols onboard additional responsibilities, complexity, and attack surface that can compromise how this security is generated.

This self-referencing of security can be described as a kind of perpetual motion machine that breaks the laws of thermodynamics. On the surface, the veil of complexity may trick observers into assuming it can self sustain for a long period, but in reality, an unnoticed constraint means it is bound to grind to a halt in the not too distant future.

![Proof of Stake Perpetual Motion Machine](./overbalance.jpg)

### Complexity and Attack Surface

As with all software systems, additional complexity creates a greater attack surface for malicious actors to take advantage of and exploit, with potentially catastrophic results. In the context of blockchains, which are economic as well as software systems, this problem is compounded, and many of the potential exploits that lay dormant in such systems may not appear until a significant economic value is at risk.

Subtle game theory bugs and exploits in blockchains are extremely difficult, in some cases impossible to identify, test and eliminate before going into production. One major defense is adhering to the sound technical principle of [Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle), an approach abandoned by Proof of Stake projects when they reject the simple elegance Proof of Work and embrace more complex and exploitable alternatives that offer little to no pragmatic benefit to the network.

### Unbalance of Power

As [explored earlier](/why-classic/decentralism/#balancing-power), removing miners from a blockchain's socioeconomic model takes away an important regulating force that would otherwise prevent capture; keeping other parties honest through the threat of vetoing poor decisions by the selective mining of chains. On Proof of Stake chains, investors and "miners" (stakers) are the same group, so any abuse of power by this group remains relatively unchecked, and the chain is likely to tend to fork in ways that benefit this group at the expense of others, such as by increasing staking rewards.

### Money isn't Power

The ultimate source of security on Proof of Work networks is a combination of electricity and hardware manufacturing distribution. Both of these are distributed geographically, and new providers can emerge organically. For large Proof of Work networks like Bitcoin, the resources required to muster an attack against the network are outside the means of any worldly organization, including nation states, which either do not have enough affordable electricity going spare or cannot secure the hardware required to mount an attack.

This is why the high energy usage of Proof of Work networks is not "wasted". Instead, the high energy usage is what secures the network against attack by making such attacks prohibitively expensive and logistically impractical. Importantly, electricity sources are distributed globally, and unlike financial resources, are not easy to transport and impossible to centralize in a world of competing nation states that lay claim to geographical boundaries.

Proof of Stake chains are vulnerable to a whole suite of economic attacks thanks to modern financial weaponry and the value of the network being directly tied to security through staking. Unlike mining hardware and electricity, capital can be printed out of thin air in fiat systems and resources can be pulled together from all over the globe at the press of a button. The economic levers available to central banks and other organizations that may be threatened by blockchain technology are vast and sophisticated. The value of all Proof of Stake networks combined is a tiny drop compared to the broader economy, which has massive swathes of liquid capital that can be borrowed, leveraged, and put to use by a single company with a chip on its shoulder.

Modern financial institutions threatened by blockchain technology are sure to wage economic war against Proof of Stake, who cannot just mess with the price, but by doing so, potentially cause total system failure. Through the creation of derivative markets and price manipulation, attackers are able to buy up voting rights on the network and hinder or destroy the ability to reach consensus through staking attacks.

### Miner Attrition vs The Rich Get Richer

In Proof of Work systems, beyond ongoing electricity costs, miners must continually upgrade hardware, expending additional resources to remain competitive. The effect of this is that the pool of individuals who can mine profitably is constantly shifting. If a miner is bad at mining, they will eventually lose their ability to earn a living, as they are out-competed by other miners.

This is good for decentralization, as a constantly shifting pool of miners means that no one miner can hold on to a significant portion of a network for any significant amount of time unless they are actively working in the best interests of the network by providing ever-increasing amounts of hashrate. To achieve this, miners must invest in research and development, infrastructure, and scaling up operations, all the while paying close attention to happenings in the social layer, deciding how to balance power and which forks to mine.

This vital and multifaceted role is lobotomized from Proof of Stake systems. Instead, replacing this constant struggle with the relatively static distribution of how much stake a given staker has access to, with very little to be gained by investing in innovation or other externalities. How much a staker profits or losses is entirely within their control and by doing nothing they can continuously increase their stack with no risk of being out-competed.

On top of this, due to economies of scale, gas fees, and the proportion of funds that must be staked compared to the funds that must for day to day living costs, in Proof of Stake systems, _the rich get richer_ at a _faster rate_, which centralizes the distribution of a network's value towards the richest stakers over time.

With no attrition to correct this trend, lack of turnover in the staking ecosystem means that a power-block of mega-whales accumulates an ever-increasing portion of all Proof of Stake networks, making them increasingly susceptible to takeover as the Nakamoto coefficient approaches 0. There is no reason that rent-seeking Proof of Stake staking dynasties don't continue for generations, as big stakers pass their increasingly large bags to the next generation, making it just a matter of time before Proof of Stake networks are explicitly captured as the value in the network and the power to decide winning forks is drawn to the top.

### Not Permissionless

Permissionlessness, unsurprisingly, is a property that allows new users to onboard into a system without the permission of someone already in said system. All other things being equal, permissionless systems can be more decentralized over time than permissioned systems, as they are indiscriminately open to new participants.

Mining, and in turn, Proof of Work, is permissionless, as anyone (or anything) can contribute hashrate to the network and have an equal chance of being able to mine a block based on the hashrate they contribute. Each hash is like a lottery ticket, and the more tickets purchased the higher the chance of finding a block and getting that sweet, sweet block reward.

Because there are no gatekeepers, Proof of Work consensus mechanisms _can't_ care _how_ hashrate is created, or _who_ contributed. This is an essential quality if a chain is to remain neutral and uncaptured because if gatekeepers did exist, they would be able to reject work based on a contributor's identity or location, locking them out, and by doing so, centralizing, and capturing the network.

Proof of Stake systems are _not_ permissionless. The only way to acquire currency needed to transact and stake is by _buying_ it from someone who already has said currency; they need _permission_ from someone inside the network to use the network, with existing holders being the gatekeepers.

In a sense, all Proof of Stake networks are already _soft captured_, as holders of PoS coins could collectively decide (or be coerced) to stop trading with users from some particular class or jurisdiction, and these users have no way to make transactions on the network regardless of the price they are willing to pay.

Take the example of a person from a less developed or isolated nation with little to no ability to transact in dollars; without access to the banking system, and thus onboarding through exchanges, and with nobody willing to do an OTC deal in cash in their area, they can always acquire Proof of Work currencies by simply purchasing some hardware to mine it. This same user is locked out of Proof of Stake blockchains, making those networks less accessible, less useful, and less valuable.

### Centralization of Staking on Exchanges

The high technical barrier and _fear of messing up_ when running a node and manually staking makes it out of reach for the vast majority of casual holders in the crypto space, so almost all are likely to use third party services, usually exchanges, to stake.

Staking on exchanges is strictly better from a user experience perspective. It has the additional benefit of allowing users to instantly unstake funds with no penalty, as a large excess liquidity enables exchanges to arbitrage the lock-up period that most Proof of Stake chains impose, on behalf of users.

The result is that for most Proof of Stake blockchains, exchanges will, and probably already do, handle the vast majority of a staking activity. This seriously undermines the illusion of decentralization on these projects and makes the capture of the chain far more likely.

To illustrate, consider the following plausible scenario:

If an "undesirable" application is operating on a large Proof of Stake chain, a government or powerful multinational organization could compel all exchanges under their authority to simultaneously freeze the funds of that chain. Assuming they hold a certain threshold of staked assets between them, this portion of the stake could be used to either halt the network or force through future hard forks, holding the chain to ransom and censoring whichever applications they desire.

In Proof of Work, this kind of attack is impossible thanks to the separation of concerns and the geographically decentralized nature of electricity sources.

### The APR Arms Race

Proof of Stake chains compete with each other for liquid staking capital that, unlike mining hardware that is bound to specific algorithms, can freely move between _all_ PoS chains by trading in open markets. This means that over time, all Proof of Stake chains will be under pressure to increase staking rewards, and in turn inflation rates, to entice enough stakers to stake on their chain. As a result, a "race to the bottom" is likely to engulf all Proof of Stake chains, as they enter into an ever-increasing _APR arms race_.

For example, if Chain A offers a 12% staking reward, why would stakers stake Chain B's 3% reward, when they could simply stake A and sell those rewards for B, ending up with more B than they would by staking B directly? This forces chain B to increase their reward, which then encourages A to do the same, and so on.

This situation is great news for large stakers, but terrible for users who have a relatively larger portion of their funds not staked to use the network, and will be taxed exorbitant fees for simply not staking. How this plays out in the long run is unknowable, but it risks damaging the utility and value of all PoS networks, leading to a death spiral of ever-increasing debasement.

### 33% Attacks

Proof of Stake chains can be permanently disrupted if an attacker acquires 33% of staked assets, necessarily less than 33% of all coins.

> So if the average PoS protocol has 70%+ of it’s tokens staked, you’d need to acquire ~25% of the protocol’s total outstanding tokens to launch an attack. Although every PoS is different, 33% is generally only enough to halt the chain so it can’t come to consensus and produce new blocks, not to actually perform a double spend. For that you’d need a whopping 66%.
>
> - [Viktor Bunin](https://viktorbunin.medium.com/proof-of-stakes-security-model-is-being-dramatically-misunderstood-4ed7b19ca419)

Some argue that there is no _direct_ economic incentive to cause such an attack because the attacker risks devaluing their holdings, which may be true, but this is also an admission that Proof of Stake chains are susceptible to 33% halting via _indirect_ economic incentives such as shorting. More importantly, PoS chains are susceptible to 33% attacks from actors such as nation states, where financial incentives are not the primary motivation, suggesting that _Sovereign Grade Censorship Resistance_ is not an object of concern.

### Perpetually Pure Pwnage

Proof of Stake's _33% attack_ is a much bigger problem than Proof of Work's _51% attack_, the latter of which is not permanent as it has an ongoing external electricity cost, making them impractically expensive to perform for sustained periods. Moreover, because 51% attacks have an up front cost and are, unlike 33% attacks, not guaranteed to be successful, there is diminished incentive to perform them, let alone front the cost of persisting them.

While 51% attacks in Proof of Work systems can be damaging, they only really directly affect those who are exposed to double spends; mostly exchanges, and not long term holders who do not transact frequently. In contrast, 33% attacks can halt the chain in perpetuity on PoS networks.

On PoS chains, once an attacker achieves a certain threshold of stake, the chain can never recover; as the attacker does not need to commit external resources, they cannot be unseated. The only solution to this failure state is hard-forking away the attacker, which breaks _Code is Law_, defeats the purpose of having a blockchain, adds subjectivity, and further centralizes the chain.

### Nothing at Stake

In Proof of Work, if a fork occurs, miners have to decide which side of a fork to mine as there is an external electricity cost associated with the creation of blocks. If miners mine the "wrong" fork, their reward will become valueless, and they will have wasted the electricity spent mining it, so they must choose what to mine wisely; there is the _cost of electricity_ at stake.

In contrast, on Proof of Stake, if a fork happens, the staked resources, being part of the system's internal state, are split across the fork and are doubled. Stakers have equal assets on both sides of a fork and are incentivized to validate both sides, as they are unsure which side will prevail. This is known as the [nothing at stake problem](https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027). It is likely to encourage forks by making it cheaper and less risky to perform fork, making it easier to attack chains through fork-based shenanigans, and complicating reaching consensus about which side of a split is the "true" version.

It is commonly claimed that the concept of _slashing_ is a solution to the nothing at stake problem, a technique that uses cryptographic proofs to punish stakers that validate the "wrong" side of a split. This is all well and good but slashing only works when forks are running protocols that can validate each other's proofs.

An attacker could push for a controversial hard fork that intentionally made the fork's slashing proof invalid on the old version of the chain, optionally making reverse untrue, and re-introducing the nothing at stake problem while encouraging validators to validate both chains, sowing chaos and splitting the value of the network.

Unlike a malicious Proof of Work fork where miners would waste electricity mining the new fork, validators on this new Proof of Stake fork not only might as well validate it, as there is nothing at stake, but are incentivized to do so as it could well end up being the winning chain - the only side that has value in the future.

### Disrupted Dispute Resolution

Alternatively, assuming that both sides of a split _do_ recognize each other's slashing proofs, the chain then has a different problem: the resolution of legitimate differences in opinion that would result in chain split on Proof of Work networks.

Ethereum Classic itself is an excellent example of the "ultimate dispute resolution mechanism" of Proof of Work chains, as explained no better than on the [Ethereum.org website](https://ethereum.org/en/governance/#dao-fork).

While heavily dependent on implementation details of the protocol, in general, Proof of Stake changes the dynamic of hard forking in favor of the majority stakers over the underdogs, and in many cases simply destroys the underdog chain, forcing them to hard fork to a new protocol if they disagree with a controversial fork.

Unlike in Proof of Work, where the classic chain enjoys the advantage of maintaining the status quo and miners having to actively make a switch to a new fork, on Proof of Stake chains, the majority of forkers have the advantage, as the legacy side of a controversial fork has to implement their own defensive hard forks to avoid being slashed by the majority. New forks enjoy the option of either slashing or not-slashing validators on the old chain, optimizing the punishment of laggards to get their desired outcome, and manipulating the economics of a hard fork decision.

_Note: The following three Proof of Stake criticisms are courtesy of [etherplan.com](https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/)_

### Subjective fork choice

The fork choice is the decision rule network participants have to use when presented with more than one chain when it splits, when they join for the first time, or when they leave and join again. As an external physical signal, PoW enables a clear objective fork choice in the form of the “longest proof of work chain“. It is objective because only with the computing power of the whole network is that the longest chain can be established.

As PoS systems don’t count with such an objective quantity to decide the correct chain, they have to use a subjective decision-making process by the participants. This means they need to consult off chain with block explorers, developers, miners or other sources to be able to decide what chain to follow. This applies, in case of splits, to participating nodes in the network, new entrants, and nodes who leave and join again.

### Unforgible Costliness

One of the basic physical features of sound money is that it is very costly to produce to guarantee it can’t be forged. PoW provides this costliness of the tokens as miners incur in huge costs, in data centers and electricity, to be able to build blocks. This makes PoW tokens, as $ETC and $BTC, unforgeable in practice.

It is simple to objectively verify that a holder's BTC or ETC is not counterfeit because of an external objective measurement embedded into every block header, but this proof does not exist in Proof of Stake systems. In PoS systems, because the database with accounts and balances is trivial to write by nodes and stakers in the system, there is no objective costliness, and verifying the authenticity holdings is far more complex, error-prone, and potentially requires expensive hardware.

### Accumulated Work

As miners in PoW blockchains work on a block by block basis, that work is not only a barrier for dishonest nodes to tamper with the current or latest blocks, but that work actually accumulates as the chain is built. This means blocks that are buried further away in the chain become exponentially more difficult for attackers to change or forge. For example, at the time of this writing, it would take 340 days with 100% of the current hashing power in the Bitcoin network to be able to reverse the entire chain.

In PoS distributed ledgers, because they don’t use PoW, to reverse the entire chain is trivial in terms of computational work, so it can be done in a few minutes.

## Hotel Towels

Even if the environmentalist argument for Proof of Stake is taken at face value, it is clear that PoS requires chains to sacrifice many security guarantees otherwise provided by Proof of Work. Proof of Stake chains trade away censorship resistance in return for the promise of less energy consumption. Aside from marketing gimmicks, this trade-off seems to make little sense when pragmatically evaluating the responsibility and utility of blockchains compared to other available technologies. There is no free lunch, after all.

But when the environmentalist claim is _not_ taken at face value, the choice to use Proof of Stake starts to make sense. Much like a hotel that requests that guests reuse towels to "save the planet", the PoS environmentalist position is conveniently one that also happens to enrich the holders of said currencies, who can generate passive income by staking. In their eyes, staking allows them to reap the rewards of providing the very same service that miners would otherwise provide; "virtual mining" with next to no expense other than the opportunity cost of locking up stake.

Well-intentioned or otherwise, this massive economic incentive explains why despite the security downgrades explored above, it is no wonder that PoS became such a popular choice among cryptocurrency holders and has managed to recruit many avid promoters.

> Proof of Stake is like the hotel asking you to reuse towels to save the planet. On the surface it's for noble intentions, but in reality it's making them money and giving you a worse service.

For all the known downsides, the projects that nevertheless opt for Proof of Stake must either be _extremely_ concerned about energy usage, or possibly more believably, are primarily concerned that staking will economically benefit stakers. However, this concern itself is misguided, as a project can only have long term value if it provides utility, which is undermined by the centralization and trade-offs necessitated by Proof of Stake.

It may be that holders of such coins believe they are providing a comparable service to mining, but they are not converting an external real world expense into a security benefit, as with mining. Instead, they are _shuffling deck chairs on the Titanic_ by redistributing value from elsewhere in the network to themselves by taxing non-stakers through inflation.

In any case, because of the inherent trade-offs required in Proof of Stake systems, it is yet another sign that _Sovereign Grade Censorship Resistance_ is not a priority on these chains. As such, they cannot be recommended for deployments that have the potential to disrupt powerful institutions.
