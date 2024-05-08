import { Checkbox, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

// se o objeto for fixo, fazer ele fora da task instancia apenas uma vez, economiza processamento
// se for dinamico precisa ser inserido no return
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Concluída',
    dataIndex: 'completed',
    key: 'completed',
    render: (value) => {
      // return value ? 'Sim' : 'Não';
      // return <Checkbox checked={value} />;
      return value ? '✅' : '❌';
    },
  },
];

const Tasks = () => {
  // cria uma lista de tarefas
  const [tasks, setTasks] = useState([]);

  // faz o request das tasks assíncrono, setando a lista para o response
  const requestTasks = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTasks(response.data);
    } catch (err) {
      console.warn(err);
    }
  };

  // chama a função do axios (fetch) e usa o effect
  useEffect(() => {
    requestTasks();
  }, []);

  // retorna a tabela
  return <Table dataSource={tasks} columns={columns} />;
};

export default Tasks;
