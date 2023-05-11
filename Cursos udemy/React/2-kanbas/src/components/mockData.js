import{ v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: '📕 Por hacer',
        tasks: [
            { 
                id: uuidv4(),
                title: '📝 Tarea 1',
            },
            {
                id: uuidv4(),
                title: '📝 Tarea 2',
            },
            {
                id: uuidv4(),
                title: '📝 Tarea 3',
            }
        ]
    },
    {
        id: uuidv4(),
        title: '📗 Terminadas',
        tasks: [
            {
                id: uuidv4(),
                title: '📝 Tarea 4',
            },
            {
                id: uuidv4(),
                title: '📝 Tarea 5',
            },
            {
                id: uuidv4(),
                title: '📝 Tarea 6',
            }
        ]
    }
]
