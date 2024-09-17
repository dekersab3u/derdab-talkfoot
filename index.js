const apiKey = '9459393a7fc1497aac071315197d6786';
const url = 'https://api.football-data.org/v4/matches';
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
                    <p>suivez les compétitions d’un autre oeil.</p>
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
                content = "<h2>Nos réseaux</h2><p>Suivez-nous sur nos réseaux sociaux...</p>" +
                    "<section id='reseaux'>" +
                    "<div class='reseau'><h3>Twitter</h3>" +
                    "<div class='logo'><a href='https://x.com/taIkfoot' target='_blank'><img" +
                    " src='img/twitter_logo.jpg'></a></div>" +
                    "<blockquote class=\"twitter-tweet\"><p lang=\"fr\" dir=\"ltr\">« Ferland Mendy doit jouer titulaire en Équipe de France » 🇫🇷😤<br><br>C&#39;est l&#39;avis de @KebeSourakata, et il l&#39;explique ! ⬇️<br><br>▶️ <a href=\"https://t.co/42FkUMgac0\">https://t.co/42FkUMgac0</a> <a href=\"https://t.co/k6Tjk99SMS\">pic.twitter.com/k6Tjk99SMS</a></p>&mdash; Talk Foot (@taIkfoot) <a href=\"https://twitter.com/taIkfoot/status/1807003058561286268?ref_src=twsrc%5Etfw\">June 29, 2024</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>" +
                    "</div>" +
                    "<div class='reseau'><h3>Instagram</h3>" +
                    "<div class='logo'><img src='img/Instagram_logo.png'></div>" +
                    "<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/C8htFQRMKb3/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:16px;\"> <a href=\"https://www.instagram.com/p/C8htFQRMKb3/?utm_source=ig_embed&amp;utm_campaign=loading\" style=\" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;\" target=\"_blank\"> <div style=\" display: flex; flex-direction: row; align-items: center;\"> <div style=\"background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;\"></div> <div style=\"display: flex; flex-direction: column; flex-grow: 1; justify-content: center;\"> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;\"></div> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;\"></div></div></div><div style=\"padding: 19% 0;\"></div> <div style=\"display:block; height:50px; margin:0 auto 12px; width:50px;\"><svg width=\"50px\" height=\"50px\" viewBox=\"0 0 60 60\" version=\"1.1\" xmlns=\"https://www.w3.org/2000/svg\" xmlns:xlink=\"https://www.w3.org/1999/xlink\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(-511.000000, -20.000000)\" fill=\"#000000\"><g><path d=\"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631\"></path></g></g></g></svg></div><div style=\"padding-top: 8px;\"> <div style=\" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;\">Voir cette publication sur Instagram</div></div><div style=\"padding: 12.5% 0;\"></div> <div style=\"display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;\"><div> <div style=\"background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);\"></div> <div style=\"background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;\"></div> <div style=\"background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);\"></div></div><div style=\"margin-left: 8px;\"> <div style=\" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;\"></div> <div style=\" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)\"></div></div><div style=\"margin-left: auto;\"> <div style=\" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);\"></div> <div style=\" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);\"></div> <div style=\" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);\"></div></div></div> <div style=\"display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;\"> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;\"></div> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;\"></div></div></a><p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\"><a href=\"https://www.instagram.com/p/C8htFQRMKb3/?utm_source=ig_embed&amp;utm_campaign=loading\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;\" target=\"_blank\">Une publication partagée par talkfoot (@talkfoot)</a></p></div></blockquote>\n" +
                    "<script async src=\"//www.instagram.com/embed.js\"></script>" +
                    "</div>" +
                    "<div class='reseau'><h3>Youtube</h3>" +
                    "<div class='logo'><img src='img/Youtube_logo.png'></div>" +
                    "<object data='https://www.youtube.com/embed/xtbxv_KnGYA?si=DGTrTEcOxTMAef_4' type='text/html' width='640' height='360'> </object>" +
                    "</div>" +
                    "</section>";
                break;
            case "about-link":
                content = "<h2>A propos</h2><p>Talk Foot est un média fondé en 2021 par un groupe de passionnés" +
                    " ayant pour objectif de discuter du football sous un angle novateur. Depuis sa création, de" +
                    " nombreux projets ont vu le jour dans le but d'offrir aux fans une approche différente du football. Ce site permet de partager cette vision unique en proposant des analyses approfondies ainsi qu'une couverture complète de l'actualité. Talk Foot se distingue par son approche originale : ici, le football est vécu autrement.</p>";
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
