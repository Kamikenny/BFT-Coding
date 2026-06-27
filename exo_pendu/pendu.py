from classes import Mot

liste_mots: list[str] = ["ATTAQUE", "PRISON", "REPTILE", "COQUILLE", "ARBRE", "SAISON", "OURS", "COUSSIN", "FILM", "BOUTEILLE", "QUAI", "CRIMINEL"]
tentatives_max: int = 6
        
print("BIENVENUE ! Dans mon jeu du pendu !")
print("Vous allez devoir deviner toutes les lettres d'un mot. Vous aurez 6 chances. Prêt? C'est parti !")
Mot_mystere = Mot(liste_mots, tentatives_max)


while Mot_mystere.tentatives_max > 0 and not Mot_mystere.gagne:
    print("---------------------------------------------------")
    Mot_mystere.draw_pendu()
    Mot_mystere.affichage_status()
    print(f"Mot mystère : {Mot_mystere.affichage_mot()}")
    
    user_input: str = input("Quelle lettre voulez-vous suggérer ? (Vous pouvez demander un 'indice', mais ça vous coûtera 2 tentatives) : ").upper()
    if user_input == "INDICE":
        Mot_mystere.give_clue()
    elif user_input == Mot_mystere.mot_a_trouver:
        Mot_mystere.nombre_essais += 1
        Mot_mystere.gagne = True
    elif len(user_input) != 1 or user_input.isdigit():
        print("Vous n'avez pas saisi EXACTEMENT une lettre.")
    else:
        Mot_mystere.check_input(user_input)

if Mot_mystere.gagne:
    Mot_mystere.draw_pendu()
    print(f"FELICITATIONS !! Vous avez réussi à trouver le mot en {Mot_mystere.nombre_essais} coups!")
else:
    Mot_mystere.draw_pendu()
    print(f"DOMMAGE... Vous n'êtes pas parvenu à trouver les bonnes lettres.")
    print(f"Le mot mystère était : {Mot_mystere.mot_a_trouver}.")