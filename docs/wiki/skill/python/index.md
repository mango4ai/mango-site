## python基础
> https://docs.python.org/zh-cn/3/tutorial/index.html

**python是解释语言，不需要编译，不需要链接。**

### 注释
1. 单行注释：#
2. 多行注释：''' '''

### 标识符
1. 变量名、函数名、类名等只能由字母、数字、下划线组成，不能以数字开头。例如：a123，_a，a_b，a-b。
2. python文件名和模块名要统一，使用小写字母，下划线分隔，不要使用大写字母。例如：my_module.py，my_package。

### 输入输出
1. 输入：input()
2. 输出：print()

### 变量
1. 变量名：变量名由字母、数字、下划线组成，不能以数字开头。
2. 变量赋值：变量 = 值。
3. 变量类型：int、float、str、bool、list、tuple、dict、set。

### 运算符
1. 算术运算符：+、-、*、/、//、%
2. 比较运算符：==、!=、>、<、>=、<=
3. 赋值运算符：=、+=、-=、*=、/=、%=、**=
4. 逻辑运算符：and、or、not
5. 成员运算符：in、not in

### 控制语句
1. if语句：if 条件：
    语句1
    语句2
2. for语句：for 变量 in 序列：
    语句1
    语句2
3. while语句：while 条件：
    语句1
    语句2
4. break语句：break
5. continue语句：continue
6. pass语句：pass

### 面向过程之猜数字小游戏
``` python
import random

# 定义一个函数，用于生成一个0~100的随机整数
def get_num():
    return random.randint(0, 100)

# 定义一个函数，用于判断用户输入的数字是否正确
def judge(num):
    # 定义一个变量，用于存储用户输入的数字
    user_num = int(input("请输入一个数字："))
    if user_num == num:
        print("恭喜，你猜对了！")
    else:
        print("很遗憾，你猜错了！")

while True:
    # 调用函数，生成一个0~100的随机整数
    num = get_num()
    # 调用函数，判断用户输入的数字是否正确
    judge(num)
    # 定义一个变量，用于存储用户是否继续猜数字
    flag = input("是否继续猜数字（y/n）：")
    if flag == "n":
        break
```

## python面向对象
> https://docs.python.org/zh-cn/3/tutorial/classes.html

### 类
1. 类名：类名由字母、数字、下划线组成，不能以数字开头。
2. 类定义：class 类名：
    语句1
    语句2
3. 实例化：实例 = 类名()
4. 访问属性：实例.属性名
5. 修改属性：实例.属性名 = 值

### 对象
1. 对象：对象是类的实例。
2. 访问方法：对象.方法名()
3. 访问属性：对象.属性名
4. 修改属性：对象.属性名 = 值

### 继承
1. 继承：class 子类名(父类名):
    语句1
    语句2
2. 重写方法：子类名.方法名(self, 参数列表):

### 面向对象之猜数字小游戏
``` python
import random

# 定义一个类，用于生成一个0~100的随机整数
class Num:
    def __init__(self):
        self.num = random.randint(0, 100)

    # 定义一个方法，用于获取随机整数
    def get_num(self):
        return self.num

# 定义一个类，用于判断用户输入的数字是否正确
class Judge:
    def __init__(self, num):
        self.num = num

    # 定义一个方法，用于判断用户输入的数字是否正确
    def judge(self):
        # 定义一个变量，用于存储用户输入的数字
        user_num = int(input("请输入一个数字："))
        if user_num == self.num:
            print("恭喜，你猜对了！")
        
        if user_num!= self.num:
            print("很遗憾，你猜错了！")
        
    
    def start(self):
        while True:
            # 调用方法，判断用户输入的数字是否正确
            self.judge()
            # 定义一个变量，用于存储用户是否继续猜数字
            flag = input("是否继续猜数字（y/n）：")
            if flag == "n":
                break
            
            if flag == "y":
                continue

if __name__ == "__main__":
    # 实例化类，生成一个0~100的随机整数
    num = Num()
    # 实例化类，判断用户输入的数字是否正确
    judge = Judge(num.get_num())
    # 调用方法，开始猜数字
    judge.start()
```

## python之miniconda安装
> https://docs.conda.io/en/latest/miniconda.html

Miniconda 是 conda 的免费最小安装程序。

### 安装
到[下载页](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links)下载对应操作系统的版本进行安装即可。

``` shell
(base) mango@mangodeMacBook-Pro ~ % conda
usage: conda [-h] [-V] command ...

conda is a tool for managing and deploying applications, environments and packages.

Options:

positional arguments:
  command
    clean             Remove unused packages and caches.
    compare           Compare packages between conda environments.
    config            Modify configuration values in .condarc. This is modeled
                      after the git config command. Writes to the user
                      .condarc file (/Users/mango/.condarc) by default. Use
                      the --show-sources flag to display all identified
                      configuration locations on your computer.
    create            Create a new conda environment from a list of specified
                      packages.
    info              Display information about current conda install.
    init              Initialize conda for shell interaction.
    install           Installs a list of packages into a specified conda
                      environment.
    list              List installed packages in a conda environment.
    package           Low-level conda package utility. (EXPERIMENTAL)
    remove (uninstall)
                      Remove a list of packages from a specified conda
                      environment. Use `--all` flag to remove all packages and
                      the environment itself.
    rename            Renames an existing environment.
    run               Run an executable in a conda environment.
    search            Search for packages and display associated
                      information.The input is a MatchSpec, a query language
                      for conda packages. See examples below.
    update (upgrade)  Updates conda packages to the latest compatible version.
    notices           Retrieves latest channel notifications.

options:
  -h, --help          Show this help message and exit.
  -V, --version       Show the conda version number and exit.

conda commands available from other packages (legacy):
  content-trust
  env
```

