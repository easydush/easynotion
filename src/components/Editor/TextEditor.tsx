import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TextEditor = () => {
  const editorRef = useRef({});
  const [content, setContent] = useState<string>();

  return (
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        onChange={(evt, editor) => setContent(editor.getContent())}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media paste code help wordcount',
          ],
          toolbar: 'formatselect | bold italic backcolor | alignleft ' +
            'aligncenter alignright alignjustify | bullist numlist outdent ' +
            'indent | removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
  );
};
