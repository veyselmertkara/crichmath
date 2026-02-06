---
title: "The Irrationality of √2"
date: 2026-02-06
author: "Selim Kaan Özsoy"
description: "An essay on the historical and mathematical context of the irrationality of the square root of 2."
math: true
---

**Selim Kaan Özsoy** *Middle East Technical University*

---

Most texts concerning the discovery of irrational numbers, and thus of $\sqrt{2}$, begin by stating that the Ancient Greeks attempted to explain the world through numbers. However, this is an incomplete explanation. Just as today, Ancient Greece—being a region with a relatively large population—hosted a variety of schools of thought formed by people who embraced different philosophical perspectives.

One of the mathematicians and philosophers who managed to make his name known to large audiences by building his philosophy upon mathematics and the power of numbers was Pythagoras, who lived in the sixth century BCE. Pythagoras and his followers adopted a worldview that could today be described as *patternism*, believing that the world could be explained through numerical sequences and the intrinsic nature of mathematics. They attributed great importance to concepts such as the number of leaves on a clover, the number of waves hitting a shoreline on a given day, and the mathematical symmetry present in living beings’ bodies. It should be noted here that Pythagoras and his school embraced mathematical philosophy almost as a cult. They excluded those who did not share their views or who lacked sufficient mastery of mathematics and geometry, and they adhered blindly to the doctrines of their school.

Before understanding the importance of numerical ratios and natural numbers within the Pythagorean school, it is necessary to discuss the general mathematical perspective of Ancient Greece. Before the development of advanced arithmetic and abstract algebra, mathematics—especially in Ancient Greece—was almost entirely based on geometry. Mathematical operations were carried out through geometric figures, and the definitions of mathematical terms were derived from these figures. For example, when we choose a number $a$ as an arbitrary real number today, we interpret $a^2$ as the result of multiplying a number by itself. However, an Ancient Greek mathematician would have directly interpreted this as the area of a square with side length $a$.

This perspective applied not only to expressions involving a single number but also to identities such as $(a+b)^2 = a^2 + 2ab + b^2$ or quadratic equations like $x^2 + 10x = 39$. Some medieval Muslim mathematicians, when dealing with equations such as $x^2 + 10x = 39$, would draw a square with side length $x$ and then attach to it a rectangle sharing one side with the square and having the other side of length $10$. By forming a geometric shape with total area $x^2 + 10x$ and equating it to $39$, they attempted to reach a solution geometrically.

In a period dominated by such a mathematical system, the Pythagorean school argued that only natural numbers had a true correspondence in nature. Since they interpreted fractional expressions merely as the division of a natural number into smaller parts of a whole, they believed that numbers other than natural numbers and ratios of natural numbers had no place in mathematics.

However, a crisis emerged. If we consider a square with side length $1$, the length of its diagonal is given by $\sqrt{1^2 + 1^2} = \sqrt{2}$. The number $\sqrt{2}$ cannot be expressed as the ratio of two natural numbers, that is, as a fraction. This revealed a paradox: within a “real” geometric figure such as a square, the length of its “real” diagonal corresponded to a “nonexistent” number. According to legend, the Pythagorean school concealed this fact and referred to $\sqrt{2}$ as *alagos*, meaning “the unspeakable number.” It is also rumored that Hippasus was drowned by the school for proving the irrationality of $\sqrt{2}$ and revealing this knowledge.

Aristotle mentions the proof of the irrationality of $\sqrt{2}$ in his works and states that it dates back to the Pythagorean era, though he does not provide an exact date. Nevertheless, the oldest known proof is as follows:

### Theorem
**$\sqrt{2}$ is an irrational number.**

One of the well-known proof techniques in mathematics is proof by contradiction. In this method, we assume that a given theorem is false and derive a contradiction from this assumption. The resulting contradiction demonstrates that the theorem must be true, since a statement cannot be both false and contradictory at the same time.

Another fact that must be stated before the proof is the following: rational numbers—numbers that can be written in the form $r = \frac{a}{b}$, where $a$ is an integer and $b$ is a nonzero integer—can always be expressed such that $a$ and $b$ are relatively prime.

For example, consider the rational number $\frac{60}{16}$. After simplifying twice by dividing by $2$, we obtain $\frac{60}{16} = \frac{15}{4}$. As can be seen, $15$ and $4$ have no positive common divisors other than $1$; hence, they are relatively prime.

### Proof

Assume that $\sqrt{2}$ is a rational number. Then, by definition, it can be written as $\sqrt{2} = \frac{a}{b}$, where $a$ is an integer, $b$ is a nonzero integer, and $a$ and $b$ are relatively prime. 

Rewriting this expression as $b\sqrt{2} = a$ and squaring both sides yields:

$$2b^2 = a^2$$

Since $a^2$ is divisible by $2$, and $2$ is a prime number, it follows that $2$ divides $a$ (by Euclid’s Lemma). Thus, there exists an integer $k$ such that $a = 2k$. Substituting this into the equation gives:

$$2b^2 = (2k)^2 \implies 2b^2 = 4k^2 \implies b^2 = 2k^2$$

By the same reasoning, $2$ divides $b$. This contradicts the assumption that $a$ and $b$ are relatively prime (since both are divisible by 2). Therefore, $\sqrt{2}$ is irrational. $\qed$

---

In this study, we examined the irrationality of $\sqrt{2}$ within both its historical and mathematical contexts. We discussed how, in a period when Ancient Greek mathematics was largely based on geometric foundations, the Pythagorean belief that numbers should be restricted solely to natural numbers and their ratios faced a serious crisis through the example of $\sqrt{2}$.

> *Note: Euclid’s Lemma — If a prime number $p$ divides the product $ab$, then $p$ divides either $a$ or $b$.*

{{< pdf "Mini_essay_I.pdf" >}}