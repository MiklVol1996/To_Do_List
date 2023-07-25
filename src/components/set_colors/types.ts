export type Props = {
    colors: Array<string>,
    colorMode: boolean,
    onColorClick: (data: string) => void,
    setColorMode: (data: boolean) => void,
}