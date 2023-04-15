import * as React from 'react';
import { createContext, useContext, useState, useRef } from 'react';
import { Dialog } from '@/components/commons/Dialog/Dialog.styled';

type ProviderContext = readonly [(option: DialogOption) => void, () => void, DialogParams[]];

type DialogParams = {
    children: React.ReactNode;
    open: boolean;
    onClose?: () => void;
    onExited?: () => void;
};

type DialogOption = Omit<DialogParams, 'open'>;

type DialogContainerProps = DialogParams & {
    onClose: () => void;
    onKill: () => void;
};

type DialogProviderProps = {
    children: React.ReactNode;
};

const DialogContext = createContext<ProviderContext>([() => {}, () => {}, []]);
export const useDialog = () => useContext(DialogContext);

const DialogContainer = (props: DialogContainerProps) => {
    const { children, open, onClose, onKill } = props;
    return (
        <Dialog open={open} onClose={onClose} TransitionProps={{ onExited: onKill }}>
            {children}
        </Dialog>
    );
};

const DialogProvider = (props: DialogProviderProps) => {
    const { children } = props;
    const [dialogs, setDialogs] = useState<DialogParams[]>([]);

    const createDialog = (option: DialogOption) => {
        const dialog = { ...option, open: true };
        setDialogs((dialogs) => [...dialogs, dialog]);
    };

    const closeDialog = () => {
        setDialogs((dialogs) => {
            const latestDialog = dialogs.pop();
            if (!latestDialog) return dialogs;
            if (latestDialog.onClose) latestDialog.onClose();
            return [...dialogs].concat({ ...latestDialog, open: false });
        });
    };

    const contextValue = useRef([createDialog, closeDialog, dialogs] as const);

    return (
        <DialogContext.Provider value={contextValue.current}>
            {children}
            {dialogs.map((dialog, i) => {
                const { onClose, ...dialogParams } = dialog;
                const handleKill = () => {
                    if (dialog.onExited) dialog.onExited();
                    setDialogs((dialogs) => dialogs.slice(0, dialogs.length - 1));
                };

                return (
                    <DialogContainer
                        key={i}
                        onClose={onClose ? onClose : closeDialog}
                        onKill={handleKill}
                        {...dialogParams}
                    />
                );
            })}
        </DialogContext.Provider>
    );
};

export default DialogProvider;
