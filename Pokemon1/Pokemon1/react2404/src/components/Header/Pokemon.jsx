import React, { Component } from 'react';
export default class Pokemon extends Component {
    render() {
        const list = [
            {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/","name":"bulbasaur"},
            {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/","name":"ivysaur"},
                {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/19\/","name":"rattata"},
                {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/20\/","name":"raticate"},
            {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/16\/","name":"pidgey"},
            {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/17\/","name":"pidgeotto"},
            {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/18\/","name":"pidgeot"},
        ];
        return ( <ul>
            {list.map((item, idx) =>
                <li className={"pokemon"}>
                    {item.name}
                    <img src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${idx+1}.png`} />
                </li>)}
        </ul>);
    }
}