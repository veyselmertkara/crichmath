---
title: "Two Nice Induction Examples"
date: 2026-02-14T17:09:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Elementary Number Theory"]
draft: false
math: true
---

### <span style="color: blue">Example (1)</span>
Prove by induction that the following equality holds for all integers $k \geq 1$:

$$
\frac{1}{1 \cdot 3 } + \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} + \dots + \frac{1}{(2k-1) \cdot (2k+1)} = \frac{k}{2k+1}.
$$

**<span style="color: orange">Solution:</span>**

We will do a proof by induction.

**Induction Basis:**
Observe that, when we consider the base case, i.e., $k=1$, we have that 

$$
\frac{1}{1 \cdot 3} = \frac{1}{3} = \frac{1}{2 \cdot 1+ 1}.
$$

Therefore, the statement is satisfied for the base case.

**Inductive Step:**
Assume, for a fixed but an arbitrary $n \in \{a \in \mathbb{N} \mid a \geq 1\}$, that we have 

$$
\frac{1}{1 \cdot 3 } + \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} + \dots + \frac{1}{(2n-1) \cdot (2n+1)} = \frac{n}{2n+1}.
$$

*(Induction Hypothesis/Assumption)*

We wish to show that the statement is also true for $n+1$. Now, observe that, by induction assumption, we have 

$$
\begin{aligned}
\frac{1}{1 \cdot 3 } + \dots + \frac{1}{(2(n+1)-1) \cdot (2(n+1)+1)} &= \frac{n}{2n+1} + \frac{1}{(2(n+1)-1) \cdot (2(n+1)+1)} \\\\
&= \frac{n}{2n+1} + \frac{1}{(2n+1) \cdot (2n+3)} \\\\
&= \frac{n \cdot (2n+3)}{(2n+1) \cdot (2n+3)} + \frac{1}{(2n+1) \cdot (2n+3)} \\\\
&= \frac{2n^2 + 3n + 1}{(2n+1) \cdot (2n+3)} \\\\
&= \frac{(2n+1) \cdot (n+1)}{(2n+1) \cdot (2n+3)} \\\\
&= \frac{n+1}{2n+3} \\\\
&= \frac{n+1}{2(n+1) + 1}.
\end{aligned}
$$

Therefore, the statement also holds for $n+1$.

Hence, by PMI (Principle of Mathematical Induction), the theorem follows.

---

### <span style="color: blue">Example (2)</span>
Using induction, prove that

$$
2^n + n^2 < 3^n
$$

for all integers $n \geq 4$.

**<span style="color: orange">Solution:</span>**

We will do a proof by induction.

**Induction Basis:**
Observe that, for the base case, i.e., $n=4$, we have 

$$
\left. (2^n + n^2) \right|_{n=4} = 2^4  + 4^2 = 32 \quad \text{and} \quad \left. 3^n \right|_{n=4} = 3^4 = 81.
$$

We know that $81 > 32$ and hence, for the base case, the statement holds.

**Inductive Step:**
Assume, for a fixed but an arbitrary $k \in \{a \in \mathbb{N} \mid a \geq 4\}$, that we have 

$$
2^k + k^2 < 3^k.
$$

*(Induction Hypothesis/Assumption)*

We wish to show that the statement also holds for $k+1$. Now, by induction assumption, we have 

$$
\begin{aligned}
2^{k+1} + (k+1)^2 &= 2 \cdot 2^k + k^2 + 2k + 1 \\\\
&= (2^k + k^2) + 2^k + 2k + 1 \\\\
&< 3^k + 2^k + 2k + 1.
\end{aligned}
$$

Here, we can see that $3^{k+1} = 3^k \cdot 3 = 3^k + 3^k + 3^k = 3^k + 2 \cdot 3^k$. Furthermore, we notice that $2^k < 3^k$, as $k$ is a natural number and $3 > 2$. Also, $3^k > 2k+1$. We note that this fact is obvious and will not be proven here, but it can be shown utilizing some calculus and the initial condition $k=4$.

Now, we have $3^k > 2^k \wedge 3^k > 2k+1 \implies 2 \cdot 3^k > 2^k + 2k + 1$. It is finally followed by

$$
3^k + 2^k + 2k + 1 < 3^k + 2 \cdot 3^k = 3 \cdot 3^k = 3^{k+1}
$$

and so

$$
2^{k+1} + (k+1)^2 < 3^{k+1}.
$$

Hence, by PMI (Principle of Mathematical Induction), the theorem follows.