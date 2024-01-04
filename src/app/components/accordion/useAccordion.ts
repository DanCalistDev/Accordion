import { useState } from "react";

export const useAccordion = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId: string) {
    let newMultiple = [...multiple];
    const findIndexOfCurrentId = newMultiple.indexOf(getCurrentId);

    findIndexOfCurrentId === -1
      ? newMultiple.push(getCurrentId)
      : newMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(newMultiple);
  }
  return {
    enableMultiSelection,
    setEnableMultiSelection,
    handleSingleSelection,
    handleMultiSelection,
    multiple,
    selected,
  };
};
