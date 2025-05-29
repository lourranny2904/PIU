import { caico } from "./caico"

export default function DropDown() {
    return (
        <ul>
            {caico.map((cai) => (
                <li key={cai.id}>
                    <a href={cai.link}>{cai.titulo}</a>
                </li>
            ))}
        </ul>
    );
}