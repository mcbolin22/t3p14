import { useEffect, useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";
import { UseJournalData } from "../context/BlogContext";

export default function EntryParent(props){

    let [editMode, setEditMode] = useState(false);

    let [journalEntry, setJournalEntry] = useState({});

    let journalEntries = UseJournalData();

    useEffect(() => {
        let foundEntry = journalEntries.find(entry => entry.id === parseInt(props.id));
        if (foundEntry){
            setJournalEntry(foundEntry);
            setEditMode(false);
        }
        
    // Easy fix to ensure edit-in-place live updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[journalEntries]);

    return(
        <section>
            {editMode ? <EntryForm entryData={journalEntry}  /> : <Entry entryData={journalEntry} /> }

            <button onClick={() => setEditMode(!editMode)}>
                Toggle Edit Mode
            </button>
        </section>
    )
}