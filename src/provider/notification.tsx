import { createContext, useCallback, useEffect, useState } from "react";

interface Notification {
    text: string;
    setTextData(text: string): void;
}

export const NotificationContext = createContext<Notification>({
    text: '',
    setTextData: () => { },
});

function NotificationContextProvider({ children }: { children: any }) {

    const [text, setText] = useState('');

    const setTextData = (text: string) => { setText(text) }

    const contextValue = {
        text,
        setTextData: useCallback((text: string) => { setTextData(text) }, []),
    };


    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationContextProvider;