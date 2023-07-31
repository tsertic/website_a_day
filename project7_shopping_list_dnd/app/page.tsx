"use client";
import { useState } from "react";
import DATA from "./../data/shoppingCart.json";
import {
  Draggable,
  Droppable,
  DragDropContext,
  DropResult,
} from "react-beautiful-dnd";
export default function Home() {
  const [stores, setStores] = useState(DATA);
  const handleOnDragEnd = (results: DropResult) => {
    console.log(results);

    const { source, type, destination } = results;

    if (!destination) return;

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (sourceId === destinationId && sourceIndex === destinationIndex) return;

    if (type === "stores") {
      const reorderedStores = [...stores];
      const [removedStore] = reorderedStores.splice(sourceIndex, 1);
      reorderedStores.splice(destinationIndex, 0, removedStore);
      return setStores(reorderedStores);
    }
  };
  return (
    <main className="bg-white text-gray-800 rounded-xl w-[500px] p-3 mt-10">
      <h1 className="text-2xl text-center mb-5">Shopping List</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="ROOT" type="stores">
          {(providerDrop) => {
            return (
              <div {...providerDrop.droppableProps} ref={providerDrop.innerRef}>
                {stores.map((store, i) => {
                  return (
                    <Draggable draggableId={store.id} index={i} key={store.id}>
                      {(providerDrag) => {
                        return (
                          <div
                            className=" "
                            {...providerDrag.dragHandleProps}
                            {...providerDrag.draggableProps}
                            ref={providerDrag.innerRef}
                          >
                            <h3 className=" rounded-xl text-center bg-gray-300 mb-2">
                              {store.name}
                            </h3>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {providerDrop.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </main>
  );
}
