import { Typography, styled } from "@mui/material";

export const DashboardContainer = styled("div")(() => ({
    display: "grid",
    gridGap: "1rem",
    justifyItems: "center",
    gridTemplateRows: "min-content 20% auto",
    padding: "1rem 0",
    width: "100%",
    height: "100%",
}));

export const Header = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "10% auto",
    width: "90%",
    maxHeight: "200px"
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
    width: "100px",
    maxHeight: "200px",
    gridRow: "1",
    gridColumn: "1",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

export const Logo = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    maxHeight: "100%"

}));

export const Greeting = styled(Typography)(({ theme }) => ({
    gridColumn: "1/3",
    gridRow: "1",
    placeSelf: "center"
}));

export const CalendarDiv = styled("div")(({ theme }) => ({
    justifyItems: "center",
    textAlign: "center"
}));

export const BoxesDiv = styled("div")(({ theme }) => ({
    width: "95%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "1rem",
    paddingBottom: "2rem",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr"
    }
}));

export const DateInput = styled("input")(({ theme }) => ({
    textAlign: 'center',
    padding: ".75rem",
    border: '1px solid #C42A2A',
    color: 'black',
    outline: 'none',
    cursor: "pointer"
}));