export const uiText = (field, operation, params) =>
  ({
    general: {
      dataLoading: 'Loading data...',
      dataLoadingError:
        'Something went wrong during data loading. Please try again later.',
      noItemsToShow: 'No items to show',
      batchDeleteConfirm: 'Do you really want to delete selected items?',
    },
  }[field][operation]);
