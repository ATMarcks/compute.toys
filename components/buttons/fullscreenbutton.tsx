import {Button} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {requestFullscreenAtom} from "lib/atoms/atoms";
import {useSetAtom} from "jotai";

export const FullscreenButton = () => {
    const setRequestFullscreen = useSetAtom(requestFullscreenAtom);

    const theme = useTheme();

    return (
        <Button
            onClick={() => {
                setRequestFullscreen(true);
            }}
            sx={{color: theme.palette.dracula.cyan}}
        >
            <FullscreenIcon/>
        </Button>
    );
}

export default FullscreenButton;