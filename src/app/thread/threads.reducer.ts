export interface ThreadsEntities {
  [id: string]: Thread;
}

export interface ThreadsState {
  ids: string[];
  entitties: ThreadsEntities;
  currentThreadId?: string;
}

const initialState: ThreadState = {
  ids: [],
  currentThreadId: null,
  entitties: {},
};
