export type KindeUser = {
  given_name: string | null;
  id: string | null;
  family_name: string | null;
  email: string | null;
};

export type KindeClientOptions = {
  audience?: string;
  client_id?: string;
  redirect_uri: string;
  domain: string;
  is_dangerously_use_local_storage?: boolean;
  is_live?: boolean;
  logout_uri?: string;
};

export type KindeState = {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
};

export type KindeClient = {
  getToken: () => Promise<string | undefined>;
  getUser: () => Promise<KindeUser | undefined>;
  handleRedirectCallback: () => Promise<{kindeState: KindeState} | undefined>;
  login: (options: any) => Promise<void>;
  logout: () => Promise<void>;
  register: (options: any) => Promise<void>;
  createOrg: (options: any) => Promise<void>;
};
export function createKindeClient(
  options: KindeClientOptions
): Promise<KindeClient>;