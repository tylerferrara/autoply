import { $, component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { Tag } from './tag';

export interface ScopeProps {
    onChange: (tag: string) => void;
}

export const Scope = component$((props: ScopeProps) => {
    const scopeTags = useStore<string[]>(["developer"]);
    


    const onChange = $((e: any) => {
      scopeTags.push(e.target.value);
      props.onChange(e.target.value)
      e.target.value = '';
    });

    const removeTag = $((id: string) => {
        scopeTags.splice(parseInt(id), 1);
    });

    useStylesScoped$(`
        .container-tags {
            display: flex;
            min-height: 2rem;
            align-items: center;
            flex-wrap: wrap;
        }
        .container-create-tags {
            padding-top: 1rem;
        }
        .create-tag-input {
            width: 100%;
            font-size: 20px;
            border: none;
            border-bottom: 1px solid transparent;
            outline: none !important;
        }
        .create-tag-input:focus {
            border-bottom: 1px solid blue;
            color: blue;
        }
    `);
    return <div class="scope">
        <div class="container-tags">
            {scopeTags.map((tag, idx) => (
                <Tag name={tag} id={"" + idx} onClick={removeTag} />
            ))}
        </div>
        
        <div class="container-create-tags">
            <input class="create-tag-input" placeholder="Add a tag" type="text" name="scope" id="scope" onChange$={onChange}/>
        </div>
    </div>
});