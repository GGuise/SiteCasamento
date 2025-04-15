// Função para normalizar strings (remove acentos e converte para minúsculas)
function normalize(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // remove acentos
}

// Modal Functions - Página de Presentes
function openModal(giftName) {
    document.getElementById('modalGiftName').textContent = giftName;
    document.getElementById('giftModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('giftModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == document.getElementById('giftModal')) {
        closeModal();
    }
};

// Form submission
document.getElementById('giftForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Obrigado por seu presente! Entraremos em contato em breve com instruções para finalização.');
    closeModal();
});


// Script para filtrar presentes por categoria
const categoryButtons = document.querySelectorAll('.category-btn');
const giftCards = document.querySelectorAll('.gift-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remover a classe 'active' de todos os botões
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Adicionar a classe 'active' ao botão clicado
        this.classList.add('active');

        // Obter a categoria selecionada
        const selectedCategory = this.getAttribute('data-category');

        // Filtrar os cards de presente
        giftCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            // Mostrar ou esconder os cards com base na categoria
            if (selectedCategory === 'todas' || selectedCategory === cardCategory) {
                card.style.display = 'block'; // Exibir o card
            } else {
                card.style.display = 'none'; // Ocultar o card
            }
        });
    });
});


// Filtro por nome do presente (com normalização)
document.querySelector('.search-btn').addEventListener('click', function () {
    const searchInput = normalize(document.querySelector('.search-input').value);

    giftCards.forEach(card => {
        const giftName = normalize(card.querySelector('.gift-name').textContent);
        if (giftName.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Buscar ao pressionar Enter
document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('.search-btn').click();
    }
});

//script para modal reserva
//Script para abrir/fechar e redirecionar:
let selectedGiftName = '';
let reservationLink = '';

function openReservationModal(itemName, link) {
    document.getElementById("modalReserveName").innerText = itemName;
    document.getElementById("reserveModal").style.display = "block";
    reservationLink = link; // Armazena o link para redirecionar após o envio
}

function closeReserveModal() {
    document.getElementById("reserveModal").style.display = "none";
}


function closeReservationModal() {
    document.getElementById("reservationModal").style.display = "none";
}

//Script do envio do formulário (simples, com redirecionamento opcional)
document.getElementById("reserveForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Aqui você pode capturar os dados e enviar para onde quiser (e-mail, banco etc.)

    alert("Reserva confirmada! ❤️ Obrigado!");

    // Redireciona para o link (Amazon) se tiver um
    if (reservationLink) {
        window.open(reservationLink, "_blank");
    }

    closeReserveModal();
});








//
/*
document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Aqui você pode validar os dados ou até armazená-los via backend se quiser

    // Redireciona após o preenchimento do formulário
    window.location.href = redirectLink;
});
*/
