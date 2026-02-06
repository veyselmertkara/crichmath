---
title: "Strong Induction"
date: 2026-01-30T21:28:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Elementary Number Theory","Archive"]
draft: false
---

&emsp;**Theorem.(Strong Induction)** Let $\phi(n)$ be a property of natural numbers. Suppose that $\phi(1)$ holds and for all $n \in \mathbb{N}$, if $\phi(1)$, $\phi(2)$, $\dots$, $\phi(n)$ hold, then $\phi(n+1)$ holds. Then $\phi(n)$ holds for all $n \in \mathbb{N}$.  
&emsp;Also, we can express this theorem in a similar way to what we did in the previous note as follows:  
&emsp;Let $S \subseteq \mathbb{N}$. If

&emsp;1. $1 \in S$  
&emsp;2. If $k \in S$, and $\\{1,2,3, \dots, k\\} \subseteq S$, then $k+1 \in S$

then, $S=\mathbb{N}$.

<br>

&emsp;<span style="color: blue">Example:</span> Given integer $n \geq 0$, define $a_n$ recursively as follows:

$$ a_0=1, $$

$$ a_1=3, $$

$$ a_n=2a_{n-1} - a_{n-2} \quad \text{for $n \geq 2$} $$

Show that for all $n \geq 0$, $a_n=2n+1.$

&emsp;<span style="color: orange">Solution: </span>  
&emsp;Firstly, it should be noted that in this problem, $\mathbb{N}$ is considered as $\mathbb{N}=\\{0,1,2,3, \dots \\}$, unlike our previous problems or the lecture notes on number theory in general.  
&emsp;We will solve the problem by Strong Mathematical Induction.  
&emsp;Firstly, we can straightforwardly see that the statement is true, since

$$ a_0=1=2 \cdot 0 +1 $$

$$ a_1=3=2 \cdot 1 +1 $$

$$ a_2=2 \cdot a_1 - a_0 = 5 = 2 \cdot 2 +1 $$

$$ a_3=2 \cdot a_2 - a_1 = 7 = 2 \cdot 3 + 1 $$

$$ \vdots $$

$$ a_n=2n+1 $$

Proof by Induction(Strong Induction):  
&emsp;**Induction Basis:**
&emsp;For $n=0$, we can observe that $a_0=1=2 \cdot 0 +1$. So, for the base case, the statement is correct.  
&emsp;**Inductive Step:**  
&emsp;Assume, for a fixed but an arbitrary natural number $k \geq 0$ such that $0 \leq i \leq k$, that $a_i=2i+1$(Induction Hypothesis/Assumption). We will show that $a_{k+1} = 2(k+1) + 1$.  
&emsp;Here, it should be noticed that, since $a_i=2i+1$ is satisfied when $i=0$ and $i=1$ and furthermore $i=2$, we can assume that $k \geq 2$. It follows from the definition of $a_n$ that $a_k=2a_{k-1} - a_{k-2}$. But then, by induction hypothesis, since $k\geq2 \geq 0$ and thus $k-1 \geq 1 \geq 0$ , we obtain

$$
a_{k+1}=2a_{k} - a_{k-1} = 2(2(k)+1)-[2(k-1)+1],
$$

and so

$$
a_k=(4k+2)-(2k-1),
$$

which is followed by

$$
a_{k+1} =2k+3=2(k+1) + 1.
$$

Hence, by principle of strong induction, for all $n \geq 0$, $a_n=2n+1.$

{{< pdf "Strong_Induction.pdf" >}}