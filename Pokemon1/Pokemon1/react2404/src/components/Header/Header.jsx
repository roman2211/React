import './Header.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Pokemon from './Pokemon';


// stateless
export default function (props) {
  const className = props.size === 'mini' ? 'header-mini' : 'header-maxi';
    const items = [
        {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/","name":"bulbasaur"},
        {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/","name":"ivysaur"}
    ];

    return <div className={className}>
        Header
        <div>{props.children}</div>
        <Pokemon className={'pokemon'} items={items} />

    </div>
};

