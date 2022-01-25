import React from 'react';
import  {BrowserRouter,  Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

import Country from '../Country/card';

function CountryLink() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
        <Link>
          <Route exact path="/India">
            <Country/>
          </Route>
          </Link>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default CountryLink