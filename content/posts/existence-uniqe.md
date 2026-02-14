---
title: "Existence and Uniqueness Theorem for 1st Order ODEs"
date: 2026-02-14T16:59:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Differential Equations"]
draft: false
math: true
---

In the previous sections, we have focused on initial value problems. This naturally raises the question: does every initial value problem admit a solution for a given ordinary differential equation, and if a solution exists, is it necessarily unique?  
&emsp;To illustrate this issue, consider the differential equation

$$
\frac{dy}{dx} = \frac{1}{x}.
$$

Since the equation is separable, we may write

$$
\int 1\, dy = \int \frac{1}{x}\, dx,
$$

which yields the general solution

$$
y = \ln |x| + C.
$$

&emsp;Now suppose we are given the initial condition $y(0) = 1$. This initial condition cannot be satisfied by the general solution, since the function $\ln |x|$ is undefined at $x = 0$. Consequently, although the differential equation itself is well defined for $x \neq 0$, there exists no solution that satisfies the given initial condition.  
&emsp;This example demonstrates that an initial value problem may fail to have a solution if the initial condition lies outside the domain of definition of the differential equation or its solutions.  
&emsp;Consider the Initial Value Problem (IVP):

$$
\begin{aligned}
\frac{dy}{dt} &= F(t, y) \\
y(t_0) &= y_0
\end{aligned}
$$

> **Theorem Statement**
> Suppose that $F(t, y)$ and $\frac{\partial F}{\partial y}$ are continuous on a rectangle containing the point $(t_0, y_0)$.  
&emsp;Then, the IVP has a **unique solution** near $(t_0, y_0) \in \mathbb{R}^2$.

*Geometric Interpretation:* If we consider a rectangle in the $ty$-plane containing $(t_0, y_0)$, and if the continuity conditions are met within this rectangle, we are guaranteed a unique solution curve passing through $(t_0, y_0)$ within some interval near $t_0$.

---

## Linear vs Nonlinear ODEs and the Existence-Uniqueness Theorem

### <span style="color: blue">Example 1: Linear ODE</span>

**Problem:** Find the largest interval on which the initial value problem

$$
(4-t^2)y^{\prime} - 2ty = \arctan t, \quad y(-1) = 3
$$

has a unique solution.

**<span style="color: orange">Solution:</span>**

First, rewrite the differential equation in the standard linear form $y^{\prime} + p(t)y = q(t)$:

$$
y^{\prime} - \frac{2t}{4-t^2}y = \frac{\arctan t}{4-t^2}
$$

Here, we identify:

$$
p(t) = -\frac{2t}{4-t^2} \quad \text{and} \quad q(t) = \frac{\arctan t}{4-t^2}
$$

According to the Existence-Uniqueness Theorem for linear equations, we need to find where $p(t)$ and $q(t)$ are continuous. The term $(4-t^2)$ appears in the denominator, so we must ensure it is not zero:

$$
4-t^2 \neq 0 \implies t^2 \neq 4 \implies t \neq \pm 2
$$

The domain is divided into three intervals:

$$
(-\infty, -2) \cup (-2, 2) \cup (2, \infty)
$$

&emsp;We are given the initial condition $y(-1) = 3$. The initial point is $t_0 = -1$. We must choose the interval that contains $t_0 = -1$.  
&emsp;Since $-1 \in (-2, 2)$, the largest interval on which a unique solution exists is:

$$
(-2, 2)
$$

---

### <span style="color: blue">Example 2: Non-Linear ODE (Regular Case)</span>

**Problem:** Is there a unique solution to the IVP:

$$
y^{\prime} = y^{1/3}, \quad y(0) = 1
$$

near the point $(0, 1)$?

**<span style="color: orange">Solution:</span>**

Here, $F(t, y) = y^{1/3}$. This is a non-linear, 1st order ODE.

1.  **Check continuity of $F(t,y)$:** $F(t, y) = y^{1/3}$ is continuous near $(0, 1)$.
2.  **Check continuity of $\frac{\partial F}{\partial y}$:** Calculate the partial derivative:

$$
\frac{\partial F}{\partial y} = \frac{1}{3}y^{-2/3} = \frac{1}{3y^{2/3}}
$$

We evaluate this near the point $(0, 1)$. At $y=1$:

$$
\frac{1}{3(1)^{2/3}} = \frac{1}{3}
$$

The partial derivative is defined and continuous near $y=1$.

**Conclusion:** Since both $F$ and $\frac{\partial F}{\partial y}$ are continuous on a rectangle containing $(0, 1)$, by the Existence-Uniqueness Theorem, there **is a unique solution** to the ODE near $(0, 1)$.

---

### <span style="color: blue">Example 3: Non-Linear ODE (Singular Case)</span>

**Problem:** Is there a unique solution to the IVP:

$$
y^{\prime} = y^{1/3}, \quad y(0) = 0
$$

near the point $(0, 0)$?

**<span style="color: orange">Analysis:</span>**

Check the conditions of the Existence-Uniqueness Theorem:

$$
\frac{\partial F}{\partial y} = \frac{1}{3y^{2/3}}
$$

At the initial point $(0, 0)$, $y=0$. The derivative involves division by zero, so it is **not continuous** (undefined) at $y=0$.

**Conclusion:** The Existence-Uniqueness Theorem does **NOT** apply near $(0, 0)$.

**Solving the ODE:**

Let's try to solve it to see what happens.
$$
\frac{dy}{dt} = y^{1/3}
$$
Using separation of variables ($y \neq 0$):



$$
\begin{aligned}
\int y^{-1/3} \, dy &= \int dt \\\\
\frac{y^{2/3}}{2/3} &= t + C \\
\implies \frac{3}{2}y^{2/3} &= t + C
\end{aligned}
$$

Apply the initial condition $y(0) = 0$:

$$
\frac{3}{2}(0)^{2/3} = 0 + C \implies C = 0
$$

So,

$$
\frac{3}{2}y^{2/3} = t \implies y^{2/3} = \frac{2}{3}t
$$

Raising both sides to the power $\frac{3}{2}$:

$$
y^2 = \left(\frac{2t}{3}\right)^3 \implies y(t) = \pm \sqrt{\left(\frac{2t}{3}\right)^3}
$$

This gives us two solutions for $t \ge 0$. Additionally, by inspection, the trivial solution $y(t) \equiv 0$ also satisfies $y^{\prime} = y^{1/3}$ and $y(0)=0$.

**Result:** Thus, there are three solutions:

1. $y(t) = \sqrt{\left(\frac{2t}{3}\right)^3}$
2. $y(t) = -\sqrt{\left(\frac{2t}{3}\right)^3}$
3. $y(t) = 0$

That is, the solution exists, but is **not unique**.

{{< pdf "Existence_Uniqueness_Theorem.pdf" >}}