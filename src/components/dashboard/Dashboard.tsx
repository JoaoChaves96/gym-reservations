import React, { RefObject } from "react";
import { Typography } from "@mui/material";
import logo from "../../logo.png";
import DatePicker, { DayValue, RenderInputProps } from 'react-modern-calendar-datepicker'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Period from "./Period";
import { DashboardContainer, Header, ImageWrapper, Logo, Greeting, CalendarDiv, BoxesDiv, DateInput } from "./utils/dashboardComponents";

const Dashboard: React.FC = () => {
    const [day, setDay] = React.useState<DayValue>({
        day: new Date(Date.now()).getDate(),
        month: new Date(Date.now()).getMonth() + 1,
        year: new Date(Date.now()).getFullYear(),
    });
    const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);

    const updateDay = (value: DayValue): void => {
        setDay(value);
        console.log(value)
    }

    const displayCards = () => {
        const cards = [];
        for (let i = 0; i < 15; i++) {
            cards.push(<Period index={i} selectedIndex={selectedIndex} onClickAction={() => setSelectedIndex(i)} />);
        }

        return cards;
    }

    const renderCustomInput = ({ ref }: RenderInputProps) => (
        <DateInput
            readOnly
            ref={ref as RefObject<HTMLInputElement>}
            placeholder="dd/mm/aaaa"
            value={`${day?.day}/${day?.month}/${day?.year}`}
        />
    )

    return (
        <DashboardContainer>
            <Header>
                <ImageWrapper>
                    <Logo src={logo} alt="logo" />
                </ImageWrapper>
                <Greeting variant="h2">
                    Bem vindo/a!
                </Greeting>
            </Header>
            <CalendarDiv>
                <Typography>
                    Selecione uma data:
                </Typography>
                <DatePicker renderInput={renderCustomInput} value={day} onChange={updateDay} />
            </CalendarDiv>
            <BoxesDiv>
                {displayCards()}
            </BoxesDiv>
        </DashboardContainer>
    );
};

export default Dashboard;
