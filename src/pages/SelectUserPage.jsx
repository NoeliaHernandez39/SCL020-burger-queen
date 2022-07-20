import React from "react";
import { useSearchParams } from "react-router-dom";
import { SelectPicker } from 'rsuite';

export function SelectUserPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div>
                <h1>{searchParams.get("tipo")}</h1>
                <SelectPicker data={[
                    {
                        value: 1,
                        label: "Camila"
                    }
                ]} style={{ width: 224 }} /><br></br>
                    
                <button className="btn-next">Comenzar</button>
            </div>
        </>
    )
}

