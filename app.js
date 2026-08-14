// ==========================================
// 1. DICCIONARIO DE INTERNACIONALIZACIÓN (i18n)
// ==========================================
// ==========================================
// 1. DICCIONARIO DE INTERNACIONALIZACIÓN (i18n)
// ==========================================
const DICCIONARIO = {
    es: {
        buscGeneral: "Buscar Pokémon (ej. Bulbasaur o 001)...",
        buscAtaque: "Buscar por movimiento (ej. Terremoto)...",
        lblTipo: "Tipo Cambiado",
        lblStats: "Estadísticas Cambiadas",
        lblHab: "Habilidad Cambiada",
        lblHabilidades: "Habilidades",
        stats: { hp: 'PS', atk: 'Ataque', def: 'Defensa', spa: 'At. Esp.', spd: 'Def. Esp.', spe: 'Velocidad' },
        movsMenu: "⚔️ Movimientos",
        cats: { nivel: "Por Nivel", mt: "MT / MO", tutor: "Tutor", huevo: "Movs. Huevo" },
        leyenda1: "Puedes identificar estas nuevas adiciones (y por lo tanto ilegales en los juegos habituales) mediante el sistema de asteriscos.",
        leyenda2: "Sin asterisco significa que el Pokémon siempre puede aprender este movimiento subiendo de nivel, tener esta habilidad, etc., pero puede ser a un nivel diferente, ser una habilidad oculta, etc.",
        leyenda3: "Un asterisco (*) significa que el Pokémon puede aprender este movimiento, pero no ordinariamente subiendo de nivel, y lo más probable es que provenga de movimientos huevo, MT/MO o tutores de movimientos. Estos movimientos están disponibles en la versión completa así como en la versión solo legal.",
        leyenda4: "Dos asteriscos (**) significan que el Pokémon no puede obtener esta habilidad o movimiento de forma ordinaria, siendo completamente ilegal fuera del contexto de este hack.",
        movStats: { type: "Tipo", power: "Potencia", accuracy: "Precisión", pp: "PP", effect: "Efecto", absorb: "Absorción" },
        lvlMax: "Nivel Máximo:",
        // NUEVO: UI de la Ruleta
        ruletaMenu: "🎲 Ruleta Dualocke",
        ruletaTitle: "🎲 Ruleta Dualocke",
        ruletaDesc: "Selecciona quién va a tirar de la ruleta para cargar los premios correspondientes.",
        btnQuique: "Tirar Ruleta (Quique)",
        btnPablo: "Tirar Ruleta (Pablo)",
        ruletaPlaceholder: "El resultado aparecerá aquí...",
        // NUEVO: Premios
        premiosBase: [
            { titulo: "Captura libre", desc: "Podrá atrapar un Pokémon en cualquier ruta a elección, respetando la norma de capturar únicamente el primer Pokémon que aparezca." },
            { titulo: "Castigo al perdedor", desc: "El GANADOR podrá elegir diez Pokémon del PERDEDOR (incluyendo los de la caja 'Muertos'). El PERDEDOR podrá indultar a un Pokémon. Si no dispone de diez, se realizará con todos menos el indultado. Si solo tiene uno, se anula." },
            { titulo: "Revivir un Pokémon", desc: "El GANADOR podrá revivir un Pokémon de la caja 'Muertos'. En caso de no tener ninguno, podrá comprar 2 Restaurar Todo." },
            { titulo: "Pérdida de ruleta", desc: "Perderás las recompensas y la tirada pasará a jugarla tu hermano. Si vuelve a salir, seguirá pasando de un hermano a otro hasta que salga otra opción o se rechace tirar." },
            { titulo: "3 Restaurar todos", desc: "El GANADOR obtendrá tres objetos 'Restaurar todo'." },
            { titulo: "Objeto cualquiera a elegir", desc: "El GANADOR podrá elegir un objeto cualquiera (Excepto Rocío bondad. La lista de excepciones podrá ampliarse o reducirse por acuerdo mutuo)." }
        ],
        premioCharmander: { titulo: "Premio especial de Charmander", desc: "Esta opción especial ha sido elegida. Quique obtiene un Charmander." }
    },
    en: {
        buscGeneral: "Search Pokémon (e.g., Bulbasaur or 001)...",
        buscAtaque: "Search by move (e.g., Earthquake)...",
        lblTipo: "Type Changed",
        lblStats: "Stats Changed",
        lblHab: "Ability Changed",
        lblHabilidades: "Abilities",
        stats: { hp: 'HP', atk: 'Attack', def: 'Defense', spa: 'Sp. Atk', spd: 'Sp. Def', spe: 'Speed' },
        movsMenu: "⚔️ Moves",
        cats: { nivel: "Level Up", mt: "TM / HM", tutor: "Tutor", huevo: "Egg Moves" },
        leyenda1: "You can identify these new additions (which are illegal in official games) by using the asterisk system:",
        leyenda2: "No asterisk: The Pokémon can always learn this move by leveling up or possess this ability naturally. However, it might occur at a different level or be a hidden ability.",
        leyenda3: "One asterisk (*): The Pokémon can learn this move, but not through normal leveling. It is most likely obtained via egg moves, TMs/HMs, or move tutors. These moves are available in both the full and legal-only versions.",
        leyenda4: "Two asterisks (**): The Pokémon cannot normally obtain this ability or move. It is completely illegal outside the context of this hack.",
        movStats: { type: "Type", power: "Power", accuracy: "Accuracy", pp: "PP", effect: "Effect", absorb: "Absorb %" },
        lvlMax: "Max Level:",
        // NUEVO: UI de la Ruleta
        ruletaMenu: "🎲 Dualocke Roulette",
        ruletaTitle: "🎲 Dualocke Roulette",
        ruletaDesc: "Select who is spinning the roulette to load the corresponding prizes.",
        btnQuique: "Spin Roulette (Quique)",
        btnPablo: "Spin Roulette (Pablo)",
        ruletaPlaceholder: "The result will appear here...",
        // NUEVO: Premios
        premiosBase: [
            { titulo: "Free Capture", desc: "You may catch a Pokémon on any route of your choice, respecting the rule of catching only the first Pokémon that appears." },
            { titulo: "Loser's Punishment", desc: "The WINNER may choose ten Pokémon from the LOSER (including the 'Dead' box). The LOSER may pardon one Pokémon. If they don't have ten, it applies to all minus the pardoned one. If only one remains, it is annulled." },
            { titulo: "Revive a Pokémon", desc: "The WINNER may revive one Pokémon from the 'Dead' box. If there are none, they may buy 2 Full Restores." },
            { titulo: "Loss of Roulette", desc: "You lose the rewards and the spin passes to your brother. If it lands again, it passes back and forth until another option is selected or declined." },
            { titulo: "3 Full Restores", desc: "The WINNER receives three 'Full Restore' items." },
            { titulo: "Any Item of Choice", desc: "The WINNER may choose any item (Except Soul Dew. Exceptions can be modified by mutual agreement)." }
        ],
        premioCharmander: { titulo: "Charmander Special Prize", desc: "This special option has been drawn. Quique receives a Charmander." }
    }
};

