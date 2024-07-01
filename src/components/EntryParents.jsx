import { useState } from "react";

export default function EntryParent(props){

    let [editmode, setEditMode] = useState(false);

    return(
        <section>
            {eidtMode ? <Entryform entryData={props.entryData}/> : <Entry entryData={props.entryData} /> }

            <button onClick={() => setEditMode(!editMode)}>
                Toggle Edit Mode
            </button>
        </section>
    )
}