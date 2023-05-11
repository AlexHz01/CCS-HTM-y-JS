import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import mockData from '../mockData';
import { Card } from '../card/Card';
import { useState } from 'react';

export function Kanban() {
    const [data, setData] = useState(mockData);
    const onDragEnd = (result) => {
        if (!result.destination) return;
        const {source, destination} = result;
        if (source.DroppableId !== destination.DroppableId)
        {
            const sourceColIndex = data.findIndex(e => e.id === source.DroppableId);
            const destinationColIndex = data.findIndex(e => e.id === destination.DroppableId);
            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];
        }
    }

    return(
        <div className="kanban">
            Kanban
        </div>
    )
}