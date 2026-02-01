---
title: "Mini Essays"
description: "Kısa matematiksel denemeler ve notlar."
draft: false
---

<div class="language-filter" style="margin-bottom: 2rem; display: flex; justify-content: center; gap: 1rem;">
    <button onclick="filterLanguage('en')" class="lang-btn active" id="btn-en">English</button>
    <button onclick="filterLanguage('tr')" class="lang-btn" id="btn-tr">Turkish</button>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Sayfa ilk yüklendiğinde varsayılan olarak İngilizceyi seç
    filterLanguage('en');
});

function filterLanguage(lang) {
    const articles = document.querySelectorAll('.post-entry');
    const buttons = document.querySelectorAll('.lang-btn');
    
    // Buton stillerini güncelle
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    articles.forEach(article => {
        // Javascript ile class kontrolü
        if (article.classList.contains('lang-' + lang)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
</script>

<style>
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
}
.lang-btn:hover {
    background: var(--entry);
}
.lang-btn.active {
    background: var(--primary);
    color: var(--theme);
}
</style>
