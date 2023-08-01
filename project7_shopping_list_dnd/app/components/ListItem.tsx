interface IListItem {
  store: IStore;
}
import { IStore } from "./../../types/store";
import { Draggable, Droppable } from "react-beautiful-dnd";
import React from "react";

export const ListItem: React.FC<IListItem> = ({ store }) => {
  const { name, items, id } = store;
  return (
    <div>
      <h3 className=" rounded-xl text-center bg-gray-300 ">{name}</h3>
      <Droppable droppableId={id}>
        {(providerDrop) => {
          return (
            <div {...providerDrop.droppableProps} ref={providerDrop.innerRef}>
              {items.map((item, i) => {
                return (
                  <Draggable draggableId={item.id} index={i} key={item.id}>
                    {(providerDrag) => {
                      return (
                        <div
                          {...providerDrag.dragHandleProps}
                          {...providerDrag.draggableProps}
                          ref={providerDrag.innerRef}
                          className="border-b-2 pb-2"
                        >
                          <p className="text-center ">{item.name}</p>
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
    </div>
  );
};
