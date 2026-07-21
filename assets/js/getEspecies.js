import { especies } from "./api.js";

function getEspecies() {
    const containerCatalogo = document.getElementById("catalogo_content");

    const cardsHTML = especies.map(especie => `
        <a data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" target="_self" class="catalogo_card">
            <header class="card_header">
                <div class="card_header_title">
                    <h3>${especie.name}</h3>
                    <h4>${especie.scientificName}</h4>
                </div>

                <div class="card_badge">
                    <span class="badge_icon"></span>
                    <span class="badge_text">#${especie.code}</span>
                </div>
            </header>

            <img loading="lazy" class="card_image"
                src="${especie.image}"
                alt="Imagem do ${especie.name}">
        </a>
    `);

    containerCatalogo.innerHTML = cardsHTML.join("");
};

getEspecies();