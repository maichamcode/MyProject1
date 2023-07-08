import { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom"
import AdminLayout from './page/layout/AdminLayout';
import Dashboard from './page/admin/Dashboard';
import ProductList from './page/admin/ProductList';
import AddProduct from './page/admin/AddProduct';
import UpdateProduct from './page/admin/UpdateProduct';
import { addProduct, deleteProduct, getAll, updateProduct } from './api/product';
import { IProduct } from './interface/product';
import HomePage from './page/HomePage';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import { signup } from './api/user';

function App() {
  const [products,setProducts] = useState<IProduct[]>([]);
  const [signupData, setSignupData] = useState({
    email: '',
    pass: '',
  });
  useEffect(()=>{
    (async ()=>{
      const {data:{data}} = await getAll()     
      setProducts(data);      
  })();
  },[])
  //xoa
  const onHandleRemove =async (id:number|string)=>{
    try {
      await deleteProduct(id);
      const data = products.filter((item)=>item._id!==id)
      setProducts(data)
    } catch (error) {
      console.log(error);  
    }
    
  }
  //them
  const onHandleAdd = async(body:IProduct)=>{
    try {
      await addProduct(body);
      setProducts([...products,body])
    } catch (error) {
      console.log(error);
      
    }
  }
  //sua
  const onHandleUpdate = async(body:IProduct)=>{
    
      console.log(body.id);
      await updateProduct(body)
      setProducts(products.map((item) => item._id === body.id ? body : item))
  }
  const handleSignin = () =>{

  }

  return (
    <div className="App">


        <Routes>
          {/* Home */}
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn   />} />

          {/* admin */}
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='product' >
              <Route index element={<ProductList products={products} onRemove={onHandleRemove} />} />
              <Route path='add' element={<AddProduct onAdd={onHandleAdd}/>}/>
              <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />}/>
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
