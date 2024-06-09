export const setMainSpace = (spaceType,data) => ({
  type: 'SET_MAIN_SPACE',
  payload: {spaceType: spaceType, data: data}
});

export const setTabSpace = (spaceType,data) => ({
  type: 'SET_TAB_SPACE',
  payload: {spaceType: spaceType, data: data}
});
