---
id: install
title: 安装
description: 安装介绍
keywords:
  - Go 
  - go-kitx
slug: /install
---


### 1) 前置准备
1. kitx 
2. kitx


### 1) 微服务单一应用
```javascript
// 创建项目
kitx new --name demo

// 下载依赖
cd demo
go mod download

// 生成di依赖等文件
go generate ./...

```

### 2) 大仓模式
假设已有当前目录如下
```linux
.
├── api
│   └── helloworld
├── app
│   ├── book
│   └── shop
├── third_party
│   ├── errors
│   ├── google
│   └── validate
├── Dockerfile
├── Makefile
├── README.md
├── go.mod
└── go.sum
```

```linux
kitx new --name app/basketball --nomod
```
最终可在app目录下生成basketball项目