---
title: "Why Prime Numbers are Infinite"
date: 2024-02-01T11:00:00+03:00
draft: false
summary: "A brief look at Euclid's proof for the infinitude of primes."
lang: "en"
---

Euclid's proof that there are infinitely many prime numbers is a classic example of proof by contradiction.

Assume, for the sake of contradiction, that there is a finite list of prime numbers: $p_1, p_2, \dots, p_n$.

Let $N$ be the product of all these primes plus 1:
$$ N = p_1 \cdot p_2 \cdot \dots \cdot p_n + 1 $$

Now, consider the prime factorization of $N$. $N$ must be divisible by some prime number $p$. 
However, if we divide $N$ by any of our listed primes $p_i$, we get a remainder of 1.

Thus, the prime factor $p$ of $N$ cannot be in our finite list. This contradicts the assumption that our list contained *all* prime numbers. Therefore, there must be infinitely many primes.
