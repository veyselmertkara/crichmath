---
title: "Quantifiers and Quantified Statements"
date: 2026-02-14T18:55:00+03:00
author: "Selim Kaan Özsoy, Middle East Technical University"
categories: ["Foundations of Mathematical Reasoning"]
draft: false
math: true
---
## Quantifiers

The logical system constructed so far is called **Propositional Logic**, where we have propositions and their combinations. In order to develop a logical system for mathematics, we need to incorporate variables into our system.

The basic idea is as follows:
* We have an alphabet for our system.
* Using symbols from the alphabet, we can create statements.
* e.g., $(2+2=5) \vee (2 < 4 + y) \rightarrow x^2 + y^2 = z^2$
* We incorporate two quantifiers that quantify variables.

### Notation

* $\exists$ : **Existential Quantifier** (there exists / for some)
* $\forall$ : **Universal Quantifier** (for all / for any / for every)

The intuitive meaning is as follows:
* $\forall x \in U, P(x)$ means that the statement $P(x)$ is true for **every possible choice** of $x$ in the universe of discourse.
* $\exists x \in U, P(x)$ means that the statement $P(x)$ is true for **at least one choice** of $x$ in the universe of discourse.

---

## Free vs. Bound Variables

A variable in a statement that is not bound by a quantifier is called a **free variable**. A variable bound by a quantifier is called a **bound variable**.

**Example:**

$$ 
\exists y \in \mathbb{R}, \quad x^2 + y = z 
$$

* $y$: Bound variable (bound by $\exists$)
* $x$: Free variable
* $z$: Free variable

### Notations

$P(x_1, x_2, \dots, x_n)$: A statement involving variables.

**How to read quantified statements:**

$$ 
\forall x \in U, P(x) 
$$
*"$P(x)$ holds for every $x$ in $U$."*

$$ 
\exists x \in U, P(x) 
$$
*"There exists $x$ in $U$ such that $P(x)$ holds."*

**Example of binding:**

$$ 
P(x, y): \exists w \in \mathbb{N}, \quad x^2 + w^2 = y^3 
$$

Here, $x$ and $y$ are **free variables**, while $w$ is a **bound variable**.

---

## Examples: Expressing Statements

### Example 1
Express the following statements in English, assuming that the universe is all people and $L(x,y)$ denotes "$x$ loves $y$".

1. $\forall x \forall y, L(x,y)$: Everyone loves everyone.
2. $\forall x \exists y, L(x,y)$: Everyone loves someone.
3. $\exists y \forall x, L(x,y)$: There is someone who is loved by everyone.
4. $\exists x \forall y, L(x,y)$: There is someone who loves everyone.
5. $\forall y \exists x, L(x,y)$: Everyone is loved by someone.
6. $\exists x \exists y, L(x,y)$: Someone loves someone.

### Example 2
Express the following statement symbolically in formal logic.

**Statement:** *"Every integer is divisible by any natural number which is greater than 1."*

Let the universe be integers ($\mathbb{Z}$).

$$ 
\forall x \in \mathbb{Z}, \quad \forall y \in \mathbb{N}, \quad (y > 1) \rightarrow \exists z \in \mathbb{Z}, (x = y \cdot z) 
$$

Alternatively, written using the divides relation ($|$):

$$ 
\forall x \in \mathbb{Z}, \quad \forall y \in \mathbb{N}, \quad (y > 1 \rightarrow y \mid x) 
$$

### Example 3
**Statement:** *"There exists an integer that divides every integer greater than 1."*

$$ 
\exists x \in \mathbb{Z}, \quad \forall y \in \mathbb{Z}, \quad (y > 1 \rightarrow x \mid y) 
$$

---

## Logical Implications

Some logical implications between quantified formulas:

