# Fixed Connection reset by peer

A Node.js cluster which was hosted at AWS Beanstalk sometimes threw 502 errors because of `Connection reset by peer`.

It was because of `keepalive` setting of Nginx. The Beanstalk default setting was 256.

How to resolve the issue is increasing `keepalive` and `worker_connections` values.

```sh
$ ab -n 100000 -c 500 <api path>
```

```
event {
  worker_connections 65536;
}

upstream server {
  keepalive 65536;
  ...
}
```
