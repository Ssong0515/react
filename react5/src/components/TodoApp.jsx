import {useEffect, useState} from "react";

function TodoApp(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 비동기적으로 로컬 스토리지에서 데이터를 불러오는 함수
        const loadTodos = async () => {
            setLoading(true);
            try {
                const storedTodos = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(localStorage.getItem('todos'));
                    }, 0); // 비동기 처리의 예
                });
                setTodos(storedTodos ? JSON.parse(storedTodos) : []);
            } catch (error) {
                console.error('Failed to load todos', error);
            }
            setLoading(false);
        };

        loadTodos();
    }, []);

    useEffect(() => {
        // 상태가 변경될 때 로컬 스토리지에 저장
        if (!loading) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, loading]);

    const handleAddTodo = e => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            if (editingTodo) {
                setTodos(
                    todos.map(todo =>
                        todo.id === editingTodo.id ? {...todo, text: newTodo } : todo
                    )
                );
                setEditingTodo(null);
            } else {
                const newTodoItem = {
                    id: Date.now(),
                    text: newTodo,
                    completed: false,
                };
                setTodos([...todos, newTodoItem]);
            }
            setNewTodo('');
            setIsModalOpen(false);
        }
    };

    const handleEditTodo = (todo) => {
        setEditingTodo(todo);
        setNewTodo(todo.text);
        setIsModalOpen(true);
    };

    const handleToggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed}: todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.completed;
        } else if (filter === 'completed') {
            return todo.completed;
        }
        return true;
    });

    return(
        <div className={'todo-app'}>
            <h1>Todo List</h1>

            <div className={'filters'}>
                <button className={filter ==='all' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter('all')}>
                    모두보기
                </button>
                <button className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter('completed')}>
                    완료됨
                </button>
            </div>

            <ul className={'todo-list'}>
                {filteredTodos.length === 0 && (
                    <li className={'no-todos'}>할 일이 없습니다.</li>
                )}
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className={"todo-item"}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span className={todo.completed ? 'completed' : ''}>
                            {todo.text}
                        </span>
                        <button className={'edit-btn'} onClick={() => handleEditTodo(todo)}>
                            편집
                        </button>
                        <button className={'delete-btn'} onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>

            <button className={'add-btn'} onClick={() => setIsModalOpen(true)}>새 할 일 추가</button>

            {isModalOpen && (
                <div className={'modal'}>
                    <div className={'modal-content'}>
                        <h2>{editingTodo ? '할 일 수정' : '새 할 일 추가'}</h2>
                        <form onSubmit={handleAddTodo}>
                            <input
                                type="text"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder={'할 일을 입력하세요'}
                                className={'todo-input'}
                            />
                            <button type={'submit'} className={'modal-add-btn'}>{editingTodo ? '수정' : '추가'}</button>
                            <button type={'reset'} className={'modal-cancel-btn'} onClick={() => setIsModalOpen(false)}>취소</button>
                        </form>

                    </div>

                </div>
            )}

        </div>
    )

}

export default TodoApp;