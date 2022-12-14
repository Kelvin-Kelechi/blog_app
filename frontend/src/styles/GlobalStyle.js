import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');
body {
  background: #f1f1f1;
  margin: 0;
  font-family: "Poppins";
}
header {
  background: #fff;
}
/* header .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header a {
  color: #333;
  text-decoration: none;
} */
 
/* nav {
  display: flex;
  align-items: center;
}
nav a {
  margin-left: 10px;
} */
ul{
  list-style-type: none;
  margin:0;
  padding:0;
  overflow: hidden;
  background-color: #333;
}
li{
  float:right;
}
li a{
  display: flex;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Montserrat';
   
  color:#fff
  
}
li a:hover:not(.active){
  background-color: #111;
  margin-top: 2px;
}
.active{
  background-color:#04AA6D;
  margin-top: 2px;
}

`

export default Globalstyle

