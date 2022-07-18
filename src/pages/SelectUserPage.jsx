import React from "react";
import { SelectPicker } from 'rsuite';

export function SelectUserPage() {
    return (
        <>
            <div>
                <SelectPicker data={[
                    {
                        value: 1,
                        label: "Camila"
                    }
                ]} style={{ width: 224 }} />
            </div>
        </>
    )
}