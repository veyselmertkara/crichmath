---
title: "Exact Equations and Integrating Factors"
date: 2026-02-14T17:09:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Differential Equations"]
draft: false
math: true
---

# 1 Exact Equations

Let us consider the case of an arbitrary first order ODE. Say that, once again, our independent variable is $x$ and dependent variable is $y$. Suppose for a moment that we found the solutions of the equation and they can be written in the implicit form given by 

$$
F(x,y)=C.
$$

Here, we leave the constant $C$ alone, but of course, the solutions depend on the arbitrary constant $C$.  
&emsp;Now, take the total derivative of both sides with respect to $x$. By the chain rule, we have

$$
\frac{d}{dx} F(x,y(x)) = \frac{\partial F}{\partial x} + \frac{\partial F}{\partial y} \frac{dy}{dx} = 0
$$

and so

$$
\frac{dy}{dx}=-\frac{\partial F/\partial x}{\partial F/ \partial y}.
$$

&emsp;The real question is whether or not we are able to reverse this process. Namely, given the ODE, can we recover such a function $F(x,y)$?  
&emsp;Let us write the ODE in a more symmetric form by:

$$
M(x,y) + N(x,y)\frac{dy}{dx}=0.
$$

Here, we equivalently write

$$
M(x,y)dx + N(x,y)dy=0.
$$

In fact, this is the general way to write exact ODEs.  
&emsp;Note that it’s important that it must be in this form! There must be an “= 0” on one side and the sign separating the two terms must be a “+”.

**Definition 1**
The equation $M(x,y)dx+N(x,y)dy=0$ is called exact on a domain $D$ if there exists a differentiable function $F(x,y)$ on $D$ such that the left-hand side of the equation can be written as $d(F(x,y))$ on $D$.

**Definition 2**
Such a function $F=F(x,y)$ is called a **potential** for the equation.

&emsp;By the chain rule, the condition can be rewritten as: The ODE $M(x,y)dx+N(x,y)dy=0$ is called <span style="color: red">exact</span>, if 

$$
\frac{\partial F}{\partial x}=M, \quad \frac{\partial F}{\partial y}=N.
$$

&emsp;**Recall. (Test for Exactness)**
An ODE $M(x,y)dx+N(x,y)dy=0$ is exact, if 

$$
\frac{\partial M(x,y) }{\partial y}=\frac{\partial N(x,y)}{\partial x}.
$$

&emsp;The reason for this test is straightforward. Let $M(x,y)dx+N(x,y)dy=0$ be an exact ODE. Then, since the ODE is exact, there exists a potential $\psi$ such that $\psi_x=M$ and $\psi_y=N$. Now, provided that $\psi$ is a differentiable function, by a theorem, due to the equality of the mixed partials, we have $\psi_{xy}=\psi_{yx}$. This forces that 

$$
\frac{\partial}{\partial y}M=\frac{\partial }{\partial x}N.
$$

---

# 2 Examples

* Consider the ODE given by $ydx + (x+2y)dy=0$. We observe that $\frac{\partial }{\partial y}y=1=\frac{\partial }{\partial x}(x+2y)$. Therefore, the ODE is exact.
* Consider the ODE given by $3e^ydx +(2y+xe^y)=0$. We observe that $\frac{\partial}{\partial y}(3e^y)=3e^y$ and $\frac{\partial}{\partial x}(2y+xe^y)=e^y$. Since $3e^y \neq e^y$, the ODE is not exact.
* Consider the ODE given by $ydx+xdy=0$. It is easy to see that $\frac{\partial }{\partial y}y=1=\frac{\partial }{\partial x}x$, so, the ODE is exact.

---

# 3 Method to Solve Exact ODEs

Considering the definition of exact ODEs, as we followed a derivation backwards, we, in fact, wish to find a solution given in the implicit form by 

$$
F(x,y)=C,
$$

where $C$ is an arbitrary constant.  
&emsp;Now, we know that such $F$ is a potential for the ODE. Even though we are not given the potential, we are given, in such problems, $M$ and $N$. So, we use the fact that $F_{xy}=F_{yx}$ and $F_x=M$ and $F_y=N$. Then, we will use integration two times to obtain a potential $F$.  
&emsp;Finally, $F=F(x,y)=C$ will be the general solution, where $C$ is an arbitrary constant.

---

### <span style="color: blue">Example (1)</span>
Solve the IVP given by

$$
ydx +(x+2y)dy=0, \qquad y(1)=5.
$$

**<span style="color: orange">Solution:</span>**

&emsp;Now, firstly, let us determine whether or not the ODE is exact. Observe that $\frac{\partial}{\partial y}y=\frac{\partial}{\partial x}(x+2y)=1$. So, the ODE is exact.  
&emsp;Now, assume that $\phi$ is a potential for the ODE. Then, by the definition of potential, we have $\phi_x=y$ and $\phi_y=x+2y$. It follows that $\int \phi_x\ dx=\int \phi_y\ dy =\phi$. Consider 

