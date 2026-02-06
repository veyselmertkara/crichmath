---
title: "Mathematical Induction and the Successor Function"
date: 2026-01-30T20:59:00+03:00
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Elementary Number Theory","Archive"]
draft: false
---

In mathematics, most basic operations feel intuitive. Consider multiplication or summation. We, without any mathematical thinking, only apply the algorithms that will give us the answer. However, every mathematical algorithm, actually, originate from some theorems.  
&emsp;In this part, before mathematical induction, it is important to know the Successor Function and its applications, and furthermore, how it is related to induction.  
&emsp;Let there be a function whose domain and codomain is $\mathbb{N}$ with the property that every natural number has the image of the successor natural number under this function.  
&emsp;**Definition.** The successor function is a mathematical function that takes a natural number and returns the next natural number in the sequence. The successor function is denoted by $S$.  
&emsp;
In other words, the successor function is given by $S : \mathbb{N} \to \mathbb{N}$ such that $S(n)=n+1$ for all $n \in \mathbb{N}$.  
&emsp;
**Definition.** An axiom is a statement that is assumed to be true without proof and is used as a starting point to derive other statements (theorems) using logical reasoning, i.e., a basic assumption in a formal system from which all other results are deduced.  
&emsp;
<span style="color: blue">Pieno Axioms:</span>

&emsp;1. $0 \in \mathbb{N}$.  
&emsp;2. $\forall n \in \mathbb{N},\ S(n) \in \mathbb{N}$.  
&emsp;3. $\forall n \in \mathbb{N},\ S(n) \neq 0$.  
&emsp;4. $\forall m,n \in \mathbb{N},\ S(m)=S(n) \Rightarrow m=n$.  
&emsp;5. If $A \subseteq \mathbb{N}$, $0 \in A$, and $\forall n\in\mathbb{N}(n\in A \Rightarrow S(n)\in A)$, then $A=\mathbb{N}$.  
&emsp;For example, we can consider:

$$
S(1)=2, \quad S(11)=12, \quad S(S(S(3)))=6, \quad S(S(S(S(S(S(21))))))=27.
$$

<br>

&emsp;<span style="color: blue">Example:</span> Prove that $2+2=4$.

$$ 2+2 = S(S(0)) + S(S(0)) $$

$$ = S(S(S(0) + S(0))) $$

$$ = S(S(S(S(0)))) $$

$$ = 4. $$

<br>

&emsp;<span style="color: blue">Induction Axiom:</span>  
&emsp;For all $A \subseteq \mathbb{N}$, if $1 \in A$ and, for all $n \in \mathbb{N}$, if $n \in A$, then $S(n) \in A$, then $A=\mathbb{N}$.  
&emsp;This is rather a complex explanation, even though induction is expressed as above formally. An informal and more student friendly explanation would be as follows:  
&emsp;If the first element of the set of natural numbers is an element of some set $A$, and furthermore, for each element $n$ of $A$, if $S(n)$ is also an element of $A$, then the set $A$ is equal to the set of natural numbers, i.e., $\mathbb{N}$.  
&emsp;**Theorem.(Principle of Mathematical Induction)**  
&emsp;Let $S \subseteq \mathbb{N}$. If
&emsp;1. $1 \in S$  
&emsp;2. If $k \in S$, then $k+1 \in S$  

then, $S=\mathbb{N}.$
Note that mathematical induction is also called the first principle finite/mathematical induction.  
&emsp;Proofs consisting of induction are very entertaining and not difficult. We will, now, consider the method to solve such problems.

&emsp;<span style="color: red">Method:</span>

1. Firstly, construct an induction basis and show that 1 is in the set in the problem, i.e., satisfying the property given in the problem.
2. Secondly, construct an inductive step, assuming some element is in the set, and then the image of the arbitrary element under the successor function is also is in the set.
3. Conclude that the set is equal to $\mathbb{N}.$

<br>

---

<br>

<span style="color: blue">Example(1)</span> Prove that for all $n \in \mathbb{N}$,

$$
1+2+3+4 + \dots + n =\frac{n(n+1)}{2}.
$$

&emsp;<span style="color: orange">Solution: </span>  
We will do a proof by first principle finite induction, i.e., mathematical induction.  
&emsp;**Induction Basis:**
&emsp;Observe that, for the base case, i.e., $n=1$,  

$$
1=\frac{1(1+1)}{2}=\frac{2}{2}=1.
$$

