---
title: "Mini Essays"
description: "High-quality essays written without being tied to a specific topic, appealing to general interest in both English and Turkish."
draft: false
---

<div class="language-filter" style="margin-bottom: 2rem; display: flex; justify-content: center; gap: 1rem;">
    <a href="?filter=en" class="lang-btn active" id="btn-en">English</a>
    <a href="?filter=tr" class="lang-btn" id="btn-tr">Turkish</a>
</div>

<style>
.breadcrumbs {
    display: none !important;
}
.lang-btn {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    padding: 8px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s;
    display: inline-block;
}
.lang-btn:hover {
    background: var(--entry);
}
.lang-btn.active {
    background: var(--primary);
    color: var(--theme); /* PaperMod theme variable for background text color usually contrast */
    color: white; /* Safe bet or var(--bg) */
}
/* Dark mode adjustment if needed */
</style>
