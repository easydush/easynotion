import React from 'react';
import { AllTreeRenderProps, TreeRenderProps } from '../types';

const cx = (...classNames: Array<string | undefined | false>) => classNames.filter(cn => !!cn).join(' ');

export const createDefaultRenderers = (renderers: TreeRenderProps): AllTreeRenderProps => {
  const newRenderers: AllTreeRenderProps = {
    renderItemTitle: ({ title, context, info }) => {
      if (!info.isSearching || !context.isSearchMatching) {
        return <>{title}</>;
      } else {
        const startIndex = title.toLowerCase().indexOf(info.search!.toLowerCase());
        return (
          <React.Fragment>
            {startIndex > 0 && <span>{title.slice(0, startIndex)}</span>}
            <span className='rct-tree-item-search-highlight'>
              {title.slice(startIndex, startIndex + info.search!.length)}
            </span>
            {startIndex + info.search!.length < title.length && (
              <span>{title.slice(startIndex + info.search!.length, title.length)}</span>
            )}
          </React.Fragment>
        );
      }
    },
    renderItemArrow: ({ item, context }) => {
      // Icons from https://blueprintjs.com/docs/#icons
      return (
        <div
          className={cx(item.hasChildren && 'rct-tree-item-arrow-hasChildren', 'rct-tree-item-arrow')}
          {...context.arrowProps}
        >
          {item.hasChildren ?
            '>' :
            '\\/'
          }
        </div>
      );
    },
    renderItem: ({ item, depth, children, title, context, arrow }) => {
      const InteractiveComponent = context.isRenaming ? 'div' : 'button';
      // TODO have only root li component create all the classes
      return (
        <li
          {...(context.itemContainerWithChildrenProps as any)}
          className={cx(
            'rct-tree-item-li',
            item.hasChildren && 'rct-tree-item-li-hasChildren',
            context.isSelected && 'rct-tree-item-li-selected',
            context.isExpanded && 'rct-tree-item-li-expanded',
            context.isFocused && 'rct-tree-item-li-focused',
            context.isDraggingOver && 'rct-tree-item-li-dragging-over',
            context.isSearchMatching && 'rct-tree-item-li-search-match',
          )}
        >
          <div
            {...(context.itemContainerWithoutChildrenProps as any)}
            style={{ paddingLeft: `${(depth + 1) * (renderers.renderDepthOffset ?? 10)}px` }}
            className={cx(
              'rct-tree-item-title-container',
              item.hasChildren && 'rct-tree-item-title-container-hasChildren',
              context.isSelected && 'rct-tree-item-title-container-selected',
              context.isExpanded && 'rct-tree-item-title-container-expanded',
              context.isFocused && 'rct-tree-item-title-container-focused',
              context.isDraggingOver && 'rct-tree-item-title-container-dragging-over',
              context.isSearchMatching && 'rct-tree-item-title-container-search-match',
            )}
          >
            {arrow}
            <InteractiveComponent
              {...(context.interactiveElementProps as any)}
              className={cx(
                'rct-tree-item-button',
                item.hasChildren && 'rct-tree-item-button-hasChildren',
                context.isSelected && 'rct-tree-item-button-selected',
                context.isExpanded && 'rct-tree-item-button-expanded',
                context.isFocused && 'rct-tree-item-button-focused',
                context.isDraggingOver && 'rct-tree-item-button-dragging-over',
                context.isSearchMatching && 'rct-tree-item-button-search-match',
              )}
            >
              {title}
            </InteractiveComponent>
          </div>
          {children}
        </li>
      );
    },
    renderRenameInput: ({ inputProps, inputRef, submitButtonProps, formProps }) => {
      return (
        <form {...formProps} className='rct-tree-item-renaming-form'>
          <input {...inputProps} ref={inputRef} className='rct-tree-item-renaming-input' />
          <input {...submitButtonProps} type='submit' className='rct-tree-item-renaming-submit-button' value='🗸' />
        </form>
      );
    },
    renderDraggingItem: () => {
      return <div />;
    },
    renderDraggingItemTitle: () => {
      return <div />;
    },
    renderTreeContainer: ({ children, containerProps, info }) => {
      return (
        <div
          className={cx(
            'rct-tree-root',
            info.isFocused && 'rct-tree-root-focus',
            info.isRenaming && 'rct-tree-root-renaming',
            info.areItemsSelected && 'rct-tree-root-itemsselected',
          )}
        >
          <div {...containerProps}>{children}</div>
        </div>
      );
    },
    renderItemsContainer: ({ children, containerProps }) => {
      return (
        <ul {...containerProps} className='rct-tree-items-container'>
          {children}
        </ul>
      );
    },
    renderDragBetweenLine: ({ draggingPosition, lineProps }) => {
      return (
        <div
          {...lineProps}
          style={{ left: `${draggingPosition.depth * (renderers.renderDepthOffset ?? 10)}px` }}
          className={cx(
            'rct-tree-drag-between-line',
            draggingPosition.targetType === 'between-items' &&
            draggingPosition.linePosition === 'top' &&
            'rct-tree-drag-between-line-top',
            draggingPosition.targetType === 'between-items' &&
            draggingPosition.linePosition === 'bottom' &&
            'rct-tree-drag-between-line-bottom',
          )}
        />
      );
    },
    renderSearchInput: ({ inputProps }) => {
      return (
        <div className={cx('rct-tree-search-input-container')}>
          <input {...inputProps} className={cx('rct-tree-search-input')} />
        </div>
      );
    },
    renderLiveDescriptorContainer: ({ tree, children }) => {
      return (
        <div
          id={`rct-livedescription-${tree.treeId}`}
          style={{
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: '1px',
            overflow: 'hidden',
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '1px',
          }}
        >
          {children}
        </div>
      );
    },
    renderDepthOffset: 4,
    ...renderers,
  };

  (newRenderers.renderItem as any).displayName = 'RenderItem';
  (newRenderers.renderItemTitle as any).displayName = 'RenderItemTitle';
  (newRenderers.renderItemArrow as any).displayName = 'RenderItemArrow';
  (newRenderers.renderRenameInput as any).displayName = 'RenderRenameInput';
  (newRenderers.renderDraggingItem as any).displayName = 'RenderDraggingItem';
  (newRenderers.renderDraggingItemTitle as any).displayName = 'RenderDraggingItemTitle';
  (newRenderers.renderItemsContainer as any).displayName = 'RenderItemsContainer';
  (newRenderers.renderTreeContainer as any).displayName = 'RenderTreeContainer';
  (newRenderers.renderDragBetweenLine as any).displayName = 'RenderDragBetweenLine';
  (newRenderers.renderSearchInput as any).displayName = 'RenderSearchInput';

  return newRenderers;
};