// ==========================================
// 2. VARIABLES GLOBALES DE DATOS
// ==========================================
let pokedexDatos = {};
let learnsetsDatos = {};
let learnsetsES = {}; 
let learnsetsEN = {}; 
let statsModDatos = {};
let movsModificadosDatos = {};
let traduccionesCache = {}; 
let listaPokemonGlobal = []; 
let listaActiva = []; 
let pokemonSeleccionado1 = null;
let idiomaActual = 'es';
let levelCapDatos = [];

// Variables para Infinite Scroll
let paginaActual = 0;
const ITEMS_POR_PAGINA = 30;

// Diccionario de tipos para generar las imágenes correctas
const TRADUCTOR_TIPOS = {
    'Normal': 'normal', 'Fire': 'fuego', 'Water': 'agua', 
    'Grass': 'planta', 'Electric': 'electrico', 'Ice': 'hielo', 
    'Fighting': 'lucha', 'Poison': 'veneno', 'Ground': 'tierra', 
    'Flying': 'volador', 'Psychic': 'psiquico', 'Bug': 'bicho', 
    'Rock': 'roca', 'Ghost': 'fantasma', 'Dragon': 'dragon', 
    'Dark': 'siniestro', 'Steel': 'acero', 'Fairy': 'hada'
};

// ==========================================
// 3. CONTROL DEL MENÚ Y SECCIONES
// ==========================================
function toggleMenu() {
    document.getElementById('menu-principal').classList.toggle('abierto');
}

function cambiarSeccion(idSeccion, elementoNav) {
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));
    document.getElementById(idSeccion).classList.add('activa');
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if(elementoNav) {
        elementoNav.classList.add('active');
    }
    document.getElementById('menu-principal').classList.remove('abierto');
}

// ==========================================
// 4. CARGA DE DATOS ASÍNCRONA (FETCH)
// ==========================================
async function inicializarPokedex() {
    const contenedorGrid = document.getElementById('grid-pokemon');
    
    try {
        contenedorGrid.innerHTML = `
            <div style="text-align: center; width: 100%; padding: 50px; grid-column: 1 / -1;">
                <h3 style="color: #666;">Cargando base de datos del Hackrom... 🚀</h3>
            </div>
        `;

        const [resPokedex, resLearnsets, resStats, resTrad, resMovsMod, resLevelCap] = await Promise.all([
            fetch('datos/pokedex_sinking.json').catch(() => ({ json: () => ({}) })),
            fetch('datos/learnsets_sinking.json').catch(() => ({ json: () => ({}) })),
            fetch('datos/stats_modificadas.json').catch(() => ({ json: () => ({}) })),
            fetch('datos/traducciones_cache.json').catch(() => ({ json: () => ({}) })),
            fetch('datos/movimientos_modificados.json').catch(() => ({ json: () => ({}) })),
            fetch('datos/levelcap.json').catch(() => ({ json: () => ({}) })) // <-- NUEVO
        ]);
        
        levelCapDatos = await resLevelCap.json();
        pokedexDatos = await resPokedex.json();
        learnsetsES = await resLearnsets.json();
        learnsetsDatos = learnsetsES; 
        statsModDatos = await resStats.json();
        movsModificadosDatos = await resMovsMod.json(); // <-- NUEVO
        
        // Cargar y normalizar traducciones de habilidades
        const tradCrudo = await resTrad.json();
        for (const [k, v] of Object.entries(tradCrudo)) {
            const idKey = k.toLowerCase().replace(/ /g, '').replace(/-/g, '');
            traduccionesCache[idKey] = v;
        }

        listaPokemonGlobal = Object.entries(pokedexDatos).map(([idStr, datos]) => {
            return {
                id_str: idStr,
                id_num: parseInt(idStr),
                ...datos
            };
        });

        listaPokemonGlobal.sort((a, b) => a.id_num - b.id_num);
        
        listaActiva = [...listaPokemonGlobal];
        renderizarTarjetas(true);
        renderizarMovimientosModificados();
        vincularEventosFiltros();
        renderizarLevelCap();
        dibujarRuletaVisual(jugadorActualRuleta);

    } catch (error) {
        console.error("Error al cargar datos:", error);
    }
}

