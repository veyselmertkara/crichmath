---
title: "Separable Equations"
date: 2026-01-20T23:59:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Differential Equations","Archive"]
draft: false
---

&emsp;Now, we consider some specific methods to solve differential equations. The aim is mostly to consider $y$ as a variable dependent on $x$ and solve the equation for $y$. It is, however, common to leave the expressions in implicit forms. One of the most elementary types of differential equations is separable equations.   
&emsp;A first-order differential equation is said to be separable if it can be written in a form where all terms involving the dependent variable $y$ and its differential $dy$ appear on one side of the equation, while all terms involving the independent variable $x$ and its differential $dx$ appear on the other side.  
It looks like the following:

$$
\frac{dy}{dx}=\frac{f(x)}{g(y)}
$$

or, in a better way,

$$
g(y)dy=f(x)dx
$$

Here, we construct our equation in such a form so that we can integrate easily. It is trivial to apply:

$$
\int g(y)dy=\int f(x)dx
$$

Letting, by Fundamental Theorem of Calculus, $F$ be an anti-derivative of $f$, and $G$ be an anti-derivative of $g$, we obtain:

$$
G(y)+C_{1}=F(x)+C_{2}
$$

Of course, $C_{1}$ and $C_{2}$ are arbitrary constants. Therefore, we can simply collect the constants in one side and say:

$$
G(y)=F(x)+C.
$$

<br><br>

<span style="color: blue">Example (1)</span> Solve the following differential equation for $y$ explicitly.

$$
\frac{dy}{dx}=3y^{2}x^{2}
$$

<span style="color: orange">Solution:</span> We wish to, firstly, collect the terms involving $dy$ and $y$, and, $dx$ and $x$ in different sides. Here, we obtain

$$
\frac{dy}{3y^{2}}=x^{2}dx.
$$

The rest is trivial integration.

$$ \int\frac{1}{3y^{2}}dy = \int x^{2}dx $$

$$ -\frac{1}{3y}+C_{1} = \frac{x^{3}}{3}+C_{2} $$

$$ -\frac{1}{3y} = \frac{x^{3}}{3}+C $$

$$ y=y(x) = -\frac{1}{x^{3}+\tilde{C}} $$

<br><br>

<span style="color: blue">Example (2)</span> Solve the following differential equation for $y$ explicitly

$$
y^{\prime}=7(x+6)(y^{2}+1)
$$

<span style="color: orange">Solution:</span> Now, observe that, in the equation in the example, there exists no explicit differentials. We, however, know that $y^{\prime}$ can be also expressed as $\frac{dy}{dx}$. Here, we note that, as a matter of fact, different notations of derivatives have historical meanings, but, in the course of differential equations, it makes it much easier to use Leibniz notation, that is, $\frac{dy}{dx}$. If the reader wants further information about the topic, $y^{\prime}$ is referred as Lagrange's notation, and $\dot{y}$ is referred as Newton's notation (of derivatives).

Now, the motivation to solve the equation stays the same. We have:

$$
\frac{dy}{dx}=7(x+6)(y^{2}+1)
$$

which is followed by

$$
\frac{dy}{y^{2}+1}=7(x+6)dx
$$

Then, we may apply integration as follows,

$$ \int\frac{1}{y^{2}+1}dy = \int7(x+6)dx $$

$$ \arctan(y) = \frac{7x^{2}}{2}+42x+C $$

Here, we note that it is natural to leave $\arctan(y)$, since the transformation from $\arctan(y)$ to $y$ requires a careful analysis of the interval of $y,$ as the inverse trigonometric functions are defined on restricted intervals.

{{< pdf "Separable_Equations.pdf" >}}