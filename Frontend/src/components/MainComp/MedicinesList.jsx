import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useMedicineStore from "../../store/medicineStore.js";
import useOrderStore from "../../store/useOrderStore.js";
import useAuthStore from "../../store/authStore.js";

export default function MedicinesList() {
  const navigate = useNavigate();

  const { medicines, getAllMedicines } = useMedicineStore();
  const { createOrder } = useOrderStore();
  const { user, loading: authLoading } = useAuthStore();

  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);
  const [cart, setCart] = useState([]);

  const isLoggedIn = !!user && !authLoading;

  useEffect(() => {
    getAllMedicines();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (medicines && medicines.length) {
      let maxPrice = Math.max(...medicines.map((m) => m.mrp));
      if (priceFilter === 0) setPriceFilter(maxPrice);
      filterMedicines({ brandFilter, companyFilter, priceFilter: maxPrice });
    }
    // eslint-disable-next-line
  }, [medicines]);

  const filterMedicines = ({ brandFilter, companyFilter, priceFilter }) => {
    let filtered = medicines;
    if (brandFilter) filtered = filtered.filter((m) => m.brand === brandFilter);
    if (companyFilter) filtered = filtered.filter((m) => m.companyName === companyFilter);
    if (priceFilter) filtered = filtered.filter((m) => Number(m.mrp) <= Number(priceFilter));
    setFilteredMedicines(filtered);
  };

  const handleBrandChange = (e) => {
    const val = e.target.value;
    setBrandFilter(val);
    filterMedicines({ brandFilter: val, companyFilter, priceFilter });
  };

  const handleCompanyChange = (e) => {
    const val = e.target.value;
    setCompanyFilter(val);
    filterMedicines({ brandFilter, companyFilter: val, priceFilter });
  };

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPriceFilter(val);
    filterMedicines({ brandFilter, companyFilter, priceFilter: val });
  };

  const addToCart = (medicineId) => {
    if (!cart.includes(medicineId)) {
      setCart((prev) => [...prev, medicineId]);
      toast.success("Medicine added to cart");
    } else {
      toast("Medicine already in cart");
    }
  };

  const placeOrder = async () => {
    if (!user) {
      toast.error("Please login to place an order");
      return;
    }

    const orderData = {
      user: user._id,
      medicines: cart,
      total: cart.reduce((acc, medId) => {
        const med = medicines.find((m) => m._id === medId);
        return med ? acc + med.mrp : acc;
      }, 0),
    };

    try {
      await createOrder(orderData);
      toast.success("Order placed successfully!");
      setCart([]);
    } catch (err) {
      toast.error("Failed to place order: " + err.message);
    }
  };

  const brands = [...new Set(medicines.map((m) => m.brand))];
  const companies = [...new Set(medicines.map((m) => m.companyName))];
  const maxMrp = medicines.length ? Math.max(...medicines.map((m) => m.mrp)) : 1000;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Medicines Catalog</h1>
        {isLoggedIn && (
          <button
            onClick={() => navigate("/order")}
            className="btn btn-primary"
          >
            Orders
          </button>
        )}
      </div>
      {isLoggedIn && (
        <div className="mb-4 flex justify-between items-center border rounded p-4 bg-base-200">
          <div>
            <b>Cart:</b> {cart.length} medicine{cart.length !== 1 ? "s" : ""} selected
          </div>
          <button
            className="btn btn-primary"
            onClick={placeOrder}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start">
        <select className="select select-bordered max-w-xs" value={brandFilter} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select className="select select-bordered max-w-xs" value={companyFilter} onChange={handleCompanyChange}>
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <label htmlFor="priceRange" className="whitespace-nowrap">Max Price</label>
          <input
            id="priceRange"
            type="range"
            min="0"
            max={maxMrp}
            className="range range-xs"
            value={priceFilter}
            onChange={handlePriceChange}
          />
          <span>&#8377;{priceFilter}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMedicines.length ? (
          filteredMedicines.map((medicine) => (
            <div
              key={medicine._id}
              className="card card-compact shadow rounded-xl border border-base-200 bg-base-100 relative"
            >
              <figure>
                <img
                  src={medicine.image?.url || "https://via.placeholder.com/150"}
                  alt={medicine.title}
                  className="h-40 w-full object-contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title truncate">{medicine.title}</h2>
                <p className="text-sm truncate" title={medicine.description}>
                  {medicine.description}
                </p>
                <p>
                  <b>Brand:</b> {medicine.brand} <b>Company:</b> {medicine.companyName}
                </p>
                <p>
                  &#8377; {medicine.mrp}
                </p>
                <div>
                  {medicine.isAvailable ? (
                    <span className="badge badge-success">In Stock</span>
                  ) : (
                    <span className="badge badge-error">Out of Stock</span>
                  )}
                </div>
              </div>
              {isLoggedIn && (
                <button
                  onClick={() => addToCart(medicine._id)}
                  className="btn btn-primary btn-sm absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center"
                  title="Add to cart"
                  disabled={cart.includes(medicine._id)}
                >
                  +
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No Medicines found matching criteria.</p>
        )}
      </div>
    </div>
  );
}
