/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat' : ["'Montserrat'", 'sans-serif'],
      'poppins' : ["'Poppins'", 'sans-serif']
    },
    extend: {
      colors : {
        "custom-white" : "#f0f0f0",
        "custom-gray" : "#dee2e6",
        "custom-blue" : "#646FD4",
        "custom-cyan" : "#00d4ff",
        "custom-purple" : "#635BFF",
        "custom-dark-blue" : "#0B2541",
        "primary-blue" : "#00697c",
        "secondary-blue" : "#1a9597",
        "light-blue" : "#f5f4fd", 
        "white-bg" : "#fefbfa",
        "primary-title" : "#0A2540",
        "primary-text" : "#8E9B9B",
      },
      backgroundImage : {
        'logo' : "url('assets/img/logo.png')",
        'stonks' : "url('assets/img/stonks.jpg')",
        'house-1' : "url('assets/img/house-1.png')",
        'house-2' : "url('assets/img/house-2.png')",
        'house-3' : "url('assets/img/house-3.png')",
        'house-model' : "url('assets/img/house-model.png')",
        'house-nft-cute' : "url('assets/img/house-nft-cute.png')",
        'nft' : "url('assets/img/nft.png')",
        'open-sea-logo' : "url('assets/img/open-sea-logo.png')",
        'valuation' : "url('assets/img/valuation.png')",
        'house-bg-home' : "url('assets/img/house-bg-home.png')",
        'house-nft-1' : "url('assets/img/DESIERTO1.png')",
        'house-nft-2' : "url('assets/img/DESIERTO4.png')",
        'house-nft-3' : "url('assets/img/DESIERTO6.png')",
        'house-nft-4' : "url('assets/img/PASTO3.png')",
        'house-nft-5' : "url('assets/img/PASTO8.png')",
        'house-nft-6' : "url('assets/img/PLAYA2.png')",
        'house-nft-7' : "url('assets/img/PLAYA6.png')",
        'house-nft-8' : "url('assets/img/TIERRA4.png')",
        'house-nft-9' : "url('assets/img/TIERRA7.png')",
        'under-cons' : "url('assets/img/under-cons.png')",
        'real-houses' : "url('assets/img/real-houses.png')",
        'house-portrait' : "url('https://studiorenderdesign.com/images/slider-image1.jpg')",
        'house-card' : "url('https://vestaequity.tryprism.com/property-media/image/2022/09/01/3458948917512239235/1c1fbfb3ef5c4df1be18fc1649e49506.png?quality=100&w=468')",
        'house-search-bg' : "url('https://vestaequity-web.s3.amazonaws.com/static/media/marketplace-background.058f87ef.jpg')",
        'check-logo' : "url('https://vestaequity.net/hubfs/raw_assets/public/Vesta%20Equity/images/homeowners-bullet.svg')",
        'check-logo-green' : "url('https://vestaequity.net/hubfs/raw_assets/public/Vesta%20Equity/images/investors/Green_check.png')",
        'warning-logo' : "url('https://vestaequity.net/hubfs/raw_assets/public/Vesta%20Equity/images/investors/Warning.png')",
        'house-ogly-1' : "url('https://vestaequity.tryprism.com/property-media/image/2022/07/07/3458948917512239235/d7bbec580aa8466a9853a78a9358b4fa.jpg?quality=100&w=468')",
      },
    },
  },
  plugins: [],
}