### 快速使用
1. 使用`conda create -n test python=3.3`命令来创建虚拟环境。
2. 使用`conda activate test`来切换到对应环境下。
3. 使用`conda env remove -n test`来删除对应的环境。

例子：
``` shell
(base) mango@mangodeMacBook-Pro ~ % conda create -n miaowa python=3.6
Retrieving notices: ...working... done
Collecting package metadata (current_repodata.json): done
Solving environment: failed with repodata from current_repodata.json, will retry with next repodata source.
Collecting package metadata (repodata.json): done
Solving environment: done


==> WARNING: A newer version of conda exists. <==
  current version: 23.3.1
  latest version: 23.5.0

Please update conda by running

    $ conda update -n base -c defaults conda

Or to minimize the number of packages updated during conda update use

     conda install conda=23.5.0



## Package Plan ##

  environment location: /Users/mango/miniconda3/envs/miaowa

  added / updated specs:
    - python=3.6


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    certifi-2021.5.30          |   py36hecd8cb5_0         138 KB
    libcxx-14.0.6              |       h9765a3e_0         968 KB
    libffi-3.3                 |       hb1e8313_2          44 KB
    pip-21.2.2                 |   py36hecd8cb5_0         1.8 MB
    python-3.6.13              |       h88f2d9e_0        16.8 MB
    setuptools-58.0.4          |   py36hecd8cb5_0         777 KB
    sqlite-3.41.2              |       h6c40b1e_0         1.2 MB
    wheel-0.37.1               |     pyhd3eb1b0_0          33 KB
    xz-5.4.2                   |       h6c40b1e_0         372 KB
    ------------------------------------------------------------
                                           Total:        22.1 MB

The following NEW packages will be INSTALLED:

  ca-certificates    pkgs/main/osx-64::ca-certificates-2023.01.10-hecd8cb5_0
  certifi            pkgs/main/osx-64::certifi-2021.5.30-py36hecd8cb5_0
  libcxx             pkgs/main/osx-64::libcxx-14.0.6-h9765a3e_0
  libffi             pkgs/main/osx-64::libffi-3.3-hb1e8313_2
  ncurses            pkgs/main/osx-64::ncurses-6.4-hcec6c5f_0
  openssl            pkgs/main/osx-64::openssl-1.1.1t-hca72f7f_0
  pip                pkgs/main/osx-64::pip-21.2.2-py36hecd8cb5_0
  python             pkgs/main/osx-64::python-3.6.13-h88f2d9e_0
  readline           pkgs/main/osx-64::readline-8.2-hca72f7f_0
  setuptools         pkgs/main/osx-64::setuptools-58.0.4-py36hecd8cb5_0
  sqlite             pkgs/main/osx-64::sqlite-3.41.2-h6c40b1e_0
  tk                 pkgs/main/osx-64::tk-8.6.12-h5d9f67b_0
  wheel              pkgs/main/noarch::wheel-0.37.1-pyhd3eb1b0_0
  xz                 pkgs/main/osx-64::xz-5.4.2-h6c40b1e_0
  zlib               pkgs/main/osx-64::zlib-1.2.13-h4dc903c_0


Proceed ([y]/n)? y


Downloading and Extracting Packages

Preparing transaction: done
Verifying transaction: done
Executing transaction: done
#
# To activate this environment, use
#
#     $ conda activate miaowa
#
# To deactivate an active environment, use
#
#     $ conda deactivate
```
从`requirements.txt`文件中安装包：
``` shell
(miaowa) mango@mangodeMacBook-Pro miaowa % pip install -r requirements.txt
Collecting selenium==3.141.0
  Downloading selenium-3.141.0-py2.py3-none-any.whl (904 kB)
     |████████████████████████████████| 904 kB 592 kB/s 
Collecting urllib3
  Downloading urllib3-1.26.16-py2.py3-none-any.whl (143 kB)
     |████████████████████████████████| 143 kB 1.1 MB/s 
Installing collected packages: urllib3, selenium
Successfully installed selenium-3.141.0 urllib3-1.26.16
```

## python例子
### 枚举类
``` python
from enum import Enum
class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3
def get_color_name(color):
    return color.name
if __name__ == '__main__':
    color = Color.RED
    print(get_color_name(color))
```

### 抽象方法
``` python
from abc import ABCMeta, abstractmethod
class Animal(metaclass=ABCMeta):
    @abstractmethod
    def eat(self):
        pass
class Dog(Animal):
    def eat(self):
        print('dog eat')
class Cat(Animal):
    def eat(self):
        print('cat eat')
def main():
    dog = Dog()
    dog.eat()
    cat = Cat()
    cat.eat()
if __name__ == '__main__':
    main()
```
