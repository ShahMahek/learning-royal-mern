import logo from './logo.svg';
import './App.css';

import { Home } from "./components/Home";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Users } from "./components/Users/Users"
import { AddEmployee } from './components/Employee/AddEmployee';
import { ValidationEmployee } from './components/Employee/ValidationEmployee';
import { Register } from './components/Employee/Register';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { NetflixHome } from './components/Netflix/NetflixHome';
import { NetflixMovies } from './components/Netflix/NetflixMovies';
import { ThrillerMovies } from './components/Netflix/ThrillerMovies';
import { ComedyMovies } from './components/Netflix/ComedyMovies';
import { Series } from "./components/Netflix/Series";
import { SeriesDetail } from "./components/Netflix/SeriesDetail";
import { ErrorPage } from "./components/Netflix/ErrorPage";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
import { ApiDemo2 } from "./components/apis/ApiDemo2";
import { ApiDemo3 } from './components/apis/ApiDemo3';
import { ApiDemo4 } from './components/apis/ApiDemo4';
import { ApiDemo5 } from './components/apis/ApiDemo5';
import { HookDemo } from './components/HookDemo';
import { UserDetail } from "./components/apis/UserDetail";
import { UpdateUser } from "./components/apis/UpdateUser";
import { Students } from "./components/students/Students";
import { AppContext } from "./context";
import { Login } from './components/Login';
import ProtectedRoute from './components/hooks/ProtectedRoute';
import { ProductComponent } from "./components/ProductComponent";
import { CartComponent } from './components/CartComponent';
import { WithdrawComponent } from './components/WithdrawComponent';
import { ContentComponent } from "./components/ContentComponent";
import { UserQuery } from "./components/query/UserQuery";
import axios from "axios";
import { AddUserQuery } from './components/query/AddUserQuery';
import { ButtonDemo1 } from './components/mui/ButtonDemo1';
;



function App() {

  /*var name="Mahek"
  var isMarried= true
  var age = 34
  var score={
    test:21,
  odi:31*/

  axios.defaults.baseURL = "https://node5.onrender.com";
  var company = "RRR";

  var title="India";
  var indepndence="15th aug ";
  var freedomFighters ={
    "Mg": "Father of the Nation",
    "Bs": "Shaheed",
  }

  const users =[
    {
      id:1,
      name:"Raj",
    },
    {
      id:2,
      name:"Ravi",
    }
  ]

  
  // java script expression
  
  return (
    //compulsary one tag in which we can writ sub tag | tag should be closed complusary

  

  <div className="App">

  {/*<Header title={title} ind={indepndence} ff = {freedomFighters}></Header>*/}
  {/*<Home t={title} ind = {indepndence} ff ={freedomFighters} users = {users}></Home>*/}
  {/*<Users title ={title}></Users>*/}
  {/*<Footer />*/}

  {/*<AddEmployee/>
    <ValidationEmployee/>*/}
    {/* <Register/>*/}

   <Navbar/>
<AppContext.Provider value={{company}}>
<Routes>
<Route path ="/" element ={<NetflixHome/>}></Route>
  <Route path="/netflixhome" element={<NetflixHome/>}></Route>
  <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
  <Route path="/thrillermovies" element ={<ThrillerMovies/>}></Route>
  <Route path ="/netflixmovies/comedy" element ={<ComedyMovies/>}></Route>
  <Route path ="/series" element = {<Series/>}></Route>
         <Route path= "/series/detail/:id" element ={<SeriesDetail/>}></Route> 
      {/*}  <Route path = "/series/detail/:id/:name" element ={<SeriesDetail/>}></Route>*/}
        {/* <Route path = "*" element = {<h1>404</h1>}></Route> */}
        <Route path = "*" element = {<ErrorPage/>}></Route>
        <Route element={<ProtectedRoute/>}>
          <Route path ="/apidemo1" element={<ApiDemo1/>}></Route>
          <Route path ="/apidemo2" element={<ApiDemo2/>}></Route>
          <Route path ="/apidemo3" element={<ApiDemo3/>}></Route>
        </Route>
        <Route path ="/apidemo4" element={<ApiDemo4/>}></Route>
        <Route path ="/apidemo5" element={<ApiDemo5/>}></Route>
        <Route path='/hookdemo' element={<HookDemo/>}></Route>
        <Route path='/userdetail/:id' element={<UserDetail/>}></Route>
        <Route path='/updateuser/:id' element={<UpdateUser/>}></Route>
        <Route path="/students" element={<Students/>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={<ProductComponent/>}></Route>
        <Route path="/cart" element={<CartComponent/>}></Route>
        <Route path='/withdraw' element={<WithdrawComponent/>}></Route>
        <Route path="/content" element={<ContentComponent/>}></Route>
        <Route path ="/userquery" element= {<UserQuery/>}></Route>
        <Route path='/usemutate' element={<AddUserQuery/>}></Route>
        <Route path='/muiButton' element={<ButtonDemo1/>}></Route>
</Routes>
</AppContext.Provider>
  </div>
 );
}


export default App;
