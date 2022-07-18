import { useState } from "react"


export function AddItem(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            <div style={{
                width: "100%",
                border: "solid 2px",
                backgroundColor: "gray",
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div>
                    <button
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >+</button>
                    <label>{count}</label>
                    <button
                        onClick={() => {
                            if (count > 0) {
                                setCount(count - 1);

                            }
                        }}
                    >-</button>
                </div>
                <div>{props.nombreProducto}</div>

            </div>
        </>
    )
}