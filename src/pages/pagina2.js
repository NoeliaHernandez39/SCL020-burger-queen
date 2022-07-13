import { useNavigate } from "react-router-dom";

export function Pagina2() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Pagina 2</h1>
            <button onClick={() => {
                navigate('/');
            }}>Hacia Pagina 1</button>

        </>
    )
}