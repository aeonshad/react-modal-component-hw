# Composant Modal React Personnalisable

Un composant de fenêtre modale simple, modulaire et personnalisable pour les applications React, compatible avec Tailwind CSS, permettant une gestion facile des fenêtres modales avec des options de style.

## Table des matières

-   [Installation](#installation)
-   [Compatibilité et Dépendances](#compatibilité-et-dépendances)
-   [Utilisation](#utilisation)
-   [Propriétés](#propriétés)
-   [Exemple](#exemple)
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

### Modal

-   `open` (requis) : Un booléen indiquant si la modale doit être affichée ou non.
-   `className` : Des classes CSS supplémentaires pour personnaliser l'apparence de la modale.

### ModalContent

-   `onClose` (requis) : Une fonction appelée lorsque la modale doit être fermée.
-   `className` : Des classes CSS supplémentaires pour personnaliser le contenu de la modale.
-   `size` : La taille de l'icône de fermeture (par défaut `25`).
-   `stroke` : La couleur de l'icône de fermeture (par défaut `#000000`).

### ModalHeader, ModalTitle, ModalDescription, ModalFooter

-   `className` : Des classes CSS supplémentaires pour personnaliser chaque section de la modale.

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

