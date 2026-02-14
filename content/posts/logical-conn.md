---
title: "Logical Connectors"
date: 2026-02-14T18:39:00+03:00
author: "Selim Kaan Özsoy, Middle East Technical University"
categories: ["Foundations of Mathematical Reasoning"]
draft: false
math: true
---


We have five logical connectors:
* **and**: $\wedge$
* **or**: $\vee$
* **not**: $\neg$ (or $\sim$)
* **if, then**: $\rightarrow$
* **if and only if**: $\leftrightarrow$

Truth values of the compound statements constructed by these using the truth tables of these connections. (Wittgenstein)

Given two statements $p$ and $q$:

---

## 1. Conjunction 

The conjunction of $p$ and $q$ is the statement $p \wedge q$ and is read as "$p$ and $q$".

$\rightarrow$ The truth table of $p \wedge q$ is given by:

$$
\begin{array}{|c|c|c|}
\hline
p & q & p \wedge q \\\\
\hline
\text{T} & \text{T} & \text{T} \\\\
\text{T} & \text{F} & \text{F} \\\\
\text{F} & \text{T} & \text{F} \\\\
\text{F} & \text{F} & \text{F} \\\\
\hline
\end{array}
$$

---

## 2. Disjunction

The disjunction of $p$ and $q$ is the statement $p \vee q$ and is read as "$p$ or $q$".

$\rightarrow$ The truth table of $p \vee q$ is given by:

$$
\begin{array}{|c|c|c|}
\hline
p & q & p \vee q \\\\
\hline
\text{T} & \text{T} & \text{T} \\\\
\text{T} & \text{F} & \text{T} \\\\
\text{F} & \text{T} & \text{T} \\\\
\text{F} & \text{F} & \text{F} \\\\
\hline
\end{array}
$$

---

## 3. Conditional

The conditional from $p$ to $q$ is the statement $p \rightarrow q$ and is read as:
* "if $p$, then $q$"
* "$q$ whenever $p$"
* "$q$ if $p$"
* "$p$ only if $q$"
* "$q$ provided that $p$"
* "$q$ given that $p$"
* "$p$ is sufficient for $q$"
* "$q$ is necessary for $p$"

$\rightarrow$ The truth table is:

$$
\begin{array}{|c|c|c|}
\hline
p & q & p \rightarrow q \\\\
\hline
\text{T} & \text{T} & \text{T} \\\\
\text{T} & \text{F} & \text{F} \\\\
\text{F} & \text{T} & \text{T} \\\\
\text{F} & \text{F} & \text{T} \\\\
\hline
\end{array}
$$

---

## 4. Biconditional

The biconditional from $p$ and $q$ is the statement of $p \leftrightarrow q$ and read as:
* "$p$ if and only if $q$"
* "$p$ is necessary and sufficient for $q$"

$\rightarrow$ The truth table is given by:

$$
\begin{array}{|c|c|c|}
\hline
p & q & p \leftrightarrow q \\\\
\hline
\text{T} & \text{T} & \text{T} \\\\
\text{T} & \text{F} & \text{F} \\\\
\text{F} & \text{T} & \text{F} \\\\
\text{F} & \text{F} & \text{T} \\\\
\hline
\end{array}
$$

---

## 5. Negation

The negation of $p$ is given by $\neg p$ and is read as "not $p$".
* "it is not the case that $p$ holds"

$$
\begin{array}{|c|c|}
\hline
p & \neg p \\\\
\hline
\text{T} & \text{F} \\\\
\text{F} & \text{T} \\\\
\hline
\end{array}
$$

---

## Examples

Write the truth tables of the statements:
1. $p \rightarrow (q \rightarrow p)$
2. $(p \wedge R) \rightarrow (\neg(R \rightarrow S))$
3. $((p \rightarrow q) \wedge p) \wedge \neg q$

### 1. $p \rightarrow (q \rightarrow p)$

$$
\begin{array}{|c|c|c|}
\hline
p & q & p \rightarrow (q \rightarrow p) \\\\
\hline
\text{T} & \text{T} & \text{T} \\\\
\text{F} & \text{F} & \text{T} \\\\
\text{T} & \text{F} & \text{T} \\\\
\text{F} & \text{T} & \text{T} \\\\
\hline
\end{array}
$$

### 2. $(p \wedge R) \rightarrow (\neg(R \rightarrow S))$

$$
\begin{array}{|c|c|c|c|}
\hline
p & R & S & (p \wedge R) \rightarrow (\neg(R \rightarrow S)) \\\\
\hline
\text{T} & \text{T} & \text{T} & \text{T} \\\\
\text{T} & \text{T} & \text{F} & \text{T} \\\\
\text{T} & \text{F} & \text{T} & \text{F} \\\\
\text{T} & \text{F} & \text{F} & \text{F} \\\\
\text{F} & \text{T} & \text{T} & \text{F} \\\\
\text{F} & \text{T} & \text{F} & \text{F} \\\\
\text{F} & \text{F} & \text{T} & \text{F} \\\\
\text{F} & \text{F} & \text{F} & \text{F} \\\\
\hline
\end{array}
$$

### 3. $((p \rightarrow q) \wedge p) \wedge \neg q$

$$
\begin{array}{|c|c|c|}
\hline
p & q & ((p \rightarrow q) \wedge p) \wedge \neg q \\\\
\hline
\text{T} & \text{T} & \text{F} \\\\
\text{T} & \text{F} & \text{F} \\\\
\text{F} & \text{T} & \text{F} \\\\
\text{F} & \text{F} & \text{F} \\\\
\hline
\end{array}
$$

*This is an example of contradiction.*

---

## Definitions

> A statement that is always **true** is called a **tautology**.


> A statement that is always **false** is called a **contradiction**.


{{< pdf "Logical_Connectors.pdf" >}}