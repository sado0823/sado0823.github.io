---
id: layout
title: 目录结构
description: 目录结构介绍
keywords:
  - Go 
  - go-kitx
slug: /layout
---

### 1) 微服务单一应用
```javascript
.
├── api
│   └── helloworld  // 管理pb文件以及生成的pb
│       └── v1
├── cmd
│   └── main.go
├── configs // 配置文件源文件目录
│   └── config.yaml
├── internal
│   ├── conf  // 配置文件结构体目录, 采用pb管理, 使用方式可以参考generate.go的go脚本
│   │   ├── conf.proto
│   │   └── generate.go
│   ├── dao // 主要dao层代码编写文件夹, 需要细分可以分为dao.http,dao.grpc,dao.db,dao.databus
│   │   ├── book.go
│   │   ├── dao.go
│   │   └── shop.go
│   ├── di  // 依赖注入目录, 一般不需要更改
│   │   ├── app.go
│   │   ├── generate.go
│   │   └── wire.go
│   ├── server  // 启动http服务,grpc服务, 提供给di注入
│   │   ├── grpc
│   │   └── http
│   └── service // 主要的逻辑代码编写文件夹
│       ├── book.go
│       ├── service.go
│       └── shop.go
├── third_party // 统一管理依赖的三方pb文件等
│   ├── errors  // 用于生成pb error
│   │   └── errors.proto
│   ├── google  // google pb api
│   │   ├── api
│   │   └── protobuf
│   └── validate  // 用于生成pb验证器,对配置文件的验证,api request验证等 
│       ├── README.md
│       └── validate.proto
├── Dockerfile
├── Makefile
├── README.md
├── go.mod
└── go.sum
```


### 2) 大仓模式
```linux
.
├── api
│   └── book  // 这里存放了需要的pb文件,包括pb_error,pb_http,pb_grpc, 可以移动到对应app/xxx管理
├── app
│   ├── book  // 对应大仓里具体某一个微服务 (书本服务)
│   └── shop  // 商店服务
├── third_party // 统一管理依赖的三方pb文件等
│   ├── errors
│   ├── google
│   └── validate
├── Dockerfile
├── Makefile
├── README.md
├── go.mod
└── go.sum
```