/* =========================================================
   DOCUMENTATION POWER BI & PREDICTION
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }


    /* =====================================================
       NAVIGATION FLUIDE
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", function (event) {

                const targetId = this.getAttribute("href");

                /*
                   Si le lien correspond à une section
                   de la page
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
                   Fermer le menu mobile après
                   avoir cliqué sur un lien
                */

                if (navLinks) {

                    navLinks.classList.remove("active");

                }

            });

        });


    /* =====================================================
    /* =====================================================
   LISTE DES DASHBOARDS
===================================================== */

const dashboards = [

    /* =================================================
       17 PREMIERS DASHBOARDS
    ================================================= */

    {
        file: "aluminuim.html",
        title: "Dashboard Aluminium"
    },

    {
        file: "dashboard2_banque.html",
        title: "Dashboard Banque"
    },

    {
        file: "dashboard1-jumia-mg.html",
        title: "Dashboard Jumia"
    },

    {
        file: "dashboard3_ca.html",
        title: "Dashboard Chiffre d'affaires"
    },

    {
        file: "dashboard4_kantra.html",
        title: "Dashboard Kantra"
    },

    {
        file: "dashboard5_transaction.html",
        title: "Dashboard Transactions"
    },

    {
        file: "documentation_immobiliere_prediction.html",
        title: "Dashboard Immobilier"
    },

    {
        file: "etudeEtranger.html",
        title: "Dashboard Étude Étranger"
    },

    {
        file: "fac.html",
        title: "Dashboard FAC"
    },

    {
        file: "info-documentation.html",
        title: "Dashboard Informatique"
    },

    {
        file: "parapharma.html",
        title: "Dashboard Parapharmacie"
    },

    {
        file: "Radio.html",
        title: "Dashboard Radio"
    },

    {
        file: "sanitaire.html",
        title: "Dashboard Sanitaire"
    },

    {
        file: "vetement.html",
        title: "Dashboard Vêtement"
    },

    {
        file: "voyagito.html",
        title: "Dashboard Voyage"
    },

    {
        file: "web.html",
        title: "Dashboard Web"
    },

    {
        file: "commerce2.html",
        title: "Dashboard Commerce"
    },


    /* =================================================
       17 AUTRES DASHBOARDS
    ================================================= */

    {
        file: "banqueF.html",
        title: "Dashboard 18"
    },

    {
        file: "CAf.html",
        title: "Dashboard 19"
    },

    {
        file: "commerce2Dasboard.html",
        title: "Dashboard 20"
    },

    {
        file: "dasboard_immobiliereF.html",
        title: "Dashboard 21"
    },

    {
        file: "info8dasboard.html",
        title: "Dashboard 22"
    },

    {
        file: "kantraDasboard.html",
        title: "Dashboard 23"
    },

    {
        file: "radioDasboard.html",
        title: "Dashboard 24"
    },

    {
        file: "sanitaireDasboard.html",
        title: "Dashboard 25"
    },

    {
        file: "transactionDasboard.html",
        title: "Dashboard 26"
    },

    {
        file: "vetementDasboard.html",
        title: "Dashboard 27"
    },

    {
        file: "voyagedasboard.html",
        title: "Dashboard 28"
    },

    {
        file: "webDashboard.html",
        title: "Dashboard 29"
    },

    {
        file: "aluminuimDasboard.html",
        title: "Dashboard 30"
    },

    {
        file: "commerceF.html",
        title: "Dashboard 31"
    },


    /* =================================================
       5 NOUVEAUX DASHBOARDS
    ================================================= */

    {
        file: "EtudeDashboard.html",
        title: "Dashboard 32"
    },

    {
        file: "parapharmaDasboard.html",
        title: "Dashboard 33"
    },

    {
        file: "PlotExplanation.html",
        title: "Dashboard 34"
    },

    {
        file: "securiteSite.html",
        title: "Dashboard 35"
    },

    {
        file: "conclusion.html",
        title: "Dashboard 36"
    }

];


    /* =====================================================
       GENERATION AUTOMATIQUE DES DASHBOARDS
    ===================================================== */

    const dashboardGrid =
        document.getElementById("dashboardGrid");


    if (dashboardGrid) {

        dashboards.forEach((dashboard, index) => {

            const card =
                document.createElement("a");


            /*
               Chemin vers le fichier HTML
            */

            card.href =
                `dashboards/${dashboard.file}`;


            /*
               Classe CSS
            */

            card.className =
                "dashboard-card";


            /*
               Contenu de la carte
            */

            card.innerHTML = `

                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                    ${dashboard.title}
                </strong>

                <small>
                    Power BI & Prediction
                </small>

            `;


            /*
               Ajouter la carte dans dashboardGrid
            */

            dashboardGrid.appendChild(card);

        });

    }


    /* =====================================================
       RETOUR EN HAUT
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
       MESSAGE DE CONFIRMATION
    ===================================================== */

    console.log(
        "Documentation Kantra chargée avec succès."
    );

    console.log(
        `${dashboards.length} dashboards disponibles.`
    );

});