# STRINGS

# Exercice 1 : Longueur d'une chaîne
""" 
phrase = input("Ecrivez un truc ici : ")

print(f"Le nombre de caractères de votre input est : {len(phrase)}")
 """

# Exercice 2 : Conversion en majuscules
""" 
first_name = input("Entrez votre prénom : ").upper()

print(first_name)
 """

# Exercice 3 : Conversion en minuscules
""" 
city = input("Entrez le nom de votre ville : ").lower()

print(city)
 """

# Exercice 4 : Extraction d'une sous-chaîne
""" 
sentence: str = "JavaScript est un language puissant."
lst: list = sentence.split()

print(lst.pop(lst.index("language")))
 """

# Exercice 5 : Recherche d'un mot dans une chaîne
""" 
text = "Le développement web est passionnant."

print("web" in text)
 """

# Exercice 6 : Remplacement de texte
""" 
message = "J'aime les pommes et les bananes."

print(message.replace("pommes", "fraises"))
 """

# Exercice 8 : Suppression des espaces en début et fin
""" 
user_input = input("Veuilez entrer une phrase avec des espaces inutiles avant et après : ")

print(user_input.strip())
 """

# Exercice 9 : Vérification de l'inclusion d'un mot
""" 
quote = "La vie est belle."

print("belle" in quote)
 """

# Exercice 10 : Concaténation de chaînes
""" 
word1, word2 = input("Veuillez entrer deux mots séparés par un espace : ").split()

print(word1 + word2)
 """


# NUMBERS 

# Exercice 1 : Opérations mathématiques de base
""" 
num1, num2 = 10, 5

print(f"num1 + num2 = {num1 + num2}")
print(f"num1 - num2 = {num1 - num2}")
print(f"num1 / num2 = {num1 / num2}")
print(f"num1 * num2 = {num1 * num2}")
 """

# Exercice 2 : Arrondir un nombre
""" 
decimal_number = float(input("Veuillez entrer un nombre décimal : "))

print(round(decimal_number))
 """

# Exercice 3 : Conversion de chaîne en nombre
""" 
string_number = input("Veuillez entrer un nombre : ")
num = int | float

if "," in string_number or "." in string_number:
    num = float(string_number)
else:
    num = int(string_number)

print(f"Votre nombre : {num} est de type {type(num)}")
 """

# Exercice 4 : Nombre aléatoire
""" 
import random

random_number: int = random.randint(1, 100)

print(random_number)
 """

# Exercice 6 : Calcul de la puissance d'un nombre
""" 
base, exponent = 2, 3

print(base ** exponent)
 """

# Exercice 7 : Trouver le plus grand nombre
""" 
a, b, c = 5, 3, 2

print(max(a, b, c))
 """

# Exercice 8 : Formater un nombre avec deux décimales
""" 
decimal_number = float(input("Veuillez entrer un nombre décimal : "))

print(f"{decimal_number:.2f}")
 """

# Exercice 9 : Vérification si un nombre est entier
""" 
user_number = float(input("Veuillez entrer un nombre : "))

print(user_number.is_integer())
 """

# Exercice 10 : Calcul de la racine carrée
""" 
import math


positive_number = float(input("Veuillez entrer un nombre positif : "))

print(math.sqrt(positive_number))
 """


# BOOLEANS

# 1. Filtrer les valeurs truthy d’une liste
""" 
mixed_values = [5, -3, "hello", None, True, False, ()]

true_values = filter(bool, mixed_values)

print(list(true_values))
 """

# 2. Vérification any() et all()
""" 
liste = [True, True, False, True]

print(all(liste))
print(any(liste))
 """

# 3. Vérification de clé dans un dictionnaire
""" 
user = {"name": "Henrique", "age": 37}

if "email" not in user:
    user["email"] = "inconnu"

print(user)
 """

# 4. Comparaison de types
""" 
x, y = 42, "42"

print(f"x == y : {x == y}")
print(f"type(x) == type(y) : {type(x) == type(y)}")
 """

# 5. Opération de court-circuit avec and et or
""" 
def f1():
    print("f1 exécutée")
    return True

def f2():
    print("f2 exécutée")
    return False

print(f1() and f2())
print("####")
print(f1() or f2())
 """

# 6. Vérification de saisie utilisateur
""" 
user_input = float(input("Veuillez saisir un nombre : "))

if user_input:
    print("Vous avez saisi une valeur truthy.")
else:
    print("Vous avez saisi une valeur falsy.")
 """


# EXOS GENERAL 1

