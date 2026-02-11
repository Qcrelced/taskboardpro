SEQUENCE 1 :
Création des routes Home, tasks et about, permettant à l'utisateur de changer de page. on définie les routes dans app.routes.ts

SEQUENCE 2 :
utilisation de BehaviorSubject dans les services pour stocker et et gérer les données de l'application.
On sépare la couche d'interaction du composant avec sa logique.

utilisation des doubles bindings  avec l'ajout, la suppression et la  modifications des taches qui met à jour instantanément tous les composants qui utilise les behaviours sans nécessiter de rechargement.

Ajout de addTask(title, owner): permettant de créer une tache avec un titre et de l'attribuer à un membre
Ajout de editTask : permettant de modifier le titre de la tache
Ajout de highlight : permet de mettre une tache en avant dans le container highlightContainer

ajoute des membres pour de l'attribution des taches avec une liste de membres existant avec des @for, ce qui permet d'itérer la liste des membres stockée dans le service membres

SEQUENCE 3 :

La méthode inject permet d'afficher un composant snas passer par le constructeur du composant permettant de faire des composants plus dynamiques avec la méthode viewContainerRef, utiliser pour edit et highlight

SEQUENCE 4
les tests permettent de vérifier que l'application à le bon comportement.
Jasmine : framework de test, il fournit le code pour écrire les tests
KARMA : il permet d'ouvrrir le navigateur pour éxécuter les tests à faire
testbd, il permet de tester seulement une partie de l'application grâce à un environnement angular

voici l'architecture d'un test : 
describe('MonComposant', () => {

  // 1. Configuration de l'environnement de test
  beforeEach()
  // 3. Le test proprement dit (Jasmine)
  it('doit créer le composant', () => {
    expect(component).toBeTruthy(); 
  });
});

SEQUENCE 5

pour regarder les performances de notre application on peut regarder dans lighthouse ou avec l'extension de dev angular. Pour optimser l'app, nous pouvons utiliser Onpush pour charger quelque chose dès un changement dans l'application, on peut mettre le lazy loading. découper l'application en plusierus composants permet une meilleurs maintenabilité de l'app

SEQUENCE 6

on peut utilser github page ou vercel pour déployer son application. pour déployer sur vercel, on peut se connecter via son compte github et choisir le repo à déployer.