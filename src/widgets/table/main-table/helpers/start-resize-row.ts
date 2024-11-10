export default function startResizeRow(
  event: MouseEvent,
  rowRef?: HTMLElement
) {
  if (!rowRef) return;

  const startY = event.pageY;
  const currentHeight = rowRef.clientHeight;

  function onMouseMove(mouseEvent: MouseEvent) {
    if (!rowRef) return;

    const newRowHeight = currentHeight + (mouseEvent.pageY - startY);
    rowRef.style.height = `${newRowHeight}px`;
    rowRef.style.maxHeight = `${newRowHeight}px`;
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}
