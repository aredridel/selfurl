selfurl
========

Get a request's full URL

Use
----

```
http.createServer((req, res) => {
    const url = selfurl(req)
    res.end(url)
})
```

Works great with zeit `micro`!


