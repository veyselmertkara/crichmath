---
title: "Logical Arguments and Derivation"
date: 2026-02-14T18:50:00+03:00
author: "Selim Kaan Özsoy, Middle East Technical University"
categories: ["Foundations of Mathematical Reasoning"]
draft: false
math: true
---


# 1. Valid Arguments

## 1.1 Definition of an Argument  
A **logical argument** is a collection of statements called *premises* ($P_1, P_2, \dots, P_n$) and a conclusion ($Q$). We formally show this structure as:

$$
\begin{array}{c}
P_1 \\\\
P_2 \\\\
\vdots \\\\
P_n \\\\
\hline
\therefore Q
\end{array}
$$

**Definition 1.1 (Valid Argument)**
A logical argument is called **valid** if the conclusion necessarily follows from the premises. That is, if the premises are all true, the conclusion *must* be true.

Formally, an argument is valid if the conditional statement:

$$
(P_1 \wedge P_2 \wedge \dots \wedge P_n) \rightarrow Q
$$

is a **tautology** (always true). Otherwise, it is called an **invalid argument**.

### Consistency

**Definition 1.2 (Consistent Set)**
A set of premises is said to be **consistent** if they can all be true simultaneously. If one can derive a contradiction (e.g., $J \wedge \neg J$) from the premises, the set is called **inconsistent**.

In mathematics, we want to work with consistent sets of axioms. By the *Principle of Explosion*, from a contradiction, one could derive **anything**.

---

# 2. Inference Rules

To prove arguments formally without using massive truth tables, we use valid argument forms known as **Inference Rules**.

$$
\begin{array}{|c|c|c|}
\hline
\textbf{Rule Name} & \textbf{Argument Form} & \textbf{Tautology} \\\\
\hline
\text{Modus Ponens} & \begin{array}{c} P \rightarrow Q \\\\ P \\\\ \hline \therefore Q \end{array} & (P \wedge (P \rightarrow Q)) \rightarrow Q \\\\
\hline
\text{Modus Tollens} & \begin{array}{c} P \rightarrow Q \\\\ \neg Q \\\\ \hline \therefore \neg P \end{array} & (\neg Q \wedge (P \rightarrow Q)) \rightarrow \neg P \\\\
\hline
\text{Hypothetical Syllogism} & \begin{array}{c} P \rightarrow Q \\\\ Q \rightarrow R \\\\ \hline \therefore P \rightarrow R \end{array} & ((P \rightarrow Q) \wedge (Q \rightarrow R)) \rightarrow (P \rightarrow R) \\\\
\hline
\text{Disjunctive Syllogism} & \begin{array}{c} P \vee Q \\\\ \neg P \\\\ \hline \therefore Q \end{array} & ((P \vee Q) \wedge \neg P) \rightarrow Q \\\\
\hline
\text{Addition} & \begin{array}{c} P \\\\ \hline \therefore P \vee Q \end{array} & P \rightarrow (P \vee Q) \\\\
\hline
\text{Simplification} & \begin{array}{c} P \wedge Q \\\\ \hline \therefore P \end{array} & (P \wedge Q) \rightarrow P \\\\
\hline
\text{Double Negation} & \begin{array}{c} \neg(\neg P) \\\\ \hline \therefore P \end{array} & \neg(\neg P) \leftrightarrow P \\\\
\hline
\end{array}
$$

---

# 3. Examples of Formal Derivation

We verify the validity of arguments by assigning letters to statements and applying inference rules.

### <span style="color: blue">Example 3.1</span>
Consider the following argument in daily language:

"If the product is efficient ($P$), then it will make money ($Q$). The product is red ($S$) or the manufacturer is 'Make' ($M$). If the product is red, then it will not make money. Therefore, the product is efficient."

### <span style="color: blue">Example 3.2 (Formal Derivation 1)</span>
Show that the following argument is valid:

$$
\begin{array}{l}
1. \quad P \vee Q \\\\
2. \quad S \rightarrow R \\\\
3. \quad \neg R \\\\
4. \quad \neg S \rightarrow \neg P \\\\
\hline
\therefore Q
\end{array}
$$

**<span style="color: orange">Proof / Derivation:</span>**

