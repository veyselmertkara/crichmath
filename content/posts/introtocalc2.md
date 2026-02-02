---
title: "Introduction to Calculus II"
date: 2026-02-02T12:00:00+03:00
draft: false
math: true
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Calculus II"]
---
## 1. A Comparison

The way calculus is divided and presented varies significantly across universities and textbooks. In many curricula, calculus is split into two separate courses, commonly referred to as Calculus I and Calculus II. In such settings, Calculus I typically focuses on limits and differentiation, while Calculus II begins with integration, often introduced through Riemann sums, and continues with techniques of integration and applications.  
&emsp;At Middle East Technical University (METU), however, this division does not appear explicitly. Instead, the standard sequence consists of *Calculus with Analytic Geometry* followed by *Multivariable Calculus*. While these titles reflect the geometric and multidimensional aspects of the material, they can be somewhat vague in terms of content. For instance, topics such as infinite sequences and series are also covered within Multivariable Calculus, even though they are not inherently multivariable in nature.  
&emsp;For the purposes of this course, it is therefore useful to adopt a conceptual separation resembling the traditional Calculus I–Calculus II structure. In this framework, the present course will begin with Riemann sums and the theory of integration. This choice is motivated by two main reasons.  
&emsp;First, from a historical perspective, the notions of limits and differentiation emerged in the 17th century, largely driven by physical problems related to motion, change, and rates. These ideas were developed by Newton and Leibniz as mathematical tools to formalize physical intuition. Integration, on the other hand, acquired its rigorous foundation much later. The definition of the integral via Riemann sums, which interprets integration as the limit of an infinite sum, belongs to the 19th century and is closely associated with the work of Bernhard Riemann. From this viewpoint, it is natural to treat integration as a distinct conceptual development rather than merely the inverse of differentiation.  
&emsp;Second, the Fundamental Theorem of Calculus plays a central role in unifying differentiation and integration. It establishes a deep and nontrivial connection between two ideas that are, at first glance, conceptually different. Given its importance and its foundational role in the theory of integration, it is pedagogically reasonable to introduce integration as a new topic in its own right, rather than as a continuation of earlier material.

## 2. Bernhard Riemann

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
  <img src="/360_360_60714ca8869af.jpg" alt="Bernhard Riemann (1826–1866), whose work laid the foundations of modern integration theory." style="max-width: 100%; height: auto;" />
  <p><em>Figure 1: Bernhard Riemann (1826–1866), whose work laid the foundations of modern integration theory.</em></p>
</div>

The modern understanding of integration is inseparable from the work of Bernhard Riemann (1826–1866), one of the most influential mathematicians of the 19th century. Riemann’s contributions span a wide range of areas, including complex analysis, differential geometry, and number theory, but his formulation of the integral remains one of his most enduring legacies.  
&emsp;Riemann introduced a precise definition of the integral by approximating the area under a curve using finite sums over partitions of an interval. By refining these partitions and considering the limit of the corresponding sums, he provided a rigorous framework for integration that went beyond the intuitive geometric arguments used previously. This approach clarified which functions can be integrated and under what conditions, laying the groundwork for further developments in analysis.  
&emsp;Although later theories, most notably Lebesgue integration, extended and refined Riemann’s ideas, the Riemann integral remains fundamental in both theory and applications. It captures the essential geometric intuition behind integration and serves as a natural starting point for understanding more advanced integration theories. For this reason, Riemann’s perspective will guide much of our initial discussion of integrals in this course.

![An illustration of a Riemann sum approximating the area under a curve.](/material-GJpUZVVz.png)
*Figure 2: An illustration of a Riemann sum approximating the area under a curve.*

## 3. Main Topics to Be Discussed

1. Integration
2. Techniques of Integration
3. Improper Integrals
4. Applications of Integration
5. Sequences, Series, and Power Series
6. Partial Differentiation
7. Applications of Partial Derivatives

{{< pdf "Introduction_to_Calculus_II.pdf" >}}