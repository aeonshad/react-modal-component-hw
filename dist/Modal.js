import { X } from 'lucide-react';
import './modal.css';
import clsx from 'clsx';
import React from 'react';
export const Modal = ({
  className,
  open,
  children,
  ariaLabelledBy,
  ariaDescribedBy
}) => open && /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw', className),
  role: "dialog",
  "aria-modal": "true",
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  tabIndex: "-1"
}, children);
export const ModalContent = ({
  className,
  onClose,
  size = 25,
  stroke = '#000000',
  children,
  ariaLabel
}) => /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw-container', className)
}, children, /*#__PURE__*/React.createElement(X, {
  className: "react-modal-component-hw-icon",
  size: size,
  stroke: stroke,
  onClick: onClose,
  "aria-label": ariaLabel
}));
export const ModalHeader = ({
  className,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw-header', className)
}, children);
export const ModalTitle = ({
  className,
  children,
  id
}) => /*#__PURE__*/React.createElement("h2", {
  className: clsx('react-modal-component-hw-title', className),
  id: id
}, children);
export const ModalDescription = ({
  className,
  children,
  id
}) => /*#__PURE__*/React.createElement("p", {
  className: clsx('react-modal-component-hw-description', className),
  id: id
}, children);
export const ModalFooter = ({
  className,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw-footer', className)
}, children);