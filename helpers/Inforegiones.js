export function getRegions(){
    return  [
        { "nro": 0, "nombre": "Región Metropolitana"},
        { "nro": 1, "nombre": "I Región de Tarapacá" },
        { "nro": 2, "nombre": "II Región de Antofagasta"},
        { "nro": 3, "nombre": "III Región de Atacama"},
        { "nro": 4, "nombre": "IV Región de Coquimbo"},
        { "nro": 5, "nombre": "V Región de Valparaíso"},
        { "nro": 6, "nombre": "VI Región de O’Higgins"},
        { "nro": 7, "nombre": "VII Región del Maule"},
        { "nro": 8, "nombre": "VIII Región del Biobío"},
        { "nro": 9, "nombre": "IX Región de La Araucanía"},
        { "nro": 10, "nombre": "X Región de Los Lagos"},
        { "nro": 11, "nombre": "XI Región Aysén"},
        { "nro": 12, "nombre": "XII Región de Magallanes"},
        { "nro": 14, "nombre": "XIV Región de Los Ríos"},
        { "nro": 15, "nombre": "XV Región de Arica y Parinacota"},
        { "nro": 16, "nombre": "XVI Región de Ñuble"}
    ]
}

export function getRegionNameByNum(num){
    if(num === 99){
        return "";
    }
    let regions = getRegions();
    let reg = regions.find((r) => (r.nro === num) );
    return reg.nombre;
}

export function getCitysByRegion(region){
    let citys = {
        0: [ "Santiago", "Lampa", "Peñaflor" ],
        1: [ "Iquique", "Pozo Almonte" ],
        2: [ "Antofagasta", "Mejillones", "Taltal" ],
        3: [ "Copiapo", "Caldera", "Tierra Amarilla" ],
        4: [ "la Serena", "Coquimbo", "Tongoy" ],
        5: [ "Valparaiso", "Viña del Mar", "Con Con" ],
        6: [ "Rengo", "Pichilemu", "San Fernando" ],
        7: [ "Curico", "Talca", "Linares" ],
        8: [ "Concepción", "Talcahuano" ],
        9: [ "Temuco", "Padre las Casas" ],
        10: [ "Puerto Montt", "Puerto Varas" ],
        11: [ "Coyhaique", "Puerto Aysén" ],
        12: [ "Punta Arenas", "Puerto Williams" ],
        14: [ "Valdivia", "Los Lagos", "La Union" ],
        15: [ "Arica", "Putre" ],
        16: [ "Chillan", "Bulnes", "Quillon" ],
        99: [ ]
    }
    return citys[region];
}

