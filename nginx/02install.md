# Install 

```
$ wget http://nginx.org/download/nginx-1.10.1.tar.gz
$ tar -zxvf nginx-1.10.1.tar.gz
$ cd nginx-1.10.1
$ ./configure
$ make
$ sudo make install
$ sudo ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx


$ cd /usr/local/nginx
$ ls *

  conf:
  fastcgi.conf           fastcgi_params.default mime.types             nginx.conf.default     uwsgi_params
  fastcgi.conf.default   koi-utf                mime.types.default     scgi_params            uwsgi_params.default
  fastcgi_params         koi-win                nginx.conf             scgi_params.default    win-utf
  
  html:
  50x.html   index.html
  
  logs:
  access.log error.log
  
  sbin:
  nginx
  
$ yes yes
  
```


# Start
```
[sudo] nginx
```


## console

```
$ nginx -h
  nginx version: nginx/1.10.1
  Usage: nginx [-?hvVtTq] [-s signal] [-c filename] [-p prefix] [-g directives]
  
  Options:
    -?,-h         : this help
    -v            : show version and exit
    -V            : show version and configure options then exit
    -t            : test configuration and exit
    -T            : test configuration, dump it and exit
    -q            : suppress non-error messages during configuration testing
    -s signal     : send signal to a master process: stop, quit, reopen, reload
    -p prefix     : set prefix path (default: /usr/local/nginx/)
    -c filename   : set configuration file (default: conf/nginx.conf)
    -g directives : set global directives out of configuration file
```

* prefix
* config file

注意指令，容易造成多个实例:exclamation: 

    nginx.pid

### signal
```
nginx -s SIGNAL
kill -SIGNAL PID
```

nginx SIGNAL|kill SIGNAL
----|----
stop|
quit|
reopen|
reload|




