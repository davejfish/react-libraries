import { useContext } from 'react';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import './Table.css';
import { UserContext } from '../../Context/userContext';

export default function Table() {
  const { users } = useContext(UserContext);

  return (
    <BaseTable data={users} width={500} height={500}>
      <Column title='first name' key='first' dataKey='first_name' width={100} />
      <Column title='last name' key='last' dataKey='last_name' width={100} />
      <Column title='fav color' key='color' dataKey='favorite_color' width={100} />
      <Column title='avatar' key='image' dataKey='image' width={100} cellRenderer={({ rowData }) => {
        return <img src={rowData.image} />;
      }} />
    </BaseTable>
  );
}
