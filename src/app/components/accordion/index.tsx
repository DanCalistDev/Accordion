'use client'

import { useState } from "react"
import data from "./data"
import "./style.css";

export const Accordion = () => {
  
  const [selected, setSelected] = useState<string | null>(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState<string[]>([])

  function handleSingleSelection(getCurrentId:string) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId:string) {
    let newMultiple = [...multiple]
    const findIndexOfCurrentId = newMultiple.indexOf(getCurrentId)

    findIndexOfCurrentId === -1 
    ? newMultiple.push(getCurrentId) 
    : newMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(newMultiple)
    
  }

    return (
          <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Ativar Seleção Múltipla</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div>
                         <div className="item">
                            <h3 onClick={
                                enableMultiSelection 
                                ? ()=> handleMultiSelection(dataItem.id)
                                : ()=> handleSingleSelection(dataItem.id)
                               }
                                className="title">{dataItem.question}</h3>
                            <span>+</span>
                         </div>
                         {
                            enableMultiSelection
                            ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="content">{dataItem.answer}</div>
                            )
                            : selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                            )
                         }
                    </div>)
                    : <div>No data found!</div>
                }
            </div>
            
          </div>
    )
}