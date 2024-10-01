# ⚠️ Dépréciation du package

**Ce package est déprécié et ne sera plus maintenu.**

Veuillez utiliser [react-ease-modal](https://www.npmjs.com/package/react-ease-modal) à la place.

---

![statut](https://img.shields.io/badge/Statut-Déprécié-red.svg)
<a href='https://fr.react.dev/'><img alt="Static Badge" src="https://img.shields.io/badge/version-18.2.0-blue?style=flat&logo=React&label=React"></a>
<a href='https://www.npmjs.com/'><img alt="Static Badge" src="https://img.shields.io/badge/version-10.2.4-red?style=flat&logo=NPM&label=NPM"></a>
<a href='#'><img alt="Static Badge" src="https://img.shields.io/badge/version-MIT-%23cfb232?style=flat&logoColor=%23b3bd68&label=License"></a>

Un composant de modale simple, modulaire et personnalisable pour les applications React, offrant une gestion facile des modales avec des options de style et d'accessibilité.

## Table des matières

-   [Installation](#installation)
-   [Prérequis](#prérequis)
-   [Compatibilité et Dépendances](#compatibilité-et-dépendances)
-   [Utilisation](#utilisation)
-   [Propriétés](#propriétés)
-   [Accessibilité](#accessibilité)
-   [Styles](#styles)
-   [Personnalisation](#personnalisation)
-   [Démonstration](#démonstration)
-   [Licence](#licence)

## Installation

Pour installer le composant Modal dans votre projet React, utilisez l'une des commandes suivantes avec npm ou yarn :

```bash
npm install react-modal-component-hw
```

ou

```bash
yarn add react-modal-component-hw
```

## Prérequis

Ajoutez ces classes CSS dans le fichier .css de votre application :
Ce sont les classes par défaut de la modale, que vous pouvez modifier librement pour personnaliser son style.
Assurez-vous que ces classes se trouvent au-dessus de toute classe que vous pourriez créer pour modifier le style de la modale.

```css
.react-modal-component-hw {
    position: absolute;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.42);
    top: 0;
    left: 0;
}

.react-modal-component-hw-container {
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    background-color: #ffffff;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
}

.react-modal-component-hw-icon {
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.4s ease;
}

.react-modal-component-hw-icon:hover {
    opacity: 1;
}

.react-modal-component-hw-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
}

.react-modal-component-hw-title {
    font-size: 1rem;
    font-weight: bold;
    color: #393939;
    margin-bottom: 0.5rem;
}

.react-modal-component-hw-description {
    font-size: 0.775rem;
    color: #71717a;
}

.react-modal-component-hw-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
```

La modale par défaut :
![Design par défaut](/public/default_fr.png 'default_fr').

## Compatibilité et Dépendances

Le composant Modal dépend de certaines bibliothèques externes pour fonctionner correctement. Celles-ci sont automatiquement installées avec le package `react-modal-component-hw`.

### Dépendances

-   **`clsx`** : Combine vos classes CSS ou certaines classes Tailwind avec celles par défaut de la modale.
-   **`lucide-react`** : Utilisé pour les icônes SVG, y compris l'icône de fermeture de la modale.

### Compatibilité

-   **React** : Le composant est compatible avec React 17+ et React 18+.
-   **Tailwind (optionnel et partiellement pris en charge)** : Bien que Tailwind ne soit pas requis, vous pouvez l'utiliser pour styliser certaines parties compatible de la modale.
-   **CSS** : Prend en charge vos propres classes CSS pour une personnalisation supplémentaire.

Assurez-vous d'avoir installé ces dépendances pour que le composant fonctionne correctement dans votre projet.

## Utilisation

Pour utiliser le composant Modal et ses sous-composants, importez-les dans votre fichier et intégrez-les dans votre code JSX :

```jsx
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from 'react-modal-component-hw';

const Component = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={toggleModal}>Ouvrir la modale</button>
            <Modal open={isOpen}>
                <ModalContent onClose={() => setIsOpen(false)}>
                    <ModalHeader>
                        <ModalTitle>Titre de la modale</ModalTitle>
                    </ModalHeader>
                    <ModalDescription>Ceci est le contenu de la modale.</ModalDescription>
                    <ModalFooter>
                        <button onClick={() => setIsOpen(false)}>Fermer la modale</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Component;
```

## Propriétés

Le composant Modal et ses sous-composants acceptent les propriétés suivantes :

#### Modal

| Propriété         | Type        | Requis     | Description                                                                                 |
| ----------------- | ----------- | ---------- | ------------------------------------------------------------------------------------------- |
| `className`       | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à la modale.                                     |
| `open`            | `boolean`   | Oui        | Indique si la modale est ouverte ou fermée.                                                 |
| `children`        | `ReactNode` | Oui        | Contenu à afficher à l'intérieur de la modale.                                              |
| `ariaLabelledBy`  | `string`    | Facultatif | ID de l'élément définissant le titre de la modale pour l'attribut `aria-labelledby`.        |
| `ariaDescribedBy` | `string`    | Facultatif | ID de l'élément définissant la description de la modale pour l'attribut `aria-describedby`. |

#### ModalContent

| Propriété   | Type       | Requis     | Description                                                                              |
| ----------- | ---------- | ---------- | ---------------------------------------------------------------------------------------- |
| `className` | `string`   | Facultatif | Classe(s) CSS personnalisée(s) à appliquer au contenu de la modale.                      |
| `onClose`   | `function` | Oui        | Fonction de rappel appelée pour fermer la modale (utilisée pour le bouton de fermeture). |
| `size`      | `number`   | Facultatif | Taille de l'icône de fermeture. Par défaut : `25`.                                       |
| `stroke`    | `string`   | Facultatif | Couleur de l'icône de fermeture. Par défaut : `'#000000'`.                               |
| `ariaLabel` | `string`   | Facultatif | Libellé pour l'attribut `aria-label` de l'icône de fermeture.                            |

#### ModalHeader

| Propriété   | Type        | Requis     | Description                                                          |
| ----------- | ----------- | ---------- | -------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à l'en-tête de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher à l'intérieur de l'en-tête de la modale.          |

#### ModalTitle

| Propriété   | Type        | Requis     | Description                                                                     |
| ----------- | ----------- | ---------- | ------------------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer au titre de la modale.               |
| `children`  | `ReactNode` | Oui        | Titre à afficher à l'intérieur de la modale.                                    |
| `id`        | `string`    | Facultatif | ID utilisé pour l'attribut `aria-labelledby` afin de lier le titre à la modale. |

#### ModalDescription

| Propriété   | Type        | Requis     | Description                                                                            |
| ----------- | ----------- | ---------- | -------------------------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à la description de la modale.              |
| `children`  | `ReactNode` | Oui        | Description à afficher à l'intérieur de la modale.                                     |
| `id`        | `string`    | Facultatif | ID utilisé pour l'attribut `aria-describedby` afin de lier la description à la modale. |

#### ModalFooter

| Propriété   | Type        | Requis     | Description                                                      |
| ----------- | ----------- | ---------- | ---------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer au pied de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher à l'intérieur du pied de la modale.           |

## Accessibilité

Le composant Modal inclut plusieurs fonctionnalités visant à améliorer l'accessibilité :

-   **Identification comme dialogue** : Utilisation de l'attribut `role="dialog"` pour indiquer que la fenêtre modale est un dialogue, ce qui améliore l'expérience des utilisateurs de lecteurs d'écran.
-   **Gestion du contenu en arrière-plan** : L'attribut `aria-modal="true"` signale aux technologies d'assistance que le contenu derrière la modale n'est pas accessible tant que celle-ci est ouverte.
-   **Descriptions contextuelles** :
    -   Les attributs `aria-labelledby` et `aria-describedby` fournissent des descriptions supplémentaires :
        -   `aria-labelledby` associe un élément, tel qu'un titre de modale, au dialogue afin que le titre soit annoncé.
        -   `aria-describedby` lie une description au dialogue, offrant un contexte supplémentaire aux utilisateurs.
-   **Gestion du focus** : L'attribut `tabIndex="-1"` est ajouté pour s'assurer que la modale reçoit le focus lorsque l'utilisateur navigue via le clavier.
-   **Accessibilité du bouton de fermeture** : Le bouton de fermeture inclut un attribut `aria-label` pour décrire sa fonction aux utilisateurs de lecteurs d'écran.

---

Ces bonnes pratiques améliorent l'interaction avec la modale pour les utilisateurs de technologies d'assistance et favorisent une expérience utilisateur inclusive.

## Styles

Le composant Modal et ses sous-composants vous permettent d'ajouter des styles personnalisés grâce au package `clsx`, qui vous permet de combiner vos propres classes CSS. Vous n'avez pas besoin d'utiliser les classes de base du composant, vous pouvez directement appliquer vos propres styles via les propriétés className des différents sous-composants.

## Exemple

Voici un exemple d'utilisation du composant avec des styles personnalisés :

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from 'react-modal-component-hw';
import './styles/main.css';

const App = () => {
 const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
           <button className="btn" onClick={() => setIsOpen(true)}>
                Ouvrir la modale
            </button>
            <Modal className="custom-modal" open={isOpen}>
                <ModalContent className="custom-modal-container" onClose={() => setIsOpen(false)} stroke="#dfdfdf" size={32}>
                    <ModalHeader className="custom-modal-header">
                        <img className="custom-modal-img" src="./hero.svg" alt="hero" />
                        <ModalTitle className="custom-modal-title">Titre de la modale</ModalTitle>
                        <ModalDescription className="custom-modal-description">Ceci est le contenu de la modale.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="custom-modal-footer">
                        <button
                            className="custom-modal-button"
                            onClick={() => setIsOpen(false)}
                        >
                            Fermer la modale
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    );
};

export default App;
```

```css
/* Les classes react-modal-component-hw en premier */

.react-modal-component-hw {
    position: absolute;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.42);
    top: 0;
    left: 0;
}

.react-modal-component-hw-container {
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    background-color: #ffffff;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
}

.react-modal-component-hw-icon {
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.4s ease;
}

.react-modal-component-hw-icon:hover {
    opacity: 1;
}

.react-modal-component-hw-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
}

.react-modal-component-hw-title {
    font-size: 1rem;
    font-weight: bold;
    color: #393939;
    margin-bottom: 0.5rem;
}

.react-modal-component-hw-description {
    font-size: 0.775rem;
    color: #71717a;
}

.react-modal-component-hw-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

/* Ajout de vos propres classes */

.custom-modal {
    background-color: rgba(135, 92, 0, 0.281);
}

.custom-modal-container {
    background-color: #2c2c2c;
    border-radius: 0.8rem;
    width: 600px;
}

.custom-modal-header {
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
}

.custom-modal-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #ececec;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.custom-modal-description {
    font-size: 0.995rem;
    color: #cacaca;
}

.custom-modal-footer {
    justify-content: center;
    align-items: center;
    border-top: 1px solid #cacaca;
    padding-top: 1rem;
}

.custom-modal-button {
    padding: 0.7rem 1.5rem;
    border-radius: 2rem;
    border: 3px solid #3a4c7e;
    background-color: #e2e2e2;
    color: #2c2c2c;
    font-size: 1.1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
    transition: background-color 0.4s ease;
}

.custom-modal-button:hover {
    background-color: transparent;
    cursor: pointer;
    color: #f2f2f2;
}

.custom-modal-img {
    width: 200px;
    height: 100%;
}
```

La modale avec des custom class :
![Custom class](/public/custom_fr.png 'custom_fr').

## Démonstration

Vous pouvez voir la démo de ce composant modal à l'adresse suivante : [https://aeonshad.github.io/react-modal-component-hw/](https://aeonshad.github.io/react-modal-component-hw/)

Le code source est disponible à cette adresse : [https://github.com/aeonshad/react-modal-component-hw](https://github.com/aeonshad/react-modal-component-hw/)

## Licence

Ce projet est sous licence [MIT](LICENSE).

