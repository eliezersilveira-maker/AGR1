document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito do Contador Animado do PIB
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = count + 1;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // 2. Renderização do Gráfico com Chart.js
    const ctx = document.getElementById('agroChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Participação no PIB (%)', 'Uso de Tecnologias Limpas (%)', 'Redução de Emissões (Meta %)'],
            datasets: [{
                label: 'Métricas Atuais vs Metas',
                data: [24, 45, 60],
                backgroundColor: ['#2c6e49', '#4c9a2a', '#d68c45'],
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});

// 3. Simulador de Impacto da Redação
function simularImpacto(modelo) {
    const resultado = document.getElementById('resultado-simulacao');
    if (modelo === 'antigo') {
        resultado.innerHTML = `
            <strong style="color: #e63946;">Modelo Antigo:</strong><br>
            Causa esgotamento do solo e alta vulnerabilidade a secas extremas. Risco iminente de sanções e barreiras comerciais do bloco europeu.
        `;
    } else if (modelo === 'sustentavel') {
        resultado.innerHTML = `
            <strong style="color: #4c9a2a;">Modelo Sustentável (ILPF):</strong><br>
            Zera a necessidade de novos desmatamentos, recupera solos castigados e atrai créditos verdes internacionais.
        `;
    }
}

// 4. Alternador de Tema (Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});