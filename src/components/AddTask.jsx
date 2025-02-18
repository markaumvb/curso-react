import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se estão preenchidas
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título ou descrição");
          }
          onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 py-2 text-white px-4 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
