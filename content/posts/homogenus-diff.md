---
title: Homogeneous Differential Equations
categories:
  - Differential Equations
  - Archive
date: 2026-01-26T12:30:00+03:00
author: Selim Kaan Ozsoy, Middle East Technical University
math: true
draft: false
---
Some first order ordinary differential equations are not separable, but we can convert them into separable equations after applying simple substitution. Such equations are called <span style="color: red">homogeneous equations</span>. In this section, we will discuss how to apply this substitution and solve such equations.<br> **Definition.** A first order ordinary differential equation is called <span style="color: red">homogeneous</span> if it can be expressed in the form

$$ \\frac\{dy\}\{dx\}=f\\left(\\frac\{y\}\{x\}\\right) $$

for some function $f$. The given expression may seem a little devious, but an equivalent and often more practical way to verify that a function is homogeneous is through its scaling behavior.<br>  Let

$$ \\frac\{dy\}\{dx\}=f(x,y) $$

be a first order ordinary differential equation. The ODE is said to be a homogeneous equation, if $f(\\lambda x, \\lambda y)=f(x,y)$ for any $\\lambda \\neq 0$, where $\\lambda$ is an arbitrary constant.<br>  It is trivial to see the reason why we can also use this method. Observe that

$$ f\\left(\\frac\{y\}\{x\}\\right)=f\\left(\\frac\{\\lambda y\}\{\\lambda x\}\\right), $$

as we can cancel nonzero constants.<br>  For example, consider

$$ \\frac\{dy\}\{dx\}=xy^3 $$<br>  Let's determine whether or not this ODE is homogeneous. Set

$$ f=\\frac\{dy\}\{dx\}. $$

Now, we have

$$ f(x,y)=xy^3. $$

It is straight forward to see that, when we consider some $\\lambda=10 \\in \\mathbb\{R\} $,

$$ f(\\lambda x, \\lambda y)=f(10x, 10y)=10^4xy^3 \\neq xy^3. $$

Therefore, since there exists some $\\lambda$ such that $\\lambda \\neq 0$ and $f(\\lambda x, \\lambda y) \\neq f(x,y)$, the ODE is not homogeneous.

<br>  Furthermore, consider the ODE

$$ \\frac\{dy\}\{dx\}=\\frac\{x-y\}\{x+y\}. $$

Set

$$ f=\\frac\{dy\}\{dx\}. $$

We have

$$ f(x,y)=\\frac\{x-y\}\{x+y\}. $$

It follows that, for some $\\lambda \\neq 0$,

$$ \\begin\{aligned\} f(\\lambda x, \\lambda y) &= \\frac\{\\lambda x - \\lambda y\}\{\\lambda x + \\lambda y\} \\\\ &= \\frac\{\\lambda(x-y)\}\{\\lambda(x+y)\} \\\\ &= \\frac\{x-y\}\{x+y\} \\\\ &= f(x,y). \\end\{aligned\} $$

Therefore, the ODE is homogeneous.

<br>

We, now, consider two examples to see how to apply the mentioned substitution and solve homogeneous ODE's,

<br>

---

### <span style="color: blue">Example(1)</span>

Consider the ODE given by

$$ \\frac\{dy\}\{dx\}=\\frac\{3x+y\}\{x-y\}. $$

Determine whether or not it is homogeneous and solve it.<br> <span style="color: orange">Solution: </span> Set

$$ f(x, y)=\\frac\{dy\}\{dx\}=\\frac\{3x+y\}\{x-y\}. $$

Observe that, for some $\\lambda \\neq 0$,

$$ \\begin\{aligned\} f(\\lambda x, \\lambda y) &= \\frac\{3 \\lambda x + \\lambda y \}\{\\lambda x - \\lambda y\}  \\\\ &= \\frac\{\\lambda(3x + y)\}\{\\lambda(x-y)\} \\\\ &=\\frac\{(3x + y)\}\{(x-y)\} \\\\ &= f(x,y). \\end\{aligned\} $$

Therefore, the ODE is homogeneous. We can apply an algebraic operation to notice that, for ease, by dividing the nominator and denominator by y, assuming $y \\neq 0$,

$$ f(x,y) = \\frac\{\\frac\{3x\}\{y\}+ 1\}\{\\frac\{x\}\{y\}-1\}. $$

Now, we will solve the equation by using a common substitution, namely,

