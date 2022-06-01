*,
*::before,
*::after {box-sizing: border-box;}
:root { --brand-color: #212121;
}

.body {font-family: 'Roboto', 'Raleway', sans-serif;
    font-weight: 400, 500, 700, 900;
    color: var(--brand-color);
    cursor:default;
    margin: 0px;
}
.container {
    width: 1200px;
    margin: 0px auto;
    background-color: #FFFFFF;
}
/* buttony */
.button,
.button1 {
    color: var(--brand-color);
    font-family: 'Roboto';
    font-size: 16px;
}
.button {
    font-weight: 700;
    line-height: 30px;
    padding: 10px 41px 10px 42px;
    width: 200px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    background-color: #2196F3;
    color: #FFFFFF;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
}
.button1 {
    font-weight: 500;
    border: none;
    display: inline-flex;
    justify-content: center;
    line-height: 26px;
    padding: 6px 22px 6px 22px;
    margin-left: 8px;
    border-radius: 4px;
    background-color: #F5F4FA;
}
.button:hover, .button1:hover {
    cursor: pointer;
    text-decoration: none;
}
.button1:hover {
    background-color: #2196F3;
    color: #FFFFFF;
}
/* menu*/
.page-header {height: 80px;
    border-bottom: 1px solid #ECECEC;
}
.content{
height: 100%;
display: flex;
align-items: center;
padding: 24px 1240px 25px 215px;
justify-content: space-between;
}
.navi {width: 400px;
list-style-type: none;}
.menu .navi{display: flex;
    width:100%;
    padding-left: 93px;
background-color: #FFFFFF;
}
.link1, .gray-link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    font-size: 14px;
    text-decoration: none;
}
.link1{color: var(--brand-color);}
.gray-link {color: #757575;}

.link1:hover, .gray-link:hover, .link1:focus, .gray-link:focus {
    text-decoration: underline;
    color: #2196F3;
}
    /* WebStudio */
.logo, .logo1, .logo2 {
            font-family: 'Raleway';
            font-size: 26px;
            font-weight: 700;
            line-height: 31px;
            text-decoration: none;
        }
        .logo {color: #2196F3;}
        .logo1 {color: var(--brand-color);}
        .logo2 {color: #FFFFFF;
        }
.box{display: block;
    box-sizing: content-box;
background-color: #2F303A;
}
.parent, .child{
    text-align: center;
    font-family: 'Roboto';
    color: #FFFFFF;
}
.parent{padding: 80px 452px 30px 452px;
font-weight: 900;
font-size: 44px;
margin: 0px;
line-height: 60px;
text-transform: uppercase;
}
.child{padding-bottom:200px;
}
.card-set{
list-style-type: none;
    border: 1px solid red;
}
.lorem {display: inline;
    justify-content: space-between;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
}
.lorem1 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color:#757575;
    text-transform: none;
    text-align: left;
}

.profession, .team, .lorem,.lorem1, .name, .job{
    font-family: 'Roboto';}

.team1, .profession1, .profession, .name, .job {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;}

            .team {
    padding: 0px 695px 25px 695px;
            }
            .profession{padding: 47px 624px 25px 624px;}

.profession1{padding-bottom: 47px;
margin-bottom: 0px;}

.image1, .image2, .image3{
display: flex;
justify-content: space-between;}

.profession, .team{
    font-size: 36px;
    line-height: 42px;
}
.profession, .team, .name, .job {
    text-align: center;
}
.profession, .team, .lorem {
    font-weight: 700;
    color: var(--brand-color);
}
.name, .job {
    font-size: 16px;
    background-color: #FFFFFF;
    line-height: 19px;
}
.name {
    font-weight: 500;
    width: 270px;
    height: 19px;
    margin: 0;
    padding: 30px 99px 20px 99px;
    color: var(--brand-color);
}
.card1, .card2, .card3, .card4 {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;}

    .card1{margin-left:215px;}
    .card4{margin-right:215px;}

    .card-image.no-gap {display: block;
    }
.job {
    font-weight: 400;
    color: #757575;
    width: 270px;
    height: 19px;
    padding: 10px 61px 30px 62px;
    margin: 0;
}
.container1 {
    background-color: #F5F4FA;
    padding-top: 47px;
    padding-bottom: 94px;
}
.photo1, .photo2, .photo3, .photo4, .photo5, .photo6, .photo7, .photo8, .photo9 {border: 1px solid #EEEEEE;
margin-bottom: 15px;}
.photo4, .photo5, .photo6, .photo7, .photo8, .photo9 {margin-top: 15px;}

.photo1, .photo2, .photo4, .photo5, .photo7, .photo8 {margin-right: 15px;}

.photo7, .photo8, .photo9{margin-bottom:47px;}

  .site {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    list-style-type: none;}

    .site-nav{
font-size: 18px;
font-weight: 700;
line-height: 36px;
margin-bottom: 2px;
color: var(--brand-color);
}
.site-nav1 {font-size: 16px;
    font-weight: 400;
    color: #757575;
    line-height: 30px;
    margin-top: 2px;
    }
    .site-nav, .site-nav1 {font-family: 'Roboto';
    text-decoration: none;
text-align: left;
padding-right: 24px;
padding-left: 24px;
}

/*stopka*/
.footer {background-color: #2F303A;
    padding: 47px 1240px 60px 215px;
}
.address {
    font-family: 'Roboto';
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    cursor:default;
}
.link2, .link3, .link4 {font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
        font-size: 14px;
    color: rgba(255, 255, 255, 0.6);}
.link2, .link3 {text-decoration: none;}

