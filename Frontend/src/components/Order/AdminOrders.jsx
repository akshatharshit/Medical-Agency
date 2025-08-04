import React, { useEffect } from "react";
import useOrderStore from "../../store/useOrderStore";
import { toast } from "react-hot-toast";

export default function AdminOrders() {
  const { orders, fetchOrders, deleteOrder, loading, error } = useOrderStore();

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      toast.success("Order deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete order: " + err.message);
    }
  };

  const handleDone = async (orderId) => {
    try {
      await deleteOrder(orderId);
      toast.success("Order marked as done and removed.");
    } catch (err) {
      toast.error("Failed to remove order: " + err.message);
    }
  };

  const ordersSafe = Array.isArray(orders) ? orders : [];

  return (
    <div className="p-7">
      <h2 className="text-3xl font-bold mb-7">All Orders (Admin View)</h2>
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-error">Error: {error}</p>}
      <div className="space-y-7">
        {ordersSafe.length === 0 && !loading && (
          <p className="mb-7 font-semibold">No orders found.</p>
        )}
        {ordersSafe.map((order) => (
          <div
            key={order._id}
            className="border rounded-xl p-5 shadow-sm bg-base-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-3 gap-2">
              <div>
                <strong>Order ID:</strong> {order._id} <br />
                <strong>User:</strong>{" "}
                {order.user?.name ||
                  order.user?.email ||
                  order.user?._id ||
                  order.user}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleDone(order._id)}
                  className="btn btn-success btn-sm"
                >
                  Done
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Items:</h4>
              <ul className="list-disc list-inside mb-2">
                {(order.medicines || []).map((med) => (
                  <li key={med._id || med}>
                    {med.title || String(med)} - &#8377;{med.mrp || ""}
                  </li>
                ))}
              </ul>
              <div>
                <strong>Total Price:</strong> &#8377;{order.total}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
