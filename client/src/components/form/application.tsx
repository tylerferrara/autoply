import { $, component$ } from '@builder.io/qwik';
const submit = $(() => {
    
});
export const Application = component$(() => {
    return (
      <>
        <div class="narrow">
            <h1>Outgoing Application</h1>
            <input type="text" placeholder="Username"/>
            <input type="file" accept='.pdf' />
            <input id="register" type="submit" value="Register"
                onClick$={submit} />
        </div>
      </>
    );
  });