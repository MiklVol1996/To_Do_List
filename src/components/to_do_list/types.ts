export type Props = {
    listID: string,
    title: string,
    filter: string,
    backgroundColor: string,
    statuses: {
        all: number,
        active: number,
        done: number,
    },
}