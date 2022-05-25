---
slug: etcd-introduction
title: Etcd入门 & go操作
authors: [sado]
tags: [etcd,golang]
date: 2022-05-23T20:35
---

## 一、etcd 

### 1、简介

```js
etcd是使用Go语言开发的一个开源的、高可用的分布式key-value存储系统，可以用于配置共享和服务的注册和发现。

类似项目有`zookeeper`和`consul`。
```



### 2、特点

```js
`完全复制`：集群中的每个节点都可以使用完整的存档
`高可用性`：Etcd可用于避免硬件的单点故障或网络问题
`一致性`：每次读取都会返回跨多主机的最新写入
`简单`：包括一个定义良好、面向用户的API（gRPC）
`安全`：实现了带有可选的客户端证书身份验证的自动化TLS
`快速`：每秒10000次写入的基准速度
`可靠`：使用Raft算法实现了`强一致`、高可用的服务存储目录
```



### 3、应用场景

```js
服务发现
配置中心
分布式锁 - 1.保持独占 2.控制时序
```

注:  `奇数节点原则`



### 4、etcd集群

...



### 5、go 操作 etcd 

`go get go.etcd.io/etcd/clientv3`

[官方文档](https://godoc.org/go.etcd.io/etcd/clientv3)  

##### `PUT GET`

```js
package main

import (
	"context"
	"fmt"
	"time"

	"go.etcd.io/etcd/clientv3"
)

func main() {
	cli, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{"127.0.0.1:2379"},
		DialTimeout: 5 * time.Second,
	})
	if err != nil {
		// handle error!
		fmt.Printf("connect to etcd failed, err:%v\n", err)
		return
	}
    fmt.Println("connect to etcd success")
	defer cli.Close()
	// put
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	_, err = cli.Put(ctx, "kk", "123")
	cancel()
	if err != nil {
		fmt.Printf("put to etcd failed, err:%v\n", err)
		return
	}
	// get
	ctx, cancel = context.WithTimeout(context.Background(), time.Second)
	resp, err := cli.Get(ctx, "kk")
	cancel()
	if err != nil {
		fmt.Printf("get from etcd failed, err:%v\n", err)
		return
	}
	for _, ev := range resp.Kvs {
		fmt.Printf("%s:%s\n", ev.Key, ev.Value)
	}
}
```



##### `WATCH`

```go
package main

import (
	"context"
	"fmt"
	"time"

	"go.etcd.io/etcd/clientv3"
)

func main() {
	cli, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{"127.0.0.1:2379"},
		DialTimeout: 5 * time.Second,
	})
	if err != nil {
		fmt.Printf("connect to etcd failed, err:%v\n", err)
		return
	}
	fmt.Println("connect to etcd success")
	defer cli.Close()
	// watch key:kk change
	rch := cli.Watch(context.Background(), "kk") // <-chan WatchResponse
	for wresp := range rch {
		for _, ev := range wresp.Events {
			fmt.Printf("Type: %s Key:%s Value:%s\n", ev.Type, ev.Kv.Key, ev.Kv.Value)
		}
	}
}
```

命令行操作更改键值

```linux
etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 put kk "123"
OK

etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 del kk
1

etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 put kk "321"
OK
```

`通知`

```js
watch> ./watch
connect to etcd success
Type: PUT Key:kk Value:123
Type: DELETE Key:kk Value:
Type: PUT Key:kk Value:321
```



#####  `LEASE`

```go
package main

import (
	"fmt"
	"time"
)

// etcd lease

import (
	"context"
	"log"

	"go.etcd.io/etcd/clientv3"
)

func main() {
	cli, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{"127.0.0.1:2379"},
		DialTimeout: time.Second * 5,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("connect to etcd success.")
	defer cli.Close()

	// 创建一个5秒的租约
	resp, err := cli.Grant(context.TODO(), 5)
	if err != nil {
		log.Fatal(err)
	}

	// 5秒钟之后, /nazha/ 这个key就会被移除
	_, err = cli.Put(context.TODO(), "/kk/", "123", clientv3.WithLease(resp.ID))
	if err != nil {
		log.Fatal(err)
	}
}
```



`KEEPALIVE`

```go
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.etcd.io/etcd/clientv3"
)

// etcd keepAlive

func main() {
	cli, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{"127.0.0.1:2379"},
		DialTimeout: time.Second * 5,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("connect to etcd success.")
	defer cli.Close()

	resp, err := cli.Grant(context.TODO(), 5)
	if err != nil {
		log.Fatal(err)
	}

	_, err = cli.Put(context.TODO(), "/kk/", "123", clientv3.WithLease(resp.ID))
	if err != nil {
		log.Fatal(err)
	}

	// the key 'foo' will be kept forever
	ch, kaerr := cli.KeepAlive(context.TODO(), resp.ID)
	if kaerr != nil {
		log.Fatal(kaerr)
	}
	for {
		ka := <-ch
		fmt.Println("ttl:", ka.TTL)
	}
}
```



### 6、分布式锁

```go
cli, err := clientv3.New(clientv3.Config{Endpoints: endpoints})
if err != nil {
    log.Fatal(err)
}
defer cli.Close()

// 创建两个单独的会话用来演示锁竞争
s1, err := concurrency.NewSession(cli)
if err != nil {
    log.Fatal(err)
}
defer s1.Close()
m1 := concurrency.NewMutex(s1, "/my-lock/")

s2, err := concurrency.NewSession(cli)
if err != nil {
    log.Fatal(err)
}
defer s2.Close()
m2 := concurrency.NewMutex(s2, "/my-lock/")

// 会话s1获取锁
if err := m1.Lock(context.TODO()); err != nil {
    log.Fatal(err)
}
fmt.Println("acquired lock for s1")

m2Locked := make(chan struct{})
go func() {
    defer close(m2Locked)
    // 等待直到会话s1释放了/my-lock/的锁
    if err := m2.Lock(context.TODO()); err != nil {
        log.Fatal(err)
    }
}()

if err := m1.Unlock(context.TODO()); err != nil {
    log.Fatal(err)
}
fmt.Println("released lock for s1")

<-m2Locked
fmt.Println("acquired lock for s2")
```

`输出`

```linux
acquired lock for s1
released lock for s1
acquired lock for s2
```

