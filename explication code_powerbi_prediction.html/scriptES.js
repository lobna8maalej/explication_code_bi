/* =========================================================
   DOCUMENTACIÓN POWER BI Y PREDICCIÓN
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }


    /* =====================================================
       NAVEGACIÓN SUAVE
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", function (event) {

                const targetId = this.getAttribute("href");

                /*
                   Si el enlace corresponde a una sección
                   de la página
                */

                if (targetId && targetId.startsWith("#")) {

                    event.preventDefault();

                    const targetSection =
                        document.querySelector(targetId);

                    if (targetSection) {

                        targetSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }


                /*
                   Cerrar el menú móvil después
                   de hacer clic en un enlace
                */

                if (navLinks) {

                    navLinks.classList.remove("active");

                }

            });

        });


    /* =====================================================
       LISTA DE DASHBOARDS
    ===================================================== */

const dashboards = [

    /* =================================================
       PRIMEROS 17 DASHBOARDS
    ================================================= */

    {
        file: "aluminuimES.html",
        title: "Dashboard de Aluminio"
    },

    {
        file: "dashboard2_banqueES.html",
        title: "Dashboard Bancario"
    },

    {
        file: "dashboard1-jumia-mgES.html",
        title: "Dashboard de Jumia"
    },

    {
        file: "dashboard3_caES.html",
        title: "Dashboard de Ingresos"
    },

    {
        file: "dashboard4_kantraES.html",
        title: "Dashboard de Kantra"
    },

    {
        file: "dashboard5_transactionES.html",
        title: "Dashboard de Transacciones"
    },

    {
        file: "documentation_immobiliere_predictionES.html",
        title: "Dashboard Inmobiliario"
    },

    {
        file: "etudeEtrangerES.html",
        title: "Dashboard de Estudios en el Extranjero"
    },

    {
        file: "facES.html",
        title: "Dashboard FAC"
    },

    {
        file: "info-documentationES.html",
        title: "Dashboard Informático"
    },

    {
        file: "parapharmaES.html",
        title: "Dashboard de Parafarmacia"
    },

    {
        file: "RadioES.html",
        title: "Dashboard de Radio"
    },

    {
        file: "sanitaireES.html",
        title: "Dashboard Sanitario"
    },

    {
        file: "vetementES.html",
        title: "Dashboard de Ropa"
    },

    {
        file: "voyagito.es.html",
        title: "Dashboard de Viajes"
    },

    {
        file: "webEs.html",
        title: "Dashboard Web"
    },

    {
        file: "commerce2ES.html",
        title: "Dashboard de Comercio"
    },


    /* =================================================
       OTROS 17 DASHBOARDS
    ================================================= */

    {
        file: "banqueFES.html",
        title: "Dashboard 18"
    },

    {
        file: "CAfES.html",
        title: "Dashboard 19"
    },

    {
        file: "commerce2DasboardEs.html",
        title: "Dashboard 20"
    },

    {
        file: "dasboard_immobiliereFES.html",
        title: "Dashboard 21"
    },

    {
        file: "info8dasboardES.html",
        title: "Dashboard 22"
    },

    {
        file: "kantraDasboardES.html",
        title: "Dashboard 23"
    },

    {
        file: "radioDasboardES.html",
        title: "Dashboard 24"
    },

    {
        file: "sanitaireDasboardES.html",
        title: "Dashboard 25"
    },

    {
        file: "transactionDasboardes.html",
        title: "Dashboard 26"
    },

    {
        file: "vetementDasboardes.html",
        title: "Dashboard 27"
    },

    {
        file: "voyagedasboard.ees.html",
        title: "Dashboard 28"
    },

    {
        file: "webDashboard.es.html",
        title: "Dashboard 29"
    },

    {
        file: "aluminuimDasboardES.html",
        title: "Dashboard 30"
    },

    {
        file: "commerce2ES.html",
        title: "Dashboard 31"
    },


    /* =================================================
       5 NUEVOS DASHBOARDS
    ================================================= */

    {
        file: "EtudeDashboardES.html",
        title: "Dashboard 32"
    },

    {
        file: "parapharmaDasboardES.html",
        title: "Dashboard 33"
    },

    {
        file: "PlotExplanationES.html",
        title: "Dashboard 34"
    },

    {
        file: "securiteSiteES.html",
        title: "Dashboard 35"
    },

    {
        file: "conclusionES.html",
        title: "Dashboard 36"
    }

];


    /* =====================================================
       GENERACIÓN AUTOMÁTICA DE LOS DASHBOARDS
    ===================================================== */

    const dashboardGrid =
        document.getElementById("dashboardGrid");


    if (dashboardGrid) {

        dashboards.forEach((dashboard, index) => {

            const card =
                document.createElement("a");


            /*
               Ruta al archivo HTML
            */

            card.href =
                `dashboards/${dashboard.file}`;


            /*
               Clase CSS
            */

            card.className =
                "dashboard-card";


            /*
               Contenido de la tarjeta
            */

            card.innerHTML = `

                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                    ${dashboard.title}
                </strong>

                <small>
                    Power BI y Predicción
                </small>

            `;


            /*
               Añadir la tarjeta a dashboardGrid
            */

            dashboardGrid.appendChild(card);

        });

    }


    /* =====================================================
       VOLVER ARRIBA
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =====================================================
       MENSAJE DE CONFIRMACIÓN
    ===================================================== */

    console.log(
        "Documentación de Kantra cargada correctamente."
    );

    console.log(
        `${dashboards.length} dashboards disponibles.`
    );

});