import React from "react";
import { useSearchParams } from "react-router-dom";
import { SelectPicker } from 'rsuite';
import { GetDataInStorage, SaveDataInStorage } from "utils/storage";

export function SelectUserPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div>
                <h1>
                    SELECCIONA TU USUARIO
                </h1>
                <h2>{searchParams.get("tipo")}</h2>
                <SelectPicker data={[
                    {
                        value: 1,
                        label: "Camila"
                    }
                ]} style={{ width: 224 }} />

                <button className="btn-next" onClick={() => {
                    let seleccionado = "";
                    SaveDataInStorage("user", {

                    });

                    let user = GetDataInStorage("user");

                    localStorage.getItem("user");
                }}>Comenzar</button>
                <label>Que tengas un excelente día de trabajo</label>

   

            </div>
        </>
    )
}

