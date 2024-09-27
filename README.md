# Customizable React Modal Component

<a href='https://github.com/aeonshad/react-component-hw/blob/main/README.fr.md'><img alt="Static Badge" src="https://img.shields.io/badge/version-French%7CFran%C3%A7ais-%2322802b?style=flat&logo=readme&logoColor=%23b3bd68&label=Readme"></a>
<a href='https://fr.react.dev/'><img alt="Static Badge" src="https://img.shields.io/badge/version-18.3.1-blue?style=flat&logo=React&label=React"></a>
<a href='https://www.npmjs.com/'><img alt="Static Badge" src="https://img.shields.io/badge/version-10.8.2-red?style=flat&logo=NPM&label=NPM"></a>
<a href='https://github.com/aeonshad/react-component-hw/blob/main/LICENSE'><img alt="Static Badge" src="https://img.shields.io/badge/version-MIT-%23cfb232?style=flat&logoColor=%23b3bd68&label=License"></a>

A simple, modular and customizable modal window component for React applications, compatible with Tailwind CSS, allowing easy management of modal windows with styling and accessibility options

## Table of Contents

-   [Installation](#installation)
-   [Compatibility and Dependencies](#compatibility-and-dependencies)
-   [Usage](#usage)
-   [Properties](#properties)
-   [Accessibility](#accessibility)
-   [Custom Styles](#custom-styles)
-   [Customization](#customization)
-   [Demonstration](#demonstration)
-   [License](#license)

## Installation

To install the Modal component in your React project, use npm or yarn:

```bash
npm install react-modal-component-hw clsx lucide-react
```

or

```bash
yarn add react-modal-component-hw clsx lucide-react
```

## Compatibility and Dependencies

The Modal component relies on certain external dependencies to function properly. Here are the minimum required versions of these libraries:

### Dependencies

-   **`clsx`** : Used to conditionally manage CSS classes. You can combine CSS or Tailwind classes via `clsx`.

    -   Required version: `^2.1.1`
    -   Installation:
        ```bash
        npm install clsx@^2.1.1
        ```
        Or
        ```bash
        yarn add clsx@^2.1.1
        ```

-   **`lucide-react`** : Used for SVG icons, including the close icon in the modal.
    -   Required version: `^0.446.0`
    -   Installation:
        ```bash
        npm install lucide-react@^0.446.0
        ```
        Or
        ```bash
        yarn add lucide-react@^0.446.0
        ```

### Compatibility

-   **React** : This component is compatible with React 17+ and React 18+.
-   **Tailwind CSS (optional)** : Although Tailwind is not mandatory, the `clsx` package allows you to use Tailwind for class and style management if you wish.

Make sure you have installed these dependencies for the component to function properly in your project.

---

This should cover the minimum requirements for `clsx`, `lucide-react` and other aspects related to the component's compatibility.

## Usage

To use the Modal component and its sub-components, import it into your file and incorporate it into your JSX code:

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
            <button onClick={toggleModal}>Open Modal</button>
            <Modal open={isOpen}>
                <ModalContent onClose={toggleModal}>
                    <ModalHeader>
                        <ModalTitle>Title of Modal</ModalTitle>
                    </ModalHeader>
                    <ModalDescription>This is the content of the modal.</ModalDescription>
                    <ModalFooter>
                        <button onClick={toggleModal}>Close Modal</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default App;
```

## Properties

The Modal component and its sub-components accept the following properties:

#### Modal

| Property          | Type        | Required | Description                                                                            |
| ----------------- | ----------- | -------- | -------------------------------------------------------------------------------------- |
| `className`       | `string`    | Optional | Custom CSS class(es) for the modal.                                                    |
| `open`            | `boolean`   | Yes      | Indicates if the modal is open or closed.                                              |
| `children`        | `ReactNode` | Yes      | Content to display inside the modal.                                                   |
| `ariaLabelledBy`  | `string`    | Optional | ID of the element defining the modal title for the `aria-labelledby` attribute.        |
| `ariaDescribedBy` | `string`    | Optional | ID of the element defining the modal description for the `aria-describedby` attribute. |

#### ModalContent

| Property    | Type       | Required | Description                                                              |
| ----------- | ---------- | -------- | ------------------------------------------------------------------------ |
| `className` | `string`   | Optional | Custom CSS class(es) for the modal content.                              |
| `onClose`   | `function` | Yes      | Callback function called to close the modal (used for the close button). |
| `size`      | `number`   | Optional | Size of the close icon. Default: `25`.                                   |
| `stroke`    | `string`   | Optional | Color of the close icon. Default: `'#000000'`.                           |
| `ariaLabel` | `string`   | Optional | Label for the `aria-label` attribute of the close icon.                  |

#### ModalHeader

| Property    | Type        | Required | Description                                 |
| ----------- | ----------- | -------- | ------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) for the modal header.  |
| `children`  | `ReactNode` | Yes      | Content to display inside the modal header. |

#### ModalTitle

| Property    | Type        | Required | Description                                                                 |
| ----------- | ----------- | -------- | --------------------------------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) for the modal title.                                   |
| `children`  | `ReactNode` | Yes      | Title to display inside the modal.                                          |
| `id`        | `string`    | Optional | ID used for the `aria-labelledby` attribute to link the title to the modal. |

#### ModalDescription

| Property    | Type        | Required | Description                                                                        |
| ----------- | ----------- | -------- | ---------------------------------------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) for the modal description.                                    |
| `children`  | `ReactNode` | Yes      | Description to display inside the modal.                                           |
| `id`        | `string`    | Optional | ID used for the `aria-describedby` attribute to link the description to the modal. |

#### ModalFooter

| Property    | Type        | Required | Description                                 |
| ----------- | ----------- | -------- | ------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) for the modal footer.  |
| `children`  | `ReactNode` | Yes      | Content to display inside the modal footer. |

### Accessibility

The Modal component includes several features to improve accessibility:

-   Use of the `role="dialog"` attribute to identify the modal window as a dialogue, enhancing the experience for screen reader users.
-   The `aria-modal="true"` attribute signals to assistive technologies that the background content is not accessible while the modal is open.
-   The `aria-labelledby` and `aria-describedby` attributes are used to provide contextual descriptions of the modal:
    -   `aria-labelledby` associates an element, such as a modal title, with the dialogue so that the title is announced.
    -   `aria-describedby` associates a description with the dialogue, offering additional context to users.
-   The addition of the `tabIndex="-1"` attribute to ensure the modal is focused when the user navigates via the keyboard.
-   The close button includes an `aria-label` attribute to describe its function to screen reader users.

---

These best practices enable better interaction with the modal for users utilizing assistive technologies.

## Custom Styles

The Modal component allows you to add custom styles using the `clsx` package, which allows you to easily combine Tailwind classes or your own CSS classes. You don't need to use the component's base classes, you can directly apply your own styles via the className properties of the different sub-components.

## Customization

Here is an example of using the component with custom styles:

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
                Open modal
            </button>
            <Modal className="custom-modal" open={isOpen}>
                <ModalContent className="custom-modal-container" onClose={toggleModal} stroke="#dfdfdf" size={32}>
                    <ModalHeader className="custom-modal-header">
                        <img className="custom-modal-img" src="./hero.svg" alt="hero" />
                        <ModalTitle className="custom-modal-title">Title of Modal</ModalTitle>
                        <ModalDescription className="custom-modal-description">This is the content of the modal.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="custom-modal-footer">
                        <button
                            className="custom-modal-button"
                            onClick={toggleModal}
                        >
                            Close Modal
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    );
};

export default App;
```

## Demonstration

You can see the demo of this modal component at the following address: [https://aeonshad.github.io/react-modal-component-hw/](https://aeonshad.github.io/react-modal-component-hw/)

The source code is available at this address: [https://github.com/aeonshad/react-modal-component-hw](https://github.com/aeonshad/react-modal-component-hw/)

## License

This project is licensed under the [MIT](LICENSE).

