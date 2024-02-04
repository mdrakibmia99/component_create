import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DraggableTable = ({ initialTitles, onTitleChange }) => {
    // console.log(initialTitles,"after drag")
    const [titles, setTitles] = useState(initialTitles);
   useEffect(() => {
    if (titles.length !== initialTitles.length) {
      setTitles(initialTitles);
    }
  }, [titles, initialTitles]);
  const handleDrop = (dragIndex, hoverIndex) => {
    const newTitles = [...titles];
    const [draggedTitle] = newTitles.splice(dragIndex, 1);
    newTitles.splice(hoverIndex, 0, draggedTitle);
    setTitles(newTitles);
    onTitleChange(newTitles);
  };

  return (
    <>

          <tr className="grid grid-flow-col bg-slate-400">
            {titles.map((title, index) => {
              const [{ isDragging }, drag] = useDrag({
                type: 'TABLE_TITLE',
                item: { index },
                collect: (monitor) => ({
                  isDragging: monitor.isDragging(),
                }),
              });

              const [, drop] = useDrop({
                accept: 'TABLE_TITLE',
                hover: (item) => {
                  if (item.index !== index) {
                    handleDrop(item.index, index);
                    item.index = index;
                  }
                },
              });

              return (
                <th
                  key={title}
                  ref={(node) => drag(drop(node))}
                  className={`w-[300px] border-r-2 ${isDragging ? 'opacity-50' : ''}`}
                >
                  {title}
                </th>
              );
            })}
          </tr>
  
        {/* Add your table body here */}
    </>
  );
};

const DragDropTableTitle = ({selectedTitleTable,setSelectedTitleTable}) => {
// console.log(selectedTitleTable,"from drag drop")
  const [selectedTitleTable2, setSelectedTitleTable2] = useState(selectedTitleTable);
  useEffect(() => {
    setSelectedTitleTable2(selectedTitleTable)
         console.log(selectedTitleTable,"from useeff")
  }, [selectedTitleTable]);
  const handleTitleChange = (newTitles) => {
    // console.log(newTitles)
    // setSelectedTitleTable(newTitles);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <DraggableTable initialTitles={selectedTitleTable2} onTitleChange={handleTitleChange} />
        <p>Selected Title Table: {JSON.stringify(selectedTitleTable2)}</p>
        {/* Add the rest of your content here */}
      </div>
    </DndProvider>
  );
};

export default DragDropTableTitle;
