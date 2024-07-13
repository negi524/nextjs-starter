import TodoService from "@/service/todo.service";

const todoService = new TodoService();

export default async function SamplePage() {
  const requestId = 1;
  const title: string = await todoService.getTodoTitle(requestId);
  return (
    <>
      <h1>Sample Page</h1>
      <p>requestId: {requestId}</p>
      <p>title: {title}</p>
    </>
  );
}
