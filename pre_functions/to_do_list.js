/* 
// TO DO List

let quit = false;

const tasks = [];

while (!quit) {
  let action = prompt(
    "Veuillez entrer une action :\n\n" +
      `"NEW" : Permet d'ajouter une tâche à la liste.\n` +
      `"LIST" : Permet d'afficher la liste.\n` +
      `"DELETE" : Permet de supprimer une tâche de la liste.\n` +
      `"QUIT" : Permet de quitter le programme. (Attention : votre liste ne sera PAS sauvegardée)`,
  )
    .trim()
    .toLowerCase();

  switch (action) {
    case "new":
      let new_task = prompt("Quelle tâche voulez-vous ajouter à la liste ?");
      tasks.push(new_task);
      console.log(
        `"${tasks[tasks.length - 1]}" a bien été ajouté à la liste !`,
      );
      break;

    case "list":
      console.log("********* LISTE DE TÂCHES *********\n");
      for (let i = 0; i < tasks.length; i++) {
        console.log(i + 1 + ". " + tasks[i]);
      }
      break;

    case "delete":
      console.log("********* LISTE DE TÂCHES *********\n");
      for (let i = 0; i < tasks.length; i++) {
        console.log(i + 1 + ". " + tasks[i]);
      }
      let taskToDelete = parseInt(
        prompt(
          `Veuillez entrer le numéro de la tâche que vous voulez supprimer (Entrez "0" pour annuler) :`,
        ),
      );
      if (taskToDelete !== 0) {
        console.log(
          `"${tasks.splice(taskToDelete - 1, 1)}" a bien été supprimée de la liste !`,
        );
      }
      break;

    case "quit":
      let sureQuit = prompt(
        `Attention, vous êtes sur le point de quitter le programme. (Entrez "0" pour annuler)`,
      );
      if (sureQuit !== "0") {
        quit = true;
      }
      break;

    default:
      alert(`"${action}" n'est pas une action valable.`);
      break;
  }
}
 */
