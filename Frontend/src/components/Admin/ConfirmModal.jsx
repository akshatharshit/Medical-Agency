import React from "react";

export default function ConfirmModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-base-100 p-6 rounded-lg max-w-sm w-full shadow-lg">
        <p className="mb-6 text-lg font-medium">{message}</p>
        <div className="flex   justify-end gap-4">
          <button onClick={onCancel} className="btn btn-outline btn-primary">Cancel</button>
          <button onClick={onConfirm} className="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  );
}
