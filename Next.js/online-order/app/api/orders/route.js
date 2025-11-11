let orders = []; 


export async function GET() {
  return Response.json(orders);
}


export async function POST(request) {
  const newOrder = await request.json();  
  newOrder.id = orders.length + 1;        
  orders.push(newOrder);                  
  return Response.json(newOrder, { status: 201 });  
}
