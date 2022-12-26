export type Data = {
  data:
    | (() => Promise<void>)
    | { data: undefined; isLoading: boolean; error: undefined };
};

interface Template {
  button_title: string;
  link: Link;
  object_type: string;
  text: string;
}
export interface SendMessage {
  token: string | null | undefined;
  receiver_uuids: string[] | undefined;
  template_object: Template[];
}

export interface Link {
  web_url: string;
}
