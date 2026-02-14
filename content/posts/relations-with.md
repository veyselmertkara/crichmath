---
title: "Relationship Between Statements"
date: 2026-02-14T17:59:00+03:00
author: "Selim Kaan Özsoy"
categories: ["Foundations of Mathematical Reasoning"]
draft: false
math: true
---

## Logical Implication

Given two statements $p$ and $q$, we say that $p$ implies $q$ and write $p \Rightarrow q$ in the case that $q$ is true in all cases that $p$ is true; equivalently the statement $p \rightarrow q$ is a tautology.

### Theorem
Let $P, Q, R, S$ be statements, then:

$$
\begin{aligned}
& 1. \quad ((p \rightarrow q) \wedge p) \Rightarrow q \quad \text{(Modus Ponens)} \\\\
& 2. \quad (p \rightarrow q) \wedge \neg q \Rightarrow \neg p \quad \text{(Modus Tollens)} \\\\
& 3. \quad p \wedge q \Rightarrow p \\\\
& 4. \quad p \wedge q \Rightarrow q \\\\
& 5. \quad p \leftrightarrow q \Rightarrow q \rightarrow p \\\\
& 6. \quad (p \rightarrow q) \wedge (q \rightarrow p) \Rightarrow p \leftrightarrow q \\\\
& 7. \quad q \Rightarrow p \vee q \\\\
& 8. \quad (p \vee q) \wedge \neg p \Rightarrow q \\\\
& 9. \quad (p \vee q) \wedge \neg q \Rightarrow p \\\\
& 10. \quad p \leftrightarrow q \Rightarrow p \rightarrow q \\\\
& 11. \quad (p \rightarrow q) \wedge (R \rightarrow S) \wedge (p \vee R) \Rightarrow (q \vee S) \\\\
& 12. \quad (p \rightarrow q) \wedge (q \rightarrow R) \Rightarrow p \rightarrow R \quad \text{(Hypothetical Syllogism)}
\end{aligned}
$$

### Proof of $(p \vee q) \wedge \neg p \Rightarrow q$

We construct the truth table of the following statement: $(p \vee q) \wedge \neg p \rightarrow q$

$$
\begin{array}{|c|c|c|c|c|}
\hline
p & q & p \vee q & \neg p & (p \vee q) \wedge \neg p \rightarrow q \\\\
\hline
\text{T} & \text{T} & \text{T} & \text{F} & \text{T} \\\\
\text{T} & \text{F} & \text{T} & \text{F} & \text{T} \\\\
\text{F} & \text{T} & \text{T} & \text{T} & \text{T} \\\\
\text{F} & \text{F} & \text{F} & \text{T} & \text{T} \\\\
\hline
\end{array}
$$

*(We use truth tables to prove a tautology)*

---

## Logical Equivalence

Given two statements $P$ and $Q$, we say that $P$ is equivalent to $Q$ and we write $P \Leftrightarrow Q$ in the case that $P \leftrightarrow Q$ is a tautology.

### Theorem
Let $P, Q, R$ be statements. Then:

