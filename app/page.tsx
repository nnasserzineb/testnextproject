"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NewProductOfferingPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productSpecifications, setProductSpecifications] = useState<{
    _id: string; name: string; id: string; version: string; internalVersion: string; internalId: string
}[]>([]);
  const [choosenproductSpecifications, setChoosenProductSpecifications] = useState("");
  const [category, setCategory] = useState<{ id: string; name: string } | null>(null);
  const [channel, setChannel] = useState<{ id: string; name: string }[] | null>(null);  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedProductSpec, setSelectedProductSpec] = useState<{
    id: string;
    name: string;
    productSpecCharacteristic: Array<{
      name: string;
      valueType: string;
      productSpecCharacteristicValue: Array<{ value: string }>;
    }>;
  } | null>(null);
  




  

  useEffect(() => {
    fetchProductSpecifications();
  }, []);

  const fetchProductSpecifications = async () => {
    try {
      const url = "http://localhost:8000/api/productspecifications";
      const response = await axios.get(url);
      const data = response.data;
      setProductSpecifications(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSpecificationDetails = async () => {
    try {
      const specificationUrl = `http://localhost:8000/api/productspecifications/${choosenproductSpecifications}`;
      const specificationResponse = await axios.get(specificationUrl);
      const specificationData = specificationResponse.data;
      setSelectedProductSpec(specificationData);
      setCategory({
        id: specificationData.category.id,
        name: specificationData.category.name,
      });
      setChannel(specificationData.channel);
    } catch (err) {
      console.error(err);
    }
  };

 const createProduct = async (e: any) => {
  e.preventDefault();

  try {
    console.log("productName:", productName);
    console.log("productDescription:", productDescription);
    console.log("productPrice:", productPrice);
    console.log("choosenproductSpecifications:", choosenproductSpecifications);
    console.log("category:", category);
    console.log("channel:", channel);

    const url = "http://localhost:8000/api/products";

    // Fetch the selected product specification details
    const specificationUrl = `http://localhost:8000/api/productspecifications/${choosenproductSpecifications}`;
    const specificationResponse = await axios.get(specificationUrl);
    const specificationData = specificationResponse.data;
// API endpoint URL
   const url1 = 'https://dev116662.service-now.com/api/sn_prd_pm_adv/catalogmanagement/productoffering';

// Authentication credentials
 const username = 'admin';
 const password = 'AKWytS48yl-/';
    const productData = {
      name: productName,
      description: productDescription,
      price: productPrice,
      productspecification: {
        //id: choosenproductSpecifications,
        id: specificationData.id,
        name: specificationData.name,
        version: specificationData.version,
        internalVersion: specificationData.internalVersion,
        internalId: specificationData.internalId,
      },
      category: {
        id: specificationData.category.id,
        name: specificationData.category.name,
      },
      channel: {
        id: specificationData.channel.id,
        name: specificationData.channel.name,
      },
      validFor: {
        startDateTime: startDate,
        endDateTime: endDate,
      },
     
    };

    var a =JSON.stringify(productData)
    
// Make a POST request with authentication
await axios.post(url1, a, {
  auth: {
    username: username,
    password: password
  }
})
  .then(response => {
    // Request successful
    console.log('New product offering created:', response.data);
  })
  .catch(error => {
    // Request failed
    console.log('Error:', error.message);
  });

    await axios.post(url, productData);
    alert("Product created successfully");
    setProductName("");
    setProductDescription("");
    setProductPrice(0);
    setChoosenProductSpecifications("");
    setCategory(null);
    setChannel([]);
  } catch (err) {
    console.error(err);
  }
};

  

  return (
    <div className="new-product-offering">
      <h1>New Product Offering Page</h1>
      <form onSubmit={createProduct}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(parseFloat(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="productSpecification">Product Specification:</label>
          <select
            id="productSpecification"
            value={choosenproductSpecifications}
            onChange={(e) => {
              setChoosenProductSpecifications(e.target.value);
              setCategory(null); // Updated
              setChannel([]); // Updated
              
            }}
            onBlur={fetchSpecificationDetails}
            required
          >
            <option value="">Select a product specification</option>
            {productSpecifications.map((spec) => (
              <option key={spec._id} value={spec._id}>
                {spec.name}
              </option>
            ))}
          </select>
        </div>

        <div>
  <label htmlFor="category">Category:</label>
  <input
    id="category"
    type="text"
    value={category?.name || ""}
    readOnly
  />
</div>
<div>
  <label htmlFor="channel">Channel:</label>
  {channel ? (
    <select
      id="channel"
      value={channel[0]?.name || ""}
      onChange={(e) => {
        const selectedChannel = channel.find((c) => c.name === e.target.value);
        setChannel(selectedChannel ? [selectedChannel] : null);
      }}
      required
    >
      <option value="">Select a channel</option>
      {channel.map((ch) => (
        <option key={ch.id} value={ch.name}>
          {ch.name}
        </option>
      ))}
    </select>
  ) : (
    <span>No channel available</span>
  )}
</div>

<div>
  <label htmlFor="startDate">Start Date:</label>
  <input
    id="startDate"
    type="date"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    required
  />
</div>
<div>
  <label htmlFor="endDate">End Date:</label>
  <input
    id="endDate"
    type="date"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
    required
  />
</div>

<div>
{selectedProductSpec && (
  <div>
    <label htmlFor="productSpecCharacteristic">
      Product Spec Characteristic:
    </label>
    <select id="productSpecCharacteristic" required>
      <option value="">Select a product spec characteristic</option>
      {selectedProductSpec.productSpecCharacteristic.map((characteristic) => (
        <option key={characteristic.name} value={characteristic.name}>
          {characteristic.name}
        </option>
      ))}
    </select>
  </div>
)}

  
</div>



        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