$$
\int y\ dx =xy + C(y).
$$

Here, $C(y)$ is a function of only $y$, as the derivative of $C(y)$ with respect to $x$ is identically zero. We have obtained that $\phi=\int y\ dx =xy + C(y)$. Then,

$$
\phi_y=x+2y=\frac{\partial}{\partial y}\phi=\frac{\partial}{\partial y}(xy +C(y))=x+C^{\prime}(y).
$$

It follows from some cancellation that $C^{\prime}(y)=2y$ and so, clearly, $C(y) =y^2 +C$, where $C$ is an arbitrary constant. Choosing $C=0$, we have a potential given by

$$
\phi =\phi(x,y)=xy + y^2.
$$

Therefore, finally, the general solution is given by 

$$
xy+y^2=\tilde{C},
$$

where $\tilde{C}$ is an arbitrary constant. Now, let us consider the initial condition, i.e., $x=1$ and $y=5$ simultaneously, and solve the IVP as follows:

$$
\begin{aligned}
(1)(5) + (5)^2 &= \tilde{C} \\\\
5+25 &= 30 = \tilde{C}.
\end{aligned}
$$

Hence, the solution of the IVP is 

$$
xy+y^2=30.
$$

---

### <span style="color: blue">Example (2)</span> 
Find the general solution of the ODE given by 

$$
2xy-9x^2 + (2y+x^2+1)\frac{dy}{dx}=0.
$$

**<span style="color: orange">Solution:</span>**

Firstly, rewrite the ODE so that we have the conventional form of the ODE. We have, by a little abuse of notation, expanding by $dx$,

$$
(2xy-9x^2)dx + (2y+x^2+1)dy=0.
$$

It is easy to see that the ODE is exact, as $\frac{\partial }{\partial y}(2xy-9x^2)=\frac{\partial }{\partial x}(2y+x^2+1)=2x$.  
&emsp;Now, we find a potential as follows:  
&emsp;Assume that $\psi $ is a potential for the ODE. Then, $\psi_x=2xy-9x^2$ and $\psi_y=2y+x^2+1$. Consider

$$
\begin{aligned}
\int \psi_x\ dx &= \psi = \int (2xy-9x^2)\ dx = x^2y-3x^3 +C(y), \\\\
\psi_y &= 2y+x^2+1= \frac{\partial }{\partial y}(x^2y-3x^3 +C(y))=x^2 +C^{\prime}(y).
\end{aligned}
$$

Therefore, $C^{\prime}(y)= 2y+1$ and so $C(y)= y^2+y+C$ and, choosing $C=0$, a potential is given by $x^2y-3x^3 + y^2+y$. Hence, the general solution is as follows: 

$$
x^2y-3x^3 + y^2+y= \tilde{C},
$$

where $\tilde{C}$ is an arbitrary constant.

---

## Derivation of the Integrating Factor for Exact Differential Equations

We have, in the previous section, talked about the integrating factors of linear, first-order ODEs. Now, we consider the integrating factors of exact ODEs.

In the case of linear, first-order ODEs, the integrating factors were used to make non-integrable ODEs easily integrable. As for exact equations, we make use of integrating factors to convert non-exact ODEs to exact ODEs, by similarly, multiplying the equation by integrating factors.

Consider a first-order differential equation of the form

$$
M(x,y)\,dx + N(x,y)\,dy = 0,
$$

where $M$ and $N$ are continuously differentiable functions.

**Motivation for an Integrating Factor.**
If the equation is not exact, that is,

$$
\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x},
$$

we seek a function $\mu(x,y)$, called an *integrating factor*, such that the modified equation

$$
\mu M\,dx + \mu N\,dy = 0
$$

becomes exact.

**Derivation.**
For the equation to be exact after multiplication by $\mu$, the following condition must hold:

$$
\frac{\partial}{\partial y}(\mu M) = \frac{\partial}{\partial x}(\mu N).
$$

Expanding both sides using the product rule yields

$$
\mu \frac{\partial M}{\partial y} + M \frac{\partial \mu}{\partial y} = \mu \frac{\partial N}{\partial x} + N \frac{\partial \mu}{\partial x}.
$$

Rearranging terms, we obtain

$$
M \frac{\partial \mu}{\partial y} - N \frac{\partial \mu}{\partial x} = \mu \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right).
$$

**Integrating Factor Depending Only on $x$.**
If we assume that $\mu = \mu(x)$, then $\frac{\partial \mu}{\partial y} = 0$, and the equation reduces to

$$
-N \frac{d\mu}{dx} = \mu \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right).
$$

