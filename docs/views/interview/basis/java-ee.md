---
title: Java基础面试题之JavaEE
date: 2020-05-12
tags:
 - Java基础
categories: 
 - 面试
---
### 以下内容均非原创，是整理了网上的资源
## Spring 7

### Q1：Spring的IOC和DI是什么？               √

> ①IOC即控制反转，简单来说就是把对象的控制权委托给spring框架，作用是降低代码的耦合度。
>
> ②DI即依赖注入，是IOC的一种具体实现方式。假设一个Car类需要Engine的对象，那么一般需要new一个Engine，利用IOC就是只需要定义一个私有的Engine引用变量，容器会在运行时创建一个Engine的实例对象并将引用自动注入给变量。

### Q2：简述Spring中bean对象的生命周期               √

> ①Spring对bean进行实例化。
>
> ②Spring将值和bean的引用注入到其对应的属性中。
>
> ③调用BeanNameAware的setBeanName方法。
>
> ④调用BeanFactoryAware的setBeanFactory方法。
>
> ⑤调用AppicationContxtAware的setApplicationContext方法。
>
> ⑥调用BeanPostProcessor的post-ProcessBeforeInitialization方法。
>
> ⑦调用InitializingBean的after-PropertiesSet方法。如果bean使用init-method声明了自定义初始化方法，该方法也会被调用。
>
> ⑧调用BeanPostProcessor的post-ProcessAfterInitialization方法。
>
> ⑨使用bean。
>
> ⑩调用DisposableBean的destroy方法，如果bean使用destroy-method声明了自定义销毁方法，该方法也会被调用。

### Q3：简述bean的作用范围                              √

> 通过scope指定bean的作用范围，有
>
> ①singleton：单例的，每次容器返回的对象是同一个。
>
> ②prototype :多例的，每次返回的对象是新创建的实例。
>
> ③request：仅作用于HttpRequest，每次Http请求都会创建一个新的bean。
>
> ④session：仅作用于HttpSession，不同的Session使用不同的实例，相同的Session使用同一个实例。
>
> ⑤global session ：仅作用于HttpSession，所有的Session使用同一个实例。

### Q4：BeanFactory和FactoryBean，ApplicationContext的区别？ √

> ①BeanFactory是一个Factory接口，是用来管理bean的IOC容器或对象工厂，较为古老，不支持spring的一些插件。BeanFactory使用了延迟加载，适合多例模式。
>
> ②FactoryBean是一个Bean接口，是一个可以生产或者装饰对象的工厂Bean，可以通过实现该接口自定义的实例化Bean的逻辑。
>
> ③ApplicationConext是BeanFactory的子接口，扩展了其功能，ApplicationContext是立即加载，适合单例模式。一般推荐使用ApplicationContext。

### Q5：使用XML配置有哪些创建Bean对象的方式？                      √

> ①通过默认无参构造器。使用bean标签，只使用id和class属性，如果没有无参构造器会报错。
>
> ②使用静态工厂，通过bean标签中的class指明静态工厂，factory-method指明静态工厂方法。
>
> ③使用实例工厂，通过bean标签中的factory-bean指明实例工厂，factory-method指明实例工厂方法。

### Q6：依赖注入可以注入哪些数据类型？有哪些注入方式？                      √

> ①可以注入的数据类型有基本数据类型、String、Bean、以及集合等复杂数据类型。
>
> ②有三种注入方式，
>
> 第一种是通过构造器注入，通过constructor-arg标签实现，缺点是即使不需要该属性也必须注入；
>
> 第二种是通过Set方法注入，通过property标签实现，优点是创建对象时没有明确限制，缺点是某个成员变量必须有值，在获取对象时set方法可能还没有执行；
>
> 第三种是通过注解注入，利用@Autowired自动按类型注入，如果有多个匹配则按照指定bean的id查找，查找不到会报错；@Qualifier在自动按照类型注入的基础之上，再按照 Bean 的 id 注入，给成员变量注入时必须搭配@Autowired，给方法注入时可单独使用；@Resource直接按照 Bean 的 id 注入；@Value用于注入基本数据类型和String。

### Q7：有哪些配置Bean的注解，各有什么区别？                      √

