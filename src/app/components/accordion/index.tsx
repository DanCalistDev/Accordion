"use client";

import data from "./data";
import { IconCollapse, IconExpand } from "./icons";
import "./style.css";
import { useAccordion } from "./useAccordion";

export const Accordion = () => {
  const {
    enableMultiSelection,
    setEnableMultiSelection,
    handleSingleSelection,
    handleMultiSelection,
    multiple,
    selected,
  } = useAccordion();

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={enableMultiSelection ? "buttonActive" : ""}
      >
        Ativar Seleção Múltipla
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div className="item">
                <h3
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  {dataItem.question}
                {(enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1
                  : selected === dataItem.id) ? (
                  <span><IconCollapse /></span>
                ) : (
                  <span><IconExpand /></span>
                )}
                </h3>


              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};
