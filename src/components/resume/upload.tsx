import { $, component$, useStore, useStylesScoped$ } from '@builder.io/qwik';

interface File {
    name: string;
    path: string;
}

export const Upload = component$(() => {
    const empty = {name: "", path: ""};
    const fileName = useStore<File>(empty);
    const title = (fileName.name === "" ? "Drag and drop your resume here" : fileName.name);
    const onChange = $((e: any) => {
        fileName.name = e.target.files[0].name;
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
                <input type="file" accept="application/pdf" onChange$={onChange}/>
                <div class="upload-file">
                    <p>{title}</p>
                    <span class="material-icons-round">file_present</span>
                </div>
            </label>
        </div>
    </div>
});