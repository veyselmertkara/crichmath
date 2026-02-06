---
title: "Newton's Law of Cooling"
date: 2026-01-22T03:00:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Differential Equations","Archive"]
draft: false
---
 

Newton's Law of Cooling is a fundamental principle in heat transfer. It states that the rate at which a body loses heat is directly proportional to the difference between its temperature and that of its surrounding environment.

As this definition suggests, the study of Newton's Law of Cooling inherently involves differential equations. In fact, the applications of differential equations are extremely broad, since many natural phenomena can be described and analyzed in terms of rates of change.

Now, first, let's have a look at the law:

$$
\frac{dT}{dt}=-k(T-T_{a})
$$

Here, $T$ is the temperature of the object, $T_{a}$ is the temperature of the surroundings, i.e., the ambient temperature, and $k$ is the proportionality constant, which has a physical meaning.

<br>

<span style="color: blue">Moreover, the differential equation arising from Newton's law of cooling is a separable, first-order ordinary differential equation, which can be solved using elementary methods.</span>

<br><br>

We now consider the following example, and understand how the law works and how it is related to differential equations.

---

### <span style="color: blue">Example(1)</span>
Aki heats water in a kettle to an initial temperature of $90^{\circ}C$. The kettle is then left undisturbed in an environment with a constant ambient temperature of $30^{\circ}C$. After 5 minutes, the temperature of the water decreases to $50^{\circ}C$ Assuming that the cooling process follows Newton's law of cooling, determine the time required for the temperature of the water to decrease to $40^{\circ}C$.

<br>

<span style="color: orange">**Solution:**</span> We begin by writing Newton's law of cooling as

$$
\frac{dT}{dt}=-k(T-T_{a})
$$

Here, it suffices to match the values given in the question with the parameters in the law. We note that the units are dimensionally stable.

The ambient temperature is given as $30^{\circ}C.$ So $T_{a}=30$ Let's set the differential equation:

$$
\frac{dT}{dt}=-k(T-30)
$$

Since we have a separable equation, it follows that

$$ \frac{dT}{T-30} = -kdt $$

$$ \int\frac{1}{T-30}dT = \int-k~dt $$

$$ \ln|T-30| = -kt+C $$

We know that, physically, if the ambient temperature is $30^{\circ}C$ then, as the initial temperature of the object is higher than $30^{\circ}C$, the least value of the object's temperature during the process is $30^{\circ}C$ Hence, $T-30>0$ It follows that

$$ \ln(T-30) = -kt+C $$

$$ T-30 = e^{-kt}\cdot\tilde{C} $$

$$ T(t) = e^{-kt}\cdot\tilde{C}+30 $$

We are given that the initial temperature is $90^{\circ}$ and the temperature at $t=5$ is $50^{\circ}C$ Then, by plugging in $T(0)=90$ and $T(5)=50$ in order:

$$ 90 = e^{0}\cdot\tilde{C}+30 $$

$$ \tilde{C} = 60 $$

$$ 50 = 60e^{-5k}+30 $$

$$ \frac{1}{3} = e^{-5k} $$

$$ k = \frac{\ln 3}{5} $$

Therefore, we have obtained the solution by

$$
T(t)=60e^{-\frac{\ln 3}{5}t}+30
$$

We are asked to calculate the time, say $t_0$, when $T(t_{0})=40.$ Plugging in,

$$ 40 = 60e^{-\frac{\ln 3}{5}t_{0}}+30 $$

$$ \frac{1}{6} = e^{-\frac{\ln 3}{5}t_{0}} $$

$$ -\ln 6 = -\frac{\ln 3}{5}t_{0} $$

$$ t_{0} = \frac{5 \ln 6}{\ln 3}\approx7~min $$

Finally, we conclude that after the temperature of the water reaches $50^{\circ}C$, an additional <span style="color: red">2 minutes</span> are required for it to decrease to $40^{\circ}C$.

{{< pdf "Newton_s_Law_of_Cooling.pdf" >}}