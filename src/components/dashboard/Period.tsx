import React from "react";
import { Card, styled, Typography } from "@mui/material";
import { PeriodProps } from "./Dashboard.types";

const Period: React.FC<PeriodProps> = ({ index, selectedIndex, onClickAction }) => {
    const CardElement = styled(Card)(({ theme }) => ({
        height: "100px",
        display: "grid",
        gridTemplateRows: "min-content auto",
        placeItems: "center",
        cursor: "pointer",
        boxShadow: index === selectedIndex ? "0px 2px 1px -1px #C42A2A, 0px 1px 1px 0px #C42A2A, 0px 1px 3px 0px #C42A2A" : ""
    }));

    const DateInCard = styled(Typography)(({ theme }) => ({
        placeSelf: "start",
        margin: ".75rem",
    }));

    const displayHours = (): string => `${7 + index < 10 ? "0" + (index + 7).toString() : index + 7}:00h - ${8 + index < 10 ? "0" + (index + 8).toString() : index + 8}:00h`

    return (
        <CardElement onClick={onClickAction}>
            <DateInCard variant="h6">
                {displayHours()}
            </DateInCard>
            <Typography variant="h4">
                Lotação Total: 0 / 6
            </Typography>
        </CardElement>
    );
};

export default Period;