> ①@Component，把当前类对象存入spring容器中，相当于在 xml 中配置一个 bean。value属性指定 bean 的 id，如果不指定 value 属性，默认 id 是当前类的类名，首字母小写。
>
> ②@Service，一般用于业务层。
>
> ③@Controller：一般用于表现层。
>
> ④@Repository：一般用于持久层。
>
> ⑤@Controller @Service @Repository都是针对@Component的衍生注解，作用及属性都是一模一样的，只是提供了更加明确的语义化。

## Spring Aop 4

### Q1：Spring Aop的基本原理是什么？                     √

> Aop即面向切面编程，简单地说就是将代码中重复的部分抽取出来，在需要执行的时候使用动态代理的技术，在不修改源码的基础上对方法进行增强。优点是可以减少代码的冗余，提高开发效率，维护方便。Spring会根据类是否实现了接口来判断动态代理的方式，如果实现了接口会使用JDK的动态代理，核心是InvocationHandler接口和Proxy类，如果没有实现接口会使用cglib的动态代理，cglib是在运行时动态生成某个类的子类，如果某一个类被标记为final，是不能使用cglib动态代理的。
>
> JDK 和 CGLib动态代理性能对比
>
> 关于两者之间的性能的话，JDK动态代理所创建的代理对象，在以前的JDK版本中，性能并不是很高，虽然在高版本中JDK动态代理对象的性能得到了很大的提升，但是他也并不是适用于所有的场景。主要体现在如下的两个指标中：
>
> 1、CGLib所创建的动态代理对象在实际运行时候的性能要比JDK动态代理高不少，有研究表明，大概要高10倍；
>
> 2、但是CGLib在创建对象的时候所花费的时间却比JDK动态代理要多很多，有研究表明，大概有8倍的差距；
>
> 3、因此，对于singleton的代理对象或者具有实例池的代理，因为无需频繁的创建代理对象，所以比较适合采用CGLib动态代理，反正，则比较适用JDK动态代理。

### Q2：简单解释一下AOP的相关术语                     √

> ①Joinpoint(连接点):指那些被拦截到的点，在 spring 中这些点指的是方法，因为 spring 只支持方法类型的连接点。例如业务层实现类中的方法都是连接点。
>
> ②Pointcut(切入点):指我们要对哪些 Joinpoint 进行拦截的定义。例如业务层实现类中被增强的方法都是切入点，切入点一定是连接点，但连接点不一定是切入点。
>
> ③Advice(通知/增强):指拦截到 Joinpoint 之后所要做的事情。
>
> ④Introduction(引介):引介是一种特殊的通知，在不修改类代码的前提下可以在运行期为类动态地添加一些方法或 Field。
>
> ⑤Weaving(织入):是指把增强应用到目标对象来创建新的代理对象的过程。spring 采用动态代理织入，而 AspectJ 采用编译期织入和类装载期织入。
>
> ⑥Proxy（代理）:一个类被 AOP 织入增强后，就产生一个结果代理类。
>
> ⑦Target(目标):代理的目标对象。
>
> ⑧Aspect(切面):是切入点和通知（引介）的结合。

### Q3：Spring Aop有哪些相关注解？                   √

> @Before前置通知，
>
> @AfterThrowing异常通知，
>
> @AfterReturning后置通知，
>
> @After最终通知，
>
> @Around环绕通知。最终通知会在后置通知之前执行，为解决此问题一般使用环绕通知。

### Q4：如何使用XML方式配置AOP？                 √

> ①aop:config用于声明开始 aop 的配置。
>
> ②aop:aspect用于配置切面。属性：id给切面提供一个唯一标识。ref引用配置好的通知类 bean 的 id。
>
> ③aop:pointcut用于配置切入点表达式，就是指定对哪些类的哪些方法进行增强。属性：expression用于定义切入点表达式，id用于给切入点表达式提供一个唯一标识。
>
> ④aop:before用于配置前置通知，在切入点方法执行之前执行；aop:after-returning用于配置后置通知，在切入点方法正常执行之后执行，它和异常通知只能有一个执行；aop:after-throwing用于配置异常通知，在切入点方法执行产生异常后执行；aop:after用于配置最终通知，无论切入点方法执行时是否有异常，它都会在其后面执行。

## Spring MVC 15

### Q1：SpringMVC的作用是什么？MVC的含义分别是什么？             √

