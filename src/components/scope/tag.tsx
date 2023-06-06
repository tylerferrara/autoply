import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import 'material-icons/iconfont/material-icons.css';


interface TagProps {
    name: string;
    id: string;
    onClick: (id: string) => void;
}

export const Tag = component$<TagProps>((props) => {
    useStylesScoped$(`

        .btn-tag {
            display: flex;
            border: none;
            font-size: 20px;
            margin-right: 0.5rem;
            padding: 0.5rem;
        }
        .btn-tag:hover {
            background-color: #eb4034;
            color: white;
        }
        .rm-tag {
            background-color: #eb4034;
            margin-left: 0.3rem;
        }
    `);
    const onClick = $(() => props.onClick(props.id));
    return <>
            <button class="btn-tag" onClick$={onClick} id={props.id}>{props.name} <span class="material-icons rm-tag">close</span></button>
            
    </>
});
