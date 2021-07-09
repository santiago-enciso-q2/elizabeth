import Layout from "../components/layout/layout";
import React, {useState} from "react";
import {themes} from "../components/styles";
import {H1} from "../components/styles";
import {SignUpModal} from "../components/sections/Modal";
import FadeIn from "../components/animations/FadeIn";
import Search from "../components/forms/Search";

import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "../components/buttons/Buttons";
import {ThemeProvider} from "styled-components";

function IndexPage() {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <ThemeProvider theme={useDarkTheme ? themes.dark : themes.light}>
            <Layout>
                <H1>Search Params</H1>
                <Search id="location" labelText="Location " initialValue="Austin, TX"/>
                <hr/>
                <PrimaryButton onClick={() => setUseDarkTheme(true)}>Dark Theme</PrimaryButton>
                <SecondaryButton onClick={() => setUseDarkTheme(false)}>
                    Default Theme
                </SecondaryButton>
                <div
                    style={{
                        width: "100vw",
                        height: "45vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    {" "}
                    <H1> Default Buttons</H1>
                    <PrimaryButton>One </PrimaryButton>
                    <SecondaryButton>Two</SecondaryButton>
                    <TertiaryButton>Three</TertiaryButton>
                </div>
                <hr/>
                <H1>Button Combinations</H1>
                <p>Primary Buttons</p>
                <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
                    Hello world
                </PrimaryButton>
                <PrimaryButton modifiers={["warning", "primaryButtonWarning"]}>
                    Hello world
                </PrimaryButton>
                <PrimaryButton modifiers={["large", "error", "primaryButtonError"]}>
                    Hello world
                </PrimaryButton>
                <p>Secondary Buttons</p>
                <SecondaryButton
                    modifiers={["small", "success", "secondaryButtonSuccess"]}
                >
                    Goodbye world
                </SecondaryButton>
                <SecondaryButton modifiers={["warning", "secondaryButtonWarning"]}>
                    Goodbye world
                </SecondaryButton>
                <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>
                    Goodbye world
                </SecondaryButton>
                <p>Tertiary Buttons</p>
                <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
                    Hey world
                </TertiaryButton>
                <TertiaryButton modifiers={["warning", "tertiaryButtonWarning"]}>
                    Hey world
                </TertiaryButton>
                <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
                    Hey world
                </TertiaryButton>
                <hr/>
                <H1>Modals</H1>
                 {/*This is Breaking all the other buttons 👇*/}
                {/*<PrimaryButton onClick={() => setShowModal(!showModal)}>*/}
                {/*    Toggle Modal*/}
                {/*</PrimaryButton>*/}
                {/*<SignUpModal showModal={showModal} setShowModal={setShowModal}/>*/}
                <hr/>
                <H1>Animations</H1>
                <FadeIn/>
                <hr/>
            </Layout>
        </ThemeProvider>

    );
}

export default IndexPage;
