import {Checkbox} from "@mui/material";

export const ProjectsPage = () => (
    <div style={{
        display: "flex", flexDirection: "column", width: "100%", alignItems: "center", height: "100%", padding: "15px",
    }}
    >
        <div style={{width: "750px", marginTop: "50px"}}>
            <div style={{
                marginLeft: "11px", marginBottom: "45px", textTransform: "uppercase", fontWeight: "bold",
            }}
            >
                Иванов Иван Иванович
            </div>
            <div style={{marginBottom: "25px"}}>
                <div style={{
                    display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px", marginLeft: "11px", marginBottom: "15px",
                }}
                >
                    Армия 2024
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 1
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 2
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 3
                    </div>
                    {/* <Checkbox/> Форма: Организации */}
                </div>
            </div>
            <div style={{marginBottom: "25px"}}>
                <div style={{
                    display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px", marginLeft: "11px", marginBottom: "15px",
                }}
                >
                    Олимпиада
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 1
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 2
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 3
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 4
                    </div>
                    {/* <Checkbox/> Форма: Организации */}
                </div>
            </div>
            <div style={{marginBottom: "25px"}}>
                <div style={{
                    display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px", marginLeft: "11px", marginBottom: "15px",
                }}
                >
                    Чемпионат России по кёрлингу
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 1
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 2
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 3
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 4
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 5
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 6
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 7
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 8
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Checkbox/>
                        {" "}
                        Форма 9
                    </div>
                    {/* <Checkbox/> Форма: Организации */}
                </div>
            </div>
        </div>
    </div>
);
