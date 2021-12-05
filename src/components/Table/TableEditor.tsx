import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { VoidWithArgsFn } from '../../types';

type EditorProps = {
  onChange: VoidWithArgsFn;
}
export const TableEditor = ({ onChange }: EditorProps) => {
  const editorRef = useRef({});
  const [content, setContent] = useState<string>();

  const handleChange = (evt: any, editor: any) => {
    setContent(editor.getContent());
    onChange(content);
  };

  return (
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
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