1. $S \rightarrow R$ \quad (Premise)
2. $\neg R$ \quad (Premise)
3. $\neg S$ \quad (Modus Tollens on 1, 2)
4. $\neg S \rightarrow \neg P$ \quad (Premise)
5. $\neg P$ \quad (Modus Ponens on 3, 4)
6. $P \vee Q$ \quad (Premise)
7. $Q$ \quad (Disjunctive Syllogism on 5, 6) $\blacksquare$

### <span style="color: blue">Example 3.3 (Formal Derivation 2)</span>
Show that: $((P \vee Q) \rightarrow \neg R) \wedge (S \rightarrow R) \wedge P \implies \neg S$

**<span style="color: orange">Derivation:</span>**

1. $P$ \quad (Premise)
2. $P \vee Q$ \quad (Addition rule on 1)
3. $(P \vee Q) \rightarrow \neg R$ \quad (Premise)
4. $\neg R$ \quad (Modus Ponens on 2, 3)
5. $S \rightarrow R$ \quad (Premise)
6. $\neg S$ \quad (Modus Tollens on 4, 5) $\blacksquare$

---

# 4. Invalid Arguments

To show an argument is **invalid**, we do not need a full derivation. We only need to find a single assignment of truth values (Counter-example) where:
* All Premises are **True** (T).
* The Conclusion is **False** (F).

To show an argument is invalid, we assign truth values to the statements such that the premises are **True**, but the conclusion is **False**.

### <span style="color: blue">Example</span>
Consider the argument:

$$
\begin{array}{c}
P \rightarrow Q \\\\
\neg P \\\\
\hline
\therefore \neg Q
\end{array}
$$

Let us choose:
* $P$ is **False**
* $Q$ is **True**

Check the premises:
1. $P \rightarrow Q$: (False $\rightarrow$ True) is **True**.
2. $\neg P$: ($\neg$ False) is **True**.

Check the conclusion:
* $\neg Q$: ($\neg$ True) is **False**.

Since we found a case where premises are True and conclusion is False, the argument is **invalid**. *(This is known as the fallacy of denying the antecedent).*

---

## Example: Determining Validity

### <span style="color: blue">Example</span>
Determine whether or not the following logical argument is valid:

$$
\begin{array}{l}
\neg Z \rightarrow \neg Y \\\\
\neg X \rightarrow Z \\\\
\hline
\therefore \neg Z \rightarrow Y
\end{array}
$$

**<span style="color: orange">Solution:</span>**

Consider the case:
* $X$ is True
* $Y$ is True
* $Z$ is False

Let's check the truth values:
* $\neg X$ is False.
* $\neg Y$ is False.
* $\neg Z$ is True.

Premises:
1. $\neg Z \rightarrow \neg Y$: (True $\rightarrow$ False) is **False**.

*(Note: To show invalidity, we usually look for True Premises and False Conclusion. If premises cannot be made True while conclusion is False, it might be valid. We should start with the conclusion when we prove some argument is invalid.)*

---

## Consistency

**Definition**
A set of premises is said to be **inconsistent** if one can derive a contradiction from them. A set of premises that is not inconsistent is called **consistent**.

### <span style="color: blue">Example</span>
Consider the argument (premises):
1. $\neg J \vee S$
2. $L \rightarrow \neg S$
3. $J \wedge L$

Let us analyze these premises:
1. From (3), by Simplification, we have $J$.
2. From (3), by Simplification, we have $L$.
3. From (1) and $J$ (using Double Negation $\neg(\neg J)$ and Disjunctive Syllogism), or simply: Since $J$ is True, $\neg J$ is False. For $(\neg J \vee S)$ to be True, $S$ must be **True**.
4. From (2) and $L$: Since $L$ is True, $\neg S$ must be True (Modus Ponens). So $S$ is **False**.

We have derived $S$ (True) and $\neg S$ (True). This results in a contradiction $S \wedge \neg S$. Therefore, the set of premises is **inconsistent**.

### Why is this important?
In Math, we want to work with a **consistent set of axioms**. Because from a contradiction, one can derive **ANYTHING**, which is called the **Principle of Explosion**.

$$
(P \wedge \neg P) \rightarrow Q
$$

is a tautology. If your axioms are inconsistent, you can prove $1=2$, black is white, etc.

{{< pdf "Logical_Arguments_and_Derivation.pdf" >}}