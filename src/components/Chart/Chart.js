import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Chart() {
  const { users } = useContext(UserContext);

  // I am not super sure what to display with the user data. 
  // users do not seem to have matching names, fav colors or images
  // so here is a chart that draws a line upwards with both x and y
  // axis being the same, charting the id for each user.
  return (
    <LineChart width={600} height={400} data={users}>
      <Line type="monotone" dataKey="id" stroke="#8884d8" />
      <CartesianGrid stroke='#ccc' />
      <XAxis dataKey='id' />
      <YAxis />
    </LineChart>
  );
}
