import { Table, Input } from 'antd';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // mais um exemplo de hook e useCallback

  // faz o request das tasks assíncrono, setando a lista para o response
  // o useCallback é utilizado para que o HOOK não entre em loop, sendo chamado somente quando o valor (searchValue) for atualizado
  const requestTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            title: searchValue || undefined,
          },
        }
      );
      setTasks(response.data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, [searchValue]);

  useEffect(() => {
    requestTasks();
  }, [requestTasks]);

  // pega o evento do browser - no return será chamado no elemento input no onChange
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const renderContent = () => {
    return (
      <>
        <Input
          placeholder="Buscar tarefa por título"
          onChange={handleChange}
          value={searchValue}
        />
        <Table
          dataSource={tasks}
          columns={columns}
          size="small"
          loading={loading}
          rowKey="id"
          // rowKey={task => task.id}
        />
      </>
    );
  };

  return <div>{renderContent()}</div>;
};

export default Tasks;