> ①springMVC是一种基于Java实现的mvc设计模型的请求驱动类型的轻量级Web层框架，作用包括：参数绑定（获取请求参数）、调用业务层 、进行请求响应。
>
> ②mvc全名是model view controller模型视图控制器，model指数据模型，JavaBean的类，用来封装数据；view指jsp，html等用来展示数据给用户的界面；controller是整个流程的控制器，用来接收用户请求以及进行数据校验等功能。

### Q2：要搭建一个最基础的SpringMVC环境，你是如何配置的？           √

> ①在pom.xml中导入以下jar包：org.springframework下的spring-context）、spring-web、spring-webmvc、javax.servlet下的servlet-api、javax.servlet.jsp下的jsp-api以及测试用的junit包。
>
> ②创建一个springmvc.xml的springconfig配置文件，开启包扫描，注册视图解析器，配置视图的前缀和后缀。
>
> ③在web.xml中配置核心控制器，servlet和servlet-mapping的映射等。

### Q3：SpringMVC的基础响应流程是怎样的？                              √

> ①浏览器发送请求，被 DispatherServlet 捕获，该 Servlet 并不处理请求，而是把请求转发出去（控制器类），转发的路径是根据请求 URL，匹配@RequestMapping 中的内容
>
> ②根据执行方法的返回值和视图解析器（InternalResourceViewResolver），去指定的目录下查找指定名称的视图文件，Tomcat服务器渲染页面，做出响应。

### Q4：SpringMVC响应流程中会涉及到哪些组件？                              √

> ①DispatcherServlet：前端控制器，用户请求到达前端控制器，它就相当于 mvc 模式中的 c，dispatcherServlet 是整个流程控制的中心，由它调用其它组件处理用户的请求，dispatcherServlet 的存在降低了组件之间的耦合性。
>
> ②HandlerMapping：处理器映射器，负责根据用户请求找到 Handler 即处理器，SpringMVC 提供了不同的映射器实现不同的映射方式，例如：配置文件方式，实现接口方式，注解方式等。
>
> ③Handler：处理器，它就是我们开发中要编写的具体业务控制器。由 DispatcherServlet 把用户请求转发到 Handler。由Handler 对具体的用户请求进行处理。
>
> ④HandlAdapter：处理器适配器，通过 HandlerAdapter 对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行
>
> ⑤View Resolver：视图解析器，负责将处理结果生成 View 视图，View Resolver 首先根据逻辑视图名解析成物理视图名，即具体的页面地址，再生成 View 视图对象，最后对 View 进行渲染将处理结果通过页面展示给用户。
>
> ⑥View：视图，SpringMVC 提供了很多 View 视图类型的支持，包括：jstlView、freemarkerView、pdfView等。最常用的视图就是 jsp。一般情况下需要通过页面标签或页面模版技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面。

### Q5：讲一讲@RequestMapping注解                              √

> ①作用：建立请求url和处理方法之间的对应关系。
>
> ②作用位置：类，请求url的第一级访问目录，如果不写相当于根目录，需要以/开头；方法，请求url的第二级访问目录，可以不以/开头。
>
> ③属性：value/path，绑定路径，支持多个路径，一般只配置一个路径；method 指定访问方式，可配置多个允许的访问方式，默认任何方法都支持，例如POST、GET等。

### Q6：SpringMVC的参数绑定支持哪些类型，分别有哪些要求？          √

> ①基本数据类型和String，要求请求参数的参数名必须和控制器中方法的形参名一致，例如请求参数为name，控制器方法的形参也必须为name。
>
> ②可以是Java对象，要求请求属性必须和对应的Java类中的成员变量名一致，例如input标签的name属性值为id，类中也必须有id这一个成员变量。也可以是Java对象中的List或Map集合。

### Q7：如何解决请求参数中文乱码问题？                                 √

