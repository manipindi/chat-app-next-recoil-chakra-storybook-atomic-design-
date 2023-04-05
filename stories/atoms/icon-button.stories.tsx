import { SunIcon } from "@chakra-ui/icons";
import { ButtonWithIcon } from "../../components/atoms/icon-button";

export default {
    component : ButtonWithIcon,
    args : {
        bg: "button-bg",
        _hover : {bg: "#484c6a"},
        _active : {bg: "button-bg"}
    }
}

export const Default = {
    args : {
        children : "Click Me",
    }
}

export const WithNode = {
    args : {
        children : <h3>With Node</h3>
    }
}

export const WithIcon = {
    args : {
        children : <SunIcon/>
    }
}