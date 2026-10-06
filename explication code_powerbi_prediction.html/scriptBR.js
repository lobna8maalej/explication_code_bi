/* =========================================================
   DOCUMENTAÇÃO POWER BI E PREDIÇÃO
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
       NAVEGAÇÃO SUAVE
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", function (event) {

                const targetId = this.getAttribute("href");

                /*
                   Se o link corresponde a uma seção
                   da página
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
                   Fechar o menu mobile depois
                   de clicar em um link
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
       PRIMEIROS 17 DASHBOARDS
    ================================================= */

    {
        file: "aluminuimBR.html",
        title: "Dashboard de Alumínio"
    },

    {
        file: "dashboard2_banqueBR.html",
        title: "Dashboard Bancário"
    },

    {
        file: "dashboard1-jumia-mgBR.html",
        title: "Dashboard Jumia"
    },

    {
        file: "dashboard3_caBR.html",
        title: "Dashboard de Faturamento"
    },

    {
        file: "dashboard4_kantraBR.html",
        title: "Dashboard Kantra"
    },

    {
        file: "dashboard5_transactionBR.html",
        title: "Dashboard de Transações"
    },

    {
        file: "documentation_immobiliere_predictionBR.html",
        title: "Dashboard Imobiliário"
    },

    {
        file: "etudeEtrangerBR.html",
        title: "Dashboard de Estudos no Exterior"
    },

    {
        file: "facBR.html",
        title: "Dashboard FAC"
    },

    {
        file: "info-documentationBR.html",
        title: "Dashboard de Informática"
    },

    {
        file: "parapharmaBR.html",
        title: "Dashboard de Parafarmácia"
    },

    {
        file: "RadioBR.html",
        title: "Dashboard de Rádio"
    },

    {
        file: "sanitaireBR.html",
        title: "Dashboard Sanitário"
    },

    {
        file:"vetementbr.html",
        title: "Dashboard de Vestuário"
    },

    {
        file: "voyagito.br.html",
        title: "Dashboard de Viagens"
    },

    {
        file: "webbr.html",
        title: "Dashboard Web"
    },

    {
        file: "commerce2BR.html",
        title: "Dashboard de Comércio"
    },


    /* =================================================
       OUTROS 17 DASHBOARDS
    ================================================= */

    {
        file: "banqueFBR.html",
        title: "Dashboard 18"
    },

    {
        file: "CAfBR.html",
        title: "Dashboard 19"
    },

    {
        file: "commerce2DasboardBR.html",
        title: "Dashboard 20"
    },

    {
        file: "dasboard_immobiliereFBR.html",
        title: "Dashboard 21"
    },

    {
        file: "info8dasboardBR.html",
        title: "Dashboard 22"
    },

    {
        file: "kantraDasboardBR.html",
        title: "Dashboard 23"
    },

    {
        file: "radioDasboardBR.html",
        title: "Dashboard 24"
    },

    {
        file: "sanitaireDasboardBR.html",
        title: "Dashboard 25"
    },

    {
        file: "transactionDasboardBR.html",
        title: "Dashboard 26"
    },

    {
        file: "vetementDasboardbr.html",
        title: "Dashboard 27"
    },

    {
        file: "voyagedasboard.br.html",
        title: "Dashboard 28"
    },

    {
        file: "webDashboard.pt.br.html",
        title: "Dashboard 29"
    },

    {
        file: "aluminuimDasboardBR.html",
        title: "Dashboard 30"
    },

    {
        file: "commerceFBR.html",
        title: "Dashboard 31"
    },


    /* =================================================
       5 NOVOS DASHBOARDS
    ================================================= */

    {
        file: "EtudeDashboardBR.html",
        title: "Dashboard 32"
    },

    {
        file: "parapharmaDasboardBR.html",
        title: "Dashboard 33"
    },

    {
        file: "PlotExplanationBR.html",
        title: "Dashboard 34"
    },

    {
        file: "securiteSitebr.html",
        title: "Dashboard 35"
    },

    {
        file: "conclusionBR.html",
        title: "Dashboard 36"
    }

];


    /* =====================================================
       GERAÇÃO AUTOMÁTICA DOS DASHBOARDS
    ===================================================== */

    const dashboardGrid =
        document.getElementById("dashboardGrid");


    if (dashboardGrid) {

        dashboards.forEach((dashboard, index) => {

            const card =
                document.createElement("a");


            /*
               Caminho para o arquivo HTML
            */

            card.href =
                `dashboards/${dashboard.file}`;


            /*
               Classe CSS
            */

            card.className =
                "dashboard-card";


            /*
               Conteúdo do card
            */

            card.innerHTML = `

                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                    ${dashboard.title}
                </strong>

                <small>
                    Power BI e Predição
                </small>

            `;


            /*
               Adicionar o card ao dashboardGrid
            */

            dashboardGrid.appendChild(card);

        });

    }


    /* =====================================================
       VOLTAR AO TOPO
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
       MENSAGEM DE CONFIRMAÇÃO
    ===================================================== */

    console.log(
        "Documentação do Kantra carregada com sucesso."
    );

    console.log(
        `${dashboards.length} dashboards disponíveis.`
    );

});