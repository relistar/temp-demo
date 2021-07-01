import {Button, InputNumber} from "antd";
import {DeleteOutlined, SaveOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import TextArea from "antd/lib/input/TextArea";

export function SpecDetailsLine({line, number, onQuantityChange, onRemove, onCommentSave}) {
    const [comment, setComment] = useState(line.comment)

    function onCommentChange(e) {
        const value = e.target.value;
        setComment(value)
    }

    return (
        <>
            <div className="card-info-details-line">
                <span className="card-info-details-line__name">{number + 1}. {line.name}</span>
                <div className="card-info-details-line__controls">
                    <div className="input-num">
                    <span className="input-num-btn"
                          onClick={() => onQuantityChange(line.specLineId, line.quantity - 1)}>-</span>
                        <InputNumber min={0}
                                     value={line.quantity}
                                     onChange={(val) => onQuantityChange(line.specLineId, val)}
                        />
                        <span className="input-num-btn"
                              onClick={() => onQuantityChange(line.specLineId, line.quantity + 1)}>+</span>
                    </div>
                    <div className="remove-button">
                        <Button onClick={onRemove} icon={<DeleteOutlined/>}/>
                    </div>
                </div>
            </div>
            <div className="card-info-details-line-comment">
                <div className="line-comment">
                    <div className="line-comment__text">
                        <TextArea showCount
                                  onChange={onCommentChange}
                                  maxLength={50}
                                  value={comment}
                                  autoSize={{ minRows: 2, maxRows: 2 }}/>
                    </div>
                    <div className="line-comment__edit-btn btn-wrap">
                        <Button type="primary" icon={<SaveOutlined />} onClick={() => onCommentSave(line.specLineId, comment)}/>
                    </div>
                </div>
            </div>
        </>
    )
}