import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableCompanies from './components/TableCompanies';
import ModalForm from './components/ModalForm';
import { DatePicker, Table, Tag, Space, Button,TextArea  } from 'antd';
import 'antd/dist/antd.css';
import { BarChartOutlined, GithubOutlined, StarTwoTone } from '@ant-design/icons';
import ReactDOM from "react-dom";
import React, {useState, useEffect} from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>

const initialCompanies = [
    {
      created: "",
      description: "",
      email: "",
      id: 1,
      name: "",
      published_at: "",
      updated_at: "",
    }
]

function App() {

  const [companies, setCompanies] = useState(initialCompanies);

  const getCompanies = () => {
    axios.get(`http://localhost:1337/companies`)
      .then(res => {
        const companies = res.data;
        setCompanies(companies);
      })
  } 

    useEffect(() => {
      getCompanies()
    }, [companies])

   return (
    <div> <br/>
     <ModalForm />
     <TableCompanies companies={companies}/> 
    </div>
  );
}

export default App;
