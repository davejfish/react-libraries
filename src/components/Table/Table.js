import { useContext } from 'react';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import './Table.css';
import { UserContext } from '../../Context/userContext';

export default function Table() {
  const { users } = useContext(UserContext);

  // used for alternate way to make a table
  // const columns = [
  //   {
  //     title: 'first',
  //     key: 'name',
  //     dataKey: 'first_name',
  //     width: 100,
  //   },
  //   {
  //     title: 'last',
  //     key: 'last',
  //     dataKey: 'last_name',
  //     width: 100,
  //   },
  //   {
  //     title: 'fav color',
  //     key: 'color',
  //     dataKey: 'favorite_color',
  //     width: 100,
  //     cellRenderer: ({ cellData }) => {
  //       return <div className='circle' style={{ backgroundColor : cellData.favorite_color }} />;
  //     }
  //   },
  //   {
  //     title: 'avatar',
  //     key: 'image',
  //     dataKey: 'image',
  //     width: 100,
  //     cellRenderer: ({ cellData }) => {
  //       return <img src={cellData.image} />;
  //     }
  //   }
  // ];

  return (
    <BaseTable data={users} width={700} height={500}>
      <Column title='first name' key='first' dataKey='first_name' width={100} />
      <Column title='last name' key='last' dataKey='last_name' width={100} />
      <Column title='fav color' key='color' width={100} align='center' cellRenderer={
        ({ rowData }) => (
          <div className='box' style={{ backgroundColor:rowData.favorite_color }} />
        )} />
      <Column title='avatar' key='image' dataKey='image' width={100} cellRenderer={
        ({ rowData }) => (
          <div className='box'>
            <img className='image is-48x48' src={rowData.image} />
          </div> 
        )} />
      <Column title='email' key='email' width={300} align='center' cellRenderer={
        ({ rowData }) => (
          <span className='box'>{rowData.email}</span>
        )
      } />
    </BaseTable>
    
    // docs says this works but it crashes my webpage
    // <Table data={users}>
    //   {columns.map(column => (
    //     <Column key={column.key} {...column} />
    //   ))}
    // </Table>
  );
}
