const apiKey = '9459393a7fc1497aac071315197d6786';
const url = 'https://api.football-data.org/v2/matches';
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
                    <h2>Bienvenue sur TalkFoot</h2>
                    <p>Ce site vous présentera différentes actualités et analyses liées 5 grands championnats européens. 
                        Retrouvez les dernières actualités du monde du football dans l'onglet "Actualité".</p>
                    
                `;
                break;
            case "news-link":
                content = `
                    <article class="news">
                        <h2 id="psg-article">Paris recrute Neves</h2>
                        <div class="newsimg">
                            <img src="img/psg_joao_neves.jpg">
                        </div>
                    </article>
                    
                    <article class="news">
                        <h2 id="milan-article">Milan recrute Abraham</h2>
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

        // Ajouter des événements de clic aux articles pour charger les articles complets
        addArticleClickEvents();
    }

    // Fonction pour gérer les événements de clic sur les articles
    function addArticleClickEvents() {
        const psgArticle = document.getElementById("psg-article");
        const milanArticle = document.getElementById("milan-article");

        if (psgArticle) {
            psgArticle.addEventListener("click", function () {
                loadArticle('psg');
            });
        }

        if (milanArticle) {
            milanArticle.addEventListener("click", function () {
                loadArticle('milan');
            });
        }
    }

    // Fonction pour charger le contenu complet d'un article
    function loadArticle(articleId) {
        const contentDiv = document.getElementById("content");

        let articleContent = "";

        switch (articleId) {
            case 'psg':
                articleContent = `
                    <h2>Le PSG signe Joao Neves</h2>
                    <p>Après avoir commencé le football dans sa ville natale de Tavira en 2012, João Neves intègre la formation du SL Benfica en 2016...</p>
                    <p>En 2022, il participe à la victoire de Benfica en Youth League. Quelques mois plus tard, le 30 décembre 2022, Neves fait ses débuts en équipe première...</p>
                    <p>Ce milieu de terrain droitier, reconnu pour son aisance technique et son intelligence de jeu, termine la saison 2022-2023 en tant que titulaire...</p>
                    <p>« C’est un immense honneur pour moi de rejoindre le Paris Saint-Germain », a affirmé João Neves.</p>
                `;
                break;

            case 'milan':
                articleContent = `
                    <h2>Milan recrute Tammy Abraham</h2>
                    <p>Tammy Abraham prêté à l'AC Milan pour une saison : Le choix de Daniel De Rossi à l'AS Roma

                        C'est désormais officiel. L'attaquant anglais Tammy Abraham est prêté par l'AS Roma à l'AC Milan pour une durée d'une saison. Une décision qui fait suite à la volonté du nouvel entraîneur de la Roma, Daniel De Rossi, de ne pas conserver le joueur de 26 ans. Ce dernier sort d'une saison compliquée, marquée par seulement 12 apparitions en championnat pour un maigre total de 1 but.

                        L'arrivée de De Rossi à la tête du club romain a marqué un tournant dans la gestion de l'effectif. L'ex-international italien, soucieux de construire une équipe compétitive, n'a pas hésité à faire des choix forts, et Tammy Abraham en fait partie. L'attaquant, qui avait pourtant montré de belles promesses lors de son arrivée à la Roma en 2021, n’a pas réussi à s’imposer sous les nouvelles directives de son entraîneur.
                    </p>`;
                break;
        }

        // Remplace le contenu par l'article complet
        contentDiv.innerHTML = articleContent;
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

    function asideResults() {
        fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'X-Auth-Token': apiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Affiche les données récupérées dans la console
                // Afficher les résultats dans ton HTML en parcourant les données obtenues
                // Par exemple :
                const matches = data.matches;
                const resultsDiv = document.getElementById('aside');

                matches.forEach(match => {
                    const result = document.createElement('div');
                    result.textContent = `${match.homeTeam.name} ${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam} ${match.awayTeam.name}`;
                    resultsDiv.appendChild(result);
                });
            })
            .catch(err => console.log(err));
    }


    loadContent("home-link");
    asideResults();
});
