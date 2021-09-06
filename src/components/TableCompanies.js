import { DatePicker, Table, Tag, Space  } from 'antd';

const TableCompanies = ({companies}) => {
     
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'address',
      },
      {
        title: 'Created',
        key: 'created',
        dataIndex: 'created',
        key: 'created',
      }
    ]; 
      
    return (
      <div> <br/>
       <Table columns={columns} dataSource={companies} /> 
      </div>
    );
}
 
export default TableCompanies;