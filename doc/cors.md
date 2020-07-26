Tree

跨域

- 请求头
- 简单请求 非简单请求
- 预请求
- withCredentials
- Origin
- JSONP

---

Sec-Fetch-Mode: cors

```
http请求中如果有这样的设置Content-Type:application/json;charset=UTF-8，那么该请求就是费简单请求，跨域时会发送两次请求，一次option预请求、一次get或post正式请求。如果option预请求发现后端不支持跨域，就会直接报错，不发送正式请求了。
```

CORS

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS

https://www.ruanyifeng.com/blog/2016/04/cors.html

> x

Angular 开发者在向与该应用的宿主服务器不同域的服务器发起请求时，可能会遇到一种跨域资源共享（CORS）错误<https://en.wikipedia.org/wiki/Cross-origin_resource_sharing>。 浏览器会阻止该请求，除非得到那台服务器的明确许可。

客户端应用对这种错误无能为力。 服务器必须配置成可以接受来自该应用的请求。 要了解如何对特定的服务器开启 CORS，参见 enable-cors.org。http://enable-cors.org/server.html

---

出于安全原因，浏览器限制从脚本内发起的跨源 HTTP 请求。 例如，XMLHttpRequest 和 Fetch API 遵循同源策略。 这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。

（译者注：这段描述不准确，并不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。）

##### 预检请求

`GET`

`from brower`

```
GET / HTTP/1.1
Host: localhost:3000
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0
Accept: application/json, text/plain, */*
Accept-Language: zh-CN,en-US;q=0.5
Accept-Encoding: gzip, deflate
Origin: http://localhost:3001
Connection: keep-alive
Referer: http://localhost:3001/
Pragma: no-cache
Cache-Control: no-cache
```

`直接访问`

```
GET / HTTP/1.1
Host: localhost:3000
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: zh-CN,en-US;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Cookie: _ga=GA1.1.619050710.1589368810; _gid=GA1.1.226986595.1592881951
Upgrade-Insecure-Requests: 1
Pragma: no-cache
Cache-Control: no-cache
```

```
GET /bss/manage/modules/users/menus HTTP/1.1
Host: 10.221.2.21.xip.io:9081
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0
Accept: application/json, text/plain, */*
Accept-Language: zh-CN,en-US;q=0.5
Accept-Encoding: gzip, deflate
Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJvZWd3X3pfSlp5eUFHMV9RTE94anN3T3BJbzhiYTJtaGptRjBta3hFTWU4In0.eyJqdGkiOiJkMmI3MjczOS1lZjU2LTRjYWMtODBhOC03NjQ1ZTczN2Y5OWEiLCJleHAiOjE1OTI5MDMwNDgsIm5iZiI6MCwiaWF0IjoxNTkyOTAyNzQ4LCJpc3MiOiJodHRwczovL2lvcGRldi4xMC4xMTAuMjUuMTIzLnhpcC5pby9hdXRoL3JlYWxtcy9hZC10ZXN0Iiwic3ViIjoiMmNlM2M5NDctMGQ1YS00NTU1LTk0ZWItNmU1OGI5OWU4Mzk5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnNzLWNsaWVudCIsIm5vbmNlIjoiY2ZmNGE1ZTgtZjlmNy00NTU4LWEwYTMtZmVlMGI3ZjdiMjBiIiwiYXV0aF90aW1lIjoxNTkyOTAyNzQ3LCJzZXNzaW9uX3N0YXRlIjoiOTVmOTNmMWQtNDM2Mi00Y2VjLTk3ODItNDZlMzI5ZTk2N2Q0IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsY2JzcyIsImVtYWlsIjoibGNic3NAaW5zcHVyLmNvbSJ9.VX_agU4SXh5AIBaRYicvIrFwRJOZWLA2ZWhAIDDuWKtko003w25eoKppCuO_yk5lBLeEd5_wuHMK-SWAuEfcmKt16lugT8X8K-pgs2YzitdCGs0C-0dDyAZigumJhaLI2u6lDFx3T8FuMxn6gcaN6mK7YV7fhC_JJ0PoNguATEbsLiRu53Jh2dVgNd-sTpvedmU53T8lyk1to2QgGvc7jZ_FKTRleHuukf0ZPktAmDKC3BiqtDYeTVXBVcNnHYMlACo21wFhghLRy8UUDkpwQ_cp4v71IZfkQmwpUdAPUiCw-lXK8HU0KjGSVV8h-zXcWS8s650pXZxe2u1yRUu3TA
Origin: http://10.221.2.4.xip.io:9081
Connection: keep-alive
Referer: http://10.221.2.4.xip.io:9081/product/original-service
Pragma: no-cache
Cache-Control: no-cache
```

`DELETE`

```
DELETE / undefined
Host: localhost:3000
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0
Accept: application/json, text/plain, */*
Accept-Language: zh-CN,en-US;q=0.5
Accept-Encoding: gzip, deflate
Origin: http://localhost:3001
Connection: keep-alive
Referer: http://localhost:3001/
```

[`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 的值仅限于下列三者之一：

- `text/plain`
- `multipart/form-data`
- `application/x-www-form-urlencoded`

---

#### cors

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Preflighted_requests

https://www.ruanyifeng.com/blog/2016/04/cors.html

#### axios

https://github.com/axios/axios

#### 埋点

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/87

#### 浏览器指纹

https://github.com/fingerprintjs/fingerprintjs2

XSS 和 CSRF 以及如果防止 可以延伸到 react 中的\$\$typeof

> 跨域

> http tcp 三次握手

> JSONP
