# 希沃白板故障排查

## 引言
::: tip 温馨提示
此文档仅提供希沃白板基本问题排查教程指引，与**广州视睿电子科技有限公司**无关。

当您在遇到文档未列举的问题时，请[点击此处](https://www.seewo.com/support/customer/contact)获取官方的服务支持。
:::

老师您好，当您在使用由广州视睿电子科技有限公司开发的**希沃白板5** 产品时，如果遇到问题（错误弹窗、界面异常等），请根据本文档进行排查。您可以点击左上角来查看文档目录。

## 已解决问题
以下问题已被官方修复，如果你你仍然遇到这些问题，请升级软件至最新版本。

::: details 课堂活动横线显示为 "4"
【问题描述】此问题已被修复，请下载最新版本的希沃白板：https://easinote.seewo.com 。

【解决方法】在新版软件中打开该课件，翻到课堂活动页面，点击属性面板中的 “编辑课堂活动” 按钮，弹出课堂活动编辑框，点击 “完成” 按钮。
:::

::: details .NET Framework 组件相关问题
【相关问题】`卸载时提示：NsisHelper 已停止工作` `修复 .NET Framework 组件` `尚未安装 .NET Framework 4.8`

【问题描述】此问题已被修复，请下载最新版本的希沃白板：https://easinote.seewo.com 。

【解决方法】安装希沃白板 5.2.2.4330 或以上版本后，不再需要 .NET Framework 组件。
:::

::: details 钉钉或者其他直播时看不到希沃白板授课窗口
【问题原因】希沃白板备授课是不同的窗口，老师直播时选择共享的是备课窗口，进入授课后钉钉共享的依然是备课窗口，而不是授课窗口。

【解决方法】老师直播时需要共享屏幕而不是窗口＞先进入希沃白板授课端，再选择共享授课窗口＞直播时，可以动态切换窗口
:::

## 异常处理

### 【安装与卸载】

#### 1. 安装时提示：NSIS Error
【问题原因】
网络传输过程中发生数据错误，导致安装包下载不完整，常见于使用 360 浏览器/微信浏览器下载的安装包。

【解决方法】
一般来说，更换其它浏览器或下载工具，重新下载安装包即可。

#### 2. 安装希沃白板失败，提示系统版本过低
【问题原因】
提示系统版本过低。

【解决方法】
电脑系统升级至 Win10 或更高版本后，再次安装。

#### 3. 安装时提示：系统环境异常，是否尝试修复
【问题原因】
Windows 系统更新被禁用，系统补丁无法安装。

【解决方法】
启动 Windows Update 服务。

- 打开【计算机管理】
- 在服务中，找到 Windows Update 服务，设置为自动运行，并点击运行
- 设置启动类型之后，要先点击 【应用】，然后才能点击【启动】
- 将 Windows Modules Installer 服务也启动
- 重新安装希沃白板5

#### 4. 安装希沃白板失败，提示文件写入失败
【问题原因】
- 安装目录磁盘或者系统磁盘空间不足
- 被杀毒软件拦截
- 安装包下载过程中损坏

【解决方法】
- 检查安装目录磁盘或者系统磁盘空间
- 检查本地杀毒软件是否拦截
- 到[官网](https://easinote.seewo.com)下载最新版软件。

#### 卸载时提示：NsisHelper.exe 对话框
【解决方法】
- 到[官网](https://easinote.seewo.com)下载最新版软件。
- 安装最新版本后再卸载

### 【启动问题】

#### 1. Runtime Error R6025
【问题原因】系统中的 VC++ 环境已被破坏，通常是由于第三方软件（如影子系统）所致。

【解决方法】卸载第三方组件。

#### 2. 报错：0xc000007b
【问题原因】系统 DirectX 组件损坏。

【解决方法】请下载 DirectX 修复工具：https://drive.cvte.com/p/DdZLD-8Q_KYCGO7SDA

#### 3. 无法打开课件
【问题原因】有些软件自带了上海展盟网络科技有限公司的 gamebox，其中的 gamebox_shell.dll 注入到了希沃白板的进程中，此进程访问了不可访问的内存后，引发 C0000005 错误被系统强行结束。

【解决方法】如果能卸载相关软件，将其卸载；如果不能卸载相关软件，则直接找到对应的文件夹，将文件夹重命名

#### 4. Error：read a zero...
【问题原因】一些软件将有问题的模块注入到了希沃白板的进程中，此模块出现了问题导致希沃白板表现出了错误。

【解决方法】删除整个 C:\ProgramData\fyrecorderPlugin 文件夹。

#### 5. 程序文件缺失 CefSharp.Core.dll
【问题原因】浏览器组件的部分文件缺失。

【解决方法】需要删除浏览器组件，让希沃白板重新下载安装此组件。
- 在任务栏通知区域的“希沃白板”图标上右键，点击“退出”；等退出后，再重新启动“希沃白板”即可。
- 前往以下路径，删除所有带有 Cef 字样的文件夹，包括这些：

  * %AppData%\Seewo\EasiNote5\Dependencies\CefSharpCoreV101PM

  * %AppData%\Seewo\EasiNote5\Dependencies\CefSharpCoreV101

  * %AppData%\Seewo\EasiNote5\Dependencies\CefSharpV96

  * %AppData%\Seewo\EasiNote5\Dependencies\ChromeCefCore

  * %AppData%\Seewo\EasiNote5\Dependencies\WpfCefCore

  * %AppData%\Seewo\EasiNote5\Dependencies\WinFormCefCore

其中，%AppData% 指 "C:\Users\<你的用户名>\AppData\Roaming"，将以上路径输入到文件资源管理器的地址栏后按回车可直接前往。
- 重新启动希沃白板后，希沃白板将自动重新下载浏览器组件。

#### 6. EasiNote 已停止工作
【问题原因】NET Framework 组件不完整或已损坏；其他系统组件损坏（如 DirectX 组件）

【解决方法】
- 请下载 DirectX 修复工具：https://drive.cvte.com/p/DdZLD-8Q_KYCGO7SDA
- 一些关键的系统文件被阉割，或被某些软件篡改时，以上方法可能无效。

### 【基础模块问题】

#### 1. 界面上部分文字显示成方框“□□□□”
【问题原因】系统字体损坏；系统字体回退组件损坏

【解决方法】
- 打开控制面板＞外观＞字体＞还原默认字体 

#### 2. 公式符号显示成方框“□□□□”
【问题原因】系统字体问题，系统丢失字体

【解决方法】先尝试安装 symbol 字体，安装方法是下载 [symbol.ttf](https://drive.cvte.com/p/DWWRGNsQ_KYCGIX-ICAA) 文件，然后双击打开，点击安装,安装完成后重启电脑。

#### 3. Cvte.MediaUtility 已停止工作
【问题原因】该程序（Cvte.MediaUtility）用于获取视频的缩略图，停止工作可能为进程启动失败，传入参数有误等。

【解决方法】正常关闭该窗口，不用任何处理。如果重新打开视频仍然有此问题，请重启计算机。

### 【网络问题】

#### 1. CertDateInvalid
【问题原因】电脑日期或时间与现实时间不一致，导致证书验证出错。

【解决方法】查看系统右下角，确认日期与时间是否正确（需要精确到分钟），如果否，则同步系统时间。

#### 2. 安装希沃证书
https://drive.cvte.com/p/DeuevW4Q_KYCGKPWICAA

### 知识胶囊/云课堂/课件库

#### 1. 录制胶囊时一直停在“加载中...”
【问题原因】草稿箱存在的胶囊数据损坏或者与最新版本胶囊不兼容。

【解决方法】下载附件 [ServiceTools.zip](https://cstore-public.seewo.com/faq-service/2cc5fc50b6ed465c833d6049b2ce32c4?Expires=2046524274&OSSAccessKeyId=LTAI5tADcifUwRKSQup5hCqh&Signature=bpq3NQGJrq9Z4FDmx6YNquefsbA%3D&response-content-disposition=attachment%3Bfilename%3D%22ServiceTools.zip%22%3Bfilename%2A%3Dutf-8%27%27ServiceTools.zip)，解压后找到 LiZhiTool.exe 并运行；进入 LiZhiTool.exe 执行清除缓存的操作即可。

#### 2. 直播间初始化异常，请重试
【问题原因】系统组件异常。

【解决方法】退出希沃白板，下载并安装 [EnableFipsAlgorithmPolicy.zip](https://cstore-public.seewo.com/faq-service/b94b57d61017485793e57772a0efdd0b?Expires=2046524380&OSSAccessKeyId=LTAI5tADcifUwRKSQup5hCqh&Signature=DeyOLKWz1o53I2BtbvYNCh9%2BACI%3D&response-content-disposition=attachment%3Bfilename%3D%22EnableFipsAlgorithmPolicy.zip%22%3Bfilename%2A%3Dutf-8%27%27EnableFipsAlgorithmPolicy.zip)，解压，双击运行，运行结束后重启希沃白板。

### 【投屏问题】

#### 1. 首次投屏/摄像直播提示"电脑端正在部署环境，请完成后重试"
【问题原因】之前未使用过投屏的大板，第一次使用会先安装投屏服务的应用程序。

【解决方法】一般等待1~3分钟，程序自动安装完，就能使用了。如果等待了较长时间，可手动下载[ENMirror](https://myou.cvte.com/redirect?tag=7dba5d0bcfcb408be66e1e4b6a52eeb54a34c900_ENMirror)，然后安装。

#### 2. 投屏成功。电脑端无画面/没有声音
【问题原因】电脑驱动问题；手机版本问题

【解决方法】使用第三方驱动助手修复驱动问题。如果没有声音，请您尝试更换设备或者重新授权相关权限。

### Linux 相关

#### 1. 依赖关系不满足
【问题原因】系统问题。

【解决方法】
- 在保证此时网络通畅时，我们可以尝试使用修复工具解决。
  - 修复工具安装包下载地址：
    - arm64（例如飞腾芯片）：https://drive.cvte.com/p/DVbU5jUQqq0EGP7rICAA
    - x86（例如英特尔、兆芯）：https://drive.cvte.com/p/DVXDYFEQqq0EGP3rICAA

注意：如果提示“无root权限，如想获得root权限可以在控制中心选择进入开发者模式”则需要到系统设置中启用开发者模式。打开修复工具、点击立即修复后输入密码（修复过程中会需要用到更高级的权限，无需担心），并等待修复完成。

- 如果安装修复工具无法解决，可以继续尝试本方法。
  - 打开终端，输入 `sudo apt-get install -f -y` 然后回车，在接下来的提示中输入开机密码。输入完密码后回车，此时会开始下载安装依赖，等到进度达到100%并再一次出现闪动光标时，代表已经完成下载安装。接下来可以再一次尝试安装希沃白板。如果依旧出现本问题，在终端输入 `sudo apt-get update` 然后回车。完成后再输入 `sudo apt-get install -f -y` 然后回车。结束后再一次尝试安装希沃白板，此时可以成功安装。

注意：如果提示“无root权限，如想获得root权限可以在控制中心选择进入开发者模式”则需要到系统设置中启用开发者模式。