
export interface saveAdminResponse<T> {
  status: string;
  message?: string;
  data: T;
}