> 在web.xml中配置一个过滤器，配置一个filter标签，使用org.springframework.web.filter包下的CharacterEncodingFilter类实现，将<init-param>中的<param-name>设置为encoding，对应的<param-value>设置为UTF-8即可。然后配置对应的fiter-mapping标签，fiter-name和之前的一样，<url-pattern>设置为/*，表示对所有视图都进行编码过滤。

### Q8：SpringMVC支持哪些Servlet对象作为控制器方法的参数？     √

> ①HttpServletRequest，指客户端的请求。
>
> ②HttpServletResponse，指服务器端的响应。
>
> ③HttpSession，Java平台对session机制的实现规范。
>
> ④Principal，此接口表示主体的抽象概念，它可以用来表示任何实体，例如，个人、公司或登录id。
>
> ⑤Locale，用于国际化操作的类。
>
> ⑥InputStream，字节输入流。
>
> ⑦OutputStream，字节输出流。
>
> ⑧Reader，字符输入流。
>
> ⑨Writer，字符输出流。

### Q9：SpringMVC的常用注解有哪些？                                 √

> ①@RequestParam：作用是将请求参数和控制器中方法形参绑定(请求参数名和形参名不再要求相同)。属性包括：name/value，当和请求参数名一致可省略；required指定请求参数是否必填项；defaultValue是未提供请求参数时的默认值。
>
> ②@RequestBody：作用是用于获取请求体的内容，直接使用得到的是key=value形式的字符串，把获取的json数据转换成pojo对象(get方式不可用)。
>
> ③@Response：作用是将控制器中方法返回的对象通过适当的转换器转换为指定的格式之后进行响应，通常用来返回JSON数据或者是XML。
>
> ④@PathVariable：作用是绑定url中的占位符，例如请求url中/delete/{id}，{id}就是url占位符。url支持占位符是spring3.0后加入的，是springmvc支持rest风格url的一个重要标志。属性包括name/value 指定url中占位符名称；required指定是否必须提供占位符。
>
> ⑤@RequestHeader：作用是获取指定请求头的值。属性：value代表请求头的名称。
>
> ⑥@CookieValue：作用是用于把指定 cookie 名称的值传入控制器方法参数。属性包括value：指定 cookie 的名称。required：是否必须有此 cookie。
>
> ⑦@ModelAttribute：是 SpringMVC4.3 版本以后加入的，它可以修饰方法和参数，出现在方法上表示当前方法会在控制器的方法执行之前先执行。它可以修饰没有返回值的方法，也可以修饰有具体返回值的方法。出现在参数上，获取指定的数据给参数赋值。属性value用于获取数据的 key。key 可以是 POJO 的属性名称，也可以是 map 结构的 key。

### Q10：响应数据的格式有哪些？                           √

> ①字符串，控制器中的方法返回字符串可以指定逻辑视图名，通过视图解析器解析为物理视图地址，例如返回"success"时可解析为success.jsp页面。
>
> ②返回值为空，默认访问视图解析器前缀+requestmapping路径+视图解析器后缀的视图。
>
> ③ModelandView，可以通过setViewName()方法设置视图名实现指定视图的跳转。

### Q11：SpringMVC中如何实现转发和重定向，有什么区别？            √

> ①前提是控制器方法返回值类型必须是String类型。
>
> ②转发到页面return"forward:+绝对地址"。转发到控制器其他方法：return的是"forward:+类上requestmapping的地址+方法上requestmapping的地址"。
>
> ③重定向到页面：return的是"redirect:+绝对地址"，注意不能重定向访问WEB-INF下的资源。重定向到控制器其他方法：return的是"redirect:+类上requestmapping的地址+方法上requestmapping的地址"。重定向到外部链接：return的是"redirect:+链接地址(http://www.qq.com)"。
>
> ④转发和重定向的区别是转发只是一次请求，重定向是两次请求；转发地址栏不变，重定向地址栏将改变；转发只能到内部资源，重定向可以到内部或外部资源；转发可以到WEB-INF下资源，重定向不可以。

### Q12：SpringMVC实现简单文件上传有哪些要求？                  √

> ①浏览器端要求：表单提交方式为post(get有文件大小限制)。提供文件上传框对应的标签，表单的entype属性必须为multipart/form-data。
>
> ②服务器端要求：使用**request.getInputStream()**获取数据。springmvc底层封装了commons-fileupload文件上传工具包。

### Q13：SpringMVC的异常处理流程是什么？                           √

> Dao层发生的异常会向上抛出到Service层、Service层的异常会向上抛出到Controller层，Controller层的异常会继续向上抛出到SpringMVC的前端控制器，由前端控制器将异常交给SpringMVC的异常处理器进行处理。如果是自定义的异常处理器，需要实现HandlerExceptionResolver接口，并使用@Component注解配置或在对应的springconfig配置文件中注册。

### Q14：SpringMVC中的拦截器和拦截器链是什么，和过滤器有什么区别？  √

> ①Spring MVC 的拦截器用于对处理器进行预处理和后处理，用户可以自己定义一些拦截器来实现特定的功能。拦截器链就是将拦截器按一定的顺序联结成一条链，在访问被拦截的方法或字段时，拦截器链中的拦截器就会按其之前定义的顺序被调用。
>
> ②它和过滤器的区别是：过滤器是 servlet 规范中的一部分，任何 java web 工程都可以使用，拦截器是 SpringMVC 框架自己的，只有使用了 SpringMVC 框架的工程才能用；过滤器在 url-pattern 中配置了/*之后，可以对所有要访问的资源拦截，拦截器它是只会拦截访问的控制器方法，如果访问的是 jsp、html、css、image 或者 js 是不会进行拦截的；它也是 AOP 思想的具体应用，如果要想自定义拦截器， 要求必须实现HandlerInterceptor 接口。

### Q15：拦截器有哪些常用方法，各自有什么特点？           √

> ①preHandle：按拦截器定义顺序调用，只要配置了都会调用。如果程序员决定该拦截器对请求进行拦截处理后还要调用其他的拦截器，或者是业务处理器去进行处理，则返回 true，如果不需要再调用其他的组件去处理请求，则返回 false。
>
> ②postHandle：按拦截器定义逆序调用，在拦截器链内所有拦截器返回成功时调用。在业务处理器处理完请求后，但是 DispatcherServlet 向客户端返回响应前被调用， 在该方法中对用户请求 request 进行处理。
>
> ③afterCompletion：按拦截器定义逆序调用，只有 preHandle 返回 true时才调用。在 DispatcherServlet 完全处理完请求后被调用，可以在该方法中进行一些资源清理的操作。

## Mybatis 3

### Q1：延迟加载是什么？Mybatis支持吗?                              √

> ①Mybatis支持延迟加载。实际开发过程中很多时候我们并不需要总是在加载某些信息时就一定要加载其关联信息，例如在加载用户信息时不是用户关联的账户信息不是必需的，此时就可以采用延迟加载。
>
> ②延迟加载就是在需要用到数据时才进行加载，不需要用到数据时就不加载数据。延迟加载也称懒加载。
>
> ③好处：先从单表查询，需要时再从关联表去关联查询，大大提高数据库性能，因为查询单表要比关联查询多张表速度要快。
>
> ④坏处：因为只有当需要用到数据时，才会进行数据库查询，这样在大批量数据查询时，因为查询工作也要消耗时间，所以可能造成用户等待时间变长，造成用户体验下降。

### Q2：讲一讲Mybatis的缓存                                                 √

> ①一级缓存：指的是Mybatis中SqlSession对象的缓存，当我们执行完查询结果后，查询的结果会同时存入到SqlSession为我们提供的一块区域中，该区域的结构是一个Map，当我们再次查询同样数据时，Mybatis会先去SqlSession中查询是否有，有的话直接拿出来用。当SqlSession对象消失时，Mybatis的一级缓存也就消失了。一级缓存是 SqlSession 范围的缓存，当调用 SqlSession 的修改，添加，删除，commit()，close()等方法时，就会清空一级缓存。
>
> ②二级缓存：二级缓存是 mapper 映射级别的缓存，多个 SqlSession 去操作同一个 Mapper 映射的 sql 语句，多个SqlSession 可以共用二级缓存，二级缓存是跨 SqlSession 的。

### Q3：如何开启Mybatis的二级缓存？                                  √

> ①在springconfig配置文件中，将setting标签的cacheEnabled值设置为true（默认值为true，所以这一步可省略）。
>
> ②配置相关的 Mapper 映射文件，使用<cache>标签表示当前这个 mapper 映射将使用二级缓存。
>
> ③配置 statement 上面的 useCache 属性，设置 useCache=”true”代表当前这个 statement 要使用二级缓存，如果不使用二级缓存可以设置为 false。针对每次查询都需要最新的数据 sql，要设置useCache=false，禁用二级缓存。
>
> ④如果是使用注解的方式，可以省略第二步，只需要在dao层接口上加上注解@CacheNamespace(blocking=true)。