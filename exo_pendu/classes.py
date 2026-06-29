import random

class Mot:
    def __init__(self, lst: list[str], tentatives_max: int = 6) -> None:
        self.tentatives_max: int = tentatives_max
        self.nombre_essais: int = 0
        self.mot_a_trouver: str = self.definir_mot(lst)
        self.lettres_perdues: set[str] = set()
        self.lettres_trouvees: set[str] = set()
        self.lettres_mot: list[str] = list(self.mot_a_trouver)
        self.gagne: bool = False

    def definir_mot(self, lst: list[str]) -> str:
        return random.choice(lst)
    
    def affichage_status(self) -> None:
        print(f"Il vous reste {self.tentatives_max} tentatives.")
        print("Voici les lettres déjà proposées qui ne sont pas dans le mot :" + ",".join(self.lettres_perdues))

    def affichage_mot(self) -> str:
        self.mot_affiche: list[str] = []
        for l in self.lettres_mot:
            if l in self.lettres_trouvees:
                self.mot_affiche.append(l)
            else:
                self.mot_affiche.append("_")
        return "".join(self.mot_affiche)
    
    def give_clue(self) -> None:
        self.tentatives_max -= 2
        self.nombre_essais += 1
        indices: list[str] = []
        for l in self.lettres_mot:
            if l not in self.lettres_trouvees:
                indices.append(l)
        self.lettres_trouvees.add(random.choice(indices))

    def check_input(self, lettre: str) -> None:
        self.nombre_essais += 1
        if lettre in self.lettres_mot:
            if lettre in self.lettres_trouvees:
                print(f"Vous avez déjà trouvé cettre lettre : '{lettre}' !")
            else:
                self.lettres_trouvees.add(lettre)
                print(f"Bravo ! '{lettre}' fait partie du mot !")
            print("---------------------------------------------------")
            if self.affichage_mot() == self.mot_a_trouver:
                self.gagne = True
        else:
            if lettre in self.lettres_perdues:
                print(f"Vous avez déjà proposé '{lettre}' et elle n'est pas dans le mot.")
                print("---------------------------------------------------")
            else:
                print(f"Désolé ! '{lettre}' ne fait pas partie du mot !")
                self.lettres_perdues.add(lettre)
                self.tentatives_max -= 1
                print("---------------------------------------------------")

    def draw_pendu(self) -> None:
        print(f"{' ':<2}__________")
        print(f"{' ':<2}|{'|':>9}")
        # Tête
        if len(self.lettres_perdues) >= 1:
            print(f"{' ':<2}|{'0':>9}")
        else:
            print(f"{' ':<2}|")
        # Torse
        if len(self.lettres_perdues) == 2:
            print(f"{' ':<2}|{'/  ':>10}")
        elif len(self.lettres_perdues) == 3:
            print(f"{' ':<2}|{'/| ':>10}")
        elif len(self.lettres_perdues) >= 4:
            print(f"{' ':<2}|{'/|\\':>10}")
        else:
            print(f"{' ':<2}|")
        # Jambes
        if len(self.lettres_perdues) == 5:
            print(f"{' ':<2}|{'/  ':>10}")
        elif len(self.lettres_perdues) == 6:
            print(f"{' ':<2}|{'/ \\':>10}")
        else:
            print(f"{' ':<2}|")
        print(f" /|\\")