document.addEventListener('DOMContentLoaded', inicializarPokedex);

// ==========================================
// 5. MOTOR DE RENDERIZADO Y HELPERS
// ==========================================
function calcBarra(valor) {
    return Math.min((valor / 255.0) * 100, 100) + '%';
}

function colorBarra(valor) {
    if (valor >= 121) return "background-color: #58faac; border: 1px solid #4FE09B";
    if (valor >= 101) return "background-color: #82fa58; border: 1px solid #75E04F";
    if (valor >= 81)  return "background-color: #f4fa58; border: 1px solid #C3C846";
    if (valor >= 61)  return "background-color: #f7d358; border: 1px solid #C5A946";
    if (valor >= 41)  return "background-color: #f79e38; border: 1px solid #C57E2C";
    if (valor >= 31)  return "background-color: #f2645a; border: 1px solid #C15048";
    return "background-color: #c72c20; border: 1px solid #9F231A";
}

function generarHTMLMovimientos(idStr) {
    const datosMov = learnsetsDatos[idStr];
    if (!datosMov) return "";

    const dict = DICCIONARIO[idiomaActual];
    const categorias = [
        { titulo: dict.cats.nivel, clave: "nivel" },
        { titulo: dict.cats.mt, clave: "mt" },
        { titulo: dict.cats.tutor, clave: "tutor" },
        { titulo: dict.cats.huevo, clave: "huevo" }
    ];

    let tieneMovs = categorias.some(cat => datosMov[cat.clave] && datosMov[cat.clave].length > 0);
    if (!tieneMovs) return "";

    let html = `
    <details class="movimientos-wrapper">
        <summary class="movimientos-summary">${dict.movsMenu}</summary>
        <div style="margin-top: 10px; border-top: 2px solid #eee; padding-top: 5px;">
    `;

    categorias.forEach(cat => {
        const lista = datosMov[cat.clave] || [];
        if (lista.length === 0) return;

        html += `<div class="movimientos-cat-titulo">${cat.titulo}</div>`;
        html += `<div class="movimientos-grid">`;

        lista.forEach(mov => {
            const asterisco = mov.marca ? ` <span class="asterisco-mod">${mov.marca}</span>` : "";
            const urlMov = idiomaActual === 'es'
                ? `https://www.wikidex.net/wiki/${mov.mov.replace(/ /g, '_')}`
                : `https://bulbapedia.bulbagarden.net/wiki/${mov.mov.replace(/ /g, '_')}_(move)`;
                
            const linkMov = `<a href="${urlMov}" target="_blank" style="color: #0066cc; text-decoration: none; font-weight: bold;">${mov.mov}</a>`;

            if (cat.clave === "nivel") {
                html += `<div class="movimiento-item">Nv. ${mov.nv} - ${linkMov}${asterisco}</div>`;
            } else {
                html += `<div class="movimiento-item">${linkMov}${asterisco}</div>`;
            }
        });

        html += `</div>`;
    });

    html += `</div></details>`;
    return html;
}

