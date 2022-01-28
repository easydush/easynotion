import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MediaType, Block, VoidFn } from 'types';
import { Switcher } from './components';

type BlockFormProps = {
  type: MediaType;
  onFinish: VoidFn;
  initialData?: Block;
};

const isEditorElement = (node: Node) => {
  const tox = document.getElementsByClassName('tox');
  const toolbar = tox.item(0);
  const tools = tox.item(1);

  return toolbar?.contains(node) || tools?.contains(node);
};

const useOutsideHandler = (
  ref: React.RefObject<Element>,
  handle: () => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !isEditorElement(event.target as Node)
      ) {
        handle();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handle]);
};

const useKeyboardHandler = (handle: () => void) => {
  useEffect(() => {
    function handleSave(event: KeyboardEvent) {
      let charCode = String.fromCharCode(event.which).toLowerCase();
      if ((event.ctrlKey || event.metaKey) && charCode === 's') {
        event.preventDefault();
        handle();
      }
    }

    document.addEventListener('keydown', handleSave);
    return () => {
      document.removeEventListener('keydown', handleSave);
    };
  }, [handle]);
};

export const BlockForm = ({ type, onFinish, initialData }: BlockFormProps) => {
  const formId = initialData?.id;
  const [content, setContent] = useState(initialData?.content);
  const wrapperRef = useRef(null);

  const handleFinish = useCallback(() => {
    onFinish(content);
    setContent(undefined);
  }, [content, onFinish]);

  useOutsideHandler(wrapperRef, handleFinish);
  useKeyboardHandler(handleFinish);

  return (
    <div
      ref={wrapperRef}
      id={formId}
      className="border-2 border-gray-100 w-full"
    >
      <Switcher type={type} onChange={setContent} initialContent={content} />
    </div>
  );
};