$$ u = \\frac\{y\}\{x\} $$

Then,

$$ \\begin\{aligned\} &y = ux \\\\ &\\frac\{dy\}\{dx\} = u + x \\cdot \\frac\{du\}\{dx\}   \\quad \\text\{(We point out the use of chain rule.)\} \\end\{aligned\} $$

Here, it is quite important to note that $u$ is a function of $y$ and $x$, where $y$ is also a function of $x$. Hence, it suffices to consider $u$ as a function of $x$. So, we will not use partial derivatives, which may come into the reader's mind at first glance, since there may be an attempt to think $u$ as $u=\\frac\{y\}\{x\}=g(x,y)$ for some function $g$.<br>  Now, it follows that, by plugging in,

$$ \\begin\{aligned\} u + x \\cdot \\frac\{du\}\{dx\} &= \\frac\{\\frac\{3\}\{u\}+1\}\{\\frac\{1\}\{u\}-1\} \\\\ &= \\frac\{3+u\}\{1-u\} \\end\{aligned\} $$

and so,

$$ \\begin\{aligned\} x \\cdot \\frac\{du\}\{dx\} &= \\frac\{3+u^2\}\{1-u\} \\quad \\text\{, which is a separable equation.\} \\\\ \\int\\frac\{1-u\}\{3+u^2\}\\ du &= \\int 1\\ dx \\\\ \\int \\frac\{1\}\{u^2+ 3\}\\ du - \\int \\frac\{u\}\{u^2+3\}\\ du &=\\int 1\\ dx \\\\ \\frac\{1\}\{\\sqrt\{3\}\}\\arctan\\left(\\frac\{u\}\{\\sqrt\{3\}\}\\right) - \\frac\{1\}\{2\}\\ln\\left(u^2+3\\right) &= x + C . \\end\{aligned\} $$

Finally, using back-substitution, and leaving the equation in explicit form, we obtain the following:

$$ \\frac\{1\}\{\\sqrt\{3\}\}\\arctan\\left(\\frac\{\\left(\\frac\{y\}\{x\}\\right)\}\{\\sqrt\{3\}\}\\right) - \\frac\{1\}\{2\}\\ln\\left(\\left(\\frac\{y\}\{x\}\\right)^2+3\\right) = x + C, $$

where C is an arbitrary constant.

<br>

---

### <span style="color: blue">Example(2)</span>

Consider the IVP given by

$$ \\frac\{dy\}\{dx\}=\\frac\{x+y\}\{x\}, \\qquad y(1) = 2 , \\qquad x&gt;0. $$

Determine whether or not it is homogeneous and solve it.<br> <span style="color: orange">Solution: </span> Although this example is simpler than the previous one, it is often instructive to begin with more challenging problems and then proceed to simpler ones to become familiar with the solution methods.

Set

$$ f(x,y)=\\frac\{dy\}\{dx\}=\\frac\{x+y\}\{x\} $$

It is straightforward to see that

$$ f(x,y) = 1 + \\frac\{y\}\{x\} $$

and that the ODE is homogeneous.<br>  It follows from the substitution $u = \\frac\{y\}\{x\}$ that

$$ y=ux $$

and so

$$ \\frac\{dy\}\{dx\}= u  + x \\cdot \\frac\{du\}\{dx\} $$

Then, by plugging in,

$$ \\begin\{aligned\} u  + x \\cdot \\frac\{du\}\{dx\} &= 1 + u \\\\ x \\cdot \\frac\{du\}\{dx\} &= 1 \\\\ du &= \\frac\{1\}\{x\}dx \\\\ \\int1\\  du &= \\int \\frac\{1\}\{x\}\\ dx \\\\ u &= \\ln\\lvert x\\rvert + C \\end\{aligned\} $$

Using back-substitution and noticing that $x&gt;0$, we have:

$$ \\frac\{y\}\{x\}=\\ln x + C $$

and so,

$$ y=y(x)=x \\ln x+ Cx $$

is the general solution. Now, we will solve the IVP, considering the initial condition.

$$ \\begin\{aligned\} y(1)=\\ln 1 + C &= 2 \\\\ 0 + C &= 2 \\\\ C &= 2 \\end\{aligned\} $$

Therefore, the solution of the IVP is

$$ y=x \\ln x +2x. $$

{{< pdf "Homogenous_Equations.pdf" >}}