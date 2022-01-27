import { FC, useCallback, useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';
import { MediaType, VoidFn } from 'types';
import { Loading } from 'components';
import { tableConfig, textConfig } from './constants';

type EditorProps = {
  onChange: VoidFn;
  type: MediaType.TEXT | MediaType.TABLE;
  initialContent?: string;
};

export const ContentEditor: FC<EditorProps> = ({
  onChange,
  type,
  initialContent,
}) => {
  const editorRef = useRef({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<string>(initialContent ?? '');

  const handleChange = useCallback(
    (evt: Object, editor: TinyMCEEditor) => {
      onChange(editor.getContent());
    },
    [onChange],
  );

  const handleInit = useCallback((evt, editor) => {
    editorRef.current = editor;
    setLoading(false);
  }, []);

  return (
    <div className="border-2 border-gray-100 w-96">
      {loading && <Loading />}
      <Editor
        inline={true}
        apiKey={process.env.REACT_APP_TINY_KEY}
        onInit={handleInit}
        initialValue={content}
        onChange={handleChange}
        onMouseLeave={handleChange}
        {...(type === MediaType.TEXT ? textConfig : tableConfig)}
      />
    </div>
  );
};
