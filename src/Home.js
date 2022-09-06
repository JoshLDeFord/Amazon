import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="not here" />
            
            <div className='home__row'>
              <Product 
              id="123321341"
              title='The lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
              price={29.99} 
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
              rating={5}/>

              <Product 
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239}
              rating={4}
              image="https://m.media-amazon.com/images/I/61kGcY7WhjL._AC_UY218_.jpg"/>
              
            </div>

            <div className='home__row'>

            <Product 
            id="56741235"
            title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor'
            price={199.99}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>


            <Product 
            id="19322376"
            title='Amazon Echo (3rd Gen) | Smart Speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/717UtYBmbfL._AC_UY218_.jpg"/>

            <Product
            id="3254354345"
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128gb) - Silver (4th gen)'
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_sx385_.jpg" />
            </div>

            <div className='home__row'>

            <Product 
            id="90829332"
            title="Samsung Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1700.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
            </div>
        </div>
     


    </div>
  )
}

export default Home