1. $\forall x P(x) \implies \exists x P(x)$ *(Assuming that the universe is not empty).*
2. $\forall x \forall y P(x,y) \iff \forall y \forall x P(x,y)$ *(We can swap universal quantifiers).*
3. $\exists x \exists y P(x,y) \iff \exists y \exists x P(x,y)$ *(We can swap existential quantifiers).*
4. $\exists x \forall y P(x,y) \implies \forall y \exists x P(x,y)$ *(Note: The reverse is NOT generally true. "There is a key that opens every door" implies "Every door has a key that opens it", but not vice versa).*

---

## De Morgan's Laws for Quantifiers

Just as we have De Morgan's laws for logical connectives, we have them for quantifiers.

* $\neg (\forall x \in U, P(x)) \iff \exists x \in U, \neg P(x)$
* $\neg (\exists x \in U, P(x)) \iff \forall x \in U, \neg P(x)$

### Example 1
For all primes $\mathbb{P}$, assume that $x$ has property $Q(x)$: $\forall x \in \mathbb{P}, Q(x)$

The negation is:
$$ 
\neg (\forall x \in \mathbb{P}, Q(x)) \iff \exists x \in \mathbb{P}, \neg Q(x) 
$$

### Example 2 (Complex Negation)
Consider the statement: $\forall x \in \mathbb{Z}, (P(x) \rightarrow Q(x))$

Its negation is:
$$ 
\neg (\forall x \in \mathbb{Z}, (P(x) \rightarrow Q(x))) \iff \exists x \in \mathbb{Z}, \neg (P(x) \rightarrow Q(x)) 
$$

Using the equivalence $\neg (A \rightarrow B) \equiv A \wedge \neg B$, we get:
$$ 
\exists x \in \mathbb{Z}, (P(x) \wedge \neg Q(x)) 
$$

---

## Valid Arguments with Quantifiers

How to prove equivalences or implications involving quantifiers? We use **Instantiation** and **Generalization** rules.

### 1. Universal Instantiation (UI)
$$ 
\frac{\forall x \in U, P(x)}{P(c)} 
$$
**Explanation:** If $\forall x \in U, P(x)$ is true, then $P(c)$ is true for any $c$ in the universe $U$.
* where $c$ is any object in $U$.
* $c$ can be arbitrary or specific.

### 2. Universal Generalization (UG)
$$ 
\frac{P(c)}{\forall x \in U, P(x)} 
$$
**Explanation:** If we can prove $P(c)$ for an **arbitrary** element $c \in U$ (with no special properties assumed other than being in $U$), then we can generalize that $\forall x \in U, P(x)$.
* where $c$ is an arbitrary object in $U$.

### 3. Existential Instantiation (EI)
$$ 
\frac{\exists x \in U, P(x)}{P(b)} 
$$
**Explanation:** If we know $\exists x \in U, P(x)$, we can give a name to that element.
* where $b$ is some particular object in $U$.
* **Important Condition:** $b$ must be a **new** variable name not used before in the proof.

### 4. Existential Generalization (EG)
$$ 
\frac{P(d)}{\exists x \in U, P(x)} 
$$
**Explanation:** If we show $P(d)$ is true for some object $d$, we can conclude that there exists an $x$ such that $P(x)$.
* where $d$ is some object in $U$.

---

## Example of Instantiation

**Proposition:** Suppose that there exists 2 integers such that their squares sum up to 5. Formally:

$$ 
\exists x \in \mathbb{Z}, \exists y \in \mathbb{Z}, (x^2 + y^2 = 5) 
$$

**Using these rules, let:**
1. Let's pick $a, b \in \mathbb{Z}$. *(Instantiation)*
2. Such that their squares sum up to 5: $a^2 + b^2 = 5$
3. Now, using these definitions and rules, let $a^2 + b^2 = 5$ be true.
4. See an example of a valid argument: $a=1, b=2 \implies 1^2 + 2^2 = 1 + 4 = 5$.
5. Since $P(1, 2)$ is true, then $\exists x \exists y P(x,y)$ is true (EG).

---

## Example

