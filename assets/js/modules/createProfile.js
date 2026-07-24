import { especies } from "../../../data/species.js";

export function renderProfile() {

    // const imageBanner = document.getElementById("main_content_specie");
    // imageBanner.src = especies[0].imageBanner;

    // const headerSpecie = document.getElementById("header_specie");
    // headerSpecie.innerHTML = '';
    // headerSpecie.innerHTML = renderHeader();

}

function renderHeader() {

    const especie = especies[0];

    return `
        <div class="specie_order_family">
            <p class="order">${especie.order}</p>
            <span class="point"></span>
            <p class="family">${especie.family}</p>
        </div>

        <div class="specie_name">
            <h1 class="nome_comum">${especie.name}</h1>
            <h2 class="nome_cientifico">${especie.scientificName}</h2>
        </div>

        <div class="badge_status">
            <span class="badge">
                IUCN ${especie.iucn.status}
            </span>
            <p class="status_conservacao">${especie.iucn.label}</p>
        </div>
    `;
}