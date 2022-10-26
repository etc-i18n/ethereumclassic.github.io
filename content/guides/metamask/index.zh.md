---
title: 使用 MetaMask 与 ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: 一个分步指南，涵盖如何使用MetaMask 与 Etherum经典发送ETC 并与分散的应用程序交互。
info: This article was [created by Etherplan](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). For more Ethereum Classic tutorials, theory, and cryptocurrency concepts, please check out [etherplan.com](https://etherplan.com). 欲了解更多Etherum Classic Tutories, they and cryptocurency concepts, 请签出 [etherplan.com](https://therplan.com)。 欲了解更多Etherum Classic Tutories, they and cryptocurency concepts, 请签出 [etherplan.com](https://therplan.com)。
contributors:
  - DonaldMcIntyre
---

从 '../../../src/components/addNetwork.js' 导入添加网络

**⚠️ 更新**  
您现在可以轻松地将ETC 添加到MetaMask，点击链接列表中的"连接钱包"：


您可以在本网站每页底部找到此链接。

---

[MetaMask](https://metamask.io) can be used as a wallet to manage your ETC and Tokens, as well as interact with applications that support it. This post explains how to start using MetaMask with the Ethereum Classic (ETC) network. [MetaMask](https://metamask.io) can be used as a wallet to manage your ETC and Tokens, as well as interact with applications that support it. This post explains how to start using MetaMask with the Ethereum Classic (ETC) network. [MetaMask](https://metamask.io) can be used as a wallet to manage your ETC and Tokens, as well as interact with applications that support it. This post explains how to start using MetaMask with the Ethereum Classic (ETC) network. 这个帖子解释了如何开始使用 MetaMask 与 Ethereum Classic (ETC) 网络。

你也可以考虑 [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), 一个超级蒙板的叉, 它支持用箱子的ETC.

## 1. 1. 1. 1. Log Into MetaMask

第一步是登录以解锁您的MetaMask。

![步骤1](./01.png)

## 2. 2. 2. 2. 查看初始屏幕

您将看到您正常的初始屏幕。 在这种情况下，默认网络是 Ethereum (ETH)，您的账户将会像往常一样显示。 You will see your normal initial screen. In this case the default network is Ethereum (ETH) and your account will be shown as usual. As you use other networks, they will show as the default when you unlock your MetaMask if they were the last ones used.

在我的情况下，它会显示以太坊为初始网络，在我的ETH账户 `0x48c1...EfF3` 有零余额。

![步骤2](./02.png)

## 3. 3. 3. 打开网络下拉菜单

下一步是打开网络下拉菜单。 The next step is to open the networks dropdown menu. You can do this by clicking on the bar where you see the default network.

从上文可以看出，网络的默认清单是以太坊主主网及其最受欢迎的测试网。

“本地主机8545”将连接到以太坊节点，如果您在机器中运行一个。

“自定义辐射防委会”是添加自定义网络的选项，在这种情况下是ETC。

“RPC”是指“远程程序电话”，这是指协议机器用来在远程机器中呼叫其他程序的程序。

![步骤3](./03.png)

## 4. 4. 4. 4. 选择自定义 RPC

因此，下一步是单击“自定义保养”。

![步骤4](./04.png)

## 5. 5. 5. 5. 查看新的网络表单

选择“自定义 RPC 后，您将看到添加网络的表格。 After selecting “Custom RPC” you will see the form to add a network. It has a security message at the top and five options with empty fields to enter the new network you want to use:

- 网络名称：您想要添加的网络名称。
- 新 RPC URL：您想要添加的网络 RPC 的 URL。
- 链： 发送和直接交易到您想要添加的网络的ID。
- 货币符号(可选)：您想要添加的网络货币符号。 Currency Symbol (optional): The currency symbol of the network you want to add. For example, “ETH” is the symbol for Ethereum, and “ETC” is the symbol for Ethereum Classic.
- Block Explorer URL (可选)：MetaMask 每个网络都有与 blockchain 浏览器的链接来检查帐户历史记录。 新交易已发送和余额，所以在这里您将为您想要添加的网络添加一个区块浏览器。

![步骤5](./05.png)

## 6. 6. 输入以太久经典网络信息

The next step, is to add Ethereum Classic’s specific information. Below is the network data I used: 下面是我使用的网络数据： 下面是我使用的网络数据： 下面是我使用的网络数据：

- 网络名称： `Ethereum 经典`
- 新 RPC URL： `https://www.ethercluster.com/etc`
- 链号 ID: `61`
- 货币符号(可选)： `ETC`
- 区块资源管理器URL (可选)： `https://blockscout.com/etc/mainnet/`

在“RPC URL”中，我使用了 [ETC Cooper](https://etccooperative.org/)为此目的提供的URL， 这是从他们生成的产品 [以太集群](https://ethercluster.com/)

_[编辑注释] 以太集群现在由 [RIVET](https://rivet.cloud/) 运行。 [Editor Note] Ethercluster is now operated by [RIVET](https://rivet.cloud/). You can find more RPC Endpoints in the [network](/network/endpoints) section._

“链”必须是“61”，因为这是Ethereum Classic 网络通过钱包和节点发送ETC 交易到操作区块链的具体ID。

虽然“符号”和“区块浏览器URL”是可选的， 我建议使用“ETC”作为标志，因为这是广为人知的网络市场象征。 和BlockScout作为区块链浏览器，因为这是我通常使用的 (但你可以添加你喜欢的!)。

点击“保存”将ETC添加到MetaMask。

![步骤6](./06.png)

## 7. 7. 7. 7. View Ethereum Classic in the Networks Dropdown Menu

ETC添加后，您将在网络下拉菜单中看到它被添加到网络列表中。

![步骤7](./07.png)

## 8. 8. 8. 8. 您可以在ETC上查看您相同的账户

如果您转到您的帐户，您会注意到它与您的 ETH 帐户相同。 If you go to your account, you will notice that it is the same as your ETH account. In my case, it is the same `0x48c1...EfF3` account.

这是因为ETH和ETC都使用相同的账户格式，因此Etherum上的账户也可以用于Ethereum Classic。

In fact, you may remember that I had a zero balance in my ETH account, but now a balance of 1 ETC may be seen in the same account, but on Ethereum Classic. This is because I sent 1 ETC to this account in the Ethereum Classic network for this demonstration. 这是因为我为此演示在埃瑟姆经典网络中向该帐户发送了1个ETC。 这是因为我为此演示在埃瑟姆经典网络中向该帐户发送了1个ETC。

还注意到ETC网络现在是网络栏中显示的网络网络， “ETC”符号现在用来显示平衡。

![步骤8](./08.png)

## 9. 9. 9. 9. You May Move Back to Ethereum With the Same Account

因此，由于两个网络使用相同的账户格式，您可以移动到以太坊主网，您将能够再次看到相同号码的ETH账户。

![步骤9](./09.png)

## 10. 10. 10. 10. You May Move Back to Ethereum Classic With the Same Account

要使用ETC网络，只需在网络下拉菜单中再次选择Etherum经典，您将在下拉菜单中再次看到您的 ETC 余额。

![步骤10](./10.png)

//

我祝您成功地投资和使用ETC！

---

** 代码是法律**
