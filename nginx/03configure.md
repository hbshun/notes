
# Configure

默认配置文件

```
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```
:arrow_down: :arrow_down: :arrow_down:
```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    keepalive_timeout  65;

    server {
        listen       8080;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }
}

```
:arrow_down: :arrow_down: :arrow_down:

* main
* event
* http
  * server1
    * location1
    * location2
  * server2
    * location
  * upstream
    * location
* mail
    
### 块
一般同级无顺序

### 作用域
有效性、就近原则

###指令
>多数没有特定位置

* [main,event](http://nginx.org/en/docs/ngx_core_module.html)
* [http,server,location](http://nginx.org/en/docs/http/ngx_http_core_module.html)

### 指令的语法

* include mime.types;
* server {}
* error_page   500 502 503 504  /50x.html;
* location ~ \.php$ {}


-------
#### 全局块main
>服务器整体运行指令
* 用户、组
* work process 数目
* pid路径
* log路径
* include
*

#### event块
>网络连接配置
* 配置最大连接数
* 是否多work process连接系列化
* 是否同时接收多个连接
* 配置事件驱动模型
*

#### http块
* log
* MINE-Type
* include
* 

#### server块
* 端口号
* name
* 

#### location块
> localhost [ = | ~ | ~* | ^~ ] uri {...}

前缀：
* = 严格exactly，阻止正则
* ^~ 阻止正则
* ~ 正则 区分大小写
* ~* 正则 不区分大小写

匹配顺序：
先普通（最大前缀匹配）、后正则（按编辑顺序匹配，同array的some）



## :chestnut:

### 处理静态文件

### simple proxy

