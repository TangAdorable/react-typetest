import React, { useState, useEffect } from "react";
import { useMyContext } from "../context/pmesiiContext";
import GridUpdateRelation from "./GridUpdateRelation";
import GridUpdateNode from "./GridUpdateNode";

interface AlertDialogProps {
    open: boolean;
    onClose: (isUpdateRelation: boolean) => void;
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
                <GridUpdateRelation open={open} onClose={onClose} /> :
                <GridUpdateNode open={open} onClose={onClose}/>}
        </>
    );
}
