import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			const mockOrders = [
				{
					_id: "12345",
					createdAt: new Date(),
					shippingAddress: { city: "New York", country: "USA" },
					orderItems: [
						{
							name: "Product 1",
							image: "https://picsum.photos/500/500?random=1",
						},
					],
					totalPrice: 100,
					isPaid: true,
				},
				{
					_id: "67890",
					createdAt: new Date(),
					shippingAddress: { city: "Los Angeles", country: "USA" },
					orderItems: [
						{
							name: "Product 2",
							image: "https://picsum.photos/500/500?random=2",
						},
					],
					totalPrice: 200,
					isPaid: false,
				},
				{
					_id: "34567",
					createdAt: new Date(),
					shippingAddress: { city: "Miami", country: "USA" },
					orderItems: [
						{
							name: "Product 3",
							image: "https://picsum.photos/500/500?random=3",
						},
					],
					totalPrice: 150,
					isPaid: false,
				},
			];
			setOrders(mockOrders);
		}, 1000);
	}, []);

	return <div>MyOrdersPage</div>;
};

export default MyOrdersPage;
