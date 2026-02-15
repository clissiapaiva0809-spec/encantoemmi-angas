const linksData = [
    {
        title: "Linha Luxo Premium",
        description: "A Linha Luxo Premium foi desenvolvida para quem não abre mão da excelência. Com acabamentos impecáveis e materiais selecionados de altíssima qualidade, cada peça entrega um brilho superior e durabilidade incomparável. É a escolha definitiva para criar acessórios que são verdadeiras joias.",
        emoji: "✨",
        url: "https://wa.me/5592992688422?text=Tenho%20interesse%20na%20linha%20*luxo%20primium*"
    },
    {
        title: "Coleção Elegance",
        description: "A Coleção Elegance une o clássico ao contemporâneo em uma curadoria de cores e texturas sóbrias. Perfeita para quem busca um visual polido e profissional, esta linha traz a harmonia necessária para acessórios que transmitem confiança e bom gosto de forma sutil e marcante.",
        emoji: "💎",
        url: "https://wa.me/5592992688422?text=Tenho%20interesse%20na%20linha%20coleção+*elegance*"
    },
    {
        title: "Linha Brilho",
        description: "Para quem nasceu para brilhar, a Linha Brilho traz o máximo de luminosidade e reflexos intensos. Com facetas que captam a luz de todos os ângulos, estas miçangas são ideais para peças vibrantes, festivas e cheias de personalidade. Transforme qualquer acessório em um ponto de luz irresistível.",
        emoji: "🌟",
        url: "https://wa.me/5592992688422?text=Tenho%20interesse%20na%20linha%20*brilho*"
    },
    {
        title: "Coleção Delicatta",
        description: "Inspirada na leveza e no romantismo, a Coleção Delicatta apresenta tons pastéis, acabamentos acetinados e formatos minuciosos. É a escolha perfeita para criações que prezam pela feminilidade, pelo minimalismo e pelo toque artesanal cuidadoso.",
        emoji: "🌸",
        url: "https://wa.me/5592992688422?text=Tenho%20interesse%20na%20linha%20*coleção%20delicatta*"
    },
    {
        title: "Linha Casual Chic",
        description: "A Linha Casual Chic é o equilíbrio perfeito entre o despojado e o arrumado. Com cores modernas e versáteis, estas miçangas permitem criar peças que elevam o visual cotidiano com um toque de modernidade. Prática, atual e cheia de atitude.",
        emoji: "🎀",
        url: "https://wa.me/5592992688422?text=Tenho%20interesse%20na%20linha%20*casual%20chic*"
    },
    {
        title: "Linha Básica Essencial",
        description: "Versatilidade é a palavra de ordem. A Linha Básica Essencial reúne as cores e formatos indispensáveis que todo artesão ou amante de acessórios precisa ter. São peças resistentes e fundamentais para compor desde detalhes simples até estruturas complexas.",
        emoji: "💫",
        url: "https://wa.me/5592992688422?text=Tenho%20interesse%20na%20linha%20*básica%20Essenci*"
    }
];

const container = document.getElementById('links-container');

function renderLinks() {
    linksData.forEach((item, index) => {
        const linkItem = document.createElement('div');
        linkItem.className = 'link-item';

        linkItem.innerHTML = `
            <button class="btn-main" onclick="toggleDetails(${index})">
                <div class="title-group">
                    <span>${item.emoji}</span>
                    <span>${item.title}</span>
                </div>
                <i data-lucide="chevron-right" class="chevron-icon" id="chevron-${index}"></i>
            </button>
            <div class="details-panel" id="panel-${index}">
                <p>${item.description}</p>
                <a href="${item.url}" target="_blank" class="btn-go">
                    Ver mais detalhes ${item.title}
                </a>
            </div>
        `;
        container.appendChild(linkItem);
    });
    
    lucide.createIcons();
}

function toggleDetails(index) {
    const panel = document.getElementById(`panel-${index}`);
    const chevron = document.getElementById(`chevron-${index}`);
    
    const isOpen = panel.classList.contains('open');

    if (isOpen) {
        panel.classList.remove('open');
        chevron.style.transform = 'rotate(0deg)';
    } else {
        panel.classList.add('open');
        chevron.style.transform = 'rotate(90deg)';
    }
}

renderLinks();
