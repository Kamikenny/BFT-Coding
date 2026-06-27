/* 
// gestion d'inventaire de survie

const inventaire = {};

while (true) {
  let action = "";

  while (!action) {
    console.log(`***** INVENTAIRE *****`);
    for (objet in inventaire) {
      console.log(`${objet} : ${inventaire[objet]}`);
    }

    action = prompt(
      "Que voulez-vous faire ?\n" +
        `Vous pouvez "Ramasser" un objet et le ranger dans votre inventaire,\n` +
        `ou "Utiliser" un objet déjà présent dans votre inventaire.`,
    )
      .trim()
      .toLowerCase();

    switch (action) {
      case "ramasser":
        action = "";
        let objet = prompt(`Quel objet est-ce que vous ramassez ?`)
          .trim()
          .toLowerCase();

        if (objet in inventaire) {
          inventaire[objet] += 1;
        } else {
          inventaire[objet] = 1;
        }
        break;

      case "utiliser":
        action = "";
        if (Object.keys(inventaire).length < 1) {
          console.log(
            `Votre inventaire est vide. Vous ne pouvez que "Ramasser".`,
          );
        } else {
          let objet = prompt(`Quel objet voulez-vous utiliser ?`)
            .trim()
            .toLowerCase();

          if (objet in inventaire) {
            inventaire[objet] -= 1;
            if (inventaire[objet] <= 0) {
              delete inventaire[objet];
            }
          } else {
            console.log(
              `Vous ne possédez pas "${objet}". Impossible de l'utiliser.`,
            );
          }
        }
        break;

      default:
        console.log(`"${action}" n'est pas une action valide.`);
        break;
    }
  }
}

 */
