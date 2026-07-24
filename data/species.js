export { especies };

const especies = [
    {
        id: 1,
        code: "001",

        // Identificação
        name: "Tubarão-branco",
        scientificName: "Carcharodon carcharias",

        // Classificação
        order: "Lamniformes",
        family: "Lamnidae",
        class: "Chondrichthyes",

        // Conservação
        iucn: {
            status: "VU",
            label: "Vulnerável"
        },

        cms: {
            appendix: "Apêndice II"
        },

        // Características
        size: {
            maxLength: 6.1,      // metros
            maxWeight: 2268      // kg
        },

        speed: {
            max: 56,             // km/h
            note: "Em sprints curtas"
        },

        depth: {
            max: 1200,           // metros
            zone: "Zona mesopelágica"
        },

        lifespan: {
            average: 70          // anos
        },

        // Resumo
        overview:
            "O tubarão-branco é um dos maiores predadores marinhos existentes. Possui distribuição mundial, alta capacidade migratória e adaptações únicas que permitem manter temperatura corporal elevada mesmo em águas frias.",

        // Habitat
        habitat: {
            description:
                "Zonas costeiras e oceânicas temperadas e tropicais, prefere águas entre temperaturas de 12°C e 24°C.",

            environments: [
                "Zona costeira",
                "Águas tropicais",
                "Zona mesopelágica"
            ]
        },

        // Distribuição
        distribution: {
            description:
                "Distribuição cosmopolita, presente em todos os oceanos do mundo, especialmente em águas costeiras temperadas.",

            regions: [
                "Atlântico Norte",
                "Atlântico Sul",
                "Mediterrâneo",
                "Pacífico Norte",
                "Oceano Índico",
                "Austrália",
                "África do Sul"
            ]
        },

        // Alimentação
        diet: {
            description:
                "Predador de topo com alimentação variada conforme a região.",

            foods: [
                "Peixes ósseos",
                "Focas",
                "Leões-marinhos",
                "Golfinhos",
                "Tartarugas",
                "Aves marinhas"
            ]
        },

        // Reprodução
        reproduction: {
            type: "Vivíparo",
            gestation: "12 meses",
            offspring: "2–17",
            interval: "2–3 anos",
            maleMaturity: "9–10 anos",
            femaleMaturity: "14–33 anos"
        },

        // Curiosidades
        facts: [
            {
                title: "Mais quente que a água ao seu redor",
                description:
                    "O tubarão-branco é um dos poucos tubarões conhecidos como endotérmicos regionais, conseguindo manter partes do corpo mais quentes que a água ao redor. Essa adaptação permite que nade em águas frias e tenha maior velocidade e desempenho durante a caça."
            }
        ],

        factsCount: 25,

        // Galeria
        media: {
            images: [
                "assets/images/sharks/carcharodon_carcharias/gallery/01.webp",
                "assets/images/sharks/carcharodon_carcharias/gallery/02.webp",
                "assets/images/sharks/carcharodon_carcharias/gallery/03.webp",
                "assets/images/sharks/carcharodon_carcharias/gallery/04.webp",
                "assets/images/sharks/carcharodon_carcharias/gallery/05.webp"
            ],

            total: 365
        },

        // Arquivos
        imageCard: "assets/images/sharks/carcharodon_carcharias/card.jpg"
    }
];