function generarHTMLTarjeta(pkmn) {
    const dict = DICCIONARIO[idiomaActual];
    const idStr = pkmn.id_str.padStart(3, '0');
    const nombre = pkmn.nombre || (pkmn.nombre_interno ? pkmn.nombre_interno.toUpperCase() : "Desconocido");
    const tipos = pkmn.tipos || [];
    const stats = pkmn.estadisticas || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
    const totalStats = Object.values(stats).reduce((a, b) => a + b, 0);

    // Tipos
    let htmlTipos = '<div class="tipos-container">';
    tipos.forEach(tipo => {
        const tipoEs = TRADUCTOR_TIPOS[tipo] || tipo.toLowerCase();
        htmlTipos += `<img src="https://pokefanaticos.com/pokedex/assets/images/pokemon_tipos/tipo_${tipoEs}.gif" alt="${tipo}" class="tipo-img">`;
    });
    if (pkmn.tipo_modificado) htmlTipos += '<span class="asterisco-mod">*</span>';
    htmlTipos += '</div>';

    // Habilidades
    const habs = pkmn.habilidades || [];
    let listaHabsHtml = [];

    habs.forEach(habRaw => {
        const habLimpia = habRaw.replace(/\*/g, '').trim();
        const asteriscos = habRaw.replace(habLimpia, '').trim();
        
        let habMostrar = habLimpia;
        let urlWiki = `https://bulbapedia.bulbagarden.net/wiki/${habLimpia.replace(/ /g, '_')}_(Ability)`;
        
        if (idiomaActual === 'es') {
            const habId = habLimpia.toLowerCase().replace(/ /g, '').replace(/-/g, '');
            habMostrar = traduccionesCache[habId] || habLimpia;
            urlWiki = `https://www.wikidex.net/wiki/${habMostrar.replace(/ /g, '_')}`;
        }

        const linkHab = `<a href="${urlWiki}" target="_blank" style="color: inherit; text-decoration: none;">${habMostrar}</a>`;
        const astHtml = asteriscos ? `<span style='color: #e3350d; font-weight: bold;'>${asteriscos}</span>` : '';
        
        listaHabsHtml.push(linkHab + astHtml);
    });

    const htmlHabilidades = `
        <div style="text-align: center; font-size: 0.9em; margin-bottom: 15px; color: #555;">
            <strong>${dict.lblHabilidades}:</strong> ${listaHabsHtml.join(', ')}
        </div>
    `;

    // Estadísticas
    const statsKeys = [
        { clave: 'hp', nombre: dict.stats.hp }, { clave: 'atk', nombre: dict.stats.atk }, 
        { clave: 'def', nombre: dict.stats.def }, { clave: 'spa', nombre: dict.stats.spa }, 
        { clave: 'spd', nombre: dict.stats.spd }, { clave: 'spe', nombre: dict.stats.spe }
    ];

    let htmlStats = '<table class="stats-table">';
    statsKeys.forEach(s => {
        const valor = stats[s.clave] || 0;
        let indicadorDif = "";
        if (statsModDatos[pkmn.id_num] && statsModDatos[pkmn.id_num][s.clave]) {
            indicadorDif = ` <span style="font-size: 0.75em; color: #e3350d; font-weight: bold; margin-left: 3px;">(${statsModDatos[pkmn.id_num][s.clave].dif})</span>`;
        }
        
        htmlStats += `
            <tr>
                <td class="stat-name">${s.nombre}</td>
                <td class="stat-value">${valor}${indicadorDif}</td>
                <td class="stat-bar-container">
                    <div class="stat-bar-bg">
                        <div class="stat-bar-fill" style="width: ${calcBarra(valor)}; ${colorBarra(valor)}"></div>
                    </div>
                </td>
            </tr>
        `;
    });
    htmlStats += `<tr><td class="stat-name" style="background-color: #333;">Total</td><td class="stat-value" style="font-size: 1.1em;">${totalStats}</td><td class="stat-bar-container"></td></tr></table>`;

    return `
        <div class="card pokemon-card" data-id="${pkmn.id_num}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; margin-bottom: 5px;">
                ${htmlTipos}
                <button class="btn-comparar" onclick="abrirComparador(this)" title="Comparar">📊</button>
            </div>
            
            <div style="text-align: center; width: 100%;">
                <img class="pkmn-img" src="https://pokefanaticos.com/pokedex/assets/images/pokemon_iconos/${pkmn.id_num}.png" alt="${nombre}" loading="lazy" decoding="async" onerror="this.src='https://via.placeholder.com/120'">
                <h2>#${idStr} ${nombre}</h2>
            </div>

            ${htmlHabilidades}
            ${htmlStats}
            ${generarHTMLMovimientos(pkmn.id_str)}
        </div>
    `;
}

// ==========================================
// 6. SISTEMA DE PAGINACIÓN (INFINITE SCROLL)
// ==========================================
function renderizarTarjetas(reiniciar = false) {
    const contenedorGrid = document.getElementById('grid-pokemon');
    
    if (reiniciar) {
        contenedorGrid.innerHTML = '';
        paginaActual = 0;
    }

    const inicio = paginaActual * ITEMS_POR_PAGINA;
    const fin = inicio + ITEMS_POR_PAGINA;
    const porcion = listaActiva.slice(inicio, fin);

    if (porcion.length === 0) return;

    const htmlAcumulado = porcion.map(pkmn => generarHTMLTarjeta(pkmn)).join('');
    contenedorGrid.insertAdjacentHTML('beforeend', htmlAcumulado);
    paginaActual++;
}

window.addEventListener('scroll', () => {
    if (!document.getElementById('sec-pokemon').classList.contains('activa')) return;
    const distanciaAlFinal = document.body.offsetHeight - (window.innerHeight + window.scrollY);
    if (distanciaAlFinal < 500) {
        renderizarTarjetas();
    }
});

