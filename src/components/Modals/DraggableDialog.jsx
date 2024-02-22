import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import Draggable from 'react-draggable';

function DraggableDialog({ title, children, ...props }) {
  return (
    <Draggable handle=".handle">
      <div {...props}>
        <Dialog>
          <DialogHeader className="handle">{title}</DialogHeader>
          <DialogBody>
            {children}
          </DialogBody>
          <DialogFooter>
            {/* Aquí van tus botones de acción */}
          </DialogFooter>
        </Dialog>
      </div>
    </Draggable>
  );
}

export default DraggableDialog;
