export default class JsonPlaceHolder {
  async getTodo(id: number): Promise<TodoResponse> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    ).then((res) => res.json());

    return response as TodoResponse;
  }
}