// ==========================================
// 7. SISTEMA DE FILTRADO UNIFICADO
// ==========================================
function aplicarFiltros() {
    const inputGeneral = document.getElementById('busc-general');
    const inputAtaque = document.getElementById('busc-ataque');
    const chkTipo = document.getElementById('filtro-tipo');
    const chkStats = document.getElementById('filtro-stats');
    const chkHabilidad = document.getElementById('filtro-habilidad');

    const terminoGeneral = inputGeneral.value.toLowerCase().trim();
    const terminoAtaque = inputAtaque.value.toLowerCase().trim();
    const requiereTipo = chkTipo.checked;
    const requiereStats = chkStats.checked;
    const requiereHab = chkHabilidad.checked;

    listaActiva = listaPokemonGlobal.filter(pkmn => {
        const idStr = pkmn.id_str.padStart(3, '0');
        const nombre = (pkmn.nombre || pkmn.nombre_interno || "").toLowerCase();
        
        const coincideGeneral = nombre.includes(terminoGeneral) || idStr.includes(terminoGeneral);
        
        let coincideAtaque = true;
        if (terminoAtaque !== "") {
            let ataquesStr = "";
            if (learnsetsDatos[pkmn.id_str]) {
                Object.values(learnsetsDatos[pkmn.id_str]).forEach(catList => {
                    catList.forEach(m => { ataquesStr += " " + m.mov.toLowerCase(); });
                });
            }
            coincideAtaque = ataquesStr.includes(terminoAtaque);
        }

        const cumpleTipo = !requiereTipo || pkmn.tipo_modificado === true;
        const cumpleStats = !requiereStats || pkmn.stats_modificadas === true;
        
        let habMod = pkmn.habilidad_modificada === true;
        if (!habMod && pkmn.habilidades) {
            habMod = pkmn.habilidades.some(h => String(h).includes('*'));
        }
        const cumpleHab = !requiereHab || habMod === true;

        return coincideGeneral && coincideAtaque && cumpleTipo && cumpleStats && cumpleHab;
    });

    renderizarTarjetas(true);
}

function vincularEventosFiltros() {
    document.getElementById('busc-general').addEventListener('input', aplicarFiltros);
    document.getElementById('busc-ataque').addEventListener('input', aplicarFiltros);
    document.getElementById('filtro-tipo').addEventListener('change', aplicarFiltros);
    document.getElementById('filtro-stats').addEventListener('change', aplicarFiltros);
    document.getElementById('filtro-habilidad').addEventListener('change', aplicarFiltros);
}

// ==========================================
// 8. LÓGICA DEL COMPARADOR
// ==========================================
function abrirComparador(btn) {
    const idNum = parseInt(btn.closest('.pokemon-card').getAttribute('data-id'));
    pokemonSeleccionado1 = listaPokemonGlobal.find(p => p.id_num === idNum);
    
    const modalBuscador = document.getElementById('modal-buscador-comparador');
    const input = document.getElementById('input-buscador-comp');
    
    input.value = '';
    filtrarListaComparador('');
    modalBuscador.style.display = 'flex';
    setTimeout(() => input.focus(), 100);
}

function filtrarListaComparador(texto) {
    const query = texto.toLowerCase().trim();
    const contenedor = document.getElementById('lista-opciones-comparador');
    
    const resultados = listaPokemonGlobal.filter(pkmn => {
        const nombre = (pkmn.nombre || pkmn.nombre_interno || "").toLowerCase();
        const idStr = pkmn.id_str.padStart(3, '0');
        return nombre.includes(query) || idStr.includes(query);
    });

    let html = '';
    resultados.slice(0, 50).forEach(pkmn => {
        const idStr = pkmn.id_str.padStart(3, '0');
        const nombreMostrar = pkmn.nombre || (pkmn.nombre_interno ? pkmn.nombre_interno.toUpperCase() : "Desconocido");
        const imgSrc = `https://pokefanaticos.com/pokedex/assets/images/pokemon_iconos/${pkmn.id_num}.png`;
        
        html += `
            <div onclick="ejecutarComparacion(${pkmn.id_num})" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: #f8f9fa; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f8f9fa'">
                <img src="${imgSrc}" alt="${nombreMostrar}" loading="lazy" decoding="async" style="width: 35px; height: 35px; object-fit: contain;">
                <span style="font-weight: 600; color: #333;">#${idStr} ${nombreMostrar}</span>
            </div>
        `;
    });
    
    contenedor.innerHTML = html || '<div style="text-align: center; color: #888; padding: 10px;">No se encontraron resultados</div>';
}

function ejecutarComparacion(idNum2) {
    cerrarBuscadorComparador();
    const pokemon2 = listaPokemonGlobal.find(p => p.id_num === idNum2);
    if (!pokemon2 || !pokemonSeleccionado1) return;
    
    const col1 = document.getElementById('comp-col-1');
    const col2 = document.getElementById('comp-col-2');
    
    col1.innerHTML = construirColumnaComparador(pokemonSeleccionado1);
    col2.innerHTML = construirColumnaComparador(pokemon2);
    
    document.getElementById('modal-comparador').style.display = 'flex';
}

