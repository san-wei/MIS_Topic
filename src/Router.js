import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import Atayal from './page/Atayal';
import Home from './page/Home';
import Pangcah from './page/Pangcah';
import Bunun from './page/Bunun';
import Paiwan from './page/Paiwan';
import Puyuma from './page/Puyuma';
import Rukai from './page/Rukai';
import Tsou from './page/Tsou';
import Saisiyat from './page/Saisiyat';
import Yami from './page/Yami';
import Thao from './page/Thao';
import Kavalan from './page/Kavalan';
import Truku from './page/Truku';
import Sakizaya from './page/Sakizaya';
import Seediq from './page/Seediq';
import Hlaalua from './page/Hlaalua';
import Kanakanavu from './page/Kanakanavu';



const App = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'></Redirect>
        </Route>
        <Route path='/home' exact>
          <Home/>
        </Route>
        {/*泰雅族*/}        
        <Route path='/atayal' exact>
          <Atayal/>
        </Route>
        {/*阿美族*/}        
        <Route path='/pangcah' exact>
          <Pangcah/>
        </Route>
        {/*排灣族*/}        
        <Route path='/paiwan' exact>
          <Paiwan/>
        </Route>
        {/*布農族*/}        
        <Route path='/bunun' exact>
          <Bunun/>
        </Route>
        {/*卑南族*/}        
        <Route path='/puyuma' exact>
          <Puyuma/>
        </Route>
        {/*魯凱族*/}        
        <Route path='/rukai' exact>
          <Rukai/>
        </Route>
        {/*鄒族*/}        
        <Route path='/tsou' exact>
          <Tsou/>
        </Route>
        {/*賽夏族*/}
        <Route path='/saisiyat' exact>
          <Saisiyat/>
        </Route>
        {/*雅美族*/}
        <Route path='/yami' exact>
          <Yami/>
        </Route> 
        {/*邵族*/}
        <Route path='/thao' exact>
          <Thao/>
        </Route>  
        {/*噶瑪蘭族*/}
        <Route path='/kavalan' exact>
          <Kavalan/>
        </Route>
        {/*太魯閣族*/}
        <Route path='/truku' exact>
          <Truku/>
        </Route>
        {/*撒奇萊雅族*/}
        <Route path='/sakizaya' exact>
          <Sakizaya/>
        </Route>
        {/*賽德克族*/}
        <Route path='/seediq' exact>
          <Seediq/>
        </Route>
        {/*拉阿魯哇族*/}
        <Route path='/hlaalua' exact>
          <Hlaalua/>
        </Route> 
        {/*卡那卡那富族*/}
        <Route path='/kanakanavu' exact>
          <Kanakanavu/>
        </Route>                                                               
      </Switch>
  </BrowserRouter>
  );
}

export default App;