Therefore, for the base case, the statement is satisfied.  
&emsp;**Inductive Step:**  
&emsp;Assume, for a fixed but an arbitrary $k \in \mathbb{N}$, that it is satisfied that

$$
1+2+3+4+ \dots + k= \frac{k(k+1)}{2}.
$$

This assumption is called the Induction Hypothesis or Induction Assumption.  
&emsp;Now, we wish to show that the statement is also true for, then, $k+1$.  
&emsp;By induction hypothesis, we have

$$ 1+2+3+4+ \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) $$

$$ = \frac{k(k+1)+2(k+1)}{2} $$

$$ =\frac{(k+1)\cdot(k+2)}{2} $$

$$ =\frac{(k+1)\cdot(k+1+1)}{2} $$

Therefore, by PMI(Principle of Mathematical Induction), for all $n \in \mathbb{N}$,

$$
1+2+3+4 + \dots + n =\frac{n(n+1)}{2}.
$$

<br>

---

<br>

&emsp;<span style="color: blue">Example(2)</span> Prove that for all $n \in \mathbb{N}$,

$$
2^n \geq n+1.
$$

&emsp;<span style="color: orange">Solution: </span>  
&emsp;We will do a proof by first principle induction, i.e., mathematical induction.  
&emsp;**Induction Basis:**  
&emsp;Observe that, for the base case, i.e., $n=1$, it is clear that

$$
2^1=2 \geq (1+1)=2.
$$

Therefore, for the base case, the statement is satisfied.  
&emsp;**Inductive Step:**  
&emsp;Assume, for a fixed but an arbitrary $k \in \mathbb{N}$, that it is satisfied that

$$
2^k \geq k+ 1 \text{  (Induction Hypothesis/Assumption).}
$$  
&emsp;We wish to show that the statement is also true for $k+1$.  
&emsp;Now, by induction hypothesis, we have

$$ 2^{k+1} \geq 2^k \cdot 2 $$

$$ \geq 2(k+1) $$

$$ \geq 2k + 2 =k + (k+2) $$

$$ \geq k+2 $$

$$ \geq (k+1) + 1. $$

Therefore, by PMI(Principle of Mathematical Induction), for all $n \in \mathbb{N}$,

$$
2^n \geq n+1.
$$

<br>

&emsp;We can generalize the result of mathematical induction to a second theorem as follows:  
&emsp;**Theorem.(A Variation of Mathematical Induction)**

Let $S \subseteq \mathbb{N}$ and $n_0 \in \mathbb{N}$. If  
&emsp;1. $n_0 \in S$  
&emsp;2. If $k \in S$ with $k \geq n_0$ and $\\{n_0, \dots,k\\} \subseteq S$, then $k+1 \in S$  
then, $S=\mathbb{N}.$  
&emsp;<span style="color: blue">Example:</span> Prove that for all integers $n \geq 5$,

$$
2^n > n^2.
$$

<span style="color: orange">Solution: </span>  
&emsp;We will do a proof by induction.  
&emsp;**Induction Basis:**  
&emsp;Observe that, for the base case, i.e., $n=5$, we have  

$$
2^5 = 32 > 5^2=25.
$$

So, for the base case, the statement is satisfied.  
&emsp;**Inductive Step:**  
&emsp;Assume, for a fixed but an arbitrary $k \in \\{n \in \mathbb{N} \mid n \geq 5\\}$, that it is satisfied that

$$
2^k > k^2\text{ (Induction Hypothesis/Assumption).}
$$

&emsp;We wish to show that the statement is also true for $k+1$.  
&emsp;By induction hypothesis, we have

$$ 2^{k+1} = 2^k \cdot 2 $$

$$ > 2 \cdot k^2. $$

Here, we can observe that $2 \cdot k^2 > (k+1)^2$, since $2 \cdot k^2=k^2 + k^2$ and $(k+1)^2=k^2+2k+1$ and $k^2>2k+1$, as $k^2-2k=k(k-2) >1$, since $k \geq 5$ and therefore $k,(k-2)>1$.  
&emsp;It follows that

$$
2^{k+1} > 2 \cdot k^2 > (k+1)^2.
$$
&emsp;Hence, by PMI, for all integers $n \geq 5$,

$$
2^n > n^2.
$$

{{< pdf "Mathematical_Induction_and_the_Successor_Function.pdf" >}}