**Statements:**
* Every cat that is nice and smart likes tuna.
* Every Siamese cat is nice.
* There exists a Siamese cat that is not smart.

Let's formalize this argument.

**Definitions:**
* $N(x)$: $x$ is nice
* $S(x)$: $x$ is smart
* $T(x)$: $x$ likes tuna
* $Si(x)$: $x$ is Siamese
* $U$: The set of cats

**Premises:**
1. $\forall x \in U, ((N(x) \wedge S(x)) \rightarrow T(x))$
2. $\forall x \in U, (Si(x) \rightarrow N(x))$
3. $\exists x \in U, (Si(x) \wedge \neg T(x))$

**Goal:** Show that $\exists x \in U, \neg S(x)$ (There exists a cat that is not smart).

**Derivation:**

$$
\begin{aligned}
& (4) \quad Si(a) \wedge \neg T(a) \qquad &&\text{by (3) and EI (Existential Instantiation)} \\\\
& (5) \quad (N(a) \wedge S(a)) \rightarrow T(a) \qquad &&\text{by (1) and UI (Universal Instantiation)} \\\\
& (6) \quad \neg T(a) \qquad &&\text{by (4) and Simplification} \\\\
& (7) \quad \neg T(a) \rightarrow \neg (N(a) \wedge S(a)) \qquad &&\text{by (5) and Contrapositive} \\\\
& (8) \quad \neg (N(a) \wedge S(a)) \qquad &&\text{by (6), (7) and Modus Ponens} \\\\
& (9) \quad \neg N(a) \vee \neg S(a) \qquad &&\text{by (8) and De Morgan} \\\\
& (10) \quad Si(a) \rightarrow N(a) \qquad &&\text{by (2) and UI} \\\\
& (11) \quad Si(a) \qquad &&\text{by (4) and Simplification} \\\\
& (12) \quad N(a) \qquad &&\text{by (10), (11) and Modus Ponens} \\\\
& (13) \quad \neg (\neg N(a)) \qquad &&\text{(Double Negation of 12)} \\\\
& (14) \quad \neg S(a) \qquad &&\text{by (9), (12) and Disjunctive Syllogism ($A \vee B, \neg A \vdash B$)} \\\\
& (15) \quad \exists x \in U, \neg S(x) \qquad &&\text{by (14) and EG (Existential Generalization)}
\end{aligned}
$$

---

## Example: Derivation with Quantifiers

**Problem:** Find a derivation for the following valid argument.

**Premises:**
1. $\forall x \in W, \exists y \in W, (E(x) \rightarrow M(x) \vee N(y))$
2. $\neg (\forall x \in W, M(x))$
3. $\forall x \in W, E(x)$

**Conclusion:**
$$ 
\exists x \in W, N(x) 
$$

**Solution (Derivation):**

$$
\begin{aligned}
& (4) \quad \exists x \in W, \neg M(x) \qquad &&\text{by (2) and Quantifier Negation (De Morgan)} \\\\
& (5) \quad \neg M(a) \qquad &&\text{by (4) and EI (Existential Instantiation)} \\\\
& (6) \quad E(a) \qquad &&\text{by (3) and UI (Universal Instantiation)} \\\\
& (7) \quad \exists y \in W, (E(a) \rightarrow M(a) \vee N(y)) \qquad &&\text{by (1) and UI (instantiating $x$ with $a$)} \\\\
& (8) \quad E(a) \rightarrow (M(a) \vee N(b)) \qquad &&\text{by (7) and EI (instantiating $y$ with $b$)} \\\\
& (9) \quad M(a) \vee N(b) \qquad &&\text{by (6), (8) and Modus Ponens} \\\\
& (10) \quad N(b) \qquad &&\text{by (5), (9) and Disjunctive Syllogism} \\\\
& (11) \quad \exists x \in W, N(x) \qquad &&\text{by (10) and EG (Existential Generalization)}
\end{aligned}
$$

{{< pdf "Quantifiers_and_Quantified_Statements.pdf" >}}