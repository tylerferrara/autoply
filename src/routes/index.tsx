import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Scope } from '../components/scope/scope';
import { Upload } from '../components/resume/upload';

export default component$(() => {
  useStylesScoped$(`
    .btn-next {
      background-color: blue;
      color: white;
      font-size: 20px;
      margin-top: 1rem;
      cursor: pointer;
    }
  `);
  return (
    <>
      <h1>Automatically Apply to Jobs in your scope</h1>
      <div>
        <h2>Define your scope</h2>
        <p>Use key words to narrow your job search</p>
        <Scope />
      </div>
      <Upload />
      <button class="btn-next">NEXT</button>
    </>
  );


});

export const head: DocumentHead = {
  title: 'Apply to all jobs at once',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
