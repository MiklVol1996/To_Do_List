export type Props = {
    filter: string,
    listID: string,
    backgroundColor: string,
    statuses: {
      all: number,
      active: number,
      done: number,
    }
  }