export const handleActionStart = state => {
  state.isLoading = true;
};

export const handleActionError = (state) => {
  state.isLoading = false;
};