function construirColumnaComparador(pkmn) {
    const dict = DICCIONARIO[idiomaActual];
    const idStr = pkmn.id_str.padStart(3, '0');
    const nombre = pkmn.nombre || (pkmn.nombre_interno ? pkmn.nombre_interno.toUpperCase() : "Desconocido");
    const stats = pkmn.estadisticas || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
    const tipos = pkmn.tipos || [];
    const totalStats = Object.values(stats).reduce((a, b) => a + b, 0);

    let htmlTipos = '<div class="tipos-container" style="justify-content: center; border: none; padding-bottom: 0; margin-bottom: 12px;">';
    tipos.forEach(tipo => {
        const tipoEs = TRADUCTOR_TIPOS[tipo] || tipo.toLowerCase();
        htmlTipos += `<img src="https://pokefanaticos.com/pokedex/assets/images/pokemon_tipos/tipo_${tipoEs}.gif" alt="${tipo}" class="tipo-img" loading="lazy" decoding="async">`;
    });
    if (pkmn.tipo_modificado) htmlTipos += '<span class="asterisco-mod">*</span>';
    htmlTipos += '</div>';

    const statsKeys = [
        { clave: 'hp', nombre: dict.stats.hp }, { clave: 'atk', nombre: dict.stats.atk }, 
        { clave: 'def', nombre: dict.stats.def }, { clave: 'spa', nombre: dict.stats.spa }, 
        { clave: 'spd', nombre: dict.stats.spd }, { clave: 'spe', nombre: dict.stats.spe }
    ];

    let htmlStats = '<table class="stats-table">';
    statsKeys.forEach(s => {
        const valor = stats[s.clave] || 0;
        let indicadorDif = "";
        if (statsModDatos[pkmn.id_num] && statsModDatos[pkmn.id_num][s.clave]) {
            indicadorDif = ` <span style="font-size: 0.75em; color: #e3350d; font-weight: bold; margin-left: 3px;">(${statsModDatos[pkmn.id_num][s.clave].dif})</span>`;
        }
        
        htmlStats += `
            <tr>
                <td class="stat-name">${s.nombre}</td>
                <td class="stat-value">${valor}${indicadorDif}</td>
                <td class="stat-bar-container">
                    <div class="stat-bar-bg">
                        <div class="stat-bar-fill" style="width: ${calcBarra(valor)}; ${colorBarra(valor)}"></div>
                    </div>
                </td>
            </tr>
        `;
    });
    htmlStats += `<tr><td class="stat-name" style="background-color: #333;">Total</td><td class="stat-value" style="font-size: 1.1em;">${totalStats}</td><td class="stat-bar-container"></td></tr></table>`;

    return `
        <div style="text-align: center;">
            <img src="https://pokefanaticos.com/pokedex/assets/images/pokemon_iconos/${pkmn.id_num}.png" alt="${nombre}" style="width: 110px; height: 110px; object-fit: contain;">
            <h3 style="margin: 8px 0 5px 0; color: #333;">#${idStr} ${nombre}</h3>
            ${htmlTipos}
        </div>
        ${htmlStats}
    `;
}

function cerrarBuscadorComparador() {
    document.getElementById('modal-buscador-comparador').style.display = 'none';
}

function cerrarComparador() {
    document.getElementById('modal-comparador').style.display = 'none';
}

// ==========================================
// 9. FUNCIÓN DE ALTERNAR IDIOMA
// ==========================================
async function alternarIdioma() {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    const dict = DICCIONARIO[idiomaActual];
    
    if (idiomaActual === 'en' && Object.keys(learnsetsEN).length === 0) {
        try {
            const res = await fetch('datos/learnsets_sinking_en.json');
            learnsetsEN = await res.json();
        } catch (e) {
            console.error("No se pudo cargar el JSON en inglés.");
        }
    }

    learnsetsDatos = idiomaActual === 'es' ? learnsetsES : learnsetsEN;

    document.getElementById('busc-general').placeholder = dict.buscGeneral;
    document.getElementById('busc-ataque').placeholder = dict.buscAtaque;
    document.querySelector('#filtro-tipo').nextElementSibling.textContent = dict.lblTipo;
    document.querySelector('#filtro-stats').nextElementSibling.textContent = dict.lblStats;
    document.querySelector('#filtro-habilidad').nextElementSibling.textContent = dict.lblHab;
    document.getElementById('leyenda-1').textContent = dict.leyenda1;
    document.getElementById('leyenda-2').textContent = dict.leyenda2;
    document.getElementById('leyenda-3').textContent = dict.leyenda3;
    document.getElementById('leyenda-4').textContent = dict.leyenda4;

    // Traducción de la UI de la Ruleta
    const navRuleta = document.getElementById('nav-ruleta');
    if(navRuleta) navRuleta.textContent = dict.ruletaMenu;
    
    const tituloRul = document.getElementById('titulo-ruleta');
    if(tituloRul) tituloRul.textContent = dict.ruletaTitle;
    
    const descRul = document.getElementById('desc-ruleta');
    if(descRul) descRul.textContent = dict.ruletaDesc;
    
    const btnQui = document.getElementById('btn-ruleta-quique');
    if(btnQui) btnQui.textContent = dict.btnQuique;
    
    const btnPab = document.getElementById('btn-ruleta-pablo');
    if(btnPab) btnPab.textContent = dict.btnPablo;
    
    // Resetea la caja si no está mostrando un premio final
    if (!ruletaAnimando && document.getElementById('placeholder-ruleta')) {
        document.getElementById('placeholder-ruleta').textContent = dict.ruletaPlaceholder;
    }
    
    const btn = document.getElementById('btn-idioma');
    btn.textContent = idiomaActual === 'es' ? 'ES / EN' : 'EN / ES';
    btn.style.background = idiomaActual === 'es' ? 'rgba(255,255,255,0.2)' : 'rgba(227, 53, 13, 0.8)';

    aplicarFiltros(); 
    renderizarMovimientosModificados();
    renderizarLevelCap();
    dibujarRuletaVisual(jugadorActualRuleta);
}


