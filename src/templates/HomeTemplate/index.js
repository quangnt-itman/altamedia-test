import React from 'react';
import { Route } from 'react-router';
import { Navbar } from '../../components/Navbar';

function HomeLayout ( props ) {
  // console.log( { propsChildren: props.children } );
  return (
    <div>
      <Navbar />
      {props.children }
    </div>
  );
}


function HomeTemplate ( { Component, ...props } ) {
  // console.log( { Component } );
  // console.log( { props } );
  return (
    <Route
      { ...props }
      render={ propsComponent => {
        // console.log( { propsComponent } );

        return ( <HomeLayout><Component { ...propsComponent } /></HomeLayout> );
      } }
    />
  );
}

export default HomeTemplate;

