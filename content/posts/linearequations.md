---
title: "Linear ODEs and Integrating Factors"
math: true
date: 2026-02-06T19:59:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Differential Equations"]
draft: false
---
&emsp;So far, we have considered how to solve separable and homogeneous ordinary differential equations. We know that separable equations are rather easy to solve with straightforward integration. As for homogeneous equations, we use substitution to change their form into a separable equation, and then solve them.  
&emsp;Similarly, we will consider linear ODEs and how to convert them into easily-integrable equations, here by integrating factors.  
&emsp;We begin by giving three definitions.

**Definition 1**
An integrating factor is a function by which an ordinary differential equation can be multiplied to make it integrable.

**Definition 2**
In first-order linear ODEs, standard form usually means writing the equation so that the coefficient of the highest-order derivative, i.e., $y'(x)$ or $\frac{dy}{dx}$, is $1$.

**Definition 3**
Let $y$ be a function of $x$ and so $x$ is an independent variable and $y$ is a dependent variable. An ordinary, first-order and linear differential equation is given by

$$a(x)\left(\frac{dy}{dx}\right) +b(x)y = r(x),$$

where $a(x)$, $b(x)$ and $r(x)$ are arbitrary differentiable functions of $x$ or constants.

&emsp;For example, the following first-order ODEs are linear:

$$
x\left(\frac{dy}{dx}\right) + 2y =\frac{\sin(x)}{x}, \qquad \frac{dy}{dx} +2xy =6x^2, \qquad \left(\frac{\ln(\tan(x))}{e^{x}x^{12}}\right)\left(\frac{dy}{dx}\right)+12x^2y = 0.
$$

&emsp;It is instructive to derive the integrating factor for a first-order linear ODE to gain intuition.  
&emsp;Let $\mu=\mu(x)$ be an integrating factor for the first-order linear ODE

$$a(x)\left(\frac{dy}{dx}\right) +b(x)y = r(x).$$

&emsp;By the definition of an integrating factor, multiplying the given ODE by $\mu$ allows the left-hand side to be written as a total derivative, i.e., we have a directly integrable ODE.  
&emsp;Now, we have

$$\mu \cdot a(x)\left(\frac{dy}{dx}\right) + \mu \cdot b(x)y = \mu \cdot r(x).$$

&emsp;It follows that

$$\mu \cdot \left(\frac{dy}{dx}\right) + \mu \cdot \frac{b(x)}{a(x)}y = \mu \cdot \frac{r(x)}{a(x)}.$$

Here, apply the substitution $P(x)=\frac{b(x)}{a(x)}$ and $Q(x) = \frac{r(x)}{a(x)}$ to obtain the standard form. We get

$$\mu(x) \cdot \left(\frac{dy}{dx}\right) + \mu(x) P(x)y = \mu(x) Q(x).$$

&emsp;Assume that the left-hand side can be expressed as $\frac{d}{dx}[\mu(x)y]$.
Now, by the product rule, we must have

$$\mu(x) \cdot \left(\frac{dy}{dx}\right) +\mu'(x)y =\mu(x) \cdot \left(\frac{dy}{dx}\right) + \mu(x)P(x)y$$

and so $\mu'(x)y=\mu(x)P(x)y$.  
&emsp;Supposing that $y \neq 0$, we can rewrite the above equation as follows:

$$\frac{\mu'(x)}{\mu(x)} = P(x).$$

And then, integrating both sides with respect to $x$, we get the general formula of the integrating factor as follows:

$$
\begin{aligned}
&\int \frac{\mu'(x)}{\mu(x)}\ dx = \int P(x)\ dx \\
&\ln{\mu(x)} = \int P(x)\ dx \quad \text{(Here, the additive constant } +C \text{ can be absorbed into } \mu \text{.)} \\
&\mu(x)=e^{\int P(x)\ dx}.
\end{aligned}
$$

&emsp;Considering the derivation, we can write a formula.  
&emsp;**Formula.** Let a first-order linear ODE be given by

$$\frac{dy}{dx} +  P(x)y = Q(x).$$

&emsp;Then, the integrating factor is given by

$$\mu=\mu(x)=e^{\int P(x)\ dx}.$$

---

### &emsp;<span style="color: blue">Example (1)</span>
Consider the following first-order linear ODE and find a general solution to it using an integrating factor $\mu=\mu(t)=t^2$.

$$ty'+3y=\frac{2}{t}.$$

&emsp;In some problems similar to this, we are given the integrating factor and asked to use it to find a general solution, rather than finding the integrating factor manually.

&emsp;**<span style="color: orange">Solution:</span>**  
&emsp;Multiply the whole ODE by $\mu$. We have

$$t^3y'+3t^2y=2t.$$

&emsp;We can observe that, by an inspection of the product rule, the left-hand side can be rewritten as $\frac{d}{dt}[t^3y]$ and so we get

$$\frac{d}{dt}[t^3y] = 2t.$$

&emsp;It follows from integration that

$$
\begin{aligned}
&\int \frac{d}{dt}[t^3y]\ dt = \int 2t\ dt \\
&t^3y = t^2 + C \\
&y=\frac{1}{t} + \frac{C}{t^3}
\end{aligned}
$$

is the general solution.

---

### &emsp;<span style="color: blue">Example (2)</span>
Consider the following first-order linear ODE and find a solution to the IVP

$$x\frac{dy}{dx} + 2y = \frac{\sin x}{x}, \quad y(1)=0.$$

&emsp;**<span style="color: orange">Solution:</span>**  
&emsp;Firstly, we will find an integrating factor using the formula we have explained, then find a general solution and finally solve the IVP using the initial condition $y(1)=0$.  
&emsp;Let us write the standard form of the ODE dividing by $x$. Here, we note that we are assuming $x \neq 0$ (locally).

$$\frac{dy}{dx} + \left(\frac{2}{x}\right)y= \frac{\sin x}{x^2}.$$

&emsp;By the formula, we have the integrating factor given by

$$\mu=\mu(x)=e^{\int \frac{2}{x}\ dx}=e^{2\ln x}=(e^{\ln x})^2 = x^2.$$

&emsp;Now, multiplying the whole ODE, i.e., both the right-hand and left-hand sides by $\mu$, we obtain

$$x^2\frac{dy}{dx} + 2xy =\sin x.$$

and so, by the product rule, we write

$$
\begin{aligned}
&\frac{d}{dx}[x^2y] = \sin x \\
&\int \frac{d}{dx}[x^2y]\ dx = \int \sin x\ dx \\
&x^2y = -\cos x + C \\
&y=y(x)=\frac{-\cos x}{x^2} + \frac{C}{x^2}.
\end{aligned}
$$

&emsp;Therefore, the general solution of the ODE is given by

$$y(x)=\frac{-\cos x}{x^2} + \frac{C}{x^2}.$$

&emsp;Consider the initial condition by plugging in $y(1)=0$, i.e, plug in $y=0$ and $x=1$ simultaneously.  
&emsp;We have

$$
\begin{aligned}
&0= \frac{-\cos 1}{1} + \frac{C}{1} \\
&C=\cos 1.
\end{aligned}
$$

&emsp;Finally, we conclude that the solution of the IVP is given by

$$y=\frac{\cos 1-\cos x}{x^2}.$$

{{< pdf "Linear_Equations_and_Integrating_Factors.pdf" >}}