import { UserState } from './redux/user'

export interface AppState {
  users: UserState;
  threads: ThreadState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer,
});

export default rootReducer;