# 1. Manipulation et conversion de variables
""" 
x, y = 25, "25"
z = int(y)

print(x + z)

result_str = str(x + z)

print(type(result_str))
 """

# 2. Test de vérités et comparaisons
""" 
a, b, c = 10, 20, 10

print(f"a < b : {a < b}")
print(f"a == c : {a == c}")
print(f"b != c : {b != c}")
print(f"###")
print(f"a == c and b > c : {a == c and b > c}")
print(f"b < a or a < b : {b < a or a < b}")
print(f"not(a < b) : {not(a < b)}")
 """

# 3. Listes et boucles for
""" 
fruits = ["pomme", "banane", "cerise", "fraise"]

for fruit in fruits:
    if fruit == "cerise":
        print("Voici la cerise!")
    print(fruit)
print('"Fin de la liste des fruits."')
 """

# 4. Conditions avec if / elif / else
""" 
num = int(input("Veuillez entrer un nombre : "))

if num > 100:
    print("Le nombre est grand")
elif num >= 50 and num <= 100:
    print("Le nombre est moyen")
elif num < 50 and num > 0:
    print("Le nombre est petit")
else:
    print("Le nombre est négatif ou nul")
 """

# 5. Dictionnaire et accès aux valeurs
""" 
person = {
    "prenom": "Kenny",
    "nom": "Sirichantho",
    "age": 37
}

print(person["prenom"])
if "ville" not in person:
    person["ville"] = "Inconnue"

print(person)
print(len(person))
 """

# 6. Tuples et immuabilité
""" 
mes_jours = ("lundi", "mardi", "mercredi")

for jour in mes_jours:
    print(jour)

mes_jours_modifies = mes_jours + ("jeudi",)
print(mes_jours_modifies)
 """

# 7. Sets et opérations de base
""" 
mes_fleurs = {"rose", "tulipe", "orchidée"}
print(mes_fleurs)
mes_fleurs.add("lys")
print(mes_fleurs)
mes_fleurs.remove("tulipe")
print(mes_fleurs)

if "rose" in mes_fleurs:
    print("rose est dans mes_fleurs")
else:
    print("rose n'est pas dans mes_fleurs")
 """

# 8. Boucle while et -continue- break
""" 
i = 0

while i < 10:
    print(f"i = {i}")
    i += 1
    if i == 5:
        print("Le 5 a été rencontré")
        break
else:
    print("La boucle est terminée")
 """

# 9. Fonction avec paramètres et retour
""" 
def calculer_tva(prix_ht: float, taux_tva: int) -> float:
    return prix_ht + ((prix_ht / 100) * taux_tva)

prix_user, tva_user = float(input("Veuillez entrer un prix HT : ")), float(input("Veuillez entrer un taux de TVA : "))

print(calculer_tva(prix_user, tva_user))
 """

# 10. Combinaison d’opérateurs logiques
""" 
jour, meteo, argent = "samedi", "ensoleillé", 50

if meteo == "ensoleillé" and jour == "samedi" or jour == "dimanche" and argent >= 20:
    print("Sortie possible")
else:
    print("Rest à la maison")
 """


# EXOS GENERAL 2

# 1. Types de données
""" 
book_title: str = "Clean Code"
number_of_pages: int = 300
price: float = 24.90
stock: int = 2

potential_income: float | bool

if stock >= 0:
    potential_income = stock * price
else:
    potential_income = False

print(potential_income)
 """

# 2. Chaînes de caractères
""" 
customer_name, fav_book = input("Entrez votre nom : "), input("Quel est votre livre favori? : ")

if len(fav_book) > 10:
    print("Wow, c'est un titre très long!")
else:
    print("Ce titre est plutôt concis!")

msg = f"Bonjour {customer_name}, ne manquez pas notre promotion sur {fav_book}"
print(msg.upper())
print(len(msg))
 """

# 3. Booléens
""" 
store_open, enough_inventory = True, False

if store_open and enough_inventory:
    print("Nous pouvons lncer la promotion !")
elif store_open and not(enough_inventory):
    print("Commandez plus de stock avant de lancer la promotion ! ")
else:
    print("Le magasin est fermé.Aucune promotion aujourd'hui.")
 """

# 4. Truthy/Falsy
""" 
user_inputs = ["", "John", 0, 42, None, "Book", []]
truthy_values, falsy_values = [], []

truthy_values = list(filter(bool, user_inputs))
falsy_values = list(filter(lambda x: bool(x) == False, user_inputs))

if len(truthy_values) > 3:
    print("Nous avons beaucoup de valeurs valides!")
else:
    print("Certaines données sont peut-être manquantes ou vides.")

print(truthy_values)
print(falsy_values)
 """

