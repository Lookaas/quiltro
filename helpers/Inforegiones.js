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
        0: [ "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor" ],
        1: [ "Iquique","Alto Hospicio", "Camiña", "Colchane", "Huara", "Pica", "Pozo Almonte" ],
        2: [ "Antofagasta","Sierra Gorda", "Mejillones", "Taltal", "Calama", "Ollague", "San Pedro de Atacama", "María Elena", "Tocopilla" ],
        3: [ "Copiapo", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco" ],
        4: [ "La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado" ],
        5: [ "Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llay llay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana" ],
        6: [ "Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz" ],
        7: [ "Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas" ],
        8: [ "Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío" ],
        9: [ "Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria" ],
        10: [ "Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena" ],
        11: [ "Coihaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez" ],
        12: [ "Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Puerto Natales", "Torres del Paine" ],
        14: [ "Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno" ],
        15: [ "Arica", "Camarones", "Putre","General Lagos" ],
        16: [ "Bulnes", "Chillán", "Chilán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Quirihue", "Coelemu", "Nihue", "Potrzuelo", "Ranquil", "Trehuaco", "San Carlos", "Cohihueco", "Niquén", "San Fabián", "San Nicolás"  ],
        99: [ ]
    }
    return citys[region];
}