// ==========================================
// 10. RENDERIZADO DE MOVIMIENTOS MODIFICADOS
// ==========================================
function renderizarMovimientosModificados() {
    const contenedor = document.getElementById('grid-movimientos');
    const dict = DICCIONARIO[idiomaActual];
    let html = '';

    // Función auxiliar para mapear claves (ej. "Power" -> "Potencia")
    const mapearClave = (claveCruda) => {
        const c = claveCruda.toLowerCase();
        if (c.includes('type')) return dict.movStats.type;
        if (c.includes('power')) return dict.movStats.power;
        if (c.includes('accuracy')) return dict.movStats.accuracy;
        if (c.includes('pp')) return dict.movStats.pp;
        if (c.includes('effect')) return dict.movStats.effect;
        if (c.includes('absorb')) return dict.movStats.absorb;
        return claveCruda; 
    };

    // Recorremos todos los movimientos modificados
    for (const [nombreEN, stats] of Object.entries(movsModificadosDatos)) {
        
        // Traducimos el título si estamos en español
        let tituloMostrar = nombreEN;
        let urlWiki = `https://bulbapedia.bulbagarden.net/wiki/${nombreEN.replace(/ /g, '_')}_(move)`;

        if (idiomaActual === 'es') {
            const idKey = nombreEN.toLowerCase().replace(/ /g, '').replace(/-/g, '');
            tituloMostrar = traduccionesCache[idKey] || nombreEN;
            urlWiki = `https://www.wikidex.net/wiki/${tituloMostrar.replace(/ /g, '_')}`;
        }

        let filasHtml = '';
        for (const [clave, valor] of Object.entries(stats)) {
            const claveTraducida = mapearClave(clave);
            let valorTraducido = valor;

            // Si es un cambio de Tipo, traducimos los tipos si estamos en español
            if (clave.toLowerCase().includes('type') && idiomaActual === 'es') {
                Object.keys(TRADUCTOR_TIPOS).forEach(tipoEN => {
                    const regex = new RegExp(`\\b${tipoEN}\\b`, 'gi');
                    const tipoES = TRADUCTOR_TIPOS[tipoEN];
                    const tipoESCap = tipoES.charAt(0).toUpperCase() + tipoES.slice(1);
                    valorTraducido = valorTraducido.replace(regex, tipoESCap);
                });
            }

            filasHtml += `
                <tr>
                    <td class="stat-name" style="width: 40%;">${claveTraducida}</td>
                    <td class="stat-value" style="width: 60%;">${valorTraducido}</td>
                </tr>
            `;
        }

        html += `
            <div class="card mov-card">
                <h3><a href="${urlWiki}" target="_blank" style="color: inherit; text-decoration: none;">${tituloMostrar}</a></h3>
                <table class="stats-table" style="margin-top: 0;">
                    ${filasHtml}
                </table>
            </div>
        `;
    }

    contenedor.innerHTML = html;
}

