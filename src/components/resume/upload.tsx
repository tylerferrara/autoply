import { $, component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import fs from 'fs';

export interface UploadProps {
    onChange: (resume: string) => void;
}

interface File {
    name: string;
    path: string;
}

export const Upload = component$((props: UploadProps) => {
    const empty = {name: "", path: ""};
    var file = useStore<File>(empty);
    const title = (file.name === "" ? "Drag and drop your resume here" : file.name);

    const inputHandler = $((event: any) => {
        const file = event.target.files[0];

        if (file.type === 'application/pdf') {
            const reader = new FileReader();
        
            reader.onload = () => {
                props.onChange(reader.result as string);
            };
        
            reader.readAsText(file);
        }
    });

    useStylesScoped$(`
        .upload-file {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #DEDEDE;
            cursor: pointer;
            min-height: 10rem;
            max-width: 20rem;
            border: 3px dashed black;
            flex-direction: column;
            padding: 1rem;
        }
        input[type="file"] {
            display: none;
        }
        .upload-container {
            display:inline-block;
        }
        .upload-file:hover {
            background-color: #BABABA;
        }
    `);
    return <div class="upload">
        <h2>Upload Resume</h2>
        <div class="upload-container">
            <label class="custom-file-upload">
                <input type="file" accept="application/pdf" onInput$={inputHandler}/>
                <div class="upload-file">
                    <p>{title}</p>
                    <span class="material-icons-round">file_present</span>
                </div>
            </label>
        </div>
    </div>
});