a) $\neg(\neg p) \Leftrightarrow p \quad \text{(Double Negation)}$  
b) $p \vee q \Leftrightarrow q \vee p \quad \text{(Commutative Law)}$  
c) $p \wedge q \Leftrightarrow q \wedge p \quad \text{(Commutative Law)}$  
d) $(p \vee q) \vee R \Leftrightarrow p \vee (q \vee R) \quad \text{(Associative Law)}$  
e) $(p \wedge q) \wedge R \Leftrightarrow p \wedge (q \wedge R) \quad \text{(Associative Law)}$  
f) $p \wedge (q \vee R) \Leftrightarrow (p \wedge q) \vee (p \wedge R) \quad \text{(Distributive Law)}$  
g) $p \vee (q \wedge R) \Leftrightarrow (p \vee q) \wedge (p \vee R) \quad \text{(Distributive Law)}$  
h) $p \rightarrow q \Leftrightarrow \neg p \vee q \quad \text{(Implication Law)}$  
i) $p \rightarrow q \Leftrightarrow \neg q \rightarrow \neg p \quad \text{(Contrapositive)}$  
j) $p \Leftrightarrow q \Leftrightarrow q \Leftrightarrow p$  
k) $p \Leftrightarrow q \Leftrightarrow (p \rightarrow q) \wedge (q \rightarrow p)$  
l) $\neg (p \wedge q) \Leftrightarrow \neg p \vee \neg q \quad \text{(De Morgan's Law)}$  
m) $\neg (p \vee q) \Leftrightarrow \neg p \wedge \neg q \quad \text{(De Morgan's Law)}$  
n) $\neg (p \rightarrow q) \Leftrightarrow p \wedge \neg q$  
o) $\neg (p \leftrightarrow q) \Leftrightarrow (p \wedge \neg q) \vee (q \wedge \neg p)$

### Proof of $p \rightarrow q \Leftrightarrow \neg p \vee q$

We have to construct a truth table to prove that it is a tautology. The statement is: $(p \rightarrow q) \leftrightarrow (\neg p \vee q)$

$$
\begin{array}{|c|c|c|c|c|}
\hline
p & q & p \rightarrow q & \neg p \vee q & (p \rightarrow q) \leftrightarrow (\neg p \vee q) \\\\
\hline
\text{T} & \text{T} & \text{T} & \text{T} & \text{T} \\\\
\text{T} & \text{F} & \text{F} & \text{F} & \text{T} \\\\
\text{F} & \text{T} & \text{T} & \text{T} & \text{T} \\\\
\text{F} & \text{F} & \text{T} & \text{T} & \text{T} \\\\
\hline
\end{array}
$$

Hence, $(p \rightarrow q) \Leftrightarrow \neg p \vee q$ is a tautology.

### Proof of part (n) without truth tables

We want to show: $\neg (p \rightarrow q) \Leftrightarrow p \wedge \neg q$

$$
\begin{aligned}
\neg (p \rightarrow q) &\Leftrightarrow \neg (\neg p \vee q) & \quad &\text{(by h: } p \rightarrow q \Leftrightarrow \neg p \vee q) \\\\
&\Leftrightarrow \neg (\neg p) \wedge \neg q & \quad &\text{(by m: De Morgan's)} \\\\
&\Leftrightarrow p \wedge \neg q & \quad &\text{(by a: Double Negation)}
\end{aligned}
$$

---

## Variations of Conditional Statement

Given a statement of the form $p \rightarrow q$, the statement:

* $\neg q \rightarrow \neg p$ is called the **contrapositive** of $p \rightarrow q$.
* $q \rightarrow p$ is called the **converse** of $p \rightarrow q$.
* $\neg p \rightarrow \neg q$ is called the **inverse** of $p \rightarrow q$.

---

## Example

Show that: $(A \wedge B) \rightarrow Q \Leftrightarrow A \rightarrow (B \rightarrow Q)$

### 1st Method
By definition, we show that $((A \wedge B) \rightarrow Q) \leftrightarrow (A \rightarrow (B \rightarrow Q))$ is a tautology by constructing the truth table.

### 2nd Method
We can use the known equivalences between various statements to get the wanted equivalence.

$$
\begin{aligned}
(A \wedge B) \rightarrow Q &\Leftrightarrow \neg(A \wedge B) \vee Q & \quad &\text{(because } p \rightarrow q \Leftrightarrow \neg p \vee q) \\\\
&\Leftrightarrow (\neg A \vee \neg B) \vee Q & \quad &\text{(because } \neg(p \wedge q) \Leftrightarrow \neg p \vee \neg q) \\\\
&\Leftrightarrow \neg A \vee (\neg B \vee Q) & \quad &\text{(because } (p \vee q) \vee R \Leftrightarrow p \vee (q \vee R)) \\\\
&\Leftrightarrow \neg A \vee (B \rightarrow Q) & \quad &\text{(because } \neg p \vee q \Leftrightarrow p \rightarrow q) \\\\
&\Leftrightarrow A \rightarrow (B \rightarrow Q) & \quad &\text{(because } \neg p \vee q \Leftrightarrow p \rightarrow q)
\end{aligned}
$$

{{< pdf "Relationship_Between_Statements.pdf" >}}