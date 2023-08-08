import React, { useState, useEffect } from "react";
import { useMyContext } from "../context/pmesiiContext";
import GridDeleteNode from "./GridDeleteNode";
import GridDeleteRelation from "./GridDeleteRelation";

interface AlertDialogProps {
    open: boolean;
    onClose: (isDeleteRelation: boolean) => void;
}

export default function DialogUpdateNodeRelation({ open, onClose }: AlertDialogProps) {
    const [checkTypeClick, setCheckTypeClick] = useState<boolean>(false);
    const { value } = useMyContext();


    useEffect(() => {
        if (value.node_labels === undefined) {
            // relation
            setCheckTypeClick(true)
        } else {
            // node
            setCheckTypeClick(false)
        }
    }, [value]);

    return (
        <>
        {checkTypeClick ?
            <GridDeleteRelation open={open} onClose={onClose} /> :
            <GridDeleteNode open={open} onClose={onClose}/>}
    </>
    );
}
