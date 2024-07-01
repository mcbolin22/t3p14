import { useEffect } from "react";
import { UseJournalData } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";


export function LatestPostRedirection(){

    let journalEntries = UseJournalData();

    let navigate = useNavigate();

    useEffect(() => {
        let sortedEntries = [...journalEntries].sort((entryA, entryB) => entryB.id - entryA.id)

        let latestEntry = sortedEntries[0];

        navigate(`/view/${latestEntry.id}`)

    }, [journalEntries]);

    return(
        <h1>Loading...</h1>
    )
}