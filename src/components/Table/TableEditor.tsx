import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { VoidFn } from 'types';

type EditorProps = {
  onChange: VoidFn;
  initialContent?: string;
}
export const TableEditor = ({ onChange, initialContent }: EditorProps) => {
  const editorRef = useRef({});
  const [content, setContent] = useState<string>(initialContent ?? '');

  const handleChange = (evt: any, editor: any) => {
    onChange(editor.getContent());
  };

  return (
      <Editor
        apiKey={process.env.REACT_APP_TINY_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={content}
        onChange={handleChange}
        init={{
          height: 500,
          menubar: 'table',
          plugins: [
            'table',
          ],
          toolbar: 'bold italic backcolor | table tabledelete | tableprops ' +
            'tablerowprops tablecellprops | tableinsertrowbefore ' +
            'tableinsertrowafter tabledeleterow | tableinsertcolbefore ' +
            'tableinsertcolafter tabledeletecol',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
  );
};
