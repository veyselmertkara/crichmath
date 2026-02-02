---
title: "Introduction to Calculus I"
date: 2026-02-02T12:00:00+03:00
draft: false
math: true
author: "Selim Kaan Ozsoy, Middle East Technical University"
categories: ["Calculus I"]
--- 

## 1. What Is Calculus?

Calculus is a fundamental branch of mathematics that provides a rigorous language for describing change and accumulation. It allows us to analyze how quantities vary continuously and how infinitely small changes combine to produce finite results. At its core, calculus is concerned with understanding processes that evolve smoothly rather than in discrete steps, such as motion, growth, heat flow, or variation in physical systems.  
&emsp;The field is often divided into two sections called differential calculus and integral calculus. In this section, we will be focusing on differential calculus, which is often called in most universities' curricula, Calculus I.

## 2. Calculus I

Calculus I is concerned with the mathematical description of change. Many problems arising in mathematics, physics, and engineering involve quantities that vary continuously rather than discretely. Velocity depends on time, temperature varies across space, and the shape of a curve changes from point to point. Calculus provides a precise language and a systematic framework for analyzing such phenomena.  
&emsp;At its core, Calculus I focuses on two fundamental ideas: limits and derivatives. The concept of a limit allows us to describe the behavior of a function near a point, even when direct evaluation is not possible. It formalizes the intuitive notion of “approaching” a value and serves as the foundation upon which the rest of calculus is built. Without limits, ideas such as instantaneous change or continuity cannot be rigorously defined.

## 3. Why We Need Calculus

In primary and secondary education, students are typically introduced to elementary algebra and fragments of pre-calculus, such as trigonometric identities and logarithmic expressions. With this background, it becomes possible to solve a limited class of physics problems involving quantities like constant velocity, uniform pressure, or basic heat transfer. This naturally raises an important question: if such problems are already solvable, why is calculus necessary at all? Is elementary mathematics insufficient?  
&emsp;The short answer is yes. Without calculus, it is impossible to rigorously compute even seemingly simple physical quantities, such as the total pressure exerted along the curved surface of a plastic water bottle.   
&emsp;Most physical formulas encountered early on are derived under restrictive assumptions.
A standard example is the classical work formula $W = F d \cos \theta$, where $W$ denotes the work done by a force $F$, $d$ represents the displacement, and $\theta$ is the angle between the force and the direction of motion. This expression implicitly assumes that the force is constant, that the direction of motion is straight, and that the angle between force and displacement does not vary.  
&emsp;Now consider a more realistic situation: a person pulling a rolling suitcase through a crowded airport. The direction of motion changes continuously in order to avoid obstacles, the path followed is curved and irregular, and the applied force is not always parallel to the instantaneous direction of motion. In such a case, the classical formula above no longer applies.
The question then becomes: how do we compute the total work done on the suitcase?   
&emsp;This is precisely where calculus enters the picture. The correct mathematical description of work in this setting is given by the line integral

$$
W = \int \vec{F} \cdot d\vec{r}
$$

Here, the force $\vec{F}$ is allowed to vary both in magnitude and direction, and the differential displacement $d\vec{r}$ is taken along the actual path of motion. The integral accumulates infinitesimal contributions of work along the curve, producing a result that accurately reflects the physical situation.  
&emsp;In this sense, calculus can be viewed as the mathematical framework that replaces idealized, conditional formulas with precise and general descriptions.

{{< pdf "Introduction_to_Calculus_I (1).pdf" >}}