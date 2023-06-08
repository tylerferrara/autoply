import { $, component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Scope } from '../components/scope/scope';
import { Upload } from '../components/resume/upload';
import { Form } from '../components/form/type';


export default component$(() => {
  const empty: Form = { tags: ["developer"], resume: '' };
  const application = useStore(empty);
  useStylesScoped$(`
    .btn-next {
      background-color: blue;
      color: white;
      font-size: 20px;
      margin-top: 1rem;
      cursor: pointer;
    }
  `);
  const onScopeChange = $((tag: string) => {
    application.tags.push(tag);
  });
  const onUploadChange = $((resume: string) => {
    application.resume = resume;
  });
  const onNext = $(() => {
    console.log(application);
  });
  return (
    <>
      <h1>Automatically Apply to Jobs in your scope</h1>
      <div>
        <h2>Define your scope</h2>
        <p>Use key words to narrow your job search</p>
        <Scope onChange={onScopeChange} />
      </div>
      <Upload onChange={onUploadChange} />
      <button class="btn-next" onClick$={onNext}>NEXT</button>
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
