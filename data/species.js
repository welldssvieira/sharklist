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
            appendix: "II"
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
        image: "assets/images/sharks/carcharodon_carcharias/card.jpg"
    },
    {
        id: 2,
        code: "134",
        name: "Tubarão-baleia",
        scientificName: "Rhincodon typus",
        image: "assets/images/sharks/rhincodon_typus/card.jpg",
    },
    {
        id: 3,
        code: "159",
        name: "Tubarão-branco",
        scientificName: "Carcharodon carcharias",
        image: "assets/images/sharks/carcharodon_carcharias/card.jpg",
    },
    {
        id: 4,
        code: "176",
        name: "Tubarão-de-babados",
        scientificName: "Chlamydoselachus anguineus",
        image: "assets/images/sharks/chlamydoselachus_anguineus/card.jpg",
    },
    {
        id: 5,
        code: "517",
        name: "Tubarão-tigre",
        scientificName: "Galeocerdo cuvier",
        image: "assets/images/sharks/galeocerdo_cuvier/card.jpg",
    },
    {
        id: 6,
        code: "440",
        name: "Tubarão-mako",
        scientificName: "Isurus oxyrinchus",
        image: "assets/images/sharks/isurus_oxyrinchus/card.jpg",
    },
    {
        id: 7,
        code: "443",
        name: "Tubarão-martelo da Carolina",
        scientificName: "Sphyrna gilberti",
        image: "assets/images/sharks/sphyrna_gilberti/card.jpg",
    },
    {
        id: 8,
        code: "472",
        name: "Tubarão-raposa",
        scientificName: "Alopias vulpinus",
        image: "assets/images/sharks/alopias_vulpinus/card.jpg",
    },
    {
        id: 9,
        code: "519",
        name: "Tubarão-touro",
        scientificName: "Carcharias taurus",
        image: "assets/images/sharks/carcharias_taurus/card.jpg",
    },
    {
        id: 10,
        code: "002",
        name: "Cação-bico-de-ave",
        scientificName: "Deania calcea",
        image: "assets/images/sharks/deania_calcea/card.jpg",
    },
    {
        id: 11,
        code: "003",
        name: "Cação-brasileiro-cauda-branca",
        scientificName: "Squalus albicaudus",
        image: "assets/images/sharks/squalus_albicaudus/card.jpg",
    },
    {
        id: 12,
        code: "004",
        name: "Cação-cabeça-de-flecha",
        scientificName: "Deania profundorum",
        image: "assets/images/sharks/deania_profundorum/card.jpg",
    }
];