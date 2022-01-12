import { useCallback, useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';
import { VoidFn } from 'types';

type EditorProps = {
  onChange: VoidFn;
  initialContent?: string;
}

export const TextEditor = ({ onChange, initialContent }: EditorProps) => {
  const editorRef = useRef({});
  const [content, setContent] = useState<string>(initialContent ?? '');

  const handleChange = useCallback((evt: Object, editor: TinyMCEEditor) => {
    onChange(editor.getContent());
  }, [onChange]);

  return (
    <Editor
      apiKey={process.env.REACT_APP_TINY_KEY}
      onInit={(evt, editor) => editorRef.current = editor}
      initialValue={content}
      onChange={handleChange}
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
