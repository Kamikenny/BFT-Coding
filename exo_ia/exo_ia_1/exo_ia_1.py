notes = []
total_notes: float = 0.0
note_min: float = 20.0
note_max: float = 0.0

while True:
    user_input: str = input("Quelle note (/20) souhaitez-vous ajouter ? ('quit' pour arrêter) ")

    if user_input == "quit":
        break

    try:
        note: float = float(user_input)

        if note >= 0 and note <= 20:
            notes.append(note)
            total_notes += note
            if note >= note_max:
                note_max = note
            if note <= note_min:
                note_min = note
        else:
            print("La note saisie n'est pas conforme.")
            continue
        
        moyenne: float = total_notes / len(notes)

        print(f"La note {note} a bien été ajoutée à la liste.")
        print(f"La note la plus élevée est : {note_max}.")
        print(f"La note la plus basse est : {note_min}.")
        print(f"La moyenne des notes est : {moyenne:.2f}.")
        print(f"Il y a actuellement {len(notes)} notes dans la liste.")
    except ValueError:
        print("Vous n'avez pas saisi une note valide.")
        continue

