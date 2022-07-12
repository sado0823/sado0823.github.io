---
slug: climb-stairs-dp
title: 从"爬楼梯"了解动态规划算法
authors: [sado]
tags: [golang, algorithm, dp]
date: 2022-07-12T14:36
---

# 从"爬楼梯"了解动态规划算法
<!--truncate-->


## 1) "爬楼梯"问题
"爬楼梯"即为`leetcode`第70题, 题目原文如下:
```js
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

// 示例 2：
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

// 提示：
1 <= n <= 45
```
 
## 2) 了解动态规划

### 1) 简介
&ensp;&ensp;&ensp;&ensp; 动态规划(dynamic programming)是运筹学的一个分支，
是求解决策过程(decision process)最优化的数学方法。
20世纪50年代初美国数学家R.E.Bellman等人在研究多阶段决策过程(multistep decision process)的优化问题时，
提出了著名的最优化原理(principle of optimality)，把多阶段过程转化为一系列单阶段问题，利用各阶段之间的关系，
逐个求解，创立了解决这类过程优化问题的新方法——动态规划。[wiki](https://zh.m.wikipedia.org/zh-hans/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)

### 2) 状态转移方程
todo

### 3) 自顶向下
`top-down`
```go
package main

import "fmt"

func main() {
	fmt.Println(climbStairs(44))
}

func climbStairs(n int) int {
  // 动态规划
	// f(0)=f(1)=1
	// f(2)=f(0)+f(1)=2
	// f(3)=f(2)+f(1)=2+1=3
	// f(4)=f(3)+f(2)=3+2=5
	// ...
	// f(x) = f(x-1) + f(x-2)
	// 自顶向下: 直接递归理论上可行,可能超时
	// climbStairs(n-1) + climbStairs(n-2)
  if n == 0 || n == 1 {
    return 1
  }
  return climbStairs(n-1) + climbStairs(n-2)
}
```

### 4) 带备忘的自顶向下
`top-down with memoization`
```go
package main

import "fmt"

func main() {
	fmt.Println(climbStairs(44))
}

func climbStairs(n int) int {
	// 动态规划
	// f(0)=f(1)=1
	// f(2)=f(0)+f(1)=2
	// f(3)=f(2)+f(1)=2+1=3
	// f(4)=f(3)+f(2)=3+2=5
	// ...
	// f(x) = f(x-1) + f(x-2)
	// 自顶向下: 直接递归理论上可行,可能超时
	// climbStairs(n-1) + climbStairs(n-2)
	// 优化: 带备忘的自顶向下法,优化时间复杂度 (top-down with memoization)
	v, ok := memo[n]
	if ok {
		return v
	}
	v1, ok1 := memo[n-1]
	v2, ok2 := memo[n-2]
	if ok1 && ok2 {
		return v1 + v2
	}

	if ok1 {
		v2 := climbStairs(n - 2)
		memo[n-2] = v2
		return v1 + v2
	}

	if ok2 {
		v1 := climbStairs(n - 1)
		memo[n-1] = v1
		return v1 + v2
	}

	v1 = climbStairs(n - 1)
	memo[n-1] = v1
	v2 = climbStairs(n - 2)
	memo[n-2] = v2

	return v1 + v2
}
```

### 5) 自底向上
`bottom-up method`
```go
package main

import "fmt"

func main() {
	fmt.Println(climbStairs(44))
}

func climbStairs(n int) int {
	// 动态规划
	// f(0)=f(1)=1
	// f(2)=f(0)+f(1)=2
	// f(3)=f(2)+f(1)=2+1=3
	// f(4)=f(3)+f(2)=3+2=5
	// ...
	// f(x) = f(x-1) + f(x-2)
	// 自底向上法, 滚动数组(从小到大): bottom-up method
	left, right, count := 0, 0, 1
	for i := 1; i <= n; i++ {
		left = right
		right = count
		count = left + right
	}
	return count
}
```

## 3) 使用动态规划
...