import Api from './Api';
import './App.css';


function App() {
  //Props
  // let headerInfo = {
  //   title: "My First React App",
  //   subTitle: "This is my first react app"
  // }
  // return (
  //   <div className="main">
  //   <Header headerInfo= {headerInfo} cname = "XY Retail">
  //     <h1>Example of children props</h1>
  //     <FontAwesomeIcon icon={faWhatsapp}/>
  //     <FontAwesomeIcon icon={faPhone}/>
  //   </Header>

  //   <div className='body'>
  //     <container className='row'>
  //       {blog.map((v,i)=>{
  //         return <Body pItems={v} key={i} />
  //       })}
  //     </container>
  //   </div>
  //   <Footer />
  //   </div>
  // );
  <Api/>

}

export default App;
  
// function Body({pItems}){
//   //State management
//   let[count, setCount]=useState(1);
//   let displayData=()=>{
//     setCount((count)=>count+1)
//   };
//   return(
//     <div className='cardItems'>
//       <h3>{pItems.title}</h3>
//       <p>{pItems.body}</p>
//       <p>{count}</p>
//       <button className='btn' onClick={displayData}>Counter</button>
//     </div>
//   );
// }