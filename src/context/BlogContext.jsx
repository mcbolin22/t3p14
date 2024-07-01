import { createContext, useContext } from "react";


let defaultJournalData = [
    {
        id: 0,
        title: "Default journal post",
        author: "Colin",
        content: "Welcome to the website",
        date: Date.now()
    }
];


// This is only the data
export const JournalDataContext = createContext(null);
// This is the function to update the data
export const JournalDispatchContext = createContext(null);

// Hook to read global data
export function UseJournalData(){
    console.log("Journal data is being accessed");
    return useContext(JournalDataContext);
}

// Hook to call the function that edits the global data
export function useJournalDispatch(){
    return useContext(JournalDispatchContext);
}