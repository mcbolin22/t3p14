import EntryParent from "../components/EntryParents";
import { UseJournalData } from "../context/BlogContext";


export function HomePage(){

    let journalEntries = UseJournalData();

    return(
        <div>
            {journalEntries?.map((entry, index) => {
                return <EntryParent key={index} postId={entry.id} />
            }) }
        </div>
    )
}