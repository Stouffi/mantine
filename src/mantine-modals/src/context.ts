import { createContext } from 'react';
import { ModalProps } from '@mantine/core';
import type { ConfirmModalProps } from './ConfirmModal';

export type ModalSettings = Omit<ModalProps, 'opened' | 'onClose'>;

export type ConfirmLabels = Record<'confirm' | 'cancel', string>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}

export type ModalState =
  | { id: string; props: ModalSettings | null; type: 'content' }
  | { id: string; props: OpenConfirmModal | null; type: 'confirm' }
  | { id: string; props: OpenConfirmModal | null; type: 'context'; ctx: string };

export interface ModalsContext {
  modals: ModalState[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  openContextModal: (modal: string, props: ModalSettings) => string;
  closeModal: (id: string) => void;
  closeAll: () => void;
}

export const modalsContext = createContext<ModalsContext>({
  modals: [],
  openModal: () => '',
  openConfirmModal: () => '',
  openContextModal: () => '',
  closeAll: () => {},
  closeModal: () => {},
});