// ==========================================
// 11. RENDERIZADO DEL LEVEL CAP
// ==========================================
function renderizarLevelCap() {
    // Busca el contenedor dentro de la sección sec-levelcap. 
    // Usamos querySelector para apuntar al div con clase "grid" que está ahí dentro.
    const contenedor = document.querySelector('#sec-levelcap .grid');
    const dict = DICCIONARIO[idiomaActual];
    let html = '';

    levelCapDatos.forEach(jefe => {
        const nombre = idiomaActual === 'es' ? jefe.nombre_es : jefe.nombre_en;
        const ubicacion = idiomaActual === 'es' ? jefe.ubicacion_es : jefe.ubicacion_en;

        html += `
            <div class="card">
                <div style="text-align: center; width: 100%;">
                    <img class="pkmn-img" style="width: 150px; height: 150px;" src="${jefe.img_url}" alt="${nombre}" loading="lazy" decoding="async" onerror="this.src='https://via.placeholder.com/120?text=Sin+Imagen'">
                    <h2>${nombre}</h2>
                </div>
                <div style="text-align: center; width: 100%; border-top: 2px solid #eee; padding-top: 15px; margin-top: 5px;">
                    <p style="margin: 5px 0; color: #666; font-size: 1.1em;">📍 <strong>${ubicacion}</strong></p>
                    <p style="margin: 10px 0 5px 0; color: var(--primary); font-size: 1.4em; font-weight: bold;">${dict.lvlMax} ${jefe.nivel}</p>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = html;
}

// ==========================================
// 12. LÓGICA DE LA RULETA VISUAL Y EDITOR
// ==========================================
let ruletaAnimando = false;
let rotacionActualRuleta = 0;
let jugadorActualRuleta = 'quique'; 
const COLORES_RULETA = ['#e3350d', '#0066cc', '#f7d358', '#4FE09B', '#9b59b6', '#e67e22', '#34495e'];

// Obtiene los premios (desde localStorage si los editaste, o del diccionario por defecto)
function obtenerPremiosBase() {
    const guardados = localStorage.getItem('premiosDualocke');
    if (guardados) {
        try { return JSON.parse(guardados); } catch (e) { console.error("Error leyendo premios", e); }
    }
    return [...DICCIONARIO[idiomaActual].premiosBase];
}

// Construye la rueda dinámicamente
function dibujarRuletaVisual(jugador) {
    const dict = DICCIONARIO[idiomaActual];
    let premios = obtenerPremiosBase();
    
    // La regla de Charmander se mantiene intacta para Quique
    if (jugador === 'quique') premios.push(dict.premioCharmander);

    const rueda = document.getElementById('ruleta-rueda');
    if (!rueda) return { numPremios: 0 };
    
    rueda.innerHTML = ''; 
    const numPremios = premios.length;
    if (numPremios === 0) return { numPremios: 0 };

    const angulo = 360 / numPremios;
    let conicString = '';

    for (let i = 0; i < numPremios; i++) {
        const inicio = i * angulo;
        const fin = (i + 1) * angulo;
        const color = COLORES_RULETA[i % COLORES_RULETA.length];
        
        conicString += `${color} ${inicio}deg ${fin}deg${i === numPremios - 1 ? '' : ', '}`;

        const divTexto = document.createElement('div');
        divTexto.className = 'ruleta-texto';
        const offsetGiro = inicio + (angulo / 2);
        divTexto.style.transform = `rotate(${offsetGiro - 90}deg)`;
        
        let textoMostrar = premios[i].titulo;
        if(textoMostrar.length > 22) textoMostrar = textoMostrar.substring(0, 20) + '...';
        
        divTexto.textContent = textoMostrar;
        rueda.appendChild(divTexto);
    }
    
    rueda.style.background = `conic-gradient(${conicString})`;
    return { premios, numPremios, angulo };
}

// Animación de giro
function tirarRuletaVisual(jugador) {
    if (ruletaAnimando) return;
    ruletaAnimando = true;

    const cajaResultado = document.getElementById('resultado-ruleta');
    cajaResultado.style.display = 'none'; 

    if (jugador !== jugadorActualRuleta) {
        jugadorActualRuleta = jugador;
        rotacionActualRuleta = 0; 
        const rueda = document.getElementById('ruleta-rueda');
        rueda.style.transition = 'none';
        rueda.style.transform = `rotate(0deg)`;
        void rueda.offsetWidth; 
    }

    const config = dibujarRuletaVisual(jugador);
    if (config.numPremios === 0) {
        ruletaAnimando = false;
        alert("¡No hay premios en la ruleta! Añade alguno desde el editor.");
        return;
    }
    
    const indexPremio = Math.floor(Math.random() * config.numPremios);
    const anguloCentro = (indexPremio * config.angulo) + (config.angulo / 2);
    const rotacionObjetivo = 360 - anguloCentro;
    const vueltasExtra = 360 * 6;
    
    rotacionActualRuleta += vueltasExtra + rotacionObjetivo - (rotacionActualRuleta % 360);

    const rueda = document.getElementById('ruleta-rueda');
    rueda.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.15, 1)';
    rueda.style.transform = `rotate(${rotacionActualRuleta}deg)`;

    setTimeout(() => {
        const premioElegido = config.premios[indexPremio];
        cajaResultado.innerHTML = `
            <h3 style="color: #1e293b; font-size: 2em; margin-bottom: 10px; text-transform: uppercase;">🎉 ${premioElegido.titulo} 🎉</h3>
            <p class="ruleta-desc">${premioElegido.desc}</p>
        `;
        cajaResultado.style.display = 'flex';
        ruletaAnimando = false;
    }, 4000);
}

// --- SISTEMA DE EDICIÓN ---
function abrirEditorRuleta() {
    const premiosActuales = obtenerPremiosBase();
    const contenedor = document.getElementById('lista-editor-premios');
    contenedor.innerHTML = '';
    
    premiosActuales.forEach((premio, index) => {
        contenedor.insertAdjacentHTML('beforeend', generarHtmlFilaEditor(premio.titulo, premio.desc, index));
    });
    
    document.getElementById('modal-editor-ruleta').style.display = 'flex';
}

function generarHtmlFilaEditor(titulo = '', desc = '', index = Date.now()) {
    return `
        <div class="editor-fila" id="fila-premio-${index}">
            <div class="editor-inputs">
                <input type="text" class="editor-input-titulo" placeholder="Título del premio" value="${titulo.replace(/"/g, '&quot;')}">
                <textarea class="editor-input-desc" placeholder="Descripción de las reglas...">${desc}</textarea>
            </div>
            <button class="btn-eliminar-premio" onclick="this.closest('.editor-fila').remove()" title="Eliminar premio">🗑️</button>
        </div>
    `;
}

function agregarFilaEditor() {
    document.getElementById('lista-editor-premios').insertAdjacentHTML('beforeend', generarHtmlFilaEditor());
}

function cerrarEditorRuleta() {
    document.getElementById('modal-editor-ruleta').style.display = 'none';
}

function guardarEditorRuleta() {
    const filas = document.querySelectorAll('.editor-fila');
    const nuevosPremios = [];
    
    filas.forEach(fila => {
        const titulo = fila.querySelector('.editor-input-titulo').value.trim();
        const desc = fila.querySelector('.editor-input-desc').value.trim();
        if (titulo !== '') {
            nuevosPremios.push({ titulo, desc });
        }
    });

    // Guardamos en el navegador
    localStorage.setItem('premiosDualocke', JSON.stringify(nuevosPremios));
    
    // Repintamos y cerramos
    dibujarRuletaVisual(jugadorActualRuleta);
    cerrarEditorRuleta();
}