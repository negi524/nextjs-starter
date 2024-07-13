import JsonPlaceHolder from "@/repository/jsonplaceholder.repository";

const jsonPlaceHolder = new JsonPlaceHolder();

export default class TodoService {
  async getTodoTitle(id: number): Promise<string> {
    const response = await jsonPlaceHolder.getTodo(id);

    return response.title;
  }
}