# 5. Listes
""" 
best_sellers = []

while len(best_sellers) < 5:
    best_sellers.append(input("Entrez le titre d'un live que vous avez aimé : "))

print(best_sellers)
best_sellers.sort()
best_sellers.pop(-1)
print(best_sellers)
 """

# 6. Tuples
""" 
membership_discounts: tuple = (0.05, 0.10, 0.15)

print(membership_discounts)
print(membership_discounts[0])
print(membership_discounts[2])

for reduction in membership_discounts:
    if reduction >= 0.15:
        print("Nous proposons un taux de réduction spécial haut de gamme ! ")

 """

# 7. Ensembles (Sets)
""" 
genres: list[str] = ["Fantasy", "Romance", "Fantasy", "Mystery", "Romance", "Polar"]
unique_genres: set = set(genres)
print(genres)
print(unique_genres)

unique_genres.add("Sci-Fi")
print(unique_genres)
if "Drama" not in unique_genres:
    print(" Nous devrions peut-être ajouter Drama à notre collection.")
 """

# 8. Dictionnaires
""" 
customer_profile: dict[str | int] = {}

customer_profile["name"] = input("Veuillez saisir votre nom : ")
customer_profile["age"] = int(input("Veuillez saisir votre âge : "))
customer_profile["favorite_genre"] = input("Veuillez saisir votre genre litéraire favori : ")

print(customer_profile)

if customer_profile["age"] < 18:
    print("Proposer uniquement des recommandations de littérature jeunesse.")
else:
    print("Proposer toutes les recommandations, y compris la littérature adulte.")
 """

# 9. Conditions
""" 
order_total: float = float(input("Veuillez saisir le montant total de votre commande : "))
shipping_cost = int

if order_total >= 50:
    shipping_cost = 0
elif order_total >= 25:
    shipping_cost = 5
else:
    shipping_cost = 10

if shipping_cost != 0:
    print(f"Vos frais de livraison s'élèvent à : {shipping_cost} €")
else:
    print("Vous bénéficiez de la livraison gratuite ! ")
 """

# 10. Boucles While
""" 
cart: list[str] = []

while True:
    user_input: str = input("Saisissez un article (ou 'fini' pour terminer) : ")

    if user_input == "fini":
        break

    cart.append(user_input)

if len(cart) == 0:
    print("Votre panier est vide. Ajouotez des articles avant de passer en caisse !")
else:
    print("Votre panier : ")
    print(cart)
    print("Passer en caisse ?")
 """

# 11. Boucles For
""" 
employees: list[tuple[str]] = [("Alice", "cashier"), ("Bob", "manager"), ("Charlie", "stocker")]

for e in employees:
    print(f"Bonjour {e[0]} !")
    if e[1] == "manager":
        print("N'oublie pas de gérer les rapports du jour.")
    else:
        print("Bonne journée de travail !")
 """

# 12. Fonctions
""" 
def is_affordable(price: float, budget: float) -> bool:
    if price < 0 or budget < 0:
        print("Prix ou budget invalide(s) !")
        return False
    
    return price <= budget

if is_affordable(10, 15):
    print("Vous pouvez acheter ce livre !") #
else:
    print("Ce livre dépasse votre budget.")

if is_affordable(19, 15):
    print("Vous pouvez acheter ce livre !")
else:
    print("Ce livre dépasse votre budget.") #

if is_affordable(15, 15):
    print("Vous pouvez acheter ce livre !") #
else:
    print("Ce livre dépasse votre budget.")
 """

# 13. Fonctions
""" 
def calculate_average(notes: list[int | float]) -> float | None:
    if len(notes) == 0:
        print("Liste vide !")
        return None
    
    total: float = 0.0

    for n in notes:
        total += n
    
    return total / len(notes)

print(calculate_average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10.0])) #5.5
print(calculate_average([])) # vide, None
print(calculate_average([10, 10, 10, 10])) #10
 """

# 14. Fonctions
""" 
def word_lenghts(words: list[str]) -> dict[str, int]:
    new_dict: dict[str | int] = {}
    if not words:
        return new_dict
    
    for w in words:
        new_dict[w] = len(w)

    return new_dict

print(word_lenghts(["1", "22", "333", "4444", "55555"]))
print(word_lenghts(["Bonjour", "Au revoir", "ciao", "blblbl"]))
 """
 