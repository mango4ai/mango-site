# 新电脑的经验积累
> 总结新电脑，安装了新的系统后，如何快速构建个人需要的用户环境。

以下为windows的相关经验。
## 装机篇
包含如下常用装机软件：
* [腾讯电脑管家](https://guanjia.qq.com/page/product_download.html)
* 驱动安装，可使用驱动精灵，或者主板对于的管家，比如ASUS管家等，还可以用windows自带的设备管理器右键有问题的设备在网络中找适合的驱动。
* [鲁大师](https://www.ludashi.com/) - 跑分
* Google浏览器(可在软件管家中安装)
* [GHelper](https://d3.itmopcdn.com/down8/ghelper_v2.6.2_itmop.com.zip) - 安装VPN
* [激活工具](https://github.com/zbezj/HEU_KMS_Activator/releases) - 可激活windows
* 搜狗拼音(可在软件管家中安装)
* 微信(可在软件管家中安装)
* DiskGenius(可在软件管家中安装) - 磁盘分区工具



## 编程篇
### 安装git
1. 先下载 [git](https://git-scm.com/download/win)
2. 生成ssh key

``` shell
git config --global user.email "1092017732@qq.com"
git config --global user.name "mangodiy"
ssh-keygen -t rsa -b 4096 -C "1092017732@qq.com"
```
3. 到对应用户的`.ssh`目录下，查看公钥，并配置到在线仓库

``` shell
cat ~/.ssh/id_rsa.pub
```

### 安装jdk
1. 先下载 [jdk17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
2. 安装后，设置环境变量。

``` shell
C:\Users\mangodiy>java -version
java version "17.0.11" 2024-04-16 LTS
Java(TM) SE Runtime Environment (build 17.0.11+7-LTS-207)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.11+7-LTS-207, mixed mode, sharing)
```

### 安装maven
1. 先下载 [maven](https://maven.apache.org/download.cgi)
2. 解压后，设置环境变量
``` shell
C:\Users\mangodiy>mvn -version
Apache Maven 3.9.9 (8e8579a9e76f7d015ee5ec7bfcdc97d260186937)
Maven home: D:\env\apache-maven-3.9.9
Java version: 17.0.11, vendor: Oracle Corporation, runtime: D:\Program Files\Java\jdk-17
Default locale: zh_CN, platform encoding: GBK
OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"
```
3. 设置阿里云仓库，加速下载速度
在代码库下新建settings.xml文件，并设置maven的配置文件为该文件。
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<settings>
    <mirrors>
        <mirror>
            <id>alimaven</id>
            <name>aliyun maven</name>
            <mirrorOf>central</mirrorOf>
            <url>https://maven.aliyun.com/repository/central</url>
        </mirror>
    </mirrors>
</settings>
```

### 安装python
1. 先下载 [python3.6](https://www.python.org/downloads/release/python-368/)
2. 安装后，查看版本。

``` shell
C:\Users\mangodiy>python --version
Python 3.6.8
```

### 常用工具
1. [vscode](https://code.visualstudio.com/)
2. [idea](https://www.jetbrains.com/idea/download/?section=windows)
3. [pycharm](https://www.jetbrains.com/pycharm/download/?section=windows)
