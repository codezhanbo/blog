(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{470:function(e,t,a){"use strict";a.r(t);var v=a(4),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"以下内容均非原创，是整理了网上的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以下内容均非原创，是整理了网上的资源"}},[e._v("#")]),e._v(" 以下内容均非原创，是整理了网上的资源")]),e._v(" "),a("h2",{attrs:{id:"mysql-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-19"}},[e._v("#")]),e._v(" MySQL 19")]),e._v(" "),a("h3",{attrs:{id:"q1：mysql主要有哪些存储引擎，分别适合哪些应用场景？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1：mysql主要有哪些存储引擎，分别适合哪些应用场景？-√"}},[e._v("#")]),e._v(" Q1：MySQL主要有哪些存储引擎，分别适合哪些应用场景？           √")]),e._v(" "),a("blockquote",[a("p",[e._v("①MyISAM，是5.5版本之前的默认存储引擎，支持表级锁，不支持事务和外键，并发效率较低，读取数据快，更新数据慢。适合以读操作为主，并且对并发性要求较低的应用。")]),e._v(" "),a("p",[e._v("②InnoDB，MySQL目前的默认存储引擎，支持行级锁、事务和外键，并发效率好。适合对事务的完整性和并发性、数据的准确性要求比较高，增删操作多的应用。")]),e._v(" "),a("p",[e._v("③Memory，所有的数据都保存在内存中，访问速度快，一旦服务关闭数据将丢失。适合更新不太频繁的数据量小的表用来快速得到访问结果。")]),e._v(" "),a("p",[e._v("④Archive、Federated等。")])]),e._v(" "),a("h3",{attrs:{id:"q2：索引是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2：索引是什么？-√"}},[e._v("#")]),e._v(" Q2：索引是什么？                      √")]),e._v(" "),a("blockquote",[a("p",[e._v("MySQL官方对索引的定义为：索引（index）是帮助MySQL高效获取数据的数据结构（有序）。在数据之外，数据库系统还维护者满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据， 这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。")])]),e._v(" "),a("h3",{attrs:{id:"q3：索引的优缺点有哪些？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3：索引的优缺点有哪些？-√"}},[e._v("#")]),e._v(" Q3：索引的优缺点有哪些？                      √")]),e._v(" "),a("blockquote",[a("p",[e._v("①优势：提高数据检索的效率，降低数据库的IO成本。通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗。")]),e._v(" "),a("p",[e._v("②劣势：实际上索引也是一张表，该表中保存了主键与索引字段，并指向实体类的记录，所以索引列也是要占用空间的。 虽然索引大大提高了查询效率，同时却也降低更新表的速度，如对表进行INSERT、UPDATE、DELETE。因为更新表时，MySQL 不仅要保存数据，还要保存一下索引文件每次更新添加了索引列的字段，都会调整因为更新所带来的键值变化后的索引信息。")])]),e._v(" "),a("h3",{attrs:{id:"q4：mysql支持哪几种索引？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4：mysql支持哪几种索引？-√"}},[e._v("#")]),e._v(" Q4：MySQL支持哪几种索引？                     √")]),e._v(" "),a("blockquote",[a("p",[e._v("①BTREE 索引 ： 最常见的索引类型，大部分索引都支持 B 树索引。")]),e._v(" "),a("p",[e._v("②HASH 索引：只有Memory引擎支持 ， 使用场景简单 。")]),e._v(" "),a("p",[e._v("③R-tree 索引（空间索引）：空间索引是MyISAM引擎的一个特殊索引类型，主要用于地理空间数据类型，通常使用较少，不做特别介绍。")]),e._v(" "),a("p",[e._v("④Full-text （全文索引） ：全文索引也是MyISAM的一个特殊索引类型，主要用于全文索引，InnoDB从Mysql5.6版本开始支持全文索引。")])]),e._v(" "),a("h3",{attrs:{id:"q5：b-树是什么和b树有什么区别？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5：b-树是什么和b树有什么区别？-√"}},[e._v("#")]),e._v(" Q5：B+树是什么和B树有什么区别？                     √")]),e._v(" "),a("blockquote",[a("p",[e._v("①BTree又叫多路平衡搜索树，一颗m叉的BTree特性如下： 树中每个节点最多包含m个孩子。 除根节点与叶子节点外，每个节点至少有[ceil(m/2)]个孩子。若根节点不是叶子节点，则至少有两个孩子。所有的叶子节点都在同一层。每个非叶子节点由n个key与n+1个指针组成，其中[ceil(m/2)-1] <= n <= m-1。")]),e._v(" "),a("p",[e._v("②B+Tree为BTree的变种，B+Tree与BTree的区别为： n叉B+Tree最多含有n个key，而BTree最多含有n-1个key。 B+Tree的叶子节点保存所有的key信息，依key大小顺序排列。所有的非叶子节点都可以看作是key的索引部分。")]),e._v(" "),a("p",[e._v("③由于B+Tree只有叶子节点保存key信息，查询任何key都要从root走到叶子。所以B+Tree的查询效率更加稳定。")])]),e._v(" "),a("h3",{attrs:{id:"q6：mysql的索引对b-树做了哪些优化？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6：mysql的索引对b-树做了哪些优化？-√"}},[e._v("#")]),e._v(" Q6：MySQL的索引对B+树做了哪些优化？                 √")]),e._v(" "),a("blockquote",[a("p",[e._v("MySql索引数据结构对经典的B+Tree进行了优化。在原B+Tree的基础上，增加一个指向相邻叶子节点的链表指针，就形成了带有顺序指针的B+Tree，提高区间访问的性能。")])]),e._v(" "),a("h3",{attrs:{id:"q7：索引有哪些分类？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7：索引有哪些分类？-√"}},[e._v("#")]),e._v(" Q7：索引有哪些分类？                 √")]),e._v(" "),a("blockquote",[a("p",[e._v("①单值索引 ：即一个索引只包含单个列，一个表可以有多个单列索引。一个表最多16个索引")]),e._v(" "),a("p",[e._v("②唯一索引 ：索引列的值必须唯一，但允许有空值。")]),e._v(" "),a("p",[e._v("③复合索引 ：即一个索引包含多个列。")])]),e._v(" "),a("h3",{attrs:{id:"q8：数据库的索引创建有哪些设计原则？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8：数据库的索引创建有哪些设计原则？-√"}},[e._v("#")]),e._v(" Q8：数据库的索引创建有哪些设计原则？               √")]),e._v(" "),a("blockquote",[a("p",[e._v("①对查询频次较高，数据量较大的表创建索引。")]),e._v(" "),a("p",[e._v("②限制索引数量：对于增删改操作较多的表，如果索引过多将需要很高的维护代价，降低操作效率，增加操作耗时。")]),e._v(" "),a("p",[e._v("③利用最左前缀：如果索引字段值过长，会降低索引的执行效率。")]),e._v(" "),a("p",[e._v("④删除不常用索引。")]),e._v(" "),a("p",[e._v("⑤使用唯一索引，区分度越高，效率越高。")]),e._v(" "),a("p",[e._v("⑤使用短索引，如果索引值很长则占用磁盘变大，会影响效率。")]),e._v(" "),a("p",[e._v("⑥为常作为查询条件、经常需要排序、分组和联合操作的字段建立索引。")]),e._v(" "),a("p",[e._v("⑦尽量扩展现有索引，联合索引的效率高于多个独立索引。")])]),e._v(" "),a("h3",{attrs:{id:"q9：索引在什么情况下会失效-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9：索引在什么情况下会失效-√"}},[e._v("#")]),e._v(" Q9：索引在什么情况下会失效?               √")]),e._v(" "),a("blockquote",[a("p",[e._v("①复合索引未使用最左列索引时或跳跃使用时失效，例如以name，age和sex字段建立索引，只使用age和sex或只使用name和sex时索引失效。")]),e._v(" "),a("p",[e._v("②在索引上进行运算或函数操作时索引失效。")]),e._v(" "),a("p",[e._v("③数字字符没有加单引号索引失效，因为MySQL查询优化器会自动进行类型转换。")]),e._v(" "),a("p",[e._v("④LIKE以%开头的查询索引失效，%在前时执行计划更倾向于使用全表扫描。")]),e._v(" "),a("p",[e._v("⑤OR的前后没有同时使用索引时索引失效。")]),e._v(" "),a("p",[e._v("⑥当全表扫描比使用索引速度更快时会使用全表扫描。")])]),e._v(" "),a("h3",{attrs:{id:"q10：简述数据库三大范式-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q10：简述数据库三大范式-√"}},[e._v("#")]),e._v(" Q10：简述数据库三大范式                   √")]),e._v(" "),a("blockquote",[a("p",[e._v("①第一范式：如果每列都是不可再分的最小数据单元，则满足第一范式。例如address：中国北京可拆分为两列，countyr：中国，city：北京。")]),e._v(" "),a("p",[e._v("②第二范式：在第一范式的基础上，规定表中的非主键列不存在对主键的部分依赖，即第二范式要求每个表只描述一件事情。例如订单表：订单编号、产品编号、订单日期、产品价格可拆分为订单表：订单编号、订单日期和产品表：产品编号、产品价格。")]),e._v(" "),a("p",[e._v("③第三范式：满足第一和第二范式，并且表中的列不存在对非主键列的传递依赖。例如订单表：订单编号、订单日期、用户编号、用户姓名可优化为订单表：订单编号、订单日期、用户姓名。")])]),e._v(" "),a("h3",{attrs:{id:"q11：mysql数据库的隔离级别有哪些？分别有什么特点？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q11：mysql数据库的隔离级别有哪些？分别有什么特点？-√"}},[e._v("#")]),e._v(" Q11：MySQL数据库的隔离级别有哪些？分别有什么特点？           √")]),e._v(" "),a("blockquote",[a("p",[e._v("①未提交读，一个事务会读取到另一个事务没有提交的数据，存在脏读、不可重复读、幻读的问题。")]),e._v(" "),a("p",[e._v("②已提交读，一个事务可以读取到另一个事务已经提交的数据，解决了幻读的问题，存在不可重复读、幻读的问题。")]),e._v(" "),a("p",[e._v("③可重复读，MySQL默认的隔离级别，在一次事务中读取同一个数据结果是一样的，解决了不可重复读的问题，存在幻读问题。")]),e._v(" "),a("p",[e._v("④可串行化，每次读都需要获得表级共享锁，读写互相阻塞，效率低，解决了幻读问题。")])]),e._v(" "),a("h3",{attrs:{id:"q12：读取数据库时可能出现哪些问题？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q12：读取数据库时可能出现哪些问题？-√"}},[e._v("#")]),e._v(" Q12：读取数据库时可能出现哪些问题？                             √")]),e._v(" "),a("blockquote",[a("p",[e._v("①脏读，一个事务中会读取到另一个事务中还没有提交的数据，如果另一事务最终回滚了数据，那么所读取到的数据就是无效的。")]),e._v(" "),a("p",[e._v("②不可重复读，一个事务中可以读取到另一个事务中已经提交的数据，在同一次事务中对同一数据读取的结果可能不同。")]),e._v(" "),a("p",[e._v("③幻读，一个事务在读取数据时，当另一个事务在表中插入了一些新数据时再次读取表时会多出几行，如同出现了幻觉。")])]),e._v(" "),a("h3",{attrs:{id:"q13：简述事务的acid属性-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q13：简述事务的acid属性-√"}},[e._v("#")]),e._v(" Q13：简述事务的ACID属性                                              √")]),e._v(" "),a("blockquote",[a("p",[e._v("①Atomicity表示原子性，事务中的所有操作都是不可分割的原子单位，要么全部成功，要么全部失败。")]),e._v(" "),a("p",[e._v("②Consistency表示一致性，无论正常执行还是异常退出，事务执行前后数据的完整性必须保持一致，比如转账前后双方的总金额是不变的。")]),e._v(" "),a("p",[e._v("③Isolation表示隔离性，并发操作中不同事务是互相隔离的，之间不会互相影响。")]),e._v(" "),a("p",[e._v("④Durability表示持久性，事务操作完成后数据就会被持久化修改到永久存储中。")])]),e._v(" "),a("h3",{attrs:{id:"q14：简述主从复制的基本原理-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q14：简述主从复制的基本原理-√"}},[e._v("#")]),e._v(" Q14：简述主从复制的基本原理                                            √")]),e._v(" "),a("blockquote",[a("p",[e._v("①主从复制是指一台服务器充当主数据库服务器，另外一台或多台服务器充当从数据库服务器，主服务器中的数据自动复制到从服务器中。对于多级复制，数据库服务器既可充当主机也可充当从机。")]),e._v(" "),a("p",[e._v("②MySQL主从复制的基础是主服务器对数据库修改二进制记录，从服务器通过主服务器的二进制日志自动执行更新。")])]),e._v(" "),a("h3",{attrs:{id:"q15：存储过程和函数是什么？有什么区别？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q15：存储过程和函数是什么？有什么区别？-√"}},[e._v("#")]),e._v(" Q15：存储过程和函数是什么？有什么区别？           √")]),e._v(" "),a("blockquote",[a("p",[e._v("①存储过程和函数是 事先经过编译并存储在数据库中的一段 SQL 语句的集合，调用存储过程和函数可以简化应用开发人员的很多工作，减少数据在数据库和应用服务器之间的传输，对于提高数据处理的效率是有好处的。")]),e._v(" "),a("p",[e._v("②两者的区别在于函数必须有返回值，而存储过程没有返回值。")])]),e._v(" "),a("h3",{attrs:{id:"q16：触发器是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q16：触发器是什么？-√"}},[e._v("#")]),e._v(" Q16：触发器是什么？           √")]),e._v(" "),a("blockquote",[a("p",[e._v("①触发器是与表有关的数据库对象，指在 insert/update/delete 之前或之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以协助应用在数据库端确保数据的完整性 , 日志记录 , 数据校验等操作 。")]),e._v(" "),a("p",[e._v("②使用别名 OLD 和 NEW 来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。")])]),e._v(" "),a("h3",{attrs:{id:"q17：了解mysql的体系结构吗？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q17：了解mysql的体系结构吗？-√"}},[e._v("#")]),e._v(" Q17：了解MySQL的体系结构吗？          √")]),e._v(" "),a("blockquote",[a("p",[e._v("① 连接层：最上层是一些客户端和链接服务，包含本地sock 通信和大多数基于客户端/服务端工具实现的类似于 TCP/IP的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于SSL的安全链接。服务器也会为安全接入的每个客户端验证它所具有的操作权限。")]),e._v(" "),a("p",[e._v("②服务层：第二层架构主要完成大多数的核心服务功能，如SQL接口，并完成缓存的查询，SQL的分析和优化，部分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如 过程、函数等。在该层，服务器会解析查询并创建相应的内部解析树，并对其完成相应的优化如确定表的查询的顺序，是否利用索引等， 最后生成相应的执行操作。如果是select语句，服务器还会查询内部的缓存，如果缓存空间足够大，这样在解决大量读操作的环境中能够很好的提升系统的性能。")]),e._v(" "),a("p",[e._v("③ 引擎层：存储引擎层， 存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API和存储引擎进行通信。不同的存储引擎具有不同的功能，这样我们可以根据自己的需要，来选取合适的存储引擎。")]),e._v(" "),a("p",[e._v("④存储层：数据存储层， 主要是将数据存储在文件系统之上，并完成与存储引擎的交互。")])]),e._v(" "),a("h3",{attrs:{id:"q18：存储引擎应当怎样进行选择？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q18：存储引擎应当怎样进行选择？-√"}},[e._v("#")]),e._v(" Q18：存储引擎应当怎样进行选择？                         √")]),e._v(" "),a("blockquote",[a("p",[e._v("①在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎。对于复杂的应用系统，还可以根据实际情况选择多种存储引擎进行组合。以下是几种常用的存储引擎的使用环境。")]),e._v(" "),a("p",[e._v("②InnoDB : 是Mysql的默认存储引擎，用于事务处理应用程序，支持外键。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询意外，还包含很多的更新、删除操作，那么InnoDB存储引擎是比较合适的选择。InnoDB存储引擎除了有效的降低由于删除和更新导致的锁定， 还可以确保事务的完整提交和回滚，对于类似于计费系统或者财务系统等对数据准确性要求比较高的系统，InnoDB是最合适的选择。")]),e._v(" "),a("p",[e._v("③MyISAM ： 如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。")]),e._v(" "),a("p",[e._v("④MEMORY：将所有数据保存在RAM中，在需要快速定位记录和其他类似数据环境下，可以提供几块的访问。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，其次是要确保表的数据可以恢复，数据库异常终止后表中的数据是可以恢复的。MEMORY表通常用于更新不太频繁的小表，用以快速得到访问结果。")]),e._v(" "),a("p",[e._v("⑤MERGE：用于将一系列等同的MyISAM表以逻辑方式组合在一起，并作为一个对象引用他们。MERGE表的优点在于可以突破对单个MyISAM表的大小限制，并且通过将不同的表分布在多个磁盘上，可以有效的改善MERGE表的访问效率。这对于存储诸如数据仓储等VLDB环境十分合适。")])]),e._v(" "),a("h3",{attrs:{id:"q19：优化sql的步骤了解吗？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q19：优化sql的步骤了解吗？-√"}},[e._v("#")]),e._v(" Q19：优化SQL的步骤了解吗？                       √")]),e._v(" "),a("blockquote",[a("p",[e._v("①查看SQL执行频率。")]),e._v(" "),a("p",[e._v("②定位低效率执行SQL。可以通过以下两种方式：慢查询日志 : 通过慢查询日志定位那些执行效率较低的 SQL 语句。show processlist : 慢查询日志在查询结束以后才记录，所以在应用反映执行效率出现问题的时候查询慢查询日志并不能定位问题，可以使用show processlist命令查看当前MySQL在进行的线程，包括线程的状态、是否锁表等，可以实时地查看 SQL 的执行情况，同时对一些锁表操作进行优化。")]),e._v(" "),a("p",[e._v("③通过以上步骤查询到效率低的 SQL 语句后，可以通过 EXPLAIN或者 DESC命令获取 MySQL如何执行 SELECT 语句的信息，包括在 SELECT 语句执行过程中表如何连接和连接的顺序。")]),e._v(" "),a("p",[e._v("④Mysql从5.0.37版本开始增加了对 show profiles 和 show profile 语句的支持。show profiles 能够在做SQL优化时帮助我们了解时间都耗费到哪里了。")]),e._v(" "),a("p",[e._v("⑤MySQL5.6提供了对SQL的跟踪trace, 通过trace文件能够进一步了解为什么优化器选择A计划, 而不是选择B计划。打开trace ， 设置格式为 JSON，并设置trace最大能够使用的内存大小，避免解析过程中因为默认内存过小而不能够完整展示。")])]),e._v(" "),a("h2",{attrs:{id:"jdbc-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-10"}},[e._v("#")]),e._v(" JDBC 10")]),e._v(" "),a("h3",{attrs:{id:"q1：了解jdbc吗？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1：了解jdbc吗？-√"}},[e._v("#")]),e._v(" Q1：了解JDBC吗？                       √")]),e._v(" "),a("blockquote",[a("p",[e._v("①JDBC(Java Database Connectivity)是一个独立于特定数据库管理系统、通用的SQL数据库存取和操作的公共接口（一组API），定义了用来访问数据库的标准Java类库（java.sql,javax.sql），使用这些类库可以以一种标准的方法方便地访问数据库资源。")]),e._v(" "),a("p",[e._v("②JDBC为访问不同的数据库提供了统一的途径，为开发者屏蔽了一些细节问题。")]),e._v(" "),a("p",[e._v("③JDBC的目标是使Java程序员使用JDBC可以连接任何提供了JDBC驱动程序的数据库系统，这样就使得程序员无需对特定的数据库系统的特点有过多的了解，从而大大简化和加快了开发过程。")])]),e._v(" "),a("h3",{attrs:{id:"q2：jdbc的操作步骤？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2：jdbc的操作步骤？-√"}},[e._v("#")]),e._v(" Q2：JDBC的操作步骤？                       √")]),e._v(" "),a("blockquote",[a("p",[e._v("①导入相应的jar包。")]),e._v(" "),a("p",[e._v("②加载、注册sql驱动。")]),e._v(" "),a("p",[e._v("③获取Connection连接对象。")]),e._v(" "),a("p",[e._v("④创建Statement对象并执行SQL语句。")]),e._v(" "),a("p",[e._v("⑤使用ResultSet对象获取查询结果集。")]),e._v(" "),a("p",[e._v("⑥依次关闭ResultSet、Statement、Connection对象。")])]),e._v(" "),a("h3",{attrs:{id:"q3：statement和prepatedstatement的区别是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3：statement和prepatedstatement的区别是什么？-√"}},[e._v("#")]),e._v(" Q3：Statement和PrepatedStatement的区别是什么？     √")]),e._v(" "),a("blockquote",[a("p",[e._v("①Statement：用于执行静态 SQL 语句并返回它所生成结果的对象。")]),e._v(" "),a("p",[e._v("②PrepatedStatement：SQL 语句被预编译并存储在此对象中，可以使用此对象多次高效地执行该语句。")]),e._v(" "),a("p",[e._v("③使用Statement操作数据表存在弊端：存在拼串操作，繁琐；存在SQL注入问题。")]),e._v(" "),a("p",[e._v("④PreparedStatement代码的可读性和可维护性更强，能实现更高效的批量操作。DBServer会对预编译语句提供性能优化。因为预编译语句有可能被重复调用，所以语句在被DBServer的编译器编译后的执行代码被缓存下来，那么下次调用时只要是相同的预编译语句就不需要编译，只要将参数直接传入编译过的语句执行代码中就会得到执行。在statement语句中,每执行一次都要对传入的语句编译一次。")]),e._v(" "),a("p",[e._v("⑤PreparedStatement 可以防止 SQL 注入，还可以操作Blob类数据。")])]),e._v(" "),a("h3",{attrs:{id:"q4：resultset对象存储的是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4：resultset对象存储的是什么？-√"}},[e._v("#")]),e._v(" Q4：ResultSet对象存储的是什么？               √")]),e._v(" "),a("blockquote",[a("p",[e._v("①PreparedStatement 的 executeQuery()方法，查询结果是一个ResultSet 对象，ResultSet 对象以逻辑表格的形式封装了执行数据库操作的结果集，ResultSet 接口由数据库厂商提供实现。")]),e._v(" "),a("p",[e._v("②ResultSet 返回的实际上就是一张数据表，有一个指针指向数据表的第一条记录的前面。")]),e._v(" "),a("p",[e._v("③ResultSet 对象维护了一个指向当前数据行的游标，初始的时候，游标在第一行之前，可以通过 ResultSet 对象的next()方法移动到下一行。调用 next()方法检测下一行是否存在。若存在，该方法返回true，且指针下移，相当于Iterator对象的 hasNext() 和 next()方法的结合体。可以通过调用对应的getXxx()获取每一列的值。")])]),e._v(" "),a("h3",{attrs:{id:"q5：resultsetmetadata对象存储的是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5：resultsetmetadata对象存储的是什么？-√"}},[e._v("#")]),e._v(" Q5：ResultSetMetaData对象存储的是什么？               √")]),e._v(" "),a("blockquote",[a("p",[e._v("①可用于获取关于 ResultSet 对象中列的类型和属性信息的对象。")]),e._v(" "),a("p",[e._v("②通过调用ResultSet对象的getMetaData()方法获得ResultSetMetaData对象，getColumnName(int column)：获取指定列的名称，getColumnLabel(int column)：获取指定列的别名，getColumnCount()：返回当前 ResultSet 对象中的列数。")])]),e._v(" "),a("h3",{attrs:{id:"q6：jdbc要释放的资源有哪些，释放的顺序是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6：jdbc要释放的资源有哪些，释放的顺序是什么？-√"}},[e._v("#")]),e._v(" Q6：JDBC要释放的资源有哪些，释放的顺序是什么？               √")]),e._v(" "),a("blockquote",[a("p",[e._v("①释放ResultSet, Statement,Connection。")]),e._v(" "),a("p",[e._v("②数据库连接（Connection）是非常稀有的资源，用完后必须马上释放，如果Connection不能及时正确的关闭将导致系统问题。Connection的使用原则是尽量晚创建，尽量早的释放。")]),e._v(" "),a("p",[e._v("③可以在finally中释放资源，保证及时其他代码出现异常，资源也一定能被释放。")])]),e._v(" "),a("h3",{attrs:{id:"q7：数据库连接池是什么？它的工作原理是怎样的？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7：数据库连接池是什么？它的工作原理是怎样的？-√"}},[e._v("#")]),e._v(" Q7：数据库连接池是什么？它的工作原理是怎样的？               √")]),e._v(" "),a("blockquote",[a("p",[e._v("①传统开发模式存在的问题：普通的JDBC数据库连接使用 DriverManager 来获取，每次向数据库建立连接的时候都要将 Connection 加载到内存中，数据库的连接资源并没有得到很好的重复利用。若在高并发情况下，频繁进行数据库连接操作将占用很多的系统资源，严重的甚至会造成服务器的崩溃。对于每一次数据库连接，使用完后都得断开。否则，如果程序出现异常而未能关闭，将会导致数据库系统中的内存泄漏，最终将导致重启数据库。不能控制被创建的连接对象数，系统资源会被毫无顾及的分配出去，如连接过多，也可能导致内存泄漏，服务器崩溃。")]),e._v(" "),a("p",[e._v("②为解决传统开发中的数据库连接问题，可以采用数据库连接池技术。基本思想：就是为数据库连接建立一个“缓冲池”。预先在缓冲池中放入一定数量的连接，当需要建立数据库连接时，只需从“缓冲池”中取出一个，使用完毕之后再放回去。数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是重新建立一个。")]),e._v(" "),a("p",[e._v("③数据库连接池在初始化时将创建一定数量的数据库连接放到连接池中，这些数据库连接的数量是由最小数据库连接数来设定的。无论这些数据库连接是否被使用，连接池都将一直保证至少拥有这么多的连接数量。连接池的最大数据库连接数量限定了这个连接池能占有的最大连接数，当应用程序向连接池请求的连接数超过最大连接数量时，这些请求将被加入到等待队列中。")])]),e._v(" "),a("h3",{attrs:{id:"q8：数据库连接池有哪些优点？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8：数据库连接池有哪些优点？"}},[e._v("#")]),e._v(" Q8：数据库连接池有哪些优点？")]),e._v(" "),a("blockquote",[a("p",[e._v("①资源重用：由于数据库连接得以重用，避免了频繁创建，释放连接引起的大量性能开销。在减少系统消耗的基础上，另一方面也增加了系统运行环境的平稳性。")]),e._v(" "),a("p",[e._v("② 更快的系统反应速度：数据库连接池在初始化过程中，往往已经创建了若干数据库连接置于连接池中备用。此时连接的初始化工作均已完成。对于业务请求处理而言，直接利用现有可用连接，避免了数据库连接初始化和释放过程的时间开销，从而减少了系统的响应时间。当数据库访问结束后，程序还是像以前一样关闭数据库连接：conn.close(); 但conn.close()并没有关闭数据库的物理连接，它仅仅把数据库连接释放，归还给了数据库连接池。")]),e._v(" "),a("p",[e._v("③ 新的资源分配手段：对于多应用共享同一数据库的系统而言，可在应用层通过数据库连接池的配置，实现某一应用最大可用数据库连接数的限制，避免某一应用独占所有的数据库资源。")]),e._v(" "),a("p",[e._v("④ 统一的连接管理，避免数据库连接泄漏：在较为完善的数据库连接池实现中，可根据预先的占用超时设定，强制回收被占用连接，从而避免了常规数据库连接操作中可能出现的资源泄露。")])]),e._v(" "),a("h3",{attrs:{id:"q9：数据库连接池有哪些分类？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9：数据库连接池有哪些分类？"}},[e._v("#")]),e._v(" Q9：数据库连接池有哪些分类？")]),e._v(" "),a("blockquote",[a("p",[e._v("①JDBC 的数据库连接池使用 javax.sql.DataSource 来表示，DataSource 只是一个接口，该接口通常由服务器(Weblogic, WebSphere, Tomcat)提供实现，也有一些开源组织提供实现。")]),e._v(" "),a("p",[e._v("②DBCP 是Apache提供的数据库连接池。tomcat 服务器自带dbcp数据库连接池。速度相对c3p0较快，但因自身存在BUG，Hibernate3已不再提供支持。")]),e._v(" "),a("p",[e._v("③C3P0 是一个开源组织提供的一个数据库连接池，速度相对较慢，稳定性还可以。hibernate官方推荐使用。")]),e._v(" "),a("p",[e._v("④Druid 是阿里提供的数据库连接池，集合了DBCP 、C3P0 、Proxool 的优点。")])]),e._v(" "),a("h3",{attrs:{id:"q10：数据源datasource和数据库连接connection有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q10：数据源datasource和数据库连接connection有什么区别？"}},[e._v("#")]),e._v(" Q10：数据源DataSource和数据库连接Connection有什么区别？")]),e._v(" "),a("blockquote",[a("p",[e._v("①DataSource 通常被称为数据源，它包含连接池和连接池管理两个部分，习惯上也经常把 DataSource 称为连接池。DataSource用来取代DriverManager来获取Connection，获取速度快，同时可以大幅度提高数据库访问速度。")]),e._v(" "),a("p",[e._v("②数据源和数据库连接不同，数据源无需创建多个，它是产生数据库连接的工厂，因此整个应用只需要一个数据源即可。")])]),e._v(" "),a("h2",{attrs:{id:"redis-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-15"}},[e._v("#")]),e._v(" Redis 15")]),e._v(" "),a("h3",{attrs:{id:"q1：什么是nosql？列举几个你知道的nosql数据库。-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1：什么是nosql？列举几个你知道的nosql数据库。-√"}},[e._v("#")]),e._v(" Q1：什么是NoSQL？列举几个你知道的NoSQL数据库。           √")]),e._v(" "),a("blockquote",[a("p",[e._v("①许多网站在海量用户访问的高并发情况下出现崩溃问题，根本原因是关系型数据库。关系型数据库有性能瓶颈：磁盘IO性能低下、扩展瓶颈：数据关系复杂，扩展性差，不便于大规模集群。")]),e._v(" "),a("p",[e._v("②NoSQL即Not-Only SQL，泛指非关系型数据库，作为关系型数据库的补充，降低了磁盘IO次数——使用内存存储、去除数据间关系——不存储关系，仅存储数据。")]),e._v(" "),a("p",[e._v("③NoSQL的特征：特征：可扩容，可伸缩；大数据量下高性能；灵活的数据模型；高可用。")]),e._v(" "),a("p",[e._v("④常见的NoSQL数据库：Redis、memcache、HBase、MongoDB。")])]),e._v(" "),a("h3",{attrs:{id:"q2：简单讲讲redis的含义-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2：简单讲讲redis的含义-√"}},[e._v("#")]),e._v(" Q2：简单讲讲Redis的含义                                      √")]),e._v(" "),a("blockquote",[a("p",[e._v("①Redis (REmote DIctionary Server) 是用 C 语言开发的一个开源的高性能键值对（key-value）数据库。")]),e._v(" "),a("p",[e._v("②Redis数据库中的数据间没有必然的关联关系，内部采用单线程机制进行工作，性能比较高，支持持久化存储。")]),e._v(" "),a("p",[e._v("③支持多种数据类型，包括字符串类型 string、列表类型 list、散列类型 hash、集合类型 set、有序集合类型 sorted_set。")])]),e._v(" "),a("h3",{attrs:{id:"q3：redis有哪些应用场景？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3：redis有哪些应用场景？-√"}},[e._v("#")]),e._v(" Q3：Redis有哪些应用场景？                                         √")]),e._v(" "),a("blockquote",[a("p",[e._v("①为热点数据加速查询（主要场景），如热点商品、热点新闻、热点资讯、推广类等高访问量信息等。")]),e._v(" "),a("p",[e._v("②应用于任务队列，如秒杀、抢购、购票排队等。")]),e._v(" "),a("p",[e._v("③即时信息查询，如排行榜、各类网站访问统计、公交到站信息、在线人数信息（聊天室、网站）、设备信号等。")]),e._v(" "),a("p",[e._v("④时效性信息控制，如验证码控制、投票控制等。")]),e._v(" "),a("p",[e._v("⑤分布式数据共享，如分布式集群架构中的 session 分离以及消息队列、分布式锁等。")])]),e._v(" "),a("h3",{attrs:{id:"q4：简述string类型的基本操作和注意事项-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4：简述string类型的基本操作和注意事项-√"}},[e._v("#")]),e._v(" Q4：简述string类型的基本操作和注意事项                             √")]),e._v(" "),a("blockquote",[a("p",[e._v("①存储的数据：单个数据，最简单常用的数据存储类型。存储数据的格式：一个存储空间保存一个数据。存储内容：通常使用字符串，如果字符串以整数的形式展示，可以作为数字操作使用。")]),e._v(" "),a("p",[e._v("②添加/修改数据：set key value、获取数据：get key、删除数据：del key、添加/修改多个数据：mset key1 value1 key2 value2 ...、获取多个数据：mget key1 key2 …、获取数据字符个数（字符串长度）：strlen key、追加信息到原始信息后部（如果原始信息存在就追加，否则新建）：append key value。")]),e._v(" "),a("p",[e._v("③string在redis内部存储默认就是一个字符串，当遇到增减类操作incr，decr时会转成数值型进行计算。redis所有的操作都是原子性的，采用单线程处理所有业务，命令是一个一个执行的，因此无需考虑并发 带来的数据影响。注意：按数值进行操作的数据，如果原始数据不能转成数值，或超越了redis 数值上限范围（java中long型数据最大值，Long.MAX_VALUE）将报错。")])]),e._v(" "),a("h3",{attrs:{id:"q5：简述hash类型的基本操作和注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5：简述hash类型的基本操作和注意事项"}},[e._v("#")]),e._v(" Q5：简述hash类型的基本操作和注意事项")]),e._v(" "),a("blockquote",[a("p",[e._v("①存储需求：对一系列存储的数据进行编组，方便管理，一般存储对象信息。存储结构：一个存储空间保存多个键值对数据。底层使用哈希表结构实现数据存储。")]),e._v(" "),a("p",[e._v("②如果field数量较少，存储结构优化为类数组结构；如果field数量较多，存储结构使用HashMap结构。")]),e._v(" "),a("p",[e._v("③添加/修改数据：hset key field value、获取数据：hget key field，hgetall key、 删除数据：hdel key field1 [field2]、添加/修改多个数据：hmset key field1 value1 field2 value2 …、 获取多个数据：hmget key field1 field2 …、获取哈希表中字段的数量：hlen key、获取哈希表中是否存在指定的字段：hexists key field。")]),e._v(" "),a("p",[e._v("③hash类型下的value只能存储字符串，不允许存储其他数据类型，不存在嵌套现象。如果数据未获取到， 对应的值为（nil）。每个 hash 可以存储 2^32 - 1 个键值对。hash类型十分贴近对象的数据存储形式，并且可以灵活添加删除对象属性。但hash设计初衷不是为了存储大量对象而设计的，不可滥用，更不可以将hash作为对象列表使用。hgetall 操作可以获取全部属性，如果内部field过多，遍历整体数据效率就很会低，有可能成为数据访问瓶颈。")])]),e._v(" "),a("h3",{attrs:{id:"q6：简述list类型的基本操作和注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6：简述list类型的基本操作和注意事项"}},[e._v("#")]),e._v(" Q6：简述list类型的基本操作和注意事项")]),e._v(" "),a("blockquote",[a("p",[e._v("①存储需求：存储多个数据，并对数据进入存储空间的顺序进行区分。存储结构：一个存储空间保存多个数据，且通过数据可以体现进入顺序。保存多个数据，底层使用双向链表存储结构实现。")]),e._v(" "),a("p",[e._v("②添加/修改数据：lpush key value1 [value2] …，rpush key value1 [value2] …、获取数据：lrange key start stop，lindex key index，llen key、获取并移除数据：lpop key，rpop key。获取数据时可以设置等待时间，list为空时等待获取。移除指定数据：lrem key count value。")]),e._v(" "),a("p",[e._v("③list中保存的数据都是string类型的，数据总容量是有限的，最多2^32- 1 个元素(4294967295)。list具有索引的概念，但是操作数据时通常以队列的形式进行入队出队操作，或以栈的形式进行入栈出栈操作。获取全部数据操作结束索引设置为-1。list可以对数据进行分页操作，通常第一页的信息来自于list，第2页及更多的信息通过数据库的形式加载。")])]),e._v(" "),a("h3",{attrs:{id:"q7：简述set类型的基本操作和注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7：简述set类型的基本操作和注意事项"}},[e._v("#")]),e._v(" Q7：简述set类型的基本操作和注意事项")]),e._v(" "),a("blockquote",[a("p",[e._v("①存储需求：存储大量的数据，在查询方面提供更高的效率。存储结构：能够保存大量的数据，高效的内部存储机制，便于查询。与hash存储结构完全相同，仅存储键，不存储值（nil），并且值是不允许重复的。")]),e._v(" "),a("p",[e._v("②添加数据：sadd key member1 [member2]、获取全部数据：smembers key、删除数据：srem key member1 [member2]、获取集合数据总量：scard key、判断集合中是否包含指定数据：sismember key member。")]),e._v(" "),a("p",[e._v("③set 类型不允许数据重复，如果添加的数据在 set 中已经存在，将只保留一份。set 虽然与hash的存储结构相同，但是无法启用hash中存储值的空间。")])]),e._v(" "),a("h3",{attrs:{id:"q8：简述sorted-set类型的相关操作和注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8：简述sorted-set类型的相关操作和注意事项"}},[e._v("#")]),e._v(" Q8：简述sorted-set类型的相关操作和注意事项")]),e._v(" "),a("blockquote",[a("p",[e._v("①存储需求：数据排序有利于数据的有效展示，需要提供一种可以根据自身特征进行排序的方式。存储结构：新的存储模型，可以保存可排序的数据，在set的存储结构基础上添加可排序字段。")]),e._v(" "),a("p",[e._v("②添加数据：zadd key score1 member1 [score2 member2]、获取全部数据：zrange key start stop [WITHSCORES]，zrevrange key start stop [WITHSCORES]、删除数据：zrem key member [member ...]。")]),e._v(" "),a("p",[e._v("③score保存的数据存储空间是64位，超过该范围的话score保存的数据也可以是一个双精度的double值，但可能会丢失精度，使用时候要慎重。sorted_set 底层存储还是基于set结构的，因此数据不能重复，如果重复添加相同的数据，score值将被反复覆盖，保留最后一次修改的结果。")])]),e._v(" "),a("h3",{attrs:{id:"q9：key有哪些通用指令？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9：key有哪些通用指令？"}},[e._v("#")]),e._v(" Q9：Key有哪些通用指令？")]),e._v(" "),a("blockquote",[a("p",[e._v("①删除指定key：del key、获取key是否存在：exists key、获取key的类型：type key。")]),e._v(" "),a("p",[e._v("②为指定key设置有效期：expire key seconds 单位秒，pexpire key milliseconds 单位毫秒、获取key的有效时间：ttl key 如果key不存在或key失效显示-2，没设置有效期或永久性显示-1，单位秒、pttl key以毫秒为单位、切换key从时效性转换为永久性：persist key。")]),e._v(" "),a("p",[e._v("③查询key：keys pattern。查询模式规则：* 匹配任意数量的任意符号，? 配合一个任意符号，[] 匹配一个指定符号。④为key改名：rename key newkey、renamenx key newkey新名不存在时才可使用。")])]),e._v(" "),a("h3",{attrs:{id:"q10：redis如何解决key的重复问题？数据库有哪些基本操作？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q10：redis如何解决key的重复问题？数据库有哪些基本操作？-√"}},[e._v("#")]),e._v(" Q10：Redis如何解决key的重复问题？数据库有哪些基本操作？        √")]),e._v(" "),a("blockquote",[a("p",[e._v("①redis为每个服务提供有16个数据库，编号从0到15。每个数据库之间的数据相互独立。")]),e._v(" "),a("p",[e._v("②切换数据库：select index、退出：quit、测试连通：ping、输出信息：echo message。")]),e._v(" "),a("p",[e._v("③移动到其他数据库：move key db 、数据个数：dbsize 、清除该数据库：flushdb 、清除所有数据库：flushall 。")])]),e._v(" "),a("h3",{attrs:{id:"q11：jedis是什么？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q11：jedis是什么？-√"}},[e._v("#")]),e._v(" Q11：Jedis是什么？                                                             √")]),e._v(" "),a("blockquote",[a("p",[e._v("①Jedis是一种利用Java语言连接redis的服务，需要依赖redis.clients下的jedis包。")]),e._v(" "),a("p",[e._v("②通过new Jedis(String address,int port)创建一个操作redis数据库的对象，第一个参数是字符串类的ip地址，第二个参数是int类型的端口号。")]),e._v(" "),a("p",[e._v("③之后通过Jedis类实例对象调用相关API实现对redis数据库的操作。")])]),e._v(" "),a("h3",{attrs:{id:"q12：新闻网站会出现热点新闻，热点新闻最大的特征是时效性，如何自动控制热点新闻的时效性？-√"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q12：新闻网站会出现热点新闻，热点新闻最大的特征是时效性，如何自动控制热点新闻的时效性？-√"}},[e._v("#")]),e._v(" Q12：新闻网站会出现热点新闻，热点新闻最大的特征是时效性，如何自动控制热点新闻的时效性？                                         √")]),e._v(" "),a("blockquote",[a("p",[e._v("redis 可以控制数据的生命周期，通过数据是否失效控制业务行为，适用于所有具有时效性限定控制的操作，使用String数据结构，通过setex key seconds value 可以设置数据有效的生命周期，有效时间以秒为单位，也可以通过psetex key milliseconds value设置数据的有效时间，有效时间以毫秒为单位。")])]),e._v(" "),a("h3",{attrs:{id:"q13：你会如何设计与实现电商网站购物车？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q13：你会如何设计与实现电商网站购物车？"}},[e._v("#")]),e._v(" Q13：你会如何设计与实现电商网站购物车？")]),e._v(" "),a("blockquote",[a("p",[e._v("①可以使用redis数据库，以客户id作为key，每位客户创建一个hash存储结构存储对应的购物车信息。")]),e._v(" "),a("p",[e._v("②将商品编号作为field，购买数量作为value进行存储。")]),e._v(" "),a("p",[e._v("③添加商品：追加全新的field与value。")]),e._v(" "),a("p",[e._v("④浏览：遍历hash。")]),e._v(" "),a("p",[e._v("⑤更改数量：自增/自减，设置value值。")]),e._v(" "),a("p",[e._v("⑥删除商品：直接删除field。")]),e._v(" "),a("p",[e._v("⑦清空购物车：直接删除key。")]),e._v(" "),a("p",[e._v("⑧当前仅仅是将数据存储到了redis中，并没有起到加速的作用，商品信息还需要二次查询数据库，将每条购物车中的商品记录保存成两条field，field1专用于保存购买数量，命名格式：商品id:nums 数值；field2专用于保存购物车中显示的信息，包含文字描述，图片地址，所属商家信息等，命名格式：商品id:info json数据 。")])]),e._v(" "),a("h3",{attrs:{id:"q14：双11活动日，销售手机充值卡的商家对移动、联通、电信的30元、50元、100元商品推出抢购活动，每种商品抢购上限1000张，你会怎么解决？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q14：双11活动日，销售手机充值卡的商家对移动、联通、电信的30元、50元、100元商品推出抢购活动，每种商品抢购上限1000张，你会怎么解决？"}},[e._v("#")]),e._v(" Q14：双11活动日，销售手机充值卡的商家对移动、联通、电信的30元、50元、100元商品推出抢购活动，每种商品抢购上限1000张，你会怎么解决？")]),e._v(" "),a("blockquote",[a("p",[e._v("①使用redis的hash数据结构，以商家id作为key、将参与抢购的商品id作为field、将参与抢购的商品数量作为对应的value。")]),e._v(" "),a("p",[e._v("②抢购时使用降值的方式控制产品数量，通过hincrby key field increment实现对指定key的field值实现值的更新操作，例如hincrby CMCC card30:nums -10实现对移动的30元商品数量实现-10操作。")])]),e._v(" "),a("h3",{attrs:{id:"q15：每位用户首次使用今日头条时会设置3项爱好的内容，但是后期为了增加用户的活跃度、兴趣点，必须让用户对其他信息类别逐渐产生兴趣，增加客户留存度，如何实现？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q15：每位用户首次使用今日头条时会设置3项爱好的内容，但是后期为了增加用户的活跃度、兴趣点，必须让用户对其他信息类别逐渐产生兴趣，增加客户留存度，如何实现？"}},[e._v("#")]),e._v(" Q15：每位用户首次使用今日头条时会设置3项爱好的内容，但是后期为了增加用户的活跃度、兴趣点，必须让用户对其他信息类别逐渐产生兴趣，增加客户留存度，如何实现？")]),e._v(" "),a("blockquote",[a("p",[e._v("①可以利用redis数据库的set数据结构完成，系统分析出各个分类的最新或最热点信息条目并组织成set集合，随机挑选其中部分信息，配合用户关注信息分类中的热点信息组织成展示的全信息集合。")]),e._v(" "),a("p",[e._v("②通过srandmember key [count]随机获取集合中指定数量的数据，通过spop key [count]随机获取集合中的某个数据并将该数据移出集合。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);