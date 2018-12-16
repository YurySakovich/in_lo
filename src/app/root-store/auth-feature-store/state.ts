import { User } from '../../models';
import { AuthData } from '@app/auth/login/login.component';

export interface State {
  user: User | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  user: null,
  isLoading: false,
  error: null,
}