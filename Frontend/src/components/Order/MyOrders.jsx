import React, { useEffect } from "react";
import useOrderStore from "../../store/useOrderStore.js";
import useAuthStore from "../../store/authStore.js";
import { toast } from "react-hot-toast";

export default function MyOrders() {
  const { orders, fetchOrders, deleteOrder, loading, error } = useOrderStore();
  const { user, loading: authLoading } = useAuthStore();

  useEffect(() => {
    if (user && !authLoading) {
      fetchOrders();
    }
    // eslint-disable-next-line
  }, [user, authLoading]);

  if (authLoading) return <p>Loading user info...</p>;
  if (!user) return <p>Please log in to see your orders.</p>;

  // fix: always use array for filtering
  const ordersSafe = Array.isArray(orders) ? orders : [];
  const userOrders = ordersSafe.filter(
    (o) => o.user && (o.user._id === user._id || o.user === user._id)
  );

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      toast.success("Order deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete order: " + err.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-error">Error: {error}</p>}
      {!loading && userOrders.length === 0 && <p>You have no orders.</p>}
      <div className="space-y-6">
        {userOrders.map((order) => (
          <div
            key={order._id}
            className="border rounded-xl p-4 shadow-md bg-base-100"
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <strong>Order ID:</strong> {order._id}
              </div>
              <button
                onClick={() => handleDelete(order._id)}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
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
