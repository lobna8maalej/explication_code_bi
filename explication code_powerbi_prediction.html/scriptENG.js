/* =========================================================
   POWER BI & PREDICTION DOCUMENTATION
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", function (event) {

                const targetId = this.getAttribute("href");

                /*
                   If the link corresponds to a section
                   of the page
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
                   Close the mobile menu after
                   clicking a link
                */

                if (navLinks) {

                    navLinks.classList.remove("active");

                }

            });

        });


    /* =====================================================
       DASHBOARD LIST
    ===================================================== */

const dashboards = [

    /* =================================================
       FIRST 17 DASHBOARDS
    ================================================= */

    {
        file: "aluminuimENG.html",
        title: "Aluminium Dashboard"
    },

    {
        file: "dashboard2_banqueENG.html",
        title: "Bank Dashboard"
    },

    {
        file: "dashboard1-jumia-mgENG.html",
        title: "Jumia Dashboard"
    },

    {
        file: "dashboard3_caENG.html",
        title: "Revenue Dashboard"
    },

    {
        file: "dashboard4_kantraENG.html",
        title: "Kantra Dashboard"
    },

    {
        file: "dashboard5_transactionENG.html",
        title: "Transactions Dashboard"
    },

    {
        file: "documentation_immobiliere_predictionENG.html",
        title: "Real Estate Dashboard"
    },

    {
        file: "etudeEtrangerENG.html",
        title: "Foreign Study Dashboard"
    },

    {
        file: "facENG.html",
        title: "FAC Dashboard"
    },

    {
        file: "info-documentationENG.html",
        title: "IT Dashboard"
    },

    {
        file: "parapharmaENG.html",
        title: "Parapharmacy Dashboard"
    },

    {
        file: "RadioENG.html",
        title: "Radio Dashboard"
    },

    {
        file: "sanitaireEng.html",
        title: "Sanitary Dashboard"
    },

    {
        file: "vetement.ENG.html",
        title: "Clothing Dashboard"
    },

    {
        file: "voyagito.eng.html",
        title: "Travel Dashboard"
    },

    {
        file: "webENG.html",
        title: "Web Dashboard"
    },

    {
        file: "commerce2ENG.html",
        title: "Commerce Dashboard"
    },


    /* =================================================
       17 OTHER DASHBOARDS
    ================================================= */

    {
        file: "banqueFENG.html",
        title: "Dashboard 18"
    },

    {
        file: "CAfENG.html",
        title: "Dashboard 19"
    },

    {
        file: "commerce2DasboardENG.html",
        title: "Dashboard 20"
    },

    {
        file: "dasboard_immobiliereFENG.html",
        title: "Dashboard 21"
    },

    {
        file: "info8dasboardEng.html",
        title: "Dashboard 22"
    },

    {
        file: "kantraDasboardeng.html",
        title: "Dashboard 23"
    },

    {
        file: "radioDasboardENG.html",
        title: "Dashboard 24"
    },

    {
        file: "sanitaireDasboardENG.html",
        title: "Dashboard 25"
    },

    {
        file: "transactionDasboardEng.html",
        title: "Dashboard 26"
    },

    {
        file: "vetementDasboard.eng.html",
        title: "Dashboard 27"
    },

    {
        file: "voyagedasboard.eng.html",
        title: "Dashboard 28"
    },

    {
        file: "webDashboard.eng.html",
        title: "Dashboard 29"
    },

    {
        file: "aluminuimDasboardENG.html",
        title: "Dashboard 30"
    },

    {
        file: "commerceFENG.html",
        title: "Dashboard 31"
    },


    /* =================================================
       5 NEW DASHBOARDS
    ================================================= */

    {
        file: "EtudeDashboardENG.html",
        title: "Dashboard 32"
    },

    {
        file: "parapharmaDasboardEN.html",
        title: "Dashboard 33"
    },

    {
        file: "PlotExplanationENG.html",
        title: "Dashboard 34"
    },

    {
        file: "securiteSiteEng.html",
        title: "Dashboard 35"
    },

    {
        file: "conclusionENG.html",
        title: "Dashboard 36"
    }

];


    /* =====================================================
       AUTOMATIC DASHBOARD GENERATION
    ===================================================== */

    const dashboardGrid =
        document.getElementById("dashboardGrid");


    if (dashboardGrid) {

        dashboards.forEach((dashboard, index) => {

            const card =
                document.createElement("a");


            /*
               Path to the HTML file
            */

            card.href =
                `dashboards/${dashboard.file}`;


            /*
               CSS class
            */

            card.className =
                "dashboard-card";


            /*
               Card content
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
               Add the card to dashboardGrid
            */

            dashboardGrid.appendChild(card);

        });

    }


    /* =====================================================
       BACK TO TOP
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
       CONFIRMATION MESSAGE
    ===================================================== */

    console.log(
        "Kantra Documentation loaded successfully."
    );

    console.log(
        `${dashboards.length} dashboards available.`
    );

});