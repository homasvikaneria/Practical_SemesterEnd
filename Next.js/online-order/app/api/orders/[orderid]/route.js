let orders = [];

export async function GET(_, { params }) {
  const order = orders.find((o) => o.id == params.orderid);
  return Response.json(order || { message: "Order not found" });
}

export async function PATCH(request, { params }) {
  const update = await request.json();
  const index = orders.findIndex((o) => o.id == params.orderid);
  if (index >= 0) {
    orders[index] = { ...orders[index], ...update };
    return Response.json(orders[index]);
  }
  return Response.json({ message: "Order not found" }, { status: 404 });
}
