---
title: "Initial Value Problems"
date: 2026-01-22T12:30:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Differential Equations","Archive"]
draft: false
---

&emsp;**Definition.** First-order differential equations are differential equations that only involve the first order derivatives of a specific variable with respect to another variable.

&emsp;<span style="color: orange">Examples:</span>

$$
\frac{dy}{dx}=2x, \qquad 
y^{\prime}= \arctan(x) + e^x, \qquad
(2xe^x)\left(\frac{dy}{dx}\right)=\sin(\arctan(x))
$$

&emsp;**Definition.** Degrees of freedom refers to the number of independent data that can successfully estimate a parameter.  
&emsp;This may feel a little vague. But think about this; you have computed the result of an indefinite integral, say

$$
\int 2x\ dx 
$$

and you get $x^2 + C$, where C is an arbitrary constant. How many pre-determined data, or observation, do you need to determine the value of $C$? The answer is one. Assume that you are given the fact that when you plug 2 into $x$, you get the result 4. Then, you say, with a little abuse of notation, 

$$ (x=2)^2 + C = 4 $$

$$ 4 + C = 4 $$

$$ C=0 $$

Therefore, we obtain the value of $C$, which means that one independent data is adequate to obtain the full solution, and so the degree of freedom is one.  
&emsp;In first-order differential equations, there only appears the first derivative of a variable, so, in the end, the degree of freedom of the differential equation is one. In general, it can be underlined that the degree of freedom of the solution of a differential equation is the same as its order.

<br><br>

It is better to start with an example.

$$
y^{\prime}=2x^2y, \qquad  y(0)=1.
$$

Here, we know that $y^{\prime}=2x^2y$ is an ordinary differential equation, furthermore, it is a first-order equation, whose degree of freedom is one. $y(0)=1$ is called the initial condition. Together, it is called an <span style="color: blue">Initial Value Problem</span>.  
&emsp;These type of problems ask us to solve the differential equation first, and then, plugging in the values $x=0$ and $y=1$ simultaneously, to compute the value of the constant, and finally, have the solution of the initial value problem.

<br>

&emsp;<span style="color: hotpink">Notation:</span> IVP stands for Initial Value Problem and it is used in general.

<br>

&emsp;<span style="color: blue">Example(1)</span> Solve the IVP given by

$$
y^{\prime}=2x^2y, \qquad y(0)=1
$$

<span style="color: orange">Solution: </span> We first solve the equation and obtain a general solution as follows:

$$ \frac{dy}{dx} = 2x^2y $$

$$ \frac{1}{y}dy = 2x^2dx $$

$$ \int \frac{1}{y}\ dy = \int 2x^2\ dx $$

$$ \ln \lvert y \rvert = \frac{2x^3}{3} + C $$

$$ \lvert y \rvert = \tilde{C} \cdot e^{\left(\frac{2x^3}{3}\right)} $$

We emphasize the transformation from $e^C$ to $\tilde{C}$, since both are arbitrary constants.
Now, we have obtained a general solution. It follows from plugging in the initial condition that

$$ \lvert 1 \rvert = \tilde{C} \cdot e^0 $$

$$ 1 = \tilde{C} \cdot 1 $$

$$ 1 = \tilde{C} $$

Therefore, the solution of the IVP is given by

$$
\lvert y \rvert = \tilde{C} \cdot e^{\frac{2x^3}{3}}
$$

<br><br>

&emsp;<span style="color: blue">Example(2)</span> Solve the IVP given by

$$
y^{\prime} = \frac{(1+y^2)(1+x^2)}{xy}, \qquad y(1)=1, \qquad x>0
$$

<span style="color: orange">Solution: </span> We can straightforwardly observe that we are also given the condition $x>0$. It is common to assume that, therefore, we may end up with an expression where $\ln(x)$ appears. However, this observation does not affect our method to solve the problem. Similarly, we first solve the equation and obtain a general solution, and then, by plugging in the initial condition, get the solution of the IVP.

$$ \frac{dy}{dx} = \frac{(1+y^2)(1+x^2)}{xy} $$

$$ \left(\frac{y}{1+y^2}\right)dy = \left(\frac{1}{x} + x \right)dx $$

$$ \int \left(\frac{y}{1+y^2}\right)\ dy = \int \left(\frac{1}{x} + x \right)\ dx $$

$$ \frac{\ln(1+y^2)}{2} = \ln(x) + \frac{x^2}{2} + C $$

&emsp;Now, we have the general solution. We, then, consider the initial condition, by plugging in $y=1$ and $x=1$:

$$ \frac{\ln(1+1)}{2} = \ln(1) + \frac{1^2}{2} + C $$

$$ \frac{\ln(2)}{2} = \frac{1}{2} + C $$

$$ \frac{\ln(2)-1}{2} = C $$

$$ \ln\left(\sqrt{\frac{2}{e}}\right) = C $$

&emsp;Therefore, we conclude that the solution of the IVP is given by the implicit equation

$$
\frac{\ln\left(1+y^2\right)}{2} = \ln(x) + \frac{x^2}{2} + \ln\left(\sqrt{\frac{2}{e}}\right).
$$

{{< pdf "Initial_Value_Problems.pdf" >}}
