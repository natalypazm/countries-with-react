import React from 'react'
import styled from 'styled-components'

const CountryStyled = styled.div`
width:264px;
.image-flag{width:100%;height:160px;object-fit:cover;}
.details{padding:1.5em;text-align:left;}
.details__name-country{margin:0px;}

`

function Country({
    flag,
    name,
    population,
    region,
    capital
}){
    return (
        <CountryStyled>
            <img className="image-flag" src={flag} alt='' />
            <div className="details">
                <h2 className="details__name-country">{name}</h2>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
                </div>
        </CountryStyled>
    )
}

export default Country