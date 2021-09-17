export const handleClickOutsideComponent = (event, refs, func) => {
  if (refs.every((ref) => ref.current && !ref.current.contains(event.target))) {
    func();
  }
};
