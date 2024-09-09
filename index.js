// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour charger le contenu dynamique
    function loadContent(contentId) {
        const contentDiv = document.getElementById("content");

        // Un exemple de contenu en fonction du lien cliqué
        let content = "";

        switch (contentId) {
            case "home-link":
                content = `
                    <p>Bienvenue sur TalkFoot</p>
                `;
                break;
            case "news-link":
                content = `
                    <article class="news">
                        <h2>Paris recrute Neves</h2>
                        <div class="newsimg">
                            <img src="img/psg_joao_neves.jpg">
                        </div>
                    </article>
                    
                    <article class="news">
                        <h2>Milan recrute Abraham</h2>
                        <div class="newsimg">
                            <img src="img/acmilan_tammy_abraham.jpg">
                        </div>
                    </article> 
                        `;
                break;

            case "analyses-link":
                content = `
                    <article class="news">
                        <h2>Comment De Zerbi a transformé l'OM ?</h2>
                        <div class="newsimg">
                            <img src="img/om_roberto_dezerbi.jpg">
                        </div>
                    </article>
                    
                    <article class="news">
                        <h2>Fonseca a changé Milan avec ce système</h2>
                        <div class="newsimg">
                            <img src="img/acmilan_paulo_fonseca.jpg">
                        </div>
                    </article>    
                `;
                break;
            case "links-link":
                content = "<h2>Nos réseaux</h2><p>Suivez-nous sur nos réseaux sociaux...</p>";
                break;
            case "about-link":
                content = "<h2>A propos</h2><p>Présentation de Talk Foot...</p>";
                break;
            case "contact-link":
                content = "<h2>Contactez-nous</h2><p>Formulaire de contact et informations...</p>";
                break;
            default:
                content = "<h2>Bienvenue sur Talk Foot</h2><p>Contenu par défaut...</p>";
        }

        // Met à jour la div "content" avec le nouveau contenu
        contentDiv.innerHTML = content;
    }

    // Sélection de tous les liens dans la navigation
    const links = document.querySelectorAll("nav a, #contact a");

    // Ajouter un événement de clic à chaque lien
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Empêcher le comportement par défaut (rechargement)
            const contentId = this.id; // Obtenir l'ID du lien cliqué
            loadContent(contentId); // Charger le contenu correspondant
        });
    });

    // Charger le contenu par défaut (par exemple, la page d'accueil)
    loadContent("home-link");
});
