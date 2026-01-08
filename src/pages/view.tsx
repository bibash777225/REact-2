import type ApiData from "@/types/todo";
import { useLoaderData } from "react-router-dom";

function vieww() {
  const data = useLoaderData() as ApiData[];

  // Handle loading or empty state
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>View Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
       
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr key={items.id}>
              <td>{items.id}</td>
         
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default vieww;
