# Composant Modal React Personnalisable

<a href='https://github.com/aeonshad/react-component-hw/blob/main/README.md'><img alt="Static Badge" src="https://img.shields.io/badge/version-English%7CAnglais-%2322802b?style=flat&logo=readme&logoColor=%23b3bd68&label=Readme"></a>
<a href='https://fr.react.dev/'><img alt="Static Badge" src="https://img.shields.io/badge/version-18.3.1-blue?style=flat&logo=React&label=React"></a>
<a href='https://www.npmjs.com/'><img alt="Static Badge" src="https://img.shields.io/badge/version-10.8.2-red?style=flat&logo=NPM&label=NPM"></a>
<a href='https://github.com/aeonshad/react-component-hw/blob/main/LICENSE'><img alt="Static Badge" src="https://img.shields.io/badge/version-MIT-%23cfb232?style=flat&logoColor=%23b3bd68&label=License"></a>

Un composant de fenêtre modale simple, modulaire et personnalisable pour les applications React, compatible avec Tailwind CSS, permettant une gestion facile des fenêtres modales avec des options de style et d'accessibilité.

## Table des matières

-   [Installation](#installation)
-   [Compatibilité et Dépendances](#compatibilité-et-dépendances)
-   [Utilisation](#utilisation)
-   [Propriétés](#propriétés)
-   [Accessibilité](#accessibilité)
-   [Styles Personnalisés](#styles-personnalisés)
-   [Personnalisation](#personnalisation)
-   [Licence](#licence)

## Installation

Pour installer le composant Modal dans votre projet React, utilisez npm ou yarn :

```bash
npm install react-modal-component-hw clsx lucide-react
```

ou

```bash
yarn add react-modal-component-hw clsx lucide-react
```

## Compatibilité et Dépendances

Le composant Modal repose sur certaines dépendances externes pour fonctionner correctement. Voici les versions minimales requises de ces bibliothèques :

### Dépendances

-   **`clsx`** : Utilisé pour gérer conditionnellement les classes CSS. Vous pouvez combiner des classes CSS ou Tailwind via `clsx`.

    -   Version requise : `^2.1.1`
    -   Installation :
        ```bash
        npm install clsx@^2.1.1
        ```
        Ou
        ```bash
        yarn add clsx@^2.1.1
        ```

-   **`lucide-react`** : Utilisé pour les icônes SVG, notamment l'icône de fermeture de la modale.
    -   Version requise : `^0.446.0`
    -   Installation :
        ```bash
        npm install lucide-react@^0.446.0
        ```
        Ou
        ```bash
        yarn add lucide-react@^0.446.0
        ```

### Compatibilité

-   **React** : Ce composant est compatible avec React 17+ et React 18+.
-   **Tailwind CSS (optionnel)** : Bien que Tailwind ne soit pas obligatoire, le package `clsx` vous permet d'utiliser Tailwind pour la gestion des classes et des styles si vous le souhaitez.

Assurez-vous d'avoir installé ces dépendances pour que le composant fonctionne correctement dans votre projet.

---

Cela devrait couvrir les exigences minimales pour `clsx`, `lucide-react` et d'autres aspects liés à la compatibilité du composant.

## Utilisation

Pour utiliser le composant Modal et ses sous-composants, importez-le dans votre fichier et incorporez-le dans votre code JSX :

```jsx
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from 'react-modal-component-hw';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Ouvrir la modale</button>
            <Modal open={isOpen}>
                <ModalContent onClose={toggleModal}>
                    <ModalHeader>
                        <ModalTitle>Titre de la modale</ModalTitle>
                    </ModalHeader>
                    <ModalDescription>Ceci est le contenu de la modale.</ModalDescription>
                    <ModalFooter>
                        <button onClick={toggleModal}>Fermer la modale</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default App;
```

## Propriétés

Le composant Modal et ses sous-composants acceptent les propriétés suivantes :

#### Modal

| Propriété         | Type        | Requis     | Description                                                                                 |
| ----------------- | ----------- | ---------- | ------------------------------------------------------------------------------------------- |
| `className`       | `string`    | Facultatif | Classe(s) CSS personnalisée(s) pour la modale.                                              |
| `open`            | `boolean`   | Oui        | Indique si la modale est ouverte ou fermée.                                                 |
| `children`        | `ReactNode` | Oui        | Contenu à afficher à l'intérieur de la modale.                                              |
| `ariaLabelledBy`  | `string`    | Facultatif | ID de l'élément définissant le titre de la modale pour l'attribut `aria-labelledby`.        |
| `ariaDescribedBy` | `string`    | Facultatif | ID de l'élément définissant la description de la modale pour l'attribut `aria-describedby`. |

#### ModalContent

| Propriété   | Type       | Requis     | Description                                                                              |
| ----------- | ---------- | ---------- | ---------------------------------------------------------------------------------------- |
| `className` | `string`   | Facultatif | Classe(s) CSS personnalisée(s) pour le contenu de la modale.                             |
| `onClose`   | `function` | Oui        | Fonction de rappel appelée pour fermer la modale (utilisée pour le bouton de fermeture). |
| `size`      | `number`   | Facultatif | Taille de l'icône de fermeture. Par défaut : `25`.                                       |
| `stroke`    | `string`   | Facultatif | Couleur de l'icône de fermeture. Par défaut : `'#000000'`.                               |
| `ariaLabel` | `string`   | Facultatif | Libellé pour l'attribut `aria-label` de l'icône de fermeture.                            |

#### ModalHeader

| Propriété   | Type        | Requis     | Description                                                 |
| ----------- | ----------- | ---------- | ----------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) pour l'en-tête de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher à l'intérieur de l'en-tête de la modale. |

#### ModalTitle

| Propriété   | Type        | Requis     | Description                                                                     |
| ----------- | ----------- | ---------- | ------------------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) pour le titre de la modale.                      |
| `children`  | `ReactNode` | Oui        | Titre à afficher à l'intérieur de la modale.                                    |
| `id`        | `string`    | Facultatif | ID utilisé pour l'attribut `aria-labelledby` afin de lier le titre à la modale. |

#### ModalDescription

| Propriété   | Type        | Requis     | Description                                                                            |
| ----------- | ----------- | ---------- | -------------------------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) pour la description de la modale.                       |
| `children`  | `ReactNode` | Oui        | Description à afficher à l'intérieur de la modale.                                     |
| `id`        | `string`    | Facultatif | ID utilisé pour l'attribut `aria-describedby` afin de lier la description à la modale. |

#### ModalFooter

| Propriété   | Type        | Requis     | Description                                               |
| ----------- | ----------- | ---------- | --------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) pour le pied de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher à l'intérieur du pied de la modale.    |

### Accessibilité

Le composant Modal inclut plusieurs fonctionnalités visant à améliorer l'accessibilité :

-   Utilisation de l'attribut `role="dialog"` pour identifier la fenêtre modale comme un dialogue, améliorant ainsi l'expérience des utilisateurs de lecteurs d'écran.
-   L'attribut `aria-modal="true"` signale aux technologies d'assistance que le contenu en arrière-plan n'est pas accessible tant que la modale est ouverte.
-   Les attributs `aria-labelledby` et `aria-describedby` sont utilisés pour fournir des descriptions contextuelles de la modale :
    -   `aria-labelledby` associe un élément, comme un titre de modale, au dialogue afin que le titre soit annoncé.
    -   `aria-describedby` associe une description au dialogue, offrant un contexte supplémentaire aux utilisateurs.
-   L'ajout de l'attribut `tabIndex="-1"` pour s'assurer que la modale est focalisée lorsque l'utilisateur navigue via le clavier.
-   Le bouton de fermeture inclut un attribut `aria-label` pour décrire sa fonction aux utilisateurs de lecteurs d'écran.

---

Ces bonnes pratiques permettent une meilleure interaction avec la modale pour les utilisateurs utilisant des technologies d'assistance.

## Styles Personnalisés

Le composant Modal vous permet d'ajouter des styles personnalisés en utilisant le package `clsx`, qui vous permet de combiner facilement des classes Tailwind ou vos propres classes CSS. Vous n'avez pas besoin d'utiliser les classes de base du composant, vous pouvez directement appliquer vos propres styles via les propriétés className des différents sous-composants.

## Personnalisation

Voici un exemple d'utilisation du composant avec des styles personnalisés :

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from 'react-modal-component-hw';
import './styles/main.css';

const App = () => {
 const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
           <button className="btn" onClick={toggleModal}>
                Ouvrir la modale
            </button>
            <Modal className="custom-modal" open={isOpen}>
                <ModalContent className="custom-modal-container" onClose={toggleModal} stroke="#dfdfdf" size={32}>
                    <ModalHeader className="custom-modal-header">
                        <img className="custom-modal-img" src="./hero.svg" alt="héros" />
                        <ModalTitle className="custom-modal-title">Titre de la modale</ModalTitle>
                        <ModalDescription className="custom-modal-description">Ceci est le contenu de la modale.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="custom-modal-footer">
                        <button
                            className="custom-modal-button"
                            onClick={toggleModal}
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

## Licence

Ce projet est sous licence [MIT](LICENSE).

