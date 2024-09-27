import { X } from 'lucide-react';
import './modal.css';
import clsx from 'clsx';
import React from 'react';
export const Modal = ({
  className,
  open,
  children
}) => open ? /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw', className)
}, children) : null;
export const ModalContent = ({
  className,
  onClose,
  size = 25,
  stroke = '#000000',
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw-container', className)
}, children, /*#__PURE__*/React.createElement(X, {
  className: "react-modal-component-hw-icon",
  size: size,
  stroke: stroke,
  onClick: onClose
}));
export const ModalHeader = ({
  className,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw-header', className)
}, children);
export const ModalTitle = ({
  className,
  children
}) => /*#__PURE__*/React.createElement("h2", {
  className: clsx('react-modal-component-hw-title', className)
}, children);
export const ModalDescription = ({
  className,
  children
}) => /*#__PURE__*/React.createElement("p", {
  className: clsx('react-modal-component-hw-description', className)
}, children);
export const ModalFooter = ({
  className,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: clsx('react-modal-component-hw-footer', className)
}, children);