Dividing both sides by $-\mu N$, we obtain

$$
\frac{1}{\mu} \frac{d\mu}{dx} = \frac{1}{N} \left( \frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} \right).
$$

If the right-hand side is a function of $x$ only, then integrating with respect to $x$ gives

$$
\ln \mu(x) = \int \frac{1}{N} \left( \frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} \right) \ dx,
$$

and hence

$$
\mu(x) = \exp\ \left( \int \frac{1}{N} \left( \frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} \right) \ dx \right).
$$

**Integrating Factor Depending Only on $y$.**
Similarly, if $\mu = \mu(y)$, then $\frac{\partial \mu}{\partial x} = 0$, and we obtain

$$
\frac{1}{\mu} \frac{d\mu}{dy} = \frac{1}{M} \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right).
$$

If the right-hand side depends only on $y$, integrating yields

$$
\mu(y) = \exp\ \left( \int \frac{1}{M} \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ dy \right).
$$

**Remark.**
Once an integrating factor is found, the resulting equation is exact and can be solved by finding a potential function $\Phi(x,y)$ such that

$$
d\Phi = \mu M\,dx + \mu N\,dy.
$$

---

### <span style="color: blue">Example (1)</span>
Find the general solution of the ODE

$$
(x^4-x+y)dx - xdy=0.
$$

**<span style="color: orange">Solution:</span>**

Firstly, let us determine whether or not the ODE is exact. Let $M(x,y)=x^4-x+y$ and $N(x,y)=-x$. Here, we note that the general exact ODEs are of the form $A(x,y)dx+B(x,y)dy=0$. Therefore, we have chosen $N(x,y)=-x$, not $N(x,y)=x$. Now, observe that 

$$
M_y=\frac{\partial}{\partial y}(x^4-x+y)=1, \quad N_x=\frac{\partial}{\partial x}(-x)=-1. 
$$

As $1 \neq -1$, the ODE is not exact. Therefore, we must make the ODE exact using an integrating factor. We will compute the integrating factor with the formulas that we have already derived. Here, we can choose whether we wish to find an integrating factor of the form $\mu = \mu(x)$ or $\mu = \mu(y)$. Let $\mu = \mu(x)$. Then, we get:

$$
\begin{aligned}
\mu(x) &= \exp\left(\int \frac{M_y-N_x}{N} dx \right) \\\\
&= \exp\left(\int \frac{1-(-1)}{-x} dx\right) \\\\
&= \exp\left( \int \frac{-2}{x} dx \right) \\\\
&= \exp\left( -2 \ln |x| \right) \\\\
&= x^{-2} = \frac{1}{x^2}.
\end{aligned}
$$

Now, we have $\mu=\frac{1}{x^2}$. So, expanding the equation by the integrating factor $\mu$, we get

$$
(x^2-\frac{1}{x}+\frac{y}{x^2})dx - \frac{1}{x}dy=0.
$$

The ODE is now exact, which can be checked as follows:

$$
\frac{\partial}{\partial y} \left( x^2 - \frac{1}{x} + \frac{y}{x^2} \right) = \frac{\partial}{\partial x} \left( - \frac{1}{x} \right) = \frac{1}{x^2}.
$$

Now, let $\psi(x,y)$ be a potential for the ODE. Then, $\psi_x=x^2-\frac{1}{x}+\frac{y}{x^2}$ and $\psi_y=- \frac{1}{x}$. It follows that

$$
\begin{aligned}
\psi &= \int \psi_x\ dx \\\\
&= \int\left( x^2-\frac{1}{x}+\frac{y}{x^2}\right)\ dx \\\\
&= \frac{x^3}{3}-\ln|x| - \frac{y}{x} + C(y).
\end{aligned}
$$

$$
\begin{aligned}
\psi_y &= \frac{\partial}{\partial y} \left( \frac{x^3}{3}-\ln|x| - \frac{y}{x} + C(y) \right) \\\\
&= -\frac{1}{x} + C^{\prime}(y).
\end{aligned}
$$

Since $\psi_y=-\frac{1}{x}$, we have $C^{\prime}(y)=0 \implies C(y)=C$ for an arbitrary constant $C$. Choosing $C=0$, we obtain a potential $\psi$ by 

$$
\psi=\frac{x^3}{3}-\ln|x| - \frac{y}{x}.
$$

Hence, finally, the general solution of the exact ODE is given by

$$
\psi=\frac{x^3}{3}-\ln|x| - \frac{y}{x}=\tilde{C},
$$

where $\tilde{C}$ is an arbitrary constant.

---

*Note: It can be seen that $\psi, \phi, F, \Phi, \Psi, f$ may be used to denote potentials. I tried to give some of them to make them look familiar.*

{{< pdf "Exact_Equations_and_Integrating_Factors.pdf" >}}