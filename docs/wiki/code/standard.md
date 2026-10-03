## Java
* 不适用魔法数字，用`final`带名称的变量或者枚举替换。
* 提前判断异常，减少`if`的嵌套缩进。
* 使用`try-with-resources`自动关闭资源。(1.7+)
* 使用线程安全的类，如字符串`StringBuilder`，不使用`StringBuffer`。
* 不使用废弃的类或方法。
* 打印日志尽量用英文，防止服务器中文乱码。
* 小数操作，尽量用`BigDecimal`类的方法，不要用基础类型的直接加减乘除，避免精度问题。
* 打印日志敏感，对关键步骤需打印日志。比如查询数据、ddl数据、发送接收消息、调研接口等。
* 判断对象、集合、字符串为空，请使用Objects、CollectionUtils、StringUtils等工具类。

## SQL
* SQL查询是避免函数在where条件里，防